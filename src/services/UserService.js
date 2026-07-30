import api from "./api";

export const registerUser = (user) => {
    return api.post("/users/register", user);
};

export const loginUser = (loginData) => {
    return api.post("/users/login", loginData);
};