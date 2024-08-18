"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

export default function Dashboard() {
   const { data: session } = useSession();
  //console.log(session);
   
  return (
    <>
      <div className='m-20 font-mono'>
                  {
                   session ? 
                   <div>
                      <img src={session?.user?.image as string } alt={session?.user?.name as string } className=' rounded-full w-20 h-20 ' />
                      <h1>Welcome Back  <span className='font-bold'> {session?.user?.name} </span>  </h1>
                      <p> Email : <span> {session.user?.email} </span> </p>
                      <button 
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className=' w-20 p-2 mt-5 bg-red-400 text-black rounded-lg duration-150 hover:bg-red-600 hover:text-white hover:w-28'>
                        Log out</button>
                   </div>
                   : 
                  <div>
                     <h1>Sign In With Github/Google</h1>
                     <div className='space-x-4 mt-5'>
                      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => signIn("github")}>Sign In Github</button>
                      <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => signIn("google")}>Sign In Google</button>
                     </div>
                  </div>
                }
      </div>
    </>
  )
}
