import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext(true);

export const ThemeProvider = ({children}) => {
	const [theme, dispatch] = useReducer((state, action) => {
		switch(action.type) {
			case 'TOGGLE_THEME':
				const newState = !state;
				return newState;
			default:
				return state;
		};
	}, true);
	return <ThemeContext.Provider value={{theme, dispatch}}>{children}</ThemeContext.Provider>
}