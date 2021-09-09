import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

//API
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const inicial = async () => {
      const token = await AsyncStorage.getItem("token");
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
          const userInfo = await AsyncStorage.getItem("user");
          setUser(JSON.parse(userInfo));
        }
      }
      setLoading(false);
    };
    return () => {
      inicial();
    };
  }, []);

  const loginHandler = async (data) => {
    //Realiza cadastro no server
    const response = await api.post("login", data);
    //Token e dados do usuario
    const { token, sessionData } = response.data;
    //Insere dados do usuario no context
    setUser(sessionData);
    //Armazena no Storage
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(sessionData));
  };

  const logoutHandler = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  const registerHandler = async ({ email, password }) => {};

  const context = {
    user,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext1 = useContext(AuthContext);
  return authContext1;
};
