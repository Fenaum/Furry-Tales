import { useRouter } from "next/navigation";  

export default function Home() {
      const router = useRouter();

    
    async function logout() {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })  
        const data = await response.json()
        console.log(data)
        if (response.status === 200) {
            router.push('/')
        } else {
            alert(data.message)
        }
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