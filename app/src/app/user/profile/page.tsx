"use client"

import { useRouter } from "next/navigation";  
import { signOut } from '../../../lib/auth'

export default function Profile() {
      const router = useRouter();

    
    async function logout() {
        await signOut();
        console.log("logged out");
        router.push("/");
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}