import React, { useEffect, useState } from "react";
import axios from "axios";

const PlotRComponent = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("http://localhost:5201/api/PlotR");
        setImage(response.data.image);
      } catch (error) {
        console.error("Error fetching the plot:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>Plot from R via ASP.NET Core API</h1>
      {image ? (
        <img
          src={`data:image/png;base64,${image}`}
          alt="Plot"
          style={{ width: "500px" }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlotRComponent;
