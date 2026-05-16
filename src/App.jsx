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

  const zones = [
    "Centre-ville",
    "Malabata",
    "Mesnana",
    "Marshan",
    "Castilla",
    "Iberia"
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
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 999
      }}>

        <div>
          <h1 style={{
            color: "green",
            margin: 0,
            fontSize: "34px"
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
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            WhatsApp
          </button>

          <button style={{
            background: "red",
            color: "white",
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Appeler
          </button>

        </div>

      </header>

      {/* HERO */}
      <section style={{
        padding: "70px 20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        <div style={{
          background: "#fee2e2",
          color: "#dc2626",
          display: "inline-block",
          padding: "8px 15px",
          borderRadius: "999px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}>
          Disponible jour et nuit
        </div>

        <h2 style={{
          fontSize: "58px",
          lineHeight: "1.1",
          marginBottom: "20px",
          maxWidth: "800px"
        }}>
          Livraison Pharmacie de Garde Tanger 24/7
        </h2>

        <p style={{
          fontSize: "30px",
          marginBottom: "20px"
        }}>
          توصيل الأدوية من صيدليات الحراسة بطنجة
        </p>

        <p style={{
          fontSize: "20px",
          color: "#555",
          maxWidth: "700px",
          lineHeight: "1.6"
        }}>
          Nous récupérons vos médicaments auprès des pharmacies ouvertes et les livrons rapidement partout à Tanger.
        </p>

      </section>

      {/* SERVICES */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px"
      }}>

        {[
          "24/7",
          "Livraison rapide",
          "Support WhatsApp",
          "Service sécurisé"
        ].map((item) => (

          <div
            key={item}
            style={{
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              textAlign: "center",
              fontWeight: "bold",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}
          >
            {item}
          </div>

        ))}

      </section>

      {/* PHARMACIES */}
      <section style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        <h3 style={{
          fontSize: "42px",
          marginBottom: "40px"
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
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Livraison
            </button>

          </div>

        ))}

      </section>

      {/* ZONES */}
      <section style={{
        padding: "60px 20px",
        background: "#f8fafc"
      }}>

        <div style={{
          maxWidth: "1200px",
          margin: "auto"
        }}>

          <h3 style={{
            fontSize: "42px",
            marginBottom: "30px"
          }}>
            Zones couvertes à Tanger
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px"
          }}>

            {zones.map((zone) => (

              <div
                key={zone}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "20px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                {zone}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MAP */}
      <section style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        <h3 style={{
          fontSize: "42px",
          marginBottom: "20px"
        }}>
          Carte Tanger
        </h3>

        <iframe
          title="Tangier Map"
          src="https://maps.google.com/maps?q=tangier&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="500"
          style={{
            border: 0,
            borderRadius: "20px"
          }}
        />

      </section>

      {/* SEO BLOCK */}
      <section style={{
        background: "#ecfdf5",
        padding: "70px 20px"
      }}>

        <div style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "40px"
        }}>

          <div>
            <h4 style={{ fontSize: "28px" }}>
              Pharmacie de garde Tanger
            </h4>

            <p style={{ lineHeight: "1.8" }}>
              Trouvez rapidement une pharmacie ouverte à Tanger avec livraison rapide de médicaments.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "28px" }}>
              خدمة توصيل الأدوية بطنجة
            </h4>

            <p style={{ lineHeight: "1.8" }}>
              نوفر خدمة سريعة للعثور على الصيدليات المفتوحة وتوصيل الأدوية إلى منزلك.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "28px" }}>
              Emergency pharmacy delivery
            </h4>

            <p style={{ lineHeight: "1.8" }}>
              Fast medicine delivery service available day and night in Tangier.
            </p>
          </div>

        </div>

      </section>

      {/* FAQ */}
      <section style={{
        padding: "70px 20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>

        <h3 style={{
          fontSize: "42px",
          marginBottom: "40px"
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
              marginBottom: "15px",
              fontSize: "18px"
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
        padding: "60px 20px",
        marginTop: "50px"
      }}>

        <div style={{
          maxWidth: "1200px",
          margin: "auto"
        }}>

          <h3 style={{
            fontSize: "32px"
          }}>
            SecuMaroc
          </h3>

          <p>
            Service de livraison pharmacie de garde 24/7 à Tanger.
          </p>

          <p>
            WhatsApp • Appel • Livraison rapide
          </p>

        </div>

      </footer>

      {/* FLOATING BUTTON */}
      <a
        href="#"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "green",
          color: "white",
          width: "70px",
          height: "70px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
        }}
      >
        WA
      </a>

    </div>
  );
}
