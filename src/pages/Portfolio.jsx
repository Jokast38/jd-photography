export default function Portfolio() {
    const categories = ["Mariage", "Portrait", "Voyage", "Nature", "Noir & Blanc"]
  
    return (
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Mon Portfolio</h1>
        <p className="text-gray-600 mb-8">Découvrez quelques-unes de mes réalisations classées par catégorie.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow text-center">
              <h2 className="text-xl font-semibold mb-2">{cat}</h2>
              <img src={`/images/${cat.toLowerCase()}.jpg`} alt={cat} className="w-full h-48 object-cover rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }
  