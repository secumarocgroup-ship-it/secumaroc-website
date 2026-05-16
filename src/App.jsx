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
    },
    {
      name: "Pharmacie Moulay Youssef",
      district: "Mesnana",
      status: "24/7",
      eta: "30 min"
    }
  ];

  const faq = [
    "Quelle pharmacie est ouverte maintenant à Tanger ?",
    "Livrez-vous la nuit ?",
    "Combien coûte la livraison ?",
    "هل التوصيل متاح ليلاً؟"
  ];

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#ffffff",
      color: "#111",
      minHeight: "100vh"
    }}>

      {/* NAVBAR */}
      <header style={{
        padding: "20px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}>

        <div>
          <h1 style={{
            color: "green",
            margin: 0
          }}>
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
            padding: "12px 18px",
            marginRight: "10px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold"
          }}>
            WhatsApp
          </button>

          <button style={{
            background: "red",
            color: "white",
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold"
          }}>
            Appeler
          </button>

        </div>

      </header>

      {/* HERO */}
      <section style={{
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        <h2 style={{
          fontSize: "52px",
          marginBottom: "20px",
          lineHeight: "1.1"
        }}>
          Livraison Pharmacie de Garde Tanger 24/7
        </h2>

        <p style={{
          fontSize: "28px",
          marginBottom: "20px"
        }}>
          توصيل الأدوية من صيدليات الحراسة بطنجة
        </p>

        <p style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "700px"
        }}>
          Nous récupérons vos médicaments auprès des pharmacies ouvertes et les livrons rapidement à Tanger.
        </p>

      </section>

      {/* PHARMACIES */}
      <section style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        <h3 style={{
          fontSize: "36px",
          marginBottom: "30px"
        }}>
          Pharmacies ouvertes
        </h3>

        {pharmacies.map((pharmacy) => (
          <div
            key={pharmacy.name}
            style={{
              border: "1px solid #ddd",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}
          >

            <h4 style={{
              margin: 0,
              fontSize: "24px"
            }}>
              {pharmacy.name}
            </h4>

            <p>{pharmacy.district}</p>

            <p style={{
              color: "green",
              fontWeight: "bold"
            }}>
              {pharmacy.status}
            </p>

            <p>
              Livraison ~ {pharmacy.eta}
            </p>

            <button style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: "bold"
            }}>
              Livraison
            </button>

          </div>
        ))}

      </section>

      {/* MAP */}
      <section style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        <h3 style={{
          fontSize: "36px",
          marginBottom: "20px"
        }}>
          Carte Tanger
        </h3>

        <iframe
          title="Tangier Map"
          src="https://maps.google.com/maps?q=tangier&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: "20px"
          }}
        />

      </section>

      {/* FAQ */}
      <section style={{
        padding: "50px 20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>

        <h3 style={{
          fontSize: "36px",
          marginBottom: "30px"
        }}>
          Questions fréquentes
        </h3>

        {faq.map((item) => (
          <div
            key={item}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "15px"
            }}
          >
            {item}
          </div>
        ))}

      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#052e16",
        color: "white",
        padding: "50px 20px",
        marginTop: "50px"
      }}>

        <h3>
          SecuMaroc
        </h3>

        <p>
          Service de livraison pharmacie de garde 24/7 à Tanger.
        </p>

        <p>
          WhatsApp • Appel • Livraison rapide
        </p>

      </footer>

    </div>
  );
}
