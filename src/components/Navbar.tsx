import Link from "next/link"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
        {/*Left*/}
        <div className="">
            <Link href="/" className="font-bold text-xl text-blue-600">SOCIAL Sphere</Link>
        </div>
        {/*Center*/}
        <div className="">
        
        </div>
        {/*Right*/}
        <div className="">
            <MobileMenu/>
        </div>
    <div className="">
        
    </div>
    </div>
  )
}

export default Navbar