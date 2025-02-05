import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { VideoIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='fixed w-full flex justify-between items-center p-4 border-b shadow-sm z-50'>
            <Link href={'/'} className='flex items-center gap-x-3 text-blue-500'>
            <VideoIcon  className='size-8 fill-current' />
                <h1 className='text-2xl font-bold'>Qen Meeting</h1>
            </Link>


            <SignedOut>
            <SignInButton mode='modal' />
            {/* <SignInButton /> */}
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> 


        </header>
    )
}

export default Header