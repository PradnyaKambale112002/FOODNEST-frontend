import api from "./api";

export const placeOrder = () => {
    return api.post("/orders/place");
};

export const getMyOrders = () => {
    return api.get("/orders/my");
};