import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-hooks-redux-thunk-default-rtdb.firebaseio.com/"
});

export default instance;
