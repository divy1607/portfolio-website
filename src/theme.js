import { useContext, createContext } from "react";

export const ColorModeContext = createContext({
    mode: "dark",
    toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);
