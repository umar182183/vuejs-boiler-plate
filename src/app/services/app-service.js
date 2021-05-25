import { dyneBackend } from "../../environment/environment";

class AppService {
  checkUserVisited(uid) {
    const axios = require("axios");
    let baseURL = process.env.VUE_APP_BACKEND_BASE_URL;
    return axios
      .get(baseURL + "user/check-user-visited-lms?uid=" + uid)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }
  uploadVideoToServer(file) {
      let obj = {
          file,
        projectId: process.env.VUE_APP_PROJECT_ID
      }
    return dyneBackend
      .post("videos", obj)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }
}
export default new AppService();
