"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function JoinForm() {
    const router = useRouter();
    const [link, setLink] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault();
        if (link.trim()) {
            router.push(link)
        }
    }
    return (
        <form onSubmit={handlesubmit} className='flex items-center gap-2 mt-4'>
            <input type="text"
                value={link}
                onChange={(e)=> setLink( e.target.value)}
                placeholder='Enter Personal Meeting Link'
                className='w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors'
            />
            <button
            type='submit'
            className='h-10 bg-blue-500 text-white rounded-lg px-4 hover:border-blue-600 transition-colors'
            >
                    Join
            </button>
        </form>
    )
}

export default JoinForm