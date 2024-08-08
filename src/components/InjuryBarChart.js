import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Define the dimensions and margins
    const margin = { top: 50, right: 30, bottom: 70, left: 60 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Append the svg object to the body of the page
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Parse the data
    const aggregatedData = d3.rollups(
      data,
      (v) => v.length,
      (d) => d.AGE_GROUP,
      (d) => d.INJ_LEVEL_DESC
    );

    // Sort data by age group
    aggregatedData.sort((a, b) => d3.ascending(a[0], b[0]));

    // Create subgroups
    const subgroups = [...new Set(data.map((d) => d.INJ_LEVEL_DESC))];

    // Create x and y scales
    const x = d3
      .scaleBand()
      .domain(aggregatedData.map((d) => d[0]))
      .range([0, width])
      .padding([0.2]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(aggregatedData, (d) => d3.max(d[1], (d) => d[1]))])
      .range([height, 0]);

    // Color scale
    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#FFA07A", "#00B496", "#FFA500", "#FF0000"]);

    // Draw x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0));

    // Draw y-axis
    svg.append("g").call(d3.axisLeft(y));

    // Create a tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("text-align", "center")
      .style("width", "60px")
      .style("height", "28px")
      .style("padding", "2px")
      .style("font", "12px sans-serif")
      .style("background", "lightsteelblue")
      .style("border", "0px")
      .style("border-radius", "8px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Draw bars
    svg
      .append("g")
      .selectAll("g")
      .data(aggregatedData)
      .join("g")
      .attr("transform", (d) => `translate(${x(d[0])},0)`)
      .selectAll("rect")
      .data((d) => d[1])
      .join("rect")
      .attr("x", (d) => x(d[0]))
      .attr("y", (d) => y(d[1]))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d[1]))
      .attr("fill", (d) => color(d[0]))
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`Count: ${d[1]}`)
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", (d) => {
        tooltip.transition().duration(500).style("opacity", 0);
      });
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
