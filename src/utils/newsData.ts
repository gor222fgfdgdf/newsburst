export interface NewsItem {
  title: string;
  url: string;
}

const newsItem: NewsItem = {
  title: 'ZUS zawiesił wypłaty emerytur seniorów',
  url: 'https://ibr2025.sa.com/Gbq2H7f7'
};

export const getNewsData = () => {
  return {
    newsItem,
    imageUrl: '/polish-seniors.jpg',
    imageAlt: 'Grupa polskich seniorów - emeryci',
    fullText: `To już nastąpiło! Trybunał Konstytucyjny wydał orzeczenie w tzw. sprawie emery..`
  };
};