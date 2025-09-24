import cancerSymptomsImg from "@/assets/cancer-symptoms.jpg";
import citiesProphecyImg from "@/assets/cities-prophecy.jpg";
import husbandPhotoImg from "@/assets/husband-photo.jpg";
import dancePerformanceImg from "@/assets/dance-performance.jpg";

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
    imageAlt: "Objawy nowotworów - konsultacja lekarska"
  },
  {
    title: "Te miasta znikną jako pierwsze: starszy przepowiedział straszny koniec",
    url: "https://lovable24.click/short/163490?stream_uuid=35ef07fb-13dd-4bf7-a68a-8cc38e2053ad&trek=1",
    imageUrl: citiesProphecyImg,
    imageAlt: "Przepowiednia o miastach - apokaliptyczny krajobraz"
  },
  {
    title: "Mąż zrobił zdjęcie swojej żonie: zobacz teraz",
    url: "https://lovable24.click/short/163489?stream_uuid=c18aa91a-c77d-49af-ade3-b4a04fc7d2d7&trek=1",
    imageUrl: husbandPhotoImg,
    imageAlt: "Mąż fotografuje żonę"
  },
  {
    title: "Kiedy zaczął tańczyć, publiczność zamarła!",
    url: "https://lovable24.click/short/163488?stream_uuid=92b7c14c-4993-4af1-97c5-2ba939db9cde&trek=1",
    imageUrl: dancePerformanceImg,
    imageAlt: "Występ taneczny - zachwycona publiczność"
  }
];

const ArticleTeasers = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-xl font-bold text-foreground mb-6">Inne artykuły</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teaserArticles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            <img
              src={article.imageUrl}
              alt={article.imageAlt}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground leading-tight hover:text-red-600 transition-colors">
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