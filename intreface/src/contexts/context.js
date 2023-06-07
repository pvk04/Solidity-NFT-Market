import { createContext, useReducer, useState } from "react";

const initialState = {
  address: null,
  role: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_ADDRESS":
      return { ...state, address: payload };
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
