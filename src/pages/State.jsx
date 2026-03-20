import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { templesData, stateInfo } from "../data/temples";

function State() {
  const { stateName } = useParams();
  const temples = templesData[stateName] || [];
  const info = stateInfo[stateName];

  // 🔍 FILTER
  const [filter, setFilter] = useState("all");

  // 📊 SORT
  const [sort, setSort] = useState("popular");

  // 🔍 FILTER LOGIC
  const filteredTemples = temples.filter((temple) => {
    if (filter === "all") return true;
    return temple.deity.toLowerCase().includes(filter);
  });

  // 📊 SORT LOGIC
  const sortedTemples = [...filteredTemples].sort((a, b) => {
    if (sort === "popular") return b.popularity - a.popularity;
    return 0;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* 🧾 STATE INFO */}
      <div className="max-w-4xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
        
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          {stateName}
        </h1>

        <p className="text-gray-700 text-md leading-relaxed mb-4">
          {info?.description || "Information coming soon."}
        </p>

        <p className="text-sm text-gray-500 text-center">
          {temples.length} temples available in this state
        </p>
      </div>

      {/* 🔍 FILTERS */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center mb-6">
        {["all", "shiva", "vishnu", "devi"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === type
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 shadow hover:bg-red-100"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 📊 SORT */}
      <div className="max-w-6xl mx-auto flex justify-end mb-6">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="popular">Sort by Popularity</option>
        </select>
      </div>

      {/* 🛕 TEMPLE CARDS */}
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
        Explore Temples
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {sortedTemples.length > 0 ? (
          sortedTemples.map((temple) => (
            <Link
              key={temple.id}
              to={`/temple/${temple.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition"
            >
              <img
                src={temple.image}
                alt={temple.name}
                className="h-32 w-full object-cover"
              />

              <div className="p-2 text-center text-sm font-semibold">
                {temple.name}
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No temples found for selected filter
          </p>
        )}
      </div>

    </div>
  );
}

export default State;