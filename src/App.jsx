export default function App() {

  const pharmacies = [
    {
      name: "Pharmacie Ibn Sina",
      district: "Centre-ville",
      status: "Ouverte",
      eta: "20 min"
    },
    {
      name: "Pharmacie Al Andalous",
      district: "Malabata",
      status: "Ouverte",
      eta: "25 min"
    }
  ];

  return (
    <div>

      {/* NAVBAR */}
      <header style={{
        padding: "20px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        <div>
          <h1 style={{ color: "green" }}>
            SecuMaroc
          </h1>

          <p>
            Livraison Pharmacie de Garde 24/7
          </p>
        </div>

        <div>
          <button style={{
            background: "green",
            color: "white",
            padding: "10px",
            marginRight: "10px",
            border: "none",
            borderRadius: "8px"
          }}>
            WhatsApp
          </button>

          <button style={{
            background: "red",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px"
          }}>
            Appeler
          </button>
        </div>

      </header>

      {/* HERO */}
      <section style={{
        padding: "40px"
      }}>

        <h2 style={{
          fontSize: "42px",
          marginBottom: "20px"
        }}>
          Livraison Pharmacie de Garde Tanger 24/7
        </h2>

        <p style={{
          fontSize: "24px",
          marginBottom: "20px"
        }}>
          توصيل الأدوية من صيدليات الحراسة بطنجة
        </p>

        <p>
          Nous récupérons vos médicaments auprès des pharmacies ouvertes.
        </p>

      </section>

      {/* PHARMACIES */}
      <section style={{
        padding: "40px"
      }}>

        <h3>
          Pharmacies ouvertes
        </h3>

        {pharmacies.map((pharmacy) => (
          <div
            key={pharmacy.name}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px"
            }}
          >

            <h4>{pharmacy.name}</h4>

            <p>{pharmacy.district}</p>

            <p>{pharmacy.status}</p>

            <p>Livraison ~ {pharmacy.eta}</p>

          </div>
        ))}

      </section>

    </div>
  );
}
