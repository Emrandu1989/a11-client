import resvervationImg from '../../assets/table.jpg';
import { TiArrowRightThick } from "react-icons/ti";
const Reservation = () => {
    return (
        <>
             <div className='flex justify-between px-12'>
                  <div className='w-1/2 space-y-9'>
                      <p className="uppercase italic text-green-500 font-semibold">Book A Table Online --------</p>
                      <h3 className='text-3xl my-5 italic font-semibold text-gray-400'>FLEXIBLE ONLINE RESERVATION</h3>
                      <p className='text-gray-600'>Provide your customers with modern and efficient ways for table reservations. In addition to booking via phone and email, you can also choose to integrate with OpenTable, or link to other local reservation systems.</p>
                      <ul className='text-green-800 my-5 space-y-2'>
                         <li className='flex items-center gap-3'>  <TiArrowRightThick /> Integrated with Open Table System</li>
                         <li className='flex items-center gap-3'> <TiArrowRightThick />  Custom Email Booking Form (Contact Form 7)</li>
                         <li className='flex items-center gap-3'> <TiArrowRightThick />  Call to Action button linked to any other booking system</li>
                         <li className='flex items-center gap-3'>  <TiArrowRightThick />  Popup with OpenTable or Contact Form 7</li>
                      </ul>
                  </div>
                  <div className='w-1/2'>
                     <img src={resvervationImg} alt="" />
                  </div>
             </div>
        </>
    );
};

export default Reservation;