import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'

const Navbar = () => {

  const navItems: string[] = ['Home', 'About', 'Team', 'Shop', 'Pages'] 

  return (
    <nav className='flex justify-between items-center h-[62px] px-[60px] mt-[20px]'>
        <div className='lg:hidden'>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <ul className='flex space-x-[60px]'>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a 
                          href="#" 
                          className={`text-[16px] font-semibold hover:text-[#FAC422] transition duration-300 ${index === 0 ? 'text-[#FAC422]' : ''}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex gap-[40px]'>
          <div className='flex relative items-center after:flex after:bg-white after:text-black after:content-["0"] 
                          after:rounded-full after:text-[11px] after:items-center after:px-1 after:absolute after:top-2 after:left-8'>
            <img src={cart} alt="cart" />
          </div>
          <button className='h-[60px] w-[178px] border-2 hover:text-[#FAC422] hover:border-[#FAC422]'>
            <span className='text-[18px]'>Contact Us</span>
          </button>
        </div>
    </nav>
  )
}

export default Navbar