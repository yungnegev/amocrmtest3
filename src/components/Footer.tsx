import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='h-[500px] px-[60px] pt-[130px] pb-[175px] w-full bg-[#222730]'>
        <div className='flex lg:flex-col gap-[150px]'>
            <div className='flex flex-col gap-[35px] w-[290px]'>
                <img src={logo} alt="logo" className='w-[170px]'/>
                <p className='text-[#999] text-[15px] leading-[25px]'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
            </div>
            <div className='flex gap-[150px]'>
                <div className='flex flex-col gap-[24px]'>
                    <h1 className='text-[18px]'>Menu Items</h1>
                    <ul className='leading-[37.5px] text-[#999] text-[15px]'>
                        <li className='hover:text-[#FAC422]'><a href="#">About</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Blog</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Blog</a></li>
                        <li className='hover:text-[#FAC422]'><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <h1 className='text-[18px]'>Other Pages</h1>
                    <ul className='leading-[37.5px] text-[#999] text-[15px]'>
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