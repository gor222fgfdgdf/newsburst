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
    <article className="max-w-4xl mx-auto mb-24">
      {/* Main image */}
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
          loading="eager"
        />
      </div>

      {/* Article content */}
      <div className="bg-card p-4 sm:p-6 shadow-sm">
        {/* Article title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
          {newsItem.title}
        </h1>

        {/* Article text */}
        <div className="prose prose-lg max-w-none mb-6 sm:mb-8">
          <p className="text-foreground leading-relaxed text-sm sm:text-base">
            {fullText}
          </p>
        </div>

        {/* Read more button */}
        <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-accent hover:bg-accent-hover text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-center no-underline transition-colors duration-200 touch-manipulation"
        >
          Czytaj dalej
        </a>
      </div>
    </article>
  );
};

export default NewsArticle;