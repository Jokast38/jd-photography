import { useState, useEffect, useRef } from "react";
import "../components/css/Portfolio.css";

// Import des images pour chaque catégorie (import ES6)
import Portrait1 from '../assets/images/clients/Portrait/Portrait-1.png';
import Portrait2 from '../assets/images/clients/Portrait/Portrait-2.jpeg';
import Portrait3 from '../assets/images/clients/Portrait/Portrait-3.jpeg';
import Portrait4 from '../assets/images/clients/Portrait/Portrait-4.jpeg';
import Portrait5 from '../assets/images/clients/Portrait/Portrait-5.jpeg';
import Portrait6 from '../assets/images/clients/Portrait/Portrait-6.jpeg';

import Nude1 from '../assets/images/clients/Nude/Nude-1.png';
import Nude2 from '../assets/images/clients/Nude/Nude-2.png';
import Nude3 from '../assets/images/clients/Nude/Nude-3.png';
import Nude4 from '../assets/images/clients/Nude/Nude-4.jpeg';
import Nude5 from '../assets/images/clients/Nude/Nude-5.jpeg';

import Nature1 from '../assets/images/clients/Nature/Nature-1.png';
import Nature2 from '../assets/images/clients/Nature/Nature-2.png';
import Nature3 from '../assets/images/clients/Nature/Nature-3.png';
import Nature4 from '../assets/images/clients/Nature/Nature-4.jpeg';
import Nature5 from '../assets/images/clients/Nature/Nature-5.jpeg';
import Nature6 from '../assets/images/clients/Nature/Nature-6.jpeg';
import Nature7 from '../assets/images/clients/Nature/Nature-7.jpeg';
import Nature8 from '../assets/images/clients/Nature/Nature-8.jpeg';
import Nature9 from '../assets/images/clients/Nature/Nature-9.jpeg';
import Nature10 from '../assets/images/clients/Nature/Nature-10.png';

import BlancNoir1 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-1.png';
import BlancNoir2 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-2.jpeg';
import BlancNoir3 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-3.jpeg';
import BlancNoir4 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-4.jpeg';
import BlancNoir5 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-5.jpeg';
import BlancNoir6 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-6.jpeg';
import BlancNoir7 from '../assets/images/clients/Blanc-Noir/Blanc-Noir-7.jpeg';

import Mariage1 from '../assets/images/clients/Mariage/Mariage-1.png';
// import Mariage2 from '../assets/images/clients/Mariage/Mariage-2.jpg';
// import Mariage3 from '../assets/images/clients/Mariage/Mariage-3.jpg';
// import Mariage4 from '../assets/images/clients/Mariage/Mariage-4.jpg';
// import Mariage5 from '../assets/images/clients/Mariage/Mariage-5.jpg';

import Placeholder from '../assets/images/placeholder.jpeg';

// Mapping précis des images pour chaque catégorie (utilise uniquement les extensions réelles)
const imageMap = {
  "Portrait": [
    Portrait1, Portrait2, Portrait3, Portrait4, Portrait5, Portrait6
  ],
  "Nude": [
    Nude1, Nude2, Nude3, Nude4, Nude5
  ],
  "Nature": [
    Nature1, Nature2, Nature3, Nature4, Nature5,
    Nature6, Nature7, Nature8, Nature9, Nature10
  ],
  "Blanc-Noir": [
    BlancNoir1, BlancNoir2, BlancNoir3, BlancNoir4,
    BlancNoir5, BlancNoir6, BlancNoir7
  ],
  "Mariage": [
    Mariage1, {/* Mariage2, Mariage3, Mariage4, Mariage5 */}
  ]
};


// Utilise uniquement les chemins exacts définis dans imageMap (pas de complétion d'extensions)
function getImageSources(cat) {
      return imageMap[cat] || [];

}

export default function Portfolio() {
  const categories = ["Mariage", "Portrait", "Nature", "Blanc-Noir", "Nude"];

  const [carouselIndex, setCarouselIndex] = useState(
    Object.fromEntries(categories.map((cat) => [cat, 0]))
  );
  const [imgError, setImgError] = useState({});
  const intervalRef = useRef();

  // Modal state
  const [modal, setModal] = useState({
    open: false,
    cat: null,
    index: 0,
    sources: [],
  });

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCarouselIndex((prev) => {
        const updated = { ...prev };
        categories.forEach((cat) => {
          const sources = getImageSources(cat);
          if (sources.length > 0) {
            updated[cat] = (prev[cat] + 1) % sources.length;
          }
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

  const handlePrev = (cat, sources, modalMode = false) => {
    if (modalMode) {
      setModal((prev) => ({
        ...prev,
        index: (prev.index - 1 + sources.length) % sources.length,
      }));
    } else {
      setCarouselIndex((prev) => ({
        ...prev,
        [cat]: (prev[cat] - 1 + sources.length) % sources.length,
      }));
    }
  };

  const handleNext = (cat, sources, modalMode = false) => {
    if (modalMode) {
      setModal((prev) => ({
        ...prev,
        index: (prev.index + 1) % sources.length,
      }));
    } else {
      setCarouselIndex((prev) => ({
        ...prev,
        [cat]: (prev[cat] + 1) % sources.length,
      }));
    }
  };

  const openModal = (cat, sources, index) => {
    setModal({
      open: true,
      cat,
      index,
      sources,
    });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal({
      open: false,
      cat: null,
      index: 0,
      sources: [],
    });
    document.body.style.overflow = "";
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
          if (!sources.length) return null;
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
              : Placeholder;
          return (
            <div
              key={index}
              className="portfolio-card"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(cat, sources, current)}
            >
              <h2 className="text-xl font-semibold mb-2">{cat}</h2>
              <div style={{ position: "relative", width: "240px", margin: "0 auto" }}>
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
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal d'affichage plein écran */}
      {modal.open && (
        <div
          className="portfolio-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeModal}
        >
          <button
            className="modal-close"
            style={{
              position: "absolute",
              top: 24,
              right: 32,
              fontSize: "2.5rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 1100,
            }}
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Fermer"
          >
            ×
          </button>
          <button
            className="modal-prev"
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "2.5rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 1100,
              opacity: 0.7,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handlePrev(modal.cat, modal.sources, true);
            }}
            aria-label="Précédent"
          >
            ‹
          </button>
          {modal.sources[modal.index] && modal.sources[modal.index] !== "/images/placeholder.jpeg" ? (
            <img
              src={modal.sources[modal.index]}
              alt={modal.cat}
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                borderRadius: "18px",
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
                background: "#fff",
                objectFit: "contain",
                display: "block",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              style={{
                width: "400px",
                height: "400px",
                background: "#fff",
                borderRadius: "18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/placeholder.jpeg"
                alt="placeholder"
                style={{
                  width: "120px",
                  height: "120px",
                  opacity: 0.5,
                  marginBottom: "1.5rem",
                }}
              />
              <span
                style={{
                  color: "#222",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  textAlign: "center",
                  background: "#fffbe7",
                  borderRadius: "8px",
                  padding: "0.7rem 1.2rem",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
                }}
              >
                Très prochainement disponible
              </span>
            </div>
          )}
          <button
            className="modal-next"
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "2.5rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 1100,
              opacity: 0.7,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleNext(modal.cat, modal.sources, true);
            }}
            aria-label="Suivant"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}