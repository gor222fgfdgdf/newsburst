import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            Regulamin serwisu
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Postanowienia ogólne</h2>
              <p>
                Niniejszy regulamin określa zasady korzystania z serwisu ZUS Informacje.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Definicje</h2>
              <p>
                Serwis - portal internetowy dostępny pod adresem ZUS Informacje, 
                udostępniający informacje o emeryturach i świadczeniach ZUS.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Zasady korzystania</h2>
              <p>
                Korzystanie z serwisu jest bezpłatne i dostępne dla wszystkich użytkowników 
                bez konieczności rejestracji.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Odpowiedzialność</h2>
              <p>
                Informacje publikowane w serwisie mają charakter informacyjny. 
                Administrator nie ponosi odpowiedzialności za decyzje podjęte na ich podstawie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Zmiany regulaminu</h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w regulaminie. 
                Zmiany wchodzą w życie z dniem publikacji.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;