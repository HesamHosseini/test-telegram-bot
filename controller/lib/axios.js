const axios = require("axios")
const MY_TOKEN = "6857396912:AAGV7cy0C6j9wrpPOnjDfYaEyNGxGc7unxU"
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`

function getAxiosInstance() {
	return {
		get(method, params) {
			return axios.get(`/${method}`, {
				baseURL: BASE_URL,
				params,
			})
		},
		post(method, data) {
			return axios({
				method: "post",
				baseURL: BASE_URL,
				url: `/${method}`,
				data
			})
		}
	}
}

module.exports = {axiosInstance: getAxiosInstance()}