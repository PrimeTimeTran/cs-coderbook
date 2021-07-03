import * as types from "../constants/auth.constants";
import api from "../api";
import { toast } from "react-toastify";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;

    localStorage.setItem("accessToken", res.data.data.accessToken);
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};


const register = (name, email, password, avatarUrl) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password, avatarUrl });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    toast.success(`Thank you for your registration, ${name}!`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const updateProfile = (name, avatarUrl) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST, payload: null });
  try {
    const res = await api.put("/users", { name, avatarUrl });
    dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: res.data.data });
    toast.success(`Your profile has been updated.`);
  } catch (error) {
    dispatch({ type: types.UPDATE_PROFILE_FAILURE, payload: error });
  }
};


const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");
  dispatch({ type: types.LOGOUT, payload: null });
};

export const authActions = {
  loginRequest,
  register,
  updateProfile,
  logout,
};
