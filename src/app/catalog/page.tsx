// import Header from "@/components/Header";

export default function CatalogPage() {
  return (
    <div>
      {/* <Header /> */}
      <main className="min-h-screen px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Каталог</h1>
        <p className="text-gray-700 mb-10">Спутницы для важного мероприятия, на отдых & вечеринку</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Временно статические карточки */}
          {["Товар 1", "Товар 2", "Товар 3", "Товар 4", "Товар 5", "Товар 6"].map(
            (item, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
              >
                <h2 className="text-xl font-semibold">{item}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  Краткое описание для {item}.
                </p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                  Подробнее
                </button>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}
