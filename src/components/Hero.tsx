import soldier1 from '../assets/soldier1.png'
import fire from '../assets/fire.svg'

const Hero = () => {
  return (
    <main className='w-full h-full flex md:flex-col items-center md:justify-center px-[60px] mt-[20px]'>
        <div className='w-[50%] lg:w-full md:w-full flex flex-col gap-4 relative'>
            <div className='flex gap-2'>
                <img src={fire} alt="fire" />
                <h2 className='text-[#57B8FF] uppercase'>future of esports</h2>
            </div>
            <h1 className='text-[72px] capitalize lg:text-[60px] md:text-[42px]'>unleash the next <span className='relative after:absolute after:content-underline after:w-full after:content-cover after:overflow-hidden after:top-4 after:right-0'>generation </span> of gaming</h1>
            <p className='text-[#999] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,<br /> nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
            <div className='flex gap-2 mt-8'>
                <button className='h-[70px] w-[200px] bg-[#56b8ff]'>
                    <span className='capitalize'>explore more</span>
                </button>
                <button className='h-[70px] w-[200px]'>View our team</button>
            </div>
            <div className='absolute flex gap-12 rotate-[270deg] top-[272px] left-[-176px]'>
                <a href="#"><span className='uppercase text-[#80858F] text-[11px]'>feedback</span></a>
                <a href="#"><span className='uppercase text-[#80858F] text-[11px]'>instagram</span></a>
                <a href="#"><span className='uppercase text-[#80858F] text-[11px]'>twitch</span></a>
            </div>
        </div>
        <div className='w-[50%] lg:w-full lg:hidden'>
            <img src={soldier1} alt="soldier" />
        </div>
    </main>
  )
}

export default Hero