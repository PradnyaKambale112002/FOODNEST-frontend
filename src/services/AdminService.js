import api from "./api";

// Dashboard
export const getDashboard = () => api.get("/admin/dashboard");

// Orders
export const getAllOrders = () => api.get("/orders");

export const updateOrderStatus = (id, status) =>
    api.put(`/orders/${id}/status`, { status });

// Menu
export const getAllMenuItems = () => api.get("/menu");

export const getMenuItemById = (id) => api.get(`/menu/${id}`);

export const addMenuItem = (menuItem) =>
    api.post("/menu", menuItem);

export const updateMenuItem = (id, menuItem) =>
    api.put(`/menu/${id}`, menuItem);

export const deleteMenuItem = (id) =>
    api.delete(`/menu/${id}`);

// Categories
export const getAllCategories = () => api.get("/category");

export const getCategoryById = (id) =>
    api.get(`/category/${id}`);

export const addCategory = (category) =>
    api.post("/category", category);

export const updateCategory = (id, category) =>
    api.put(`/category/${id}`, category);

export const deleteCategory = (id) =>
    api.delete(`/category/${id}`);

// Users
export const getAllUsers = () => api.get("/users");

export const deleteUser = (id) =>
    api.delete(`/users/${id}`);