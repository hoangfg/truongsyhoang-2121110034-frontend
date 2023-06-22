import { axiosInstance } from "./axiosInstance";

export const postApi = {
    getAll(params) {
        var url = '/posts';
        return axiosInstance.get(url, { params })
    },
    get(id, params = {}) {
        var url = `/posts/${id}`;
        return axiosInstance.get(url, { params })
    },
    add(data) {
        var url = `/posts`;
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/posts/${id}`;
        return axiosInstance.put(url, data)
    },
    delete(id) {
        var url = `/posts/${id}`;
        return axiosInstance.delete(url)
    },
    getListByTopicID(topicID) {
        var url = `posts?populate=topic&filters[topic][id]=${topicID}`;
        return axiosInstance.get(url);
    },
}
