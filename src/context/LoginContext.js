import { createContext, useContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
 const [login, setLogin] = useState(() => 
{
    const savedLogin = localStorage.getItem("login");
    return savedLogin ? savedLogin : (false);
});

useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
}, [login]);
    return(
        <LoginContext.Provider value={{login, setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;