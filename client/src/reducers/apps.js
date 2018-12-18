import axios from 'axios';

export const getApps = () => {
  return (dispatch) => {
    axios.get('/api/apps')
    .then( res => dispatch({ type: "APPS", apps: res.data }))
  }
}

export default (store = [], action ) => {
  switch(action.type) {
    case "APPS":
      return action.apps;
    case "ADD_APP":

    case "UPDATE_APP":

    case "DELETE_APP":

    default:
    return store;
  }
}