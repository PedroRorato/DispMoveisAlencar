import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

//API
import api from "../services/api";

//Context
const AuthContext = createContext();

//Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  const perfilHandler = async ({ nome, sobrenome, email }) => {
    setUser((prevValues) => {
      let obj = prevValues;

      obj["nome"] = nome;
      obj["sobrenome"] = sobrenome;
      obj["email"] = email;

      return obj;
    });

    //Realiza login no server
    const response = await api.put("perfil", { nome, sobrenome, email });

    // await AsyncStorage.setItem("user", JSON.stringify(sessionData));
  };

  const loginHandler = async (data) => {
    //Realiza login no server
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

  const registerHandler = async (data) => {
    //Realiza cadastro no server
    const response = await api.post("register", data);
    //Token e dados do usuario
    const { token, sessionData } = response.data;
    //Insere dados do usuario no context
    setUser(sessionData);
    //Armazena no Storage
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(sessionData));
  };

  const context = {
    user,
    login: loginHandler,
    logout: logoutHandler,
    perfil: perfilHandler,
    register: registerHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

//UseContext
export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
