import { createContext, useReducer } from "react";


const INITIAL_STATE = { darkMode: false };

export const ThemeContext = createContext(INITIAL_STATE);


const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":{
        return {
            darkMode: !state.darkMode,
          };
    }
    default:
      return state;
  }
};

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
