import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://mytodo.cckcoder.cc/api/todo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTodo() {
    return apiClient.get('/')
  }
}
