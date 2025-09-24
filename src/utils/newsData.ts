import polishPensionersImg from "@/assets/polish-pensioners-new.jpg";

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
    imageUrl: polishPensionersImg,
    imageAlt: 'Grupa polskich seniorów zaniepokojonych zmianami w systemie emerytalnym',
    fullText: `To już nastąpiło! Trybunał Konstytucyjny wydał orzeczenie w tzw. sprawie emery..`
  };
};