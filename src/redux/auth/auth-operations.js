import axios from 'axios';
import authAction from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const register = credentials => async dispatch => {
//   dispatch(authActions.registerRequest());

//   try {
//     const response = await axios.post('/users/signup', credentials);

//     token.set(response.data.token);
//     dispatch(authActions.registerSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.registerError(error.message));
//   }
// };

const register = credentials => async dispatch => {
  console.log('1');
  dispatch(authAction.registerRequest());
  try {
    const response = await axios.post('/users/signup', credentials);
    console.log('2');

    token.set(response.data.token);
    dispatch(authAction.registerSuccess(response.data));
  } catch (error) {
    console.log('3');
    dispatch(authAction.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authAction.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authAction.loginSuccess(response.data));
  } catch (error) {
    dispatch(authAction.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authAction.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authAction.logoutSuccess());
  } catch (error) {
    dispatch(authAction.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authAction.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authAction.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authAction.getCurrentUserError(error.message));
  }
};

export default { register, logIn, token, logOut, getCurrentUser };
