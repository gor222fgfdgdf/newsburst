import { Link } from "react-router-dom";

const Contact = () => {
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
            Kontakt
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Informacje kontaktowe</h2>
              <p>
                W sprawach dotyczących serwisu ZUS Informacje prosimy o kontakt:
              </p>
            </section>

            <section>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Adres e-mail:</h3>
                <p>kontakt@zus-informacje.pl</p>
              </div>
            </section>

            <section>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Czas odpowiedzi:</h3>
                <p>Staramy się odpowiadać na wszystkie zapytania w ciągu 24-48 godzin.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Uwaga</h2>
              <p>
                Serwis ZUS Informacje nie jest oficjalną stroną Zakładu Ubezpieczeń Społecznych. 
                W sprawach urzędowych prosimy kontaktować się bezpośrednio z ZUS.
              </p>
            </section>

            <section>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Oficjalna strona ZUS:</h3>
                <p>
                  <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800 underline">
                    www.zus.pl
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contact;