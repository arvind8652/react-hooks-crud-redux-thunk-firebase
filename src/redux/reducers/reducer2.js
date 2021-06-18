import axios from "../../axios/axios";

import initialstate from "../states";
const BackEnd = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_BE_USER":
      const users = action.payload;
      return axios.post("/users.json", users);
    case "BACKEND_DATA":
      const fetchData = [];
      axios.get("/users.json").then((response) => {
        console.log(response.data);
        for (let key in response.data) {
          fetchData.unshift({
            ...response.data[key],
            collection_id: key
          });
        }
      });
      return (state.users = fetchData);
    case "EDIT_BE_USER":
      const userData = action.payload;
      return axios.put(
        `/users/${userData.collection_id}/${userData.id}`,
        userData
      );
    default:
      return state;
  }
};
export default BackEnd;
