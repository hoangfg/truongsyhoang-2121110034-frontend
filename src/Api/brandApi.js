import { axiosInstance } from "./axiosInstance";

export const brandApi = {
    getAll(params) {
        var url = '/brands';
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/brands/${id}`;
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/brands`;
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/brands/${id}`;
        return axiosInstance.put(url, data)
    },
    delete(id) {
        var url = `/brands/${id}`;
        return axiosInstance.delete(url)
    }
}
