import { createContext, useEffect, useState } from "react";
import { axiosCommon } from "../hooks/useAxiosCommon";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async() => {
    const token = localStorage.getItem('token')
    if(!token){
        setUser(null)
        setLoading(false)
        return;
    }
    try {
        setLoading(true)
        const {data} = await axiosCommon.get('/user',{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        // console.log(`user data: ${data}`)
        // console.log(`stringify user: ${JSON.stringify(data)}`)
        setUser(data)

    } catch (error) {
        console.log(error)
    }
    finally{
        setLoading(false)
    }
  }
 
useEffect(()=>{
    fetchUserData()
},[])

  const authInfo = {
    user,
    loading,
    setUser,
    fetchUserData
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
