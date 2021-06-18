import initialstate from "../states";

const FrontEnd = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        loading: true
      };
    case "SET_USERSTATE":
      const userRecord = action.payload;
      const fetchedData = [];
      for (let key in userRecord) {
        fetchedData.unshift({
          ...userRecord[key],
          collection_id: key
        });
      }
      return {
        loading: false,
        users: fetchedData
      };
    case "ADD_FE_USER":
      return { users: [action.payload, ...state.users] };
    case "EDIT_FE_USER":
      const userDetail = action.payload;
      const updateDetail = state.users.map((user) => {
        if (user.id === userDetail.id) {
          return userDetail;
        } else {
          return user;
        }
      });
      return { users: updateDetail };
    case "REMOVE_FE_USER":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        })
      };
    default:
      return state;
  }
};

export default FrontEnd;
