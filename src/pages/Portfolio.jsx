import { useState } from "react";
import "../components/css/Portfolio.css"; // Import your CSS file here

export default function Portfolio() {
  const categories = ["Mariage", "Portrait", "Voyage", "Nature", "Blanc-Noir"];
  const extensions = ["jpg", "png", "jpeg", "webp", "gif"];

  // Fonction pour générer les chemins d'images possibles
  const getImageSources = (cat) =>
    extensions.map(
      (ext) => `../../../public/images/clients/${cat}/${cat}.${ext}`
    );

  // Gestion du fallback en cas d'image manquante
  const [imgError, setImgError] = useState({});

  const handleImgError = (cat, currentIndex) => {
    setImgError((prev) => ({
      ...prev,
      [cat]: currentIndex + 1,
    }));
  };

  return (
    <div className="portfolio-container">
      <h1 className="text-3xl font-bold mb-6">Mon Portfolio</h1>
      <p className="text-gray-600 mb-8">
        Découvrez quelques-unes de mes réalisations classées par catégorie.
      </p>
      <div className="portfolio-grid">
        {categories.map((cat, index) => {
          const sources = getImageSources(cat);
          const imgIndex = imgError[cat] || 0;
          const imgSrc =
            imgIndex < sources.length
              ? sources[imgIndex]
              : "/images/placeholder.jpeg";
          return (
            <div
              key={index}
              className="portfolio-card"
            >
              <h2 className="text-xl font-semibold mb-2">{cat}</h2>
              <img
                src={imgSrc}
                alt={cat}
                className="portfolio-card-image"
                onError={() => handleImgError(cat, imgIndex)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}