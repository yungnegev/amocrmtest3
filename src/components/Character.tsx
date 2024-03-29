import soldier2 from '../assets/soldier2.png';
import fire from '../assets/fire.svg';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';
import thumb3 from '../assets/thumb3.png';

const Character = () => {
  return (
    <section className='bg-[#2a313c] h-[695px] xl:h-auto px-[60px] flex xl:flex-col xl:py-8 md:px-[30px]'>
      <div className='h-full w-[50%] xl:w-full xl:flex xl:itmes-center xl:justify-center'>
        <img src={soldier2} alt='character' className='h-full max-w-[600px] xl:w-[500px] xl:rounded-full md:w-[400px] sm:w-[260px]' />
      </div>
      <div className='h-full w-[50%] xl:w-full flex flex-col justify-center gap-4 xl:py-12'>
        <div className='flex gap-2'>
          <img src={fire} alt='fire' />
          <h2 className='text-[#57B8FF] uppercase'>future of esports</h2>
        </div>
        <h1 className='text-[62px] capitalize lg:text-[42px] md:text-[32px]'>
          customize your own character
        </h1>
        <p className='text-[#999] text-[20px] max-w-[560px] leading-[30px] sm:text-[16px]'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.
        </p>
        <div className='flex items-center gap-4 mt-12'>
          <div className='border-[20px] border-[#3b3d46] rounded-[20px] bg-[#3b3d46]'>
            <img src={thumb1} alt='thumbnail' className='h-[103px]' />
          </div>
          <div className='border-[20px] border-transparent hover:border-[#3b3d46] rounded-[20px] hover:bg-[#3b3d46] sm:hidden'>
            <img src={thumb2} alt='thumbnail' className='h-[103px]' />
          </div>
          <div className='border-[20px] border-transparent hover:border-[#3b3d46] rounded-[20px] hover:bg-[#3b3d46] md:hidden'>
            <img src={thumb3} alt='thumbnail' className='h-[103px]' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;
