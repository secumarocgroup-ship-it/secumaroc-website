import React from 'react';

export default function App() {
  const pharmacies = [
    { name: "Pharmacie Ibn Sina", district: "Centre-ville", status: "Ouverte", time: "Jusqu'à 02:00", eta: "20 min" },
    { name: "Pharmacie Al Andalous", district: "Malabata", status: "Ouverte", time: "Jusqu'à 01:30", eta: "25 min" },
    { name: "Pharmacie Moulay Youssef", district: "Mesnana", status: "24/7", time: "Ouverte 24h/24", eta: "30 min" },
  ];

  const areas = [
    "Centre-ville",
    "Malabata",
    "Marshan",
    "Castilla",
    "Mesnana",
    "Iberia",
  ];

  const faq = [
    "Quelle pharmacie est ouverte maintenant à Tanger ?",
    "Livrez-vous la nuit ?",
    "Combien coûte la livraison ?",
    "هل التوصيل متاح ليلاً؟",
    "How fast is delivery in Tangier?",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-700">SecuMaroc</h1>
            <p className="text-sm text-gray-500">
              Livraison Pharmacie de Garde 24/7
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-green-700">Accueil</a>
            <a href="#open" className="hover:text-green-700">Pharmacies</a>
            <a href="#zones" className="hover:text-green-700">Zones</a>
            <a href="#faq" className="hover:text-green-700">FAQ</a>
          </div>

          <div className="flex gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold shadow">
              WhatsApp
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold shadow">
              Appeler
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>

          <div className="inline-flex items-center bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Disponible jour et nuit
          </div>

          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Livraison Pharmacie
            <br />
            de Garde
            <span className="text-green-700"> Tanger 24/7</span>
          </h2>

          <p className="text-2xl mb-4 text-gray-800">
            توصيل الأدوية من صيدليات الحراسة بطنجة
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Nous récupérons vos médicaments auprès des pharmacies
            ouvertes et les livrons rapidement à Tanger.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg">
              Commander sur WhatsApp
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg">
              Appeler maintenant
            </button>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "24/7",
              "Livraison rapide",
              "Service sécurisé",
              "Support WhatsApp",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center text-sm font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
            alt="Tangier"
            className="rounded-3xl shadow-2xl object-cover h-[650px] w-full"
          />

          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold text-lg">Pharmacie ouverte</h3>
                <p className="text-sm text-gray-500">Centre-ville</p>
              </div>

              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                Ouverte
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SEARCH */}
      <section
        id="open"
        className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-8"
      >

        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">

          <h3 className="text-3xl font-bold mb-2">
            Trouvez une pharmacie ouverte
          </h3>

          <p className="text-gray-500 mb-6">
            Maintenant, près de vous
          </p>

          <input
            type="text"
            placeholder="Votre position ou quartier..."
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 mb-6 outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="space-y-4">

            {pharmacies.map((pharmacy) => (
              <div
                key={pharmacy.name}
                className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition"
              >

                <div className="flex items-start justify-between mb-3">

                  <div>
                    <h4 className="font-bold text-lg">
                      {pharmacy.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {pharmacy.district}
                    </p>
                  </div>

                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    {pharmacy.status}
                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      {pharmacy.time}
                    </p>

                    <p className="text-sm text-green-600 font-semibold">
                      Livraison ~{pharmacy.eta}
                    </p>
                  </div>

                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-semibold">
                    Livraison
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 min-h-[700px] bg-gray-100 relative">

          <iframe
            title="Tangier Map"
            src="https://maps.google.com/maps?q=tangier&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
          />

        </div>

      </section>

      {/* AREAS */}
      <section
        id="zones"
        className="max-w-7xl mx-auto px-4 py-20"
      >

        <div className="flex items-center justify-between mb-10">
          <h3 className="text-4xl font-bold">
            Zones couvertes à Tanger
          </h3>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">

          {areas.map((area) => (
            <div
              key={area}
              className="rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition bg-white"
            >

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
                alt={area}
                className="h-32 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="font-bold mb-2">{area}</h4>

                <p className="text-sm text-green-700 font-semibold">
                  Voir les pharmacies →
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-5xl mx-auto px-4 py-20"
      >

        <h3 className="text-4xl font-bold text-center mb-12">
          Questions fréquentes
        </h3>

        <div className="space-y-4">

          {faq.map((q) => (
            <div
              key={q}
              className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm"
            >

              <div className="flex items-center justify-between">
                <p className="font-semibold">{q}</p>
                <span className="text-2xl text-gray-400">+</span>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-10">

          <div>
            <h4 className="text-3xl font-bold mb-4">
              SecuMaroc
            </h4>

            <p className="text-green-100 leading-relaxed">
              Votre service de livraison et d'assistance pharmacie de garde 24/7.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">
              Contact
            </h5>

            <ul className="space-y-2 text-green-100">
              <li>+212 6 00 00 00 00</li>
              <li>WhatsApp 24/7</li>
              <li>contact@secumaroc.com</li>
              <li>Tanger, Maroc</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-green-900 mt-12 pt-8 text-center text-green-200 text-sm px-4">
          SecuMaroc est un service indépendant de livraison et d’assistance.
        </div>

      </footer>

    </div>
  );
}
