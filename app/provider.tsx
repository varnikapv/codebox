"use client"

import { useUser } from "@clerk/nextjs"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import axios from "axios"
import { use, useEffect, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import Header from "./_components/Header";

function Provider({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {

  const {user} = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() =>{
    user&&CreateNewUser();
  },[user])

  const CreateNewUser = async () => {
    const result = await axios.post('/api/user',{})
    setUserDetail(result?.data);
  }

  return (
    <NextThemesProvider 
   

    {...props}>
       <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
         {/* Header / Navigation Section */}
      <div className="flex flex-col items-center">
          <Header />
        
      </div>
      {children}
        
    </UserDetailContext.Provider>
    </NextThemesProvider>
  )
}

export default Provider