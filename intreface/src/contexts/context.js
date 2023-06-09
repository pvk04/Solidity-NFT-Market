import { createContext, useReducer, useState } from "react";

const initialState = {
  login: null,
  address: null,
  role: null,
  discount: null,
  refCodeUsed: null,
  activity: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_CONNECTION":
      const { web3, contract } = payload;
      return { ...state, web3, contract };
    case "SET_ADDRESS":
      return { ...state, address: payload };
    case "SET_LOGIN":
      const { login, role, discount, refCodeUsed } = payload;
      return { ...state, login, role, discount, refCodeUsed };
    case "SET_LOGOUT":
      return { ...initialState };
    case "SET_ACTIVITY":
      return { ...state, activity: state.activity++ };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const value = useReducer(reducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// const Provider = ({ children }) => {
//   const [state, setState] = useState();

//   const add = () => {};
//   const load = () => {};
//   const remove = () => {};

//   return (
//     <context.Provider value={{ state, actions: { add, load, remove } }}>
//       {children}
//     </context.Provider>
//   );
// };

// const useSomeContext = () => {
//     const useContext(context);
// };
