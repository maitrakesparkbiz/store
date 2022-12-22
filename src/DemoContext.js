import React from "react";

export const buttonThemes = {
  primary: {
    color: "white",
    background: "#45c496",
  },
  secondary: {
    color: "whitesmoke",
    background: "#d91b42",
  },
};

export const ButtonThemeContext = React.createContext(buttonThemes.primary);
