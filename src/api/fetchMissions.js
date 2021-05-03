import axios from "axios";

export const fetchMissions = () => {
  return axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      // We could add proper error handling here as part of this helper function
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
