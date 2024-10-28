import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Navigation=()=>{
    return (
        
        <nav className="bg-customGreen text-gray-200 h-64 md:h-52 flex flex-col md:flex-row justify-between content-center">

            <div className="md:basis-1/4 border-white border flex gap-8 text-[32px] font-semibold items-center">
            <div className="basis-1/2 w-1/2 h-1/2">
            <div className="relative w-20 h-20 flex flex-row justify-end">
                <Image src="/addis_alem_log.png" alt="logo" layout="fill" objectFit="cover" className=' '></Image>
            </div>
                </div>
                <p>Addis Alem</p>
            </div>

            <div className="pages md:basis-2/4 flex flex-col md:flex-row justify-around border-white border text-[22px] font-semibold items-center">

            <div>
                <p>Home</p>
            </div>
            <div>
                <p>Destination</p>
            </div>
            <div>
                <p>Tickets</p>
            </div>
            <div>
                <p>Cars</p>
            </div>
            <div>
                <p>Events</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </div>
                
            </div>

            <div className="md:basis-1/4 flex justify-center border border-white items-center">
            <p>Button here</p>
                </div>
        </nav>
    )
}

export default Navigation;