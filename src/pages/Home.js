import React, { useState } from "react";
import Footer from "../components/Footer.js";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Incident Reports", href: "/incident" },
  { name: "Safe Routes", href: "/route" },
  { name: "Geospatial", href: "/geospatial" },
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

{/* Main Content */}

<div className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
  {/* Blurred Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-sm"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/why-cycle.png)` }}
  ></div>

  {/* Content Overlay */}
  <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl textsha">
        Cyclink
        <br />
        Safe Place for Cyclists
      </h1>
      <p className="mt-6 text-lg leading-8 text-white">
        Empowering cyclists with safe routes and incident updates for a
        worry-free ride.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#NavMenu"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-105"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
     

{/* Navigation bar */}
<div id="NavMenu" className="relative z-10 mt-10 p-5 flex justify-center">
  <div className="block rounded-xl bg-gray-100 bg-opacity-45 backdrop-blur-md text-black shadow-lg relative w-4/5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
      <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
        <a href="#why-cycle" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/bicycle.svg`} alt="Why Cycle" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Why Cycle?</h3>
        </a>
      </div>
      <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
        <a href="#incidents" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/Incident-icon.png`} alt="Incidents" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Incidents</h3>
        </a>
      </div>
      <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
        <a href="#safe-routes" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/map.png`} alt="Safe Routes" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Safe Routes</h3>
        </a>
      </div>
      <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
        <a href="#geospatial-map" className="text-black flex flex-col items-center">
          <img src={`${process.env.PUBLIC_URL}/geospatial.png`} alt="Geospatial Map" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Geospatial Incident Map</h3>
        </a>
      </div>
    </div>
  </div>
</div>



      </div>
      

      {/* Full-width card Section */}
      
<div id="incidents" className="relative flex border-2 border-slate-200 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={`${process.env.PUBLIC_URL}/cycle.jpg`}
      alt="card-image"
      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-6 flex flex-col justify-center">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      Why Cycle?
    </h6>
    <p className="block mb-4 font-sans  text-base antialiased font-normal leading-relaxed text-gray-700 ">
      Not convinced that bicycles are a viable option? Each day, 12,000 individuals cycle to work, collectively saving $780 million. Additionally, this daily practice substantially reduces carbon emissions and alleviates traffic congestion, contributing to a greener environment and smoother urban transit.
            
    </p>

    <a href="#learn-more" className="inline-block">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>


<div id="incidents" className="relative flex border-2 border-slate-200 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={`${process.env.PUBLIC_URL}/Incident.png`}
      alt="card-image"
      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-6 flex flex-col justify-center">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      Incidents
    </h6>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Your safety is our top priority. Stay informed with the most current and detailed information on recent cycling incidents within the CBD, enabling you to plan your trips effectively and travel with greater peace of mind.
    </p>
    <a href="/incident" className="inline-block">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>

<div id="safe-routes" className="relative flex border-2 border-slate-200 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={`${process.env.PUBLIC_URL}/saftey-route.jpg`}
      alt="card-image"
      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-6 flex flex-col justify-center">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      Safe Routes
    </h6>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Quickly travel from Point A to Point B with ease. Receive the safest route recommendations for your journey, allowing you to navigate confidently without concerns. Enjoy a stress-free trip with minimized risks and maximum efficiency.
    </p>
    <a href="/route" className="inline-block">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>

<div id="geospatial-map" className="relative flex border-2 border-slate-200 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={`${process.env.PUBLIC_URL}/geo-map.jpeg`}
      alt="card-image"
      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-6 flex flex-col justify-center">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      Geospatial Incident Map
    </h6>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Concerned about specific types of incidents or keen to understand conditions to avoid on your travels? With our versatile Geospatial Incident Map, you can filter incidents by year, zone, speed, and accident type. This powerful tool provides comprehensive insights to help you make informed decisions and navigate your routes with greater awareness and safety.
    </p>
    <a href="/geospatial" className="inline-block">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>


{/* Small Card Section */}
<div section id="learn-more" className="p-5">
  <div className="flex flex-row justify-center gap-3">
    <div className="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src={`${process.env.PUBLIC_URL}c1.jpeg`}
          alt="city"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
            <div className="p-6">
               <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         Cycling Statistics
        </h4>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          In Victoria, <span className="font-bold">17.1%</span> of residents reported cycling in the past week, while{" "}
          <span className="font-bold">38.7%</span> did so over the past year. This translates to approximately
          <span className="font-bold">1,128,900</span> residents cycling in a typical week and <span className="font-bold">2,562,000</span> cycling at least once annually.
        </p>
      </div>
    </div>

    <div className="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src={`${process.env.PUBLIC_URL}c2.jpeg`}
          alt="eco"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Saving the World
        </h4>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          If bikes and e-bikes became 22% of all transport trips in all cities worldwide, greenhouse gas emissions and energy use would be 47% reduced by 2050.
        </p>
      </div>
    </div>

    <div className="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src={`${process.env.PUBLIC_URL}c3.jpeg`}
          alt="Cost Saving"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Cost Savings
        </h4>
              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Regular cyclists in Melbourne save around $780 million annually. This significant cost reduction highlights the economic impact of cycling, benefiting both individuals and the broader community.
        </p>
      </div>
    </div>

    <div className="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src={`${process.env.PUBLIC_URL}c4.jpeg`}
          alt="ui/ux review check"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Safety Concern
        </h4>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          Concern for safety continues to be the most significant barrier to cycling. Addressing these safety concerns is crucial for increasing cycling adoption and promoting healthier, sustainable transportation.
        </p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>

  );
}

export default Home;




// import React, { useState } from "react";
// import Footer from "../components/Footer.js";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Incident Reports", href: "/incident" },
//   { name: "Safe Routes", href: "/route" },
//   { name: "Geospatial", href: "/geospatial" },
// ];

// function Home() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white flex flex-col min-h-screen">
// {/* Header */}
//   <header className="absolute inset-x-0 top-0 z-50">
//     <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//       <div className="flex lg:flex-1">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-black transform transition-transform duration-300 hover:scale-110"
//         >
//           <span className="text-green-500 bg-black rounded-xl px-1">C</span>yclink
//         </Link>
//       </div>
//       <div className="flex lg:hidden">
//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen(true)}
//           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors duration-300 hover:text-black"
//         >
//           <span className="sr-only">Open main menu</span>
//           <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//         </button>
//       </div>
//       <div className="hidden lg:flex lg:gap-x-12">
//         {navigation.map((item) => (
//           <Link
//             key={item.name}
//             to={item.href}
//             className="text-sm font-semibold leading-6 text-gray-900 transform transition-transform duration-300 hover:scale-110 hover:text-blue-600"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//     <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//       <div className="fixed inset-0 z-50" />
//       <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">Cyclink</span>
//             <img
//               alt="Cyclink logo"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8 w-auto transition-transform duration-300 transform hover:scale-110"
//             />
//           </Link>
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(false)}
//             className="-m-2.5 rounded-md p-2.5 text-gray-700 transition-colors duration-300 hover:text-black"
//           >
//             <span className="sr-only">Close menu</span>
//             <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//           </button>
//         </div>
//       </Dialog.Panel>
//     </Dialog>
//   </header>

//       {/* Main Content */}
//       <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/landing-bike.png)` }}>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//               Cyclink<br/>Safe Place for Cyclists
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-white">
//               Empowering cyclists with safe routes and incident updates for a worry-free ride.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#NavMenu"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Get started
//               </a>
             
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
      

