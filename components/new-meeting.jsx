"use client";
import { VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function NewMeeting() {
  const router = useRouter();
  const [roomID, setRoomID] = useState(null);

  useEffect(() => {
    setRoomID(uniqid()); // Generates ID only on the client
  }, []);

  const handleNewMeeting = () => {
    if (roomID) {
      router.push(`/room/${roomID}`);
    }
  };

  return (
    <div
      onClick={handleNewMeeting}
      className="flex flex-col items-center justify-center w-full h-24 bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600 transition-colors"
    >
      <VideoIcon className="size-10 text-white" />
      <span className="text-white font-bold">New Meeting</span>
    </div>
  );
}

export default NewMeeting;


// "use client"
// import { VideoIcon } from 'lucide-react'
// import { useRouter } from 'next/navigation';
// // import Link from 'next/link'
// import React from 'react'
// import uniqid from 'uniqid';

// function NewMeeting() {
//     const routing = useRouter()
//     const handleNewMeeting =()=>{
//         console.log("New Meeting");
//         const roomID =uniqid();
//         routing.push(`room/${roomID}`)
//     }
//   return (
//     <div 
//     // href={`room/${roomID}`}
//     onClick={handleNewMeeting}
//     className="flex flex-col items-center justify-center w-full h-24 bg-orange-500
//     rounded-lg cursor-pointer hover:bg-orange-600 transition-colors
//     "
//     >
//          <VideoIcon  className='size-10 text-white' />
//          <span className='text-white font-bold'>New Meeting</span>
//     </div>  )
// }

// export default NewMeeting