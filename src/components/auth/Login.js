import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="flex items-center  justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left rounded-lg bg-white shadow-md">
                <div className="bg-gradient-to-r from-indigo-600 to-yellow-700" style={{ "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent" }}>
                    <h3 className='text-2xl font-bold text-center '>Chat.<span className='text-xs'>App</span></h3>
                </div>
                <h6 className="mt-3 text-l font-bold text-center">Login to your account</h6>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className='pb-4 border-b-2'>
                            <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                        </div>
                        <div>
                            <p className="pt-4 text-center text-gray-600 text-sm">Don't have an account?<Link className="text-blue-600" to={"/signup"}> Sign up</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login