import { templesData } from "../data/temples";
import { Link } from "react-router-dom";
import { useState } from "react";

// 🔴 HERO IMAGE
import Akshardham from "../assets/Akshardham Delhi.png";

// 🗺️ STATE IMAGES
import apImg from "../assets/states/apImg.png";
import tnImg from "../assets/states/telImg.png";
import delhiImg from "../assets/states/delhiImg.png";

// 🛕 FEATURE IMAGES
import somnathImg from "../assets/somnath.png";
import goldenImg from "../assets/golden.png";
import southImg from "../assets/south.png";

import defaultImg from "../assets/default.png";

// 🗺️ STATE IMAGE MAP
const stateImages = {
  "Andhra Pradesh": apImg,
  "Tamil Nadu": tnImg,
  "Delhi": delhiImg,
};

// ⭐ FEATURED TEMPLES (carousel)
const featuredTemples = [
  { name: "Akshardham", image: delhiImg },
  { name: "Meenakshi Temple", image: tnImg },
  { name: "Tirupati Balaji", image: apImg },
  { name: "Somnath Temple", image: somnathImg },
  { name: "Golden Temple", image: goldenImg },
  { name: "Rameswaram Temple", image: southImg },
];

function Home() {
  const states = Object.keys(templesData);

  // 🔍 SEARCH STATE
  const [search, setSearch] = useState("");

  // 🔍 FLATTEN ALL TEMPLES
  const allTemples = Object.values(templesData).flat();

  // 🔍 FILTER LOGIC
  const filteredTemples = allTemples.filter((temple) =>
    temple.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">

      {/* 🔴 HERO SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 leading-tight">
            Discover Sacred Temples of India
          </h1>

          <p className="text-gray-600 mb-6 text-lg">
            Explore famous temples, learn their history, and locate them
            on interactive maps — all in one place.
          </p>

          <a
            href="#states"
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300"
          >
            Explore Now
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={Akshardham}
            alt="Akshardham Temple"
            className="w-full h-[350px] object-cover hover:scale-110 transition duration-500"
          />
        </div>
      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="max-w-2xl mx-auto px-6 mb-10">
        <input
          type="text"
          placeholder="Search temples..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* 🔍 SEARCH RESULTS */}
      {search && (
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <h2 className="text-lg font-semibold mb-4">Search Results</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredTemples.length > 0 ? (
              filteredTemples.map((temple) => (
                <Link
                  key={temple.id}
                  to={`/temple/${temple.id}`}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={temple.image}
                    className="h-44 w-full object-cover"
                  />
                  <p className="text-sm text-center p-2 font-medium">
                    {temple.name}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No temples found</p>
            )}
          </div>
        </div>
      )}

      {/* 🖼️ FEATURE STRIP (CAROUSEL) */}
      {/* 🖼️ FEATURE STRIP (CAROUSEL) */}
{/* 🖼️ FEATURE STRIP (CAROUSEL) */}
{!search && (
  <div className="max-w-7xl mx-auto px-6 mb-12 overflow-hidden">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">
      Popular Temples
    </h2>

    <div className="relative">
      <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused]">
        
        {[...featuredTemples, ...featuredTemples].map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] relative group"
          >
            <div className="overflow-hidden rounded-xl shadow-md transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl">
              
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="h-32 w-full object-cover"
              />

              {/* OVERLAY + TEXT */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                
                <p className="text-white text-sm font-semibold text-center px-2 transform group-hover:scale-105 transition duration-300">
                  {item.name}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
)}

      {/* 🗺️ STATES SECTION */}
      {!search && (
        <div id="states" className="bg-gray-100 py-14 px-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
            Explore by State
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

            {states.map((state) => (
              <Link
                key={state}
                to={`/state/${state}`}
                className="relative group rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={stateImages[state] || defaultImg}
                  alt={state}
                  className="h-28 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold text-center px-2">
                    {state}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      )}

    </div>
  );
}

export default Home;