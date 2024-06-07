import { FaSearch } from "react-icons/fa";

function DashboardNavbar() {
  return (
    <div className='w-full h-10 flex item-center justify-between'>
        <div className="w-1/3 flex flex-col gap-1">
            <h3 className="text-xl font-semibold font-sans">Personal Financial Management</h3>
            <p className="text-lg font-sans">Check your financial status</p>
        </div>
        <div className="relative w-1/3 rounded-full bg-white ">
            <input type='text' name='search' placeholder="Search" className="w-full bg-white px-12 py-4 rounded-full text-lg placeholder:text-gray-500"/>
            <FaSearch className="text-lg absolute top-5 left-5 text-gray-500" />
        </div>
    </div>
  )
}

export default DashboardNavbar
