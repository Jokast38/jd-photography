export default function Home() {
  return (
    <div className="relative h-screen bg-black">
      {/* Hero Image */}
      <div className="w-1/2 h-full">
      <img
        src="/public/images/clients/hero.png" // Remplacez par le chemin de votre image
        alt="Photographer Hero"
      />
   </div>
     

      {/* Hero Content */}
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1>
          Bienvenue chez <span className="text-yellow-500">JD Photography</span>
        </h1>
        <p>
          Je suis Jules Drezy, photographe passionné. Explorez mon univers à travers mes clichés.
        </p>
      </div>
    </div>
  );
}