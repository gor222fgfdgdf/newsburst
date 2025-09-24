import cancerSymptomsImg from "@/assets/cancer-screening-new.jpg";
import citiesProphecyImg from "@/assets/apocalyptic-city-new.jpg";
import husbandPhotoImg from "@/assets/couple-photo-new.jpg";
import dancePerformanceImg from "@/assets/dance-show-new.jpg";

interface TeaserArticle {
  title: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
}

const teaserArticles: TeaserArticle[] = [
  {
    title: "Objawy najpoważniejszych nowotworów są często pomijane",
    url: "https://lovable24.click/short/163493?stream_uuid=67b60380-e9e6-4d0d-a83b-1f8dd73a23ee&trek=1",
    imageUrl: cancerSymptomsImg,
    imageAlt: "Badania profilaktyczne nowotworów - konsultacja z lekarzem"
  },
  {
    title: "Te miasta znikną jako pierwsze: starszy przepowiedział straszny koniec",
    url: "https://lovable24.click/short/163490?stream_uuid=35ef07fb-13dd-4bf7-a68a-8cc38e2053ad&trek=1",
    imageUrl: citiesProphecyImg,
    imageAlt: "Apokaliptyczny widok miasta pod groźnymi chmurami"
  },
  {
    title: "Mąż zrobił zdjęcie swojej żonie: zobacz teraz",
    url: "https://lovable24.click/short/163489?stream_uuid=c18aa91a-c77d-49af-ade3-b4a04fc7d2d7&trek=1",
    imageUrl: husbandPhotoImg,
    imageAlt: "Romantyczna sesja zdjęciowa pary w pięknym otoczeniu"
  },
  {
    title: "Kiedy zaczął tańczyć, publiczność zamarła!",
    url: "https://lovable24.click/short/163488?stream_uuid=92b7c14c-4993-4af1-97c5-2ba939db9cde&trek=1",
    imageUrl: dancePerformanceImg,
    imageAlt: "Spektakularny występ taneczny na scenie"
  }
];

const ArticleTeasers = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Inne artykuły</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {teaserArticles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden touch-manipulation"
          >
            <img
              src={article.imageUrl}
              alt={article.imageAlt}
              className="w-full h-36 sm:h-40 object-cover"
              loading="lazy"
            />
            <div className="p-3 sm:p-4">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-tight hover:text-accent transition-colors">
                {article.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ArticleTeasers;