import { useState, useEffect, useRef } from "react";
import "../components/css/Portfolio.css";

// Génère dynamiquement les chemins d'images pour chaque catégorie (juste 1 à 5)
function getImageSources(cat, extensions = ["jpg", "png", "jpeg", "webp", "gif"]) {
  let sources = [];
  for (let i = 1; i <= 5; i++) {
    for (let ext of extensions) {
      sources.push(`/images/clients/${cat}/${cat}-${i}.${ext}`);
    }
  }
  return sources;
}

export default function Portfolio() {
  const categories = ["Mariage", "Portrait", "Nature", "Blanc-Noir", "Nude"];
  const extensions = ["jpg", "png", "jpeg", "webp", "gif"];

  // Index du carousel pour chaque catégorie
  const [carouselIndex, setCarouselIndex] = useState(
    Object.fromEntries(categories.map((cat) => [cat, 0]))
  );
  // Gestion des erreurs d'image
  const [imgError, setImgError] = useState({});

  // Référence pour l'intervalle d'auto défilement
  const intervalRef = useRef();

  // Auto défilement toutes les 2.5 secondes
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCarouselIndex((prev) => {
        const updated = { ...prev };
        categories.forEach((cat) => {
          const sources = getImageSources(cat, extensions);
          updated[cat] = (prev[cat] + 1) % sources.length;
        });
        return updated;
      });
    }, 2500);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, []);

  const handleImgError = (cat, currentIndex) => {
    setImgError((prev) => ({
      ...prev,
      [`${cat}-${currentIndex}`]: true,
    }));
  };

  const handlePrev = (cat, sources) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [cat]: (prev[cat] - 1 + sources.length) % sources.length,
    }));
  };

  const handleNext = (cat, sources) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [cat]: (prev[cat] + 1) % sources.length,
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
          const sources = getImageSources(cat, extensions);
          // Cherche la première image non en erreur à partir de l'index courant
          let current = carouselIndex[cat] || 0;
          let tries = 0;
          while (
            imgError[`${cat}-${current}`] &&
            tries < sources.length
          ) {
            current = (current + 1) % sources.length;
            tries++;
          }
          const imgSrc =
            tries < sources.length
              ? sources[current]
              : "/images/placeholder.jpeg";
          return (
            <div key={index} className="portfolio-card">
              <h2 className="text-xl font-semibold mb-2">{cat}</h2>
              <div style={{ position: "relative", width: "240px", margin: "0 auto" }}>
                <button
                  className="carousel-btn"
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "rgba(238,238,238,0.5)",
                    border: "none",
                    borderRadius: "50%",
                    width: "22px",
                    height: "22px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    opacity: 0.15,
                  }}
                  onClick={() => handlePrev(cat, sources)}
                  aria-label="Précédent"
                >
                  ‹
                </button>
                <img
                  src={imgSrc}
                  alt={cat}
                  className="portfolio-card-image"
                  loading="lazy"
                  onError={() => handleImgError(cat, current)}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
                <button
                  className="carousel-btn"
                  style={{
                    position: "absolute",
                    right: "-24px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "rgba(238,238,238,0.5)",
                    border: "none",
                    borderRadius: "50%",
                    width: "22px",
                    height: "22px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    opacity: 0.15,
                  }}
                  onClick={() => handleNext(cat, sources)}
                  aria-label="Suivant"
                >
                  ›
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}