import { createStore } from "redux";

const initialState = {
  users: [
    {
      address: "Brindavan Nagar, Bengaluru",
      emailId: "manirajesh.m96@gmail.com",
      firstName: "Mani",
      id: 1702271111571,
      lastName: "Macha",
      middleName: "Rajesh",
      mobileNumber: "07097926412",
      password: "123",
    },
  ],
  loggedInUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      state = {
        ...state,
        users: [...state.users, action.payload],
      };
      return state;

    case "LOGIN":
      state.loggedInUser = action.payload;
      return state;

    case "LOGOUT":
      state.loggedInUser = null;
      return state;

    case "UPDATE_USER":
      let users = state.users.map((user) => {
        if (user.id == action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
      state.users = users;
      state.loggedInUser = action.payload;
      return state;

    case "DELETE":
      alert("Deleted Successfully");
      state = {
        ...state,
        users: state.users.filter((user) => action.id !== user.id),
      };
      state.loggedInUser = null;
      return state;

    default:
      return state;
  }
};

export default createStore(userReducer);
