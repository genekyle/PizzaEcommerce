import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../../styles/Login.module.css"
import axios from "axios"

function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleClick = async () => {
        try{
            await axios.post("http://pizza-ecommerce-two.vercel.app/api/login", {
                username,
                password,
            })
            router.push("/admin")
        }catch(err){
            setError(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input
                    placeholder="username (admin)"
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password (123456)"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={styles.button}>
                    Sign In
                </button>
                {error && <span className={styles.error}>Wrong Credentials</span>}
            </div>
        </div>
    )
}

export default Login
