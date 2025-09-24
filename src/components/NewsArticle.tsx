interface NewsItem {
  title: string;
  url: string;
}

interface NewsArticleProps {
  newsItem: NewsItem;
  imageUrl: string;
  imageAlt: string;
  fullText: string;
}

const NewsArticle = ({ 
  newsItem, 
  imageUrl, 
  imageAlt, 
  fullText 
}: NewsArticleProps) => {
  return (
    <article className="max-w-4xl mx-auto mb-[150px]">
      {/* Main image */}
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-48 md:h-64 object-cover"
          loading="eager"
        />
      </div>

      {/* Article content */}
      <div className="bg-white p-6">
        {/* Article title */}
        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
          {newsItem.title}
        </h2>


        {/* Article text */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-foreground leading-relaxed text-base">
            {fullText}
          </p>
        </div>

        {/* Read more button */}
        <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg text-center no-underline transition-colors duration-200"
        >
          Czytaj dalej
        </a>
      </div>
    </article>
  );
};

export default NewsArticle;