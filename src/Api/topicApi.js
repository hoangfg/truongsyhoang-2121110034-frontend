import { axiosInstance } from "./axiosInstance";

export const topicApi = {
    getAll(params) {
        var url = '/topics';
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/topics/${id}`;
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/topics`;
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/topics/${id}`;
        return axiosInstance.put(url, data)
    },
    delete(id) {
        var url = `/topics/${id}`;
        return axiosInstance.delete(url)
    }
}
