const Redux = require('redux');

const fazerLogin = (email) => {
  return {
    type: "LOGIN",
    email,
  }
}

const reducer = (state = { login: false, email: '' }, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
    default:
      return state
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
})
//console.log(store.getState());
store.dispatch(fazerLogin('email@123.com'))
store.dispatch(fazerLogin('email@1234.com'))
//console.log(store.getState());