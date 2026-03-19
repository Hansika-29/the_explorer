import { useParams } from "react-router-dom";
import { templesData } from "../data/temples";

function Temple() {
  const { id } = useParams();

  // 🔍 Find temple
  const temple = Object.values(templesData)
    .flat()
    .find((t) => t.id === id);

  if (!temple) {
    return (
      <div className="p-6 text-center text-gray-600">
        Temple not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow overflow-hidden">

        {/* 🖼️ IMAGE */}
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          {/* 🛕 TITLE */}
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            {temple.name}
          </h1>

          <p className="text-gray-600 mb-4">
            Deity: <span className="font-semibold">{temple.deity}</span>
          </p>

          {/* 🧾 DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {temple.description}
          </p>

          {/* 📜 HISTORY */}
          {temple.history && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                History
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {temple.history}
              </p>
            </div>
          )}

          {/* 📊 FACTS */}
          {temple.facts && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                Facts
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                {temple.facts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 🕒 DETAILS */}
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700 mb-6">
            <p><b>Best Time:</b> {temple.bestTime}</p>
            <p><b>Timings:</b> {temple.timings}</p>
            <p><b>Dress Code:</b> {temple.dressCode}</p>
          </div>

          {/* 📍 MAP */}
          <div className="w-full h-80">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.google.com/maps?q=${temple.location.lat},${temple.location.lng}&output=embed`}
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Temple;