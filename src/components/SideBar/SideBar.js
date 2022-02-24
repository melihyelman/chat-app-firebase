import { useState } from 'react'
import { PlusIcon, MenuIcon, HashtagIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import ChannelForm from '../Channels/ChannelForm'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    return (
        <>
            <div className='bg-gray-700 text-gray-100 md:hidden flex justify-between items-center'>
                <div className="bg-gradient-to-r from-indigo-600 pl-4 to-yellow-700" style={{ "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}>
                    <h3 className='text-2xl font-bold text-center '>Chat.<span className='text-xs'>App</span></h3>
                </div>

                <button className='p-4 focus:outline-none focus:bg-gray-700' onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon className="h-6 w-6" />
                </button>
            </div>
            <div className={`bg-blue-800 space-y-6  text-blue-100 w-64 py-6 px-2 absolute inset-y-0 left-0 transform ${!isOpen ? "-translate-x-full" : ""} transition duration-200 ease-in-out md:relative md:translate-x-0`}>
                <div className='flex py-4 pl-4 pr-2 justify-between items-center text-white transition duration-200 hover:bg-blue-700 rounded-lg' onClick={() => setIsOpenModal(true)}>
                    <span className='text-xl font-extrabold'>Add Chanel</span>
                    <PlusIcon className="h-6 w-6" />
                </div>
                <nav>
                    <Link to={"/"}><a href='#/' className='flex justify-between items-center transition duration-200 hover:bg-blue-700 rounded-lg  py-2.5  px-4'>Chanel 1 <HashtagIcon className='w-4 h-4' /></a></Link>
                </nav>
            </div>
            <ChannelForm isOpen={isOpenModal} toggleOpenModal={toggleOpenModal} />
        </>
    )
}

export default SideBar;