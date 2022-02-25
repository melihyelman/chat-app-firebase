import React from 'react'

const Message = ({ value, from }) => {
    return (
        <div className={`w-full px-2 relative bg-blue-200 rounded-lg py-2 ${from ? "flex flex-col" : ""}`}>
            <div className={`flex items-center ${from ? "float-right flex-row-reverse" : ""}`}>
                <img src={value.user.avatar} alt="avatar" className={`w-8 h-8 rounded-full ${from ? "ml-2" : "mr-2"}`} />
                <p className="text-gray-900 font-semibold leading-none">{value.user.name}</p>
            </div>
            <div className={`text-sm  ${from ? "text-right pr-10" : "pl-10"}`}>
                <p className="w-full text-gray-600 break-all">{value.content}</p>
            </div>
        </div>
    )
}

export default Message