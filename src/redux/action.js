// BE= BackEnd
// FE= FrontEnd

// import axios from "axios";
import axios from "../axios/axios";

export const defaultData = () => {
  return {
    type: "BACKEND_DATA"
  };
};
export const addBEUser = (user) => {
  return {
    type: "ADD_BE_USER",
    payload: user
  };
};

export const editBEUser = (user) => {
  return {
    type: "EDIT_BE_USER",
    payload: user
  };
};

export const removeBEUser = (id) => {
  return {
    type: "REMOVE_BE_USER",
    payload: id
  };
};

export const addFEEUser = (user) => {
  return {
    type: "ADD_FE_USER",
    payload: user
  };
};

// export const addFEUser = (user) => {
//   return (dispatch) => {
//     dispatch(addBEUser(user));
//     dispatch(addFEEUser(user));
//     // dispatch(fetchRecord());
//   };
// };

export const addFEUser = (user) => {
  return async (dispatch) => {
    const data = await axios.post("users.json", user);
    dispatch(fetchRecord(user));
  };
};

// export const fetchRecord = () => {
//   return (dispatch) => {
//     dispatch(setLodading());
//     axios.get("/users.json").then((response) => {
//       const users = response.data;
//       dispatch(setUserState(users));
//     });
//   };
// };

export const fetchRecord = () => {
  return async (dispatch) => {
    dispatch(setLodading());
    const data = await axios.get("/users.json");
    const res = await data.data;
    dispatch(setUserState(res));
  };
};

export const setUserState = (users) => {
  return {
    type: "SET_USERSTATE",
    payload: users
  };
};
export const setLodading = () => {
  return {
    type: "SET_LOADING"
  }
};

export const editFEUser = (user) => {
  return (dispatch) => {
    axios.put(`/users/${user.collection_id}.json`, user).then(() => {
      dispatch(fetchRecord());
    });
    // dispatch(editBEUser(user));
    // dispatch(editFEEUser(user));
  };
};

export const editFEEUser = (user) => {
  return {
    type: "EDIT_FE_USER",
    payload: user
  };
};

export const removeFEUser = (id) => {
  // return {
  //   type: "REMOVE_FE_USER",
  //   payload: id
  // };
  return (dispatch) => {
    axios.delete(`/users/${id}.json`).then(() => {
      dispatch(fetchRecord());
    });
  };
};
