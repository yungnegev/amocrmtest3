import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='h-[500px] lg:h-auto px-[60px] pt-[130px] pb-[175px] w-full bg-[#222730] md:px-[30px] md:py-[60px]'>
        <div className='flex lg:flex-col gap-[150px] md:gap-[60px]'>
            <div className='flex flex-col gap-[35px] w-[290px]'>
                <img src={logo} alt="logo" className='w-[170px]'/>
                <p className='text-[#999] text-[15px] leading-[25px] sm:text-[12px]'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
            </div>
            <div className='flex gap-[150px] md:gap-[80px]'>
                <div className='flex flex-col gap-[24px]'>
                    <h1 className='text-[18px] sm:text-[16px]'>Menu Items</h1>
                    <ul className='leading-[37.5px] text-[#999] text-[15px] sm:text-[13px]'>
                        <li className='hover:text-[#FAC422]'><a href="#">About</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Blog</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Blog</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <h1 className='text-[18px] sm:text-[16px]'>Other Pages</h1>
                    <ul className='leading-[37.5px] text-[#999] text-[15px] sm:text-[13px]'>
                        <li className='hover:text-[#FAC422]'><a href="#">Styleguide</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Changelog</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Licenses</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Team</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer