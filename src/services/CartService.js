import api from "./api";

export const addToCart = (menuItemId) => {
    return api.post("/cart", {
        menuItemId,
        quantity: 1,
    });
};

export const getMyCart = () => {
    return api.get("/cart/my");
};

export const increaseQuantity = (cartId) => {
    return api.put(`/cart/${cartId}/increase`);
};

export const decreaseQuantity = (cartId) => {
    return api.put(`/cart/${cartId}/decrease`);
};

export const removeCartItem = (cartId) => {
    return api.delete(`/cart/${cartId}`);
};