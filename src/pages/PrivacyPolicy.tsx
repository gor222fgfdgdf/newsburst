import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Кнопка возврата */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
          >
            ← Powrót do strony głównej
          </Link>
        </div>
        
        <article className="bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Polityka prywatności
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Informacje ogólne</h2>
              <p>
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych 
                użytkowników serwisu ZUS Informacje.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Administrator danych</h2>
              <p>
                Administratorem danych osobowych jest właściciel serwisu ZUS Informacje.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Rodzaj zbieranych danych</h2>
              <p>
                Serwis może zbierać dane techniczne dotyczące korzystania ze strony, 
                takie jak adres IP, rodzaj przeglądarki, czas wizyty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Cele przetwarzania danych</h2>
              <p>
                Dane są przetwarzane w celu zapewnienia prawidłowego funkcjonowania serwisu 
                oraz analizy ruchu na stronie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Prawa użytkowników</h2>
              <p>
                Użytkownicy mają prawo do dostępu do swoich danych, ich poprawiania, 
                usuwania oraz ograniczenia przetwarzania.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;