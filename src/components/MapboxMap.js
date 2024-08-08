import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Papa from "papaparse";

// Replace this with your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoicG9vbXNpcmEiLCJhIjoiY2x6ajdzcnEyMG9vMDJ2cHhkbnp4dThjOSJ9.q98baVlbLATw6CGl9IIw_Q";

const MapboxMap = ({ showDirections, filters, mixUse }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(144.9631);
  const [lat, setLat] = useState(-37.8136);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    console.log("Current filters:", filters);

    if (!map.current) {
      console.log("Initializing map...");
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      });

      if (showDirections) {
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
        });
        map.current.addControl(directions, "top-left");
      } else {
        map.current.on("load", () => {
          loadCsvData();
        });
      }

      if (mixUse) {
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
        });
        map.current.addControl(directions, "top-right");

        map.current.on("load", () => {
          loadCsvData();
        });
      }

      map.current.on("styleimagemissing", (e) => {
        const id = e.id;
        console.warn(`Image "${id}" could not be loaded.`);
      });
    } else {
      loadCsvData();
    }

    function loadCsvData() {
      console.log("Map loaded. Fetching CSV data...");
      fetch("/node_acc_cbd.csv")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((csvText) => {
          console.log("CSV data loaded:", csvText);
          const parsedData = Papa.parse(csvText, { header: true }).data;
          console.log("Parsed data:", parsedData);

          const filteredData = parsedData.filter((row) => {
            const yearMatch =
              filters.year === "All" ||
              (row.ACCIDENT_DATE && row.ACCIDENT_DATE.startsWith(filters.year));
            console.log("Year Match:", yearMatch);

            const speedZoneMatch =
              filters.speedZone === "All" ||
              row.SPEED_ZONE === filters.speedZone;
            console.log("Speed Zone Match:", speedZoneMatch);

            const accidentTypeMatch =
              filters.accidentType === "All" ||
              row.ACCIDENT_TYPE_DESC === filters.accidentType;
            console.log("Accident Type Match:", accidentTypeMatch);

            console.log("Row:", row);
            return yearMatch && speedZoneMatch && accidentTypeMatch;
          });

          console.log("Filtered data:", filteredData);

          const geojson = {
            type: "FeatureCollection",
            features: filteredData.map((row) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  parseFloat(row.LONGITUDE),
                  parseFloat(row.LATITUDE),
                ],
              },
              properties: {
                ...row,
              },
            })),
          };

          if (map.current.getSource("accidents")) {
            map.current.getSource("accidents").setData(geojson);
          } else {
            console.log("Adding new source with filtered data");
            map.current.addSource("accidents", {
              type: "geojson",
              data: geojson,
              cluster: true,
              clusterMaxZoom: 14, // Max zoom to cluster points on
              clusterRadius: 50, // Radius of each cluster when clustering points
            });

            // Cluster Layer
            map.current.addLayer({
              id: "clusters",
              type: "circle",
              source: "accidents",
              filter: ["has", "point_count"],
              paint: {
                "circle-color": [
                  "step",
                  ["get", "point_count"],
                  "#f1f075 ", // Color for clusters with 0-99 points
                  100,
                  "#51bbd6", // Color for clusters with 100-749 points
                  750,
                  "#f28cb1", // Color for clusters with 750 or more points
                ],
                "circle-radius": [
                  "step",
                  ["get", "point_count"],
                  20, // Radius for clusters with 0-99 points
                  100,
                  30, // Radius for clusters with 100-749 points
                  750,
                  40, // Radius for clusters with 750 or more points
                ],
              },
            });

            // Cluster Count Layer
            map.current.addLayer({
              id: "cluster-count",
              type: "symbol",
              source: "accidents",
              filter: ["has", "point_count"],
              layout: {
                "text-field": "{point_count_abbreviated}",
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                "text-size": 12,
              },
            });

            // Unclustered Point Layer
            map.current.addLayer({
              id: "unclustered-point",
              type: "circle",
              source: "accidents",
              filter: ["!", ["has", "point_count"]],
              paint: {
                "circle-radius": [
                  "match",
                  ["get", "SEVERITY"],
                  "3",
                  8, // Radius for severity level 3
                  "2",
                  10, // Radius for severity level 2
                  "1",
                  15, // Radius for severity level 1
                  8, // Default size
                ],
                "circle-color": [
                  "match",
                  ["get", "SEVERITY"],
                  "3",
                  "#0051ad", // Blue
                  "2",
                  "#7900ad", // Purple
                  "1",
                  "#FE0000", // Red
                  "#000000", // Default color (Black) for undefined severity
                ],
              },
            });

            const popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false,
            });

            map.current.on("mouseenter", "unclustered-point", (e) => {
              map.current.getCanvas().style.cursor = "pointer";

              const coordinates = e.features[0].geometry.coordinates.slice();
              const properties = e.features[0].properties;
              const description = `
                <strong>Accident Date:</strong> ${properties.ACCIDENT_DATE}<br>
                <strong>Accident Type:</strong> ${properties.ACCIDENT_TYPE_DESC}<br>
                <strong>Severity:</strong> ${properties.SEVERITY}<br>
                <strong>Speed Zone:</strong> ${properties.SPEED_ZONE}
              `;

              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }

              popup
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map.current);
            });

            map.current.on("mouseleave", "unclustered-point", () => {
              map.current.getCanvas().style.cursor = "";
              popup.remove();
            });
          }
        })
        .catch((error) => console.error("Error loading CSV data:", error));
    }
  }, [lng, lat, zoom, showDirections, filters]);

  return <div ref={mapContainer} style={{ width: "100%", height: "600px" }} />;
};

export default MapboxMap;