// {/* Navigation bar*/}
// <div id="NavMenu" className="relative z-10 mt-10 p-5 flex justify-center">
//   <div className="block rounded-lg bg-white text-black shadow-lg relative w-4/5">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
//       <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
//         <a href="#why-cycle" className="text-black flex flex-col items-center">
//           <img src={`${process.env.PUBLIC_URL}/bicycle.svg`} alt="Why Cycle" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
//           <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Why Cycle?</h3>
//         </a>
//       </div>
//       <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
//         <a href="#incidents" className="text-black flex flex-col items-center">
//           <img src={`${process.env.PUBLIC_URL}/Incident-icon.png`} alt="Incidents" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
//           <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Incidents</h3>
//         </a>
//       </div>
//       <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
//         <a href="#safe-routes" className="text-black flex flex-col items-center">
//           <img src={`${process.env.PUBLIC_URL}/map.png`} alt="Safe Routes" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
//           <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Safe Routes</h3>
//         </a>
//       </div>
//       <div className="flex flex-col items-center text-center justify-center transform transition-transform duration-300 hover:scale-105">
//         <a href="#geospatial-map" className="text-black flex flex-col items-center">
//           <img src={`${process.env.PUBLIC_URL}/geospatial.png`} alt="Geospatial Map" className="w-20 h-20 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
//           <h3 className="text-xl font-bold hover:text-blue-600 transition-colors duration-300">Geospatial Incident Map</h3>
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>

