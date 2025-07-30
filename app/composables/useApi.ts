import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

/**
 * Axios instance with optional baseURL and token support.
 */
const api = axios.create({
  // baseURL: 'https://api.example.com', // Uncomment and set if needed
});

// Attach token from localStorage if available
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
});

/**
 * useApi composable for making HTTP requests with Axios.
 *
 * @returns {Object} HTTP methods: get, post, put, delete
 */
export function useApi() {
  /**
   * Make a GET request
   * @param {string} url - The endpoint URL
   * @param {AxiosRequestConfig} [config] - Optional Axios config
   * @returns {Promise<AxiosResponse<T>>}
   */
  const get = <T>(url: string, config?: AxiosRequestConfig) => api.get<T>(url, config);

  /**
   * Make a POST request
   * @param {string} url - The endpoint URL
   * @param {T} [data] - Request payload
   * @param {AxiosRequestConfig} [config] - Optional Axios config
   * @returns {Promise<AxiosResponse<T>>}
   */
  const post = <T>(url: string, data?: T, config?: AxiosRequestConfig) => api.post<T>(url, data, config);

  /**
   * Make a PUT request
   * @param {string} url - The endpoint URL
   * @param {T} [data] - Request payload
   * @param {AxiosRequestConfig} [config] - Optional Axios config
   * @returns {Promise<AxiosResponse<T>>}
   */
  const put = <T>(url: string, data?: T, config?: AxiosRequestConfig) => api.put<T>(url, data, config);

  /**
   * Make a DELETE request
   * @param {string} url - The endpoint URL
   * @param {AxiosRequestConfig} [config] - Optional Axios config
   * @returns {Promise<AxiosResponse<T>>}
   */
  const del = <T>(url: string, config?: AxiosRequestConfig) => api.delete<T>(url, config);

  return { get, post, put, delete: del };
}
