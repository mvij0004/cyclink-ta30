import React, { useState } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const Incident = () => {
  const [selectedOption, setSelectedOption] = useState("plot1.png");
  const [content, setContent] = useState(
    "Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclist who met with an accident are in the age range of 30-59 years."
  );

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    switch (selectedValue) {
      case "plot1.png":
        setContent(
          "Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclists who met with an accident are in the age range of 30-59 years."
        );
        break;
      case "plot2.png":
        setContent(
          "The severity of injuries from bicycle accidents shows that 60% resulted in minor injuries, while 25% were severe."
        );
        break;
      case "plot3.png":
        setContent(
          "The number of bicycle accidents peaks during the afternoon, with 40% occurring between 12 PM and 3 PM."
        );
        break;
      case "plot4.png":
        setContent(
          "Accidents are more frequent in areas with speed zones of 30-40 km/h, accounting for 45% of all incidents."
        );
        break;
      default:
        setContent(
          "Out of the total bicycle accidents (16k) that occurred between 2012-2023, 54.9% of the cyclists who met with an accident are in the age range of 30-59 years."
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-10 w-full backdrop-blur-sm bg-blur-3xl sm:-top-80">
        <div className="relative z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <Navbar />
          <h1 className="text-white text-6xl font-bold py-36 rounded-md">
            Discover Accident Insights{" "}
            <span className="mt-6 text-lg font-light leading-8 text-white">
              <br />
              Empowering cyclists with safe routes and incident updates for a
              worry-free ride.
            </span>
          </h1>
        </div>
        <div className="z-10 w-full max-w-screen-xl mx-auto bg-white shadow-md border border-zinc-300 rounded-md p-5 my-4 items-center">
          <div className="flex justify-center items-center h-full">
            <iframe
              src="https://tdbanalyticz.shinyapps.io/APP_TEST2/"
              className="flex justify-center items-center w-full h-[25rem]"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // <div className="flex flex-col max-h-screen">
    //   <div className="flex-grow relative">
    //     <img
    //       src={`${process.env.PUBLIC_URL}/incident.jpg`}
    //       alt="Landing"
    //       className="object-cover w-full h-full absolute top-0 left-0 z-0"
    //     />

    //     <div className="relative z-10">
    //       <Navbar />
    //     </div>

    //     <div className="relative z-10 mt-10 p-5 flex justify-center">
    //       <h1 className="text-black text-6xl font-bold bg-white p-4 rounded-md">
    //         Cyclink: <span className="text-green-500">Safe</span> Place for
    //         Cyclists
    //       </h1>
    //     </div>

    //     <div className="relative z-10 mt-10 p-5 flex justify-center">
    //       <div className="block rounded-lg bg-white text-black shadow-lg dark:bg-surface-dark relative w-4/5"></div>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-3 gap-4 p-5">
    //     <div className="col-span-2 bg-white shadow-md border border-zinc-300 rounded-md p-5">
    //       <img
    //         className="rounded-t-lg"
    //         src={`${process.env.PUBLIC_URL}/${selectedOption}`}
    //         alt="Plot"
    //       />
    //     </div>
    //     <div className="col-span-1 bg-white shadow-md border border-zinc-300 rounded-md p-5">
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-2xl font-bold mb-2"
    //           htmlFor="year"
    //         >
    //           Analytics
    //         </label>
    //         <select
    //           id="year"
    //           name="year"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           onChange={handleSelectionChange}
    //         >
    //           <option value="plot1.png">
    //             Bicycle Accident Age Distribution
    //           </option>
    //           <option value="plot2.png">Bicycle Accident Injury Level</option>
    //           <option value="plot3.png">Number of Accidents by Time</option>
    //           <option value="plot4.png">
    //             Number of Accident on Speed Zone
    //           </option>
    //         </select>
    //       </div>
    //       <p className="text-white text-center text-xl bg-black p-4 rounded-lg mt-1">
    //         {content}
    //       </p>
    //     </div>
    //   </div>

    //   <Footer />
    // </div>
  );
};

export default Incident;
