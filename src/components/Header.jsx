import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import logo from '../assets/logo.png'
export default function Header() {
    return (
      <>
        <div className='flex h-1/6 w-full bg-bg-light items-center justify-between pl-24 pr-24 pt-16 pb-16'>
            <div>
            <img src={logo} alt="icon1" width={300} height={300} />
            </div>
            
            <div className='flex space-x-24'>
              <img src={icon1} alt="icon1" width={158} height={158} />
              <img src={icon2} alt="icon2" width={158} height={158} />
            </div>

        </div>
      </>
    )
  }