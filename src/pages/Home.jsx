export default function Home() {
  return (
    <div className="hero-body relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/images/clients/hero-bg.jpg')" }}>
      {/* Hero title */}
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center" style={{ zIndex: 1 }} > 
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue chez <span className="text-yellow-500">JD Photography</span>
        </h1>
      </div>
      {/* Cercle jaune */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 rounded-full opacity-50"></div>
      
       {/* Hero Image avec cercle jaune */}
      <div className="hero relative w-1/2 h-full flex items-center justify-center">
        <img id="hero-image"
          src="/public/images/clients/Marque/hero.png"
          alt="Photographer Hero"
        />
      </div>
     

      {/* Hero Content */}
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
       
        <p style={{ color:"black" }} className="mb-4">
          Je suis Jules Drezy, photographe passionné. Explorez mon univers à travers mes clichés.
        </p>
      </div>
    </div>
  );
}