// {/*Card Section*/}
// <div class="p-5" section id="why-cycle">
//   <div class="flex flex-row justify-center gap-3">
//     <div class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4 transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <img src={`${process.env.PUBLIC_URL}why-cycle.png`} alt="Why Cycle?" class="rounded-t-xl"/>
//       <div class="p-4 md:p-5">
//         <h3 class="text-lg font-bold text-gray-800">Why Cycle?</h3>
//         <p class="mt-1 text-gray-900">
//           Not convinced bicycles are the way to go?
//           <ul class="list-disc list-inside">
//             <li>12,000 people cycle to work daily, saving $780 million.</li>
//             <li>Approximately 270 minutes of cycling per week reduces mortality by 24%.</li>
//             <li>Reduce carbon emissions and traffic congestion.</li>
//           </ul>
//         </p>
//         <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#learn-more">
//           Learn more
//         </a>
//       </div>
//     </div>

//     <div section id="incidents" class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4 transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <img src={`${process.env.PUBLIC_URL}Incident.png`} alt="Incidents" class="rounded-t-xl"/>
//       <div class="p-4 md:p-5">
//         <h3 class="text-lg font-bold text-gray-800">Incidents</h3>
//         <p class="mt-1 text-gray-900">
//           Your safety is our priority. Get the latest and most up-to-date information regarding any recent cycling incidents within the CBD so you can plan your trip with ease!
//         </p>
//         <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/incident">
//           Explore
//         </a>
//       </div>
//     </div>

//     <div section id="safe-routes" class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4 transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <img src={`${process.env.PUBLIC_URL}saftey-route.jpg`} alt="Safe Routes" class="rounded-t-xl"/>
//       <div class="p-4 md:p-5">
//         <h3 class="text-lg font-bold text-gray-800">Safe Routes</h3>
//         <p class="mt-1 text-gray-900">
//           Get from Point A to B in a flash. Get the safest route recommendation and off you go! No risks, no worries.
//         </p>
//         <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/route">
//           Explore
//         </a>
//       </div>
//     </div>

//     <div section id="geospatial-map" class="flex flex-col bg-white border shadow-xl rounded-xl w-full md:w-1/2 lg:w-1/4 transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <img src={`${process.env.PUBLIC_URL}geo-map.jpeg`} alt="Geospatial Map" class="rounded-t-xl"/>
//       <div class="p-4 md:p-5">
//         <h3 class="text-lg font-bold text-gray-800">Geospatial Incident Map</h3>
//         <p class="mt-1 text-gray-900">
//           Worried about particular types of incidents or just want to know more about conditions to avoid? Filter incidents by year, zone, speed, and accident type using our handy Geospatial Incident Map.
//         </p>
//         <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/geospatial">
//           Explore
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* New Card Section */}
//   <div section id="learn-more" className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
//     <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <a href="#!">
//         <img className="rounded-t-lg" src={`${process.env.PUBLIC_URL}/city.jpg`} alt="City"/>
//       </a>
//       <div className="flex flex-col flex-grow p-4">
//         <p className="mb-4 text-base text-gray-800">
//           In Victoria, <span className="font-bold">17.1%</span> of residents reported cycling in the past week, while{" "}
//           <span className="font-bold">38.7%</span> did so over the past year. This translates to approximately
//           <span className="font-bold">1,128,900</span> residents cycling in a typical week and <span className="font-bold">2,562,000</span> cycling at least once annually.
//         </p>
//       </div>
//     </div>

//     <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <a href="#!">
//         <img className="rounded-t-lg" src={`${process.env.PUBLIC_URL}/eco.jpg`} alt="Eco"/>
//       </a>
//       <div className="flex flex-col flex-grow p-4">
//         <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">Saving the World</h5>
//         <p className="mb-4 text-base text-gray-800">
//           If bikes and e-bikes became 22% of all transport trips in all cities worldwide, greenhouse gas emissions and energy use would be 47% reduced by 2050.
//         </p>
//       </div>
//     </div>

//     <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <a href="#!">
//         <img className="rounded-t-lg" src={`${process.env.PUBLIC_URL}/cost_saving.png`} alt="Cost Saving"/>
//       </a>
//       <div className="flex flex-col flex-grow p-4">
//         <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">Cost Savings</h5>
//         <p className="mb-4 text-base text-gray-800">
//           Regular cyclists in Melbourne contribute to $780 million in cost savings.
//         </p>
//       </div>
//     </div>

//     <div className="flex flex-col mx-3 mt-6 self-start rounded-lg bg-white text-surface shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <a href="#!">
//         <img className="rounded-t-lg" src={`${process.env.PUBLIC_URL}/potential-trips.png`} alt="Potential Trips"/>
//       </a>
//       <div className="flex flex-col flex-grow p-4">
//         <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">Safety Concern</h5>
//         <p className="mb-4 text-base text-gray-800">
//           Concern for safety remains the primary barrier.
//         </p>
//       </div>
//     </div>
//   </div>


// </div>


//       <Footer />
//     </div>
//   );
// }

// export default Home;