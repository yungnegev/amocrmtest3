
interface NewsCardProps {
    image: string,
    date: string,
    content: string
}

const NewsCard = ({ image, date, content }: NewsCardProps) => {
  return (
    <div className='max-w-[312px] flex flex-col max-h-[700px] min-h-[320px] justify-between'>
        <a href="#">
            <img src={image} alt="newsimage" className='mb-[24px]'/>
            <h3 className='text-[#57B8FF] mb-[20px]'>{date}</h3>
            <p className='text-[24px]'>{content}</p>
        </a>
    </div>
  )
}

export default NewsCard