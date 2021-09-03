import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    //###Trocar pela memória do Aparelho###
    const token = localStorage.getItem("@AgendouMe:token");
    //

    if (token) {
      //Add Header
      api.defaults.headers.Authorization = `Bearer ${token}`;
      //Usar Token
      let decodedToken = jwt_decode(token);
      let currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        logoutHandler();
        console.log("Token Expired!");
      } else {
        //###Trocar pela memória do Aparelho###
        const userInfo = await localStorage.getItem("@AgendouMe:user");
        setUser(JSON.parse(userInfo));
      }
    }
    setLoading(false);
  }, []);

  const loginHandler = async ({ email, password }) => {
    const response = await api.post("login", { email, password });
    //Token e User
    const { token, sessionData } = response.data;
    //Armazena dados do user
    setUser(sessionData);
    //Armazena no Storage

    //###Trocar pela memória do Aparelho###
    localStorage.setItem("@AgendouMe:token", token);
    localStorage.setItem("@AgendouMe:user", JSON.stringify(sessionData));
  };

  const logoutHandler = () => {
    //Limpa Storage

    //###Trocar pela memória do Aparelho###
    localStorage.removeItem("@AgendouMe:token");
    localStorage.removeItem("@AgendouMe:user");
    setUser(null);
  };

  const context = {
    user: user,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext1 = useContext(AuthContext);
  return authContext1;
};
