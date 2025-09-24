import { Link } from "react-router-dom";

const About = () => {
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
            O nas
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">O serwisie</h2>
              <p>
                ZUS Informacje to niezależny portal informacyjny, który dostarcza 
                aktualne wiadomości i informacje dotyczące emerytur, świadczeń 
                oraz innych spraw związanych z Zakładem Ubezpieczeń Społecznych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Nasza misja</h2>
              <p>
                Naszym celem jest dostarczanie rzetelnych, aktualnych informacji 
                o zmianach w systemie ubezpieczeń społecznych w Polsce, 
                aby pomóc obywatelom w zrozumieniu ich praw i obowiązków.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Co oferujemy</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Aktualne informacje o zmianach w przepisach ZUS</li>
                <li>Artykuły dotyczące emerytur i świadczeń</li>
                <li>Analizy najważniejszych wydarzeń w systemie ubezpieczeń</li>
                <li>Praktyczne porady dla ubezpieczonych</li>
              </ul>
            </section>

            <section>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Ważne zastrzeżenie:</h3>
                <p>
                  Serwis ZUS Informacje nie jest oficjalną stroną Zakładu Ubezpieczeń Społecznych. 
                  Wszystkie informacje mają charakter informacyjny i nie stanowią porady prawnej. 
                  W sprawach urzędowych należy zawsze skontaktować się bezpośrednio z ZUS.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;