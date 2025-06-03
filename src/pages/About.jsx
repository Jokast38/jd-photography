// export default function About() {
//     return (
//       <div className="max-w-3xl mx-auto mt-10">
//         <h1 className="text-3xl font-bold mb-4">À propos de moi</h1>
//         <p className="text-gray-700 mb-4">
//           Je m'appelle Jules, photographe passionné depuis plusieurs années.
//           J'aime capturer des instants uniques et raconter des histoires à travers mes images.
//         </p>
//         <p className="text-gray-700">
//           Je travaille avec des particuliers et des professionnels, en studio ou en extérieur. 
//           Mon objectif : révéler la beauté et l’émotion dans chaque prise de vue.
//         </p>
//       </div>
//     )
//   }

import "../components/css/About.css";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1 className="about-title">À propos de moi.</h1>
        <div className="about-underline"></div>
        <p className="about-desc">
          Je m'appelle Jules, photographe passionné depuis plusieurs années.      J'aime capturer des instants uniques et raconter des histoires à travers mes images.
        </p>
        <p className="about-desc">
          Je travaille avec des particuliers et des professionnels, en studio ou en extérieur.
          Mon objectif : révéler la beauté et l’émotion dans chaque prise de vue.
        </p>
      </div>
      <div className="about-img-container">
        <img
          src="/images/clients/Portrait/about-1.jpeg"
          alt="Jules Drezy"
          className="about-img"
        />
      </div>
    </div>
  );
}