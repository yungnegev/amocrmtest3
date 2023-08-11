import fire from '../assets/fire.svg'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'
import news5 from '../assets/news5.png'
import NewsCard from './NewsCard'


interface Article {
    image: string,
    date: string,
    content: string
}

const featuredArticle: Article = {
    image: news1,
    date: 'April 2, 2021',
    content: 'Esports Group teams up with the Indianapolis Colts',
};

const articles: Article[] = [
    {
        image: news2,
        date: 'April 2, 2021',
        content: 'NAVI reveals s1mple fifth anniversary'
    },
    {
        image: news3,
        date: 'April 2, 2021',
        content: 'A1esports Shares new picture'
    },
    {
        image: news4,
        date: 'April 2, 2021',
        content: 'T1 unveil partnership with Razer'
    },
    {
        image: news5,
        date: 'April 2, 2021',
        content: 'RX secures content partnership with'
    },
  ]

const News = () => {

  return (
    <section className='w-full py-[130px] bg-[#000000] px-[60px] md:px-[30px]'>
        <div className='flex justify-between mb-[64px]'>
            <div>
                <div className='flex gap-2'>
                    <img src={fire} alt="fire" />
                    <h2 className='text-[#57B8FF] uppercase'>future of esports</h2>
                </div>
                <h1 className='text-[64px] leading-[74px] w-[600px] lg:text-[42px] lg:w-[420px] sm:text-[32px] sm:w-[320px]'>Latest News & Articles</h1>
            </div>
            <div >
                <button className='h-[70px] w-[175px] bg-[#56b8ff] mt-[105px] lg:hidden'>Read More</button>
            </div>
        </div>
        <div className='flex lg:flex-col gap-[24px] w-full xl:flex-col'>
            <div className='w-full h-full md:hidden'>
                <div className='flex flex-col min-h-[320px] justify-between'>
                    <a href="#">
                        <img src={featuredArticle.image} alt="newsimage" className='mb-[44px]'/>
                        <h3 className='text-[#57B8FF] mb-[34px]'>{featuredArticle.date}</h3>
                        <p className='text-[24px]'>{featuredArticle.content}</p>
                    </a>
                </div>
            </div>
            <div className='w-full flex h-auto flex-wrap gap-[24px] sm:flex sm:flex-col sm:items-center'>
                {articles.map((article, index) => {
                    return (
                        <NewsCard key={index} image={article.image} date={article.date} content={article.content} />
                    )
                })}
            </div>
        </div>
        <div className='sm:w-full sm:flex sm:items-center sm:justify-center'>
            <button className='h-[70px] w-[175px] bg-[#56b8ff] mt-[105px] hidden lg:block'>Read More</button>
        </div>
    </section>
  )
}

export default News