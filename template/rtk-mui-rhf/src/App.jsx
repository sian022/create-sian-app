import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./app/theme";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./styles/muiComponents.styles.scss";
import { SnackbarProvider } from "./context/SnackbarContext";
import { ConfirmProvider } from "./context/ConfirmContext";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <ConfirmProvider>
            <RouterProvider router={router} />
          </ConfirmProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
