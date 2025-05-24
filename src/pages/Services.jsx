
export default function Services() {
    return (
      <div className="services-container">
        <h1 className="services-title">Mes Services</h1>
        <ul className="services-list space-y-4">
          <li className="service-card">
            <h2 className="text-xl font-semibold">📸 Séance photo (Studio / Extérieur)</h2>
            <p>Portraits individuels, couple, famille. Livraison numérique en haute qualité.</p>
          </li>
          <li className="service-card">
            <h2 className="text-xl font-semibold">🎉 Événements (Mariage, anniversaire...)</h2>
            <p>Reportage complet avec retouches incluses.</p>
          </li>
          <li className="service-card">
            <h2 className="text-xl font-semibold">🖼️ Retouche photo</h2>
            <p>Service de retouche professionnel</p>
          </li>
        </ul>
      </div>
    )
  }
  