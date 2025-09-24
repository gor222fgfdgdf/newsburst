import polishPensionersImg from "@/assets/polish-pensioners-new.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <article className="max-w-4xl mx-auto mb-24">
          {/* Main image */}
          <div className="relative">
            <img 
              src={polishPensionersImg} 
              alt="Grupa polskich seniorów zaniepokojonych zmianami w systemie emerytalnym" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>

          {/* Article content */}
          <div className="bg-white p-4 sm:p-6 shadow-sm">
            {/* Article title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
              ZUS zawiesił wypłaty emerytur seniorów
            </h1>

            {/* Article text */}
            <div className="prose prose-lg max-w-none mb-6 sm:mb-8">
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                To już nastąpiło! Trybunał Konstytucyjny wydał orzeczenie w tzw. sprawie emery..
              </p>
            </div>

            {/* Read more button */}
            <a
              href="https://ibr2025.sa.com/Gbq2H7f7"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-center no-underline transition-colors duration-200 touch-manipulation"
            >
              Czytaj dalej
            </a>
          </div>
        </article>
      </main>
      
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800 text-sm">Polityka prywatności</a>
            <a href="/terms-of-service" className="text-gray-600 hover:text-gray-800 text-sm">Regulamin</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 text-sm">Kontakt</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800 text-sm">O nas</a>
          </div>
          <p className="text-gray-500 text-xs">&copy; 2024 ZUS News. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
