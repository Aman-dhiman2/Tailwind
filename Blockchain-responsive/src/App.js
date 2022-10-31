import "./App.css";
import Home from "./pages/Home";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";


let theme = createTheme({
  palette: {
    mode: "light"
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
