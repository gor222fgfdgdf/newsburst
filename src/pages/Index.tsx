import { getNewsData } from "@/utils/newsData";
import NewsArticle from "@/components/NewsArticle";
import ArticleTeasers from "@/components/ArticleTeasers";
import Footer from "@/components/Footer";

const Index = () => {
  const newsData = getNewsData();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <NewsArticle
          newsItem={newsData.newsItem}
          imageUrl={newsData.imageUrl}
          imageAlt={newsData.imageAlt}
          fullText={newsData.fullText}
        />
        <ArticleTeasers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
