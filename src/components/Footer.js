// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-4">
//       <div className="container mx-auto text-center">
//         <p>
//           Cyclink respectfully acknowledges the Traditional Owners of the land
//           we govern, the Wurundjeri Woi-wurrung and Bunurong / Boon Wurrung
//           peoples of the Kulin and pays respect to their Elders past and
//           present. We acknowledge and honour the unbroken spiritual, cultural
//           and political connection they have maintained to this unique place for
//           more than 2000 generations. We accept the invitation in the Uluru
//           Statement from the Heart and are committed to walking together to
//           build a better future.
//           <br />
//           <br />
//           &copy; 2024 Cyclink Monash University IE Group Project TA30. All
//           rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-white">
            <span className="text-green-500 bg-black rounded-xl">C</span>yclink
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">

            <li>
              <a href="/incident" className="hover:underline me-4 md:me-6">Incident Reports</a>
            </li>
            <li>
              <a href="/route" className="hover:underline me-4 md:me-6"> Safe Routes</a>
            </li>
            <li>
              <a href="/geospatial" className="hover:underline">Geospatial</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="mb-6">
            Cyclink respectfully acknowledges the Traditional Owners of the land
            we govern, the Wurundjeri Woi-wurrung and Bunurong / Boon Wurrung
            peoples of the Kulin and pays respect to their Elders past and
            present. We acknowledge and honour the unbroken spiritual, cultural
            and political connection they have maintained to this unique place for
            more than 2000 generations. We accept the invitation in the Uluru
            Statement from the Heart and are committed to walking together to
            build a better future.
          </p>
          <span className="block text-sm">
            &copy; 2024 Cyclink Monash University IE Group Project TA30. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;