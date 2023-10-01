'use client'

import Login from "@/components/Login"
import Logout from "@/components/Logout"
import { useEffect } from "react"
import { gapi } from "gapi-script"
import GitHubLogin from "@/components/GitHubLogin"
import { useSession } from 'next-auth/react'


export default function Home() {




  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId : '278355168841-kccbmv3pnivdmp3vr4d8ddtd056jtbg1.apps.googleusercontent.com',
        scope : ''
      })
    }
    gapi.load('client:auth2' , start)
  },[])

  // const accessToken = gapi.auth.getToekn().acess_token
  // console.log(accessToken)

  return (
    <main className="flex min-h-screen items-center justify-center gap-24 p-24">
      <Login/>
      <Logout/>
      <GitHubLogin/>
    </main>
  )
}
