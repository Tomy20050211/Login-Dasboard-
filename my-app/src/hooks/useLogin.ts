import { useState } from "react";
import { login } from "../services/login";


export const useLogin = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [loading, setLoading] = useState(false)


    const handleLogin = async ()  =>{
        try{
            setLoading(true)

            const data = await login({
                email,
                password
            })

            return data

        }catch(error){
            console.error(error)
            
        }finally{
            setLoading(true)
        }
    }

    return {
        handleLogin,
        email,
        password,
        loading ,
        setEmail,
        setPassword,
                         
    }
}