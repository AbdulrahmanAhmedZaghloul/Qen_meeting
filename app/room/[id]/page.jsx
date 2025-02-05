
import VideoRoom from '../../../components/video-room.jsx';

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

async function Page({params}) {
    const user =await currentUser();
    if (
        !user
    ) {
        return redirect('/sign-in')
    }
    const param = await params ;
    const roomID = param.id ; 
    const appID =process.env.ZEGO_APP_ID;
    const serverSecret =process.env.ZEGO_SERVER_SECRET;
    const username = user.fullName || (user.primaryEmailAddress?.emailAddress );
    const userID = user.id;
    if (!appID || !serverSecret) {
      throw new Error("Missing ZEGO_APP_ID or ZEGO_SERVER_SECRET in environment variables.");
    }
  return (
    <>
    
      <div className='flex items-center h-screen'>
       
         <VideoRoom
        appID={parseInt(appID)}
        userID={userID}
        username={username}
        roomID={roomID}
        serverSecret={serverSecret}
        /> 
     </div>
    </>
    )
}

export default Page