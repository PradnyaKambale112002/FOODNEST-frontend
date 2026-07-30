import api from "./api";

export const createRazorpayOrder = (amount) => {
    return api.post(`/payments/create-order?amount=${amount}`);
};