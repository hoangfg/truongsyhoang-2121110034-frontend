import { axiosInstance } from "./axiosInstance";

export const productApi = {
    getAll(params) {
        var url = '/products';
        return axiosInstance.get(url, { params })
    },
    get(id, params = {}) {
        var url = `/products/${id}`;
        return axiosInstance.get(url, { params })
    },
    add(data) {
        var url = `/products`;
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/products/${id}`;
        return axiosInstance.put(url, data)
    },
    delete(id) {
        var url = `/products/${id}`;
        return axiosInstance.delete(url)
    },
    getListByCategoryID(categoryID) {
        var url = `products?populate=category&filters[category][id]=${categoryID}`;
        return axiosInstance.get(url);
    },
    getListByBrandID(brandID) {
        var url = `products?populate=brand&filters[brand][id]=${brandID}`;
        return axiosInstance.get(url);
    },
}
