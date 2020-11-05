const darkMode = false;

export const themeReducer = (state = darkMode, action) => {
  if (action.type == 'changeTheme') {
    return action.payload;
  }
  return state;
};
