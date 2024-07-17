import { createContext, useEffect, useState } from "react";
import { axiosCommon } from "../hooks/useAxiosCommon";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        axiosCommon.get('user', {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
        .then(res => {
            setUser(res.data)
            // console.log(user)
            setLoading(false)
        })
        .catch(err => {
            toast.error(err)
            setLoading(false)
        })
    }else{
        setLoading(false)
    }
  },[])

  
  const login = async(loginInfo) => {
    const { data } = await axiosCommon.post("/login", loginInfo);
    const { token, user } = data;
    
    localStorage.setItem("token", token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const authInfo = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
