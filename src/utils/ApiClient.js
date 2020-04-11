import axios from 'axios'

class ApiClient {
    makeRequest(apiUrl, type) {
        switch (type) {
            case "GET":
                return axios.get(apiUrl);
            case "DELETE":
                return axios.delete(apiUrl)

        }
    }
    makeAPIRequest(apiUrl, type)
        {

        apiUrl = apiUrl + "?_format=json&access-token=Pyiex5tdmdZcgPCIdKy4VLOPWkMiS5a3d7y1"
        switch(type){
            case "GET": return axios.get(apiUrl);
            case "DELETE": return axios.delete(apiUrl)
            default: return null;
        }

    }
}

const apiClient = new ApiClient()

export default apiClient;