import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <>
      <div className='flex h-12 w-full bg-bg-light items-center justify-between pl-24 pr-24 pt-16 pb-16 shadow-lg'>
        <div>
          <img src={logo} alt="icon1" width={200} height={200} />
        </div>

        <div className='flex space-x-24'>
          <img src={icon1} alt="icon1" width={158} height={100} />
          <img src={icon2} alt="icon2" width={158} height={100} />
        </div>

      </div>
    </>
  )
}