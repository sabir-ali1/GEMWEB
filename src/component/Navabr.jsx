import React from 'react'
import { Link } from 'react-router-dom'

const Navabr = () => {
    return (

        <>
        <div className='flex gap-16 justify-center mt-10'>
            <Link to="/"><button className='border px-10 py-1'>Home</button></Link>
            <Link to="/register"><button className='border px-10 py-1'>Register Now</button></Link>
            <Link to="/login"><button className='border px-10 py-1'>Login</button></Link>
            <Link to="/login"><button className='border px-10 py-1'>Login</button></Link>
        </div>

        </>
    )
}

export default Navabr