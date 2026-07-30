import api from "./api";

export const getMenuItemsByCategory = (categoryId) => {
    return api.get(`/menu/category/${categoryId}`);
};

export const getMenuItemById = (id) => {
    return api.get(`/menu/${id}`);
};

export const searchMenuItems = (foodName) => {
    return api.get(`/menu/search?foodName=${foodName}`);
};