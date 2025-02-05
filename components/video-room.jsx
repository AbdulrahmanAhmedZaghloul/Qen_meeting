"use client"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef, useState } from 'react'



export default function VideoRoom({
  appID,
  userID,
  username,
  roomID,
  serverSecret,
}) {
  const zegoUIRef = useRef(null);
  const containerRef = useRef(null);
  const [permissionerror, setPermissionError] = useState(null);
  const requestPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      return true;
    } catch (error) {
      if (error) {
        if (error.name === "NotAllowedError") {
          setPermissionError(
            "Please allow camera and microphone access to join the video call."
          );
        } else if (error.name === "NotFoundError") {
          setPermissionError(
            "No camera or microphone found. Please connect a device to join the video call."
          );
        } else {
          setPermissionError("An error occurred while accessing your media devices.");
        }
      }
      return false;
    };
  }

  useEffect(() => {
    let mounted = true;
    const initializeRoom = async () => {
      if (!mounted) return;
      try {
        const hasPermissions = await requestPermissions();
        if (!hasPermissions) return;
        const { ZegoUIKitPrebuilt } = await import(
          "@zegocloud/zego-uikit-prebuilt"
        );
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest
          (appID, serverSecret, roomID, userID,
            username, 3600
          )
        zegoUIRef.current = ZegoUIKitPrebuilt.create(kitToken);
        if (containerRef.current && mounted) {
          await zegoUIRef.current.joinRoom({
            container: containerRef.current,
            sharedLinks: [
              {
                name: 'Personal link',
                url:
                  window.location.protocol + '//' +
                  window.location.host + window.location.pathname +
                  '?roomID=' +
                  roomID,
              }
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          })
        }

      }
      catch (error) {
        console.error(`An error`, error);
        setPermissionError(`An error`);
      }
    };
    initializeRoom();
    return () => {
      mounted = false;
      if (zegoUIRef.current) {
        try {
          zegoUIRef.current.destroy();
        } catch (error) {
          console.error(`An error`, error);
        }
      }
    }
  }, [serverSecret, appID, userID, username, roomID])


  if (permissionerror) {
    <div className='flex flex-col items-center justify-center w-full h-full space-y-4 p-4'>
      <div className='text-red-500 text-center max-w-md'>
        {permissionerror}
      </div>
      <button
        onClick={() => {
          setPermissionError(null);
          requestPermissions();
        }}
        className='py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 rounded transition-colors'
      >
        Try Again
      </button>
    </div>
  }

  return (
    <div ref={containerRef} className='w-full h-full'/>
  )
}
