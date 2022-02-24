import { SearchIcon } from '@heroicons/react/outline';
import { HashtagIcon, SearchCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase'

const ChatArea = ({ currentChannel }) => {
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const firebase = useFirebase();
    // useSelector();
    return (
        <>
            <div className='flex-1 relative flex-col w-full h-full p-5 bg-[#eee]'>
                <div className='flex justify-between h-16 items-center border-b pb-3 mb-3 border-b-blue-400 flex-wrap'>
                    <div className='flex justify-center items-center'><HashtagIcon className='w-6 h-6 text-blue-800' /> <span className='pl-1'>{currentChannel.name}</span></div>
                    <div className='relative'>
                        <SearchIcon className='w-5 h-5 text-white absolute top-3 left-2' />
                        <input className='bg-blue-700 p-2 pl-8 rounded-lg focus:outline-none border border-white text-white placeholder:text-white ' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search message' />
                    </div>
                </div>
                <div className='flex  h-[calc(100%_-_9rem)]  overflow-auto flex-col'>
                    <p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                    <p>asdasd</p><p>asdasd</p><p>asdasd</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='flex my-3 h-16'>
                    <input className='w-full px-4 rounded-l-lg focus:outline-none' placeholder={`Message for ${currentChannel.name} channel`} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type='submit' className='bg-blue-800 w-16 text-white p-2 rounded-r-lg focus:outline-none'
                    >Send </button>
                </form >

            </div >
        </>
    )
}

export default ChatArea