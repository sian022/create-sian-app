import { createContext, useState } from "react";
import CustomSnackbar from "../components/mui/CustomSnackbar";
import useDisclosure from "../hooks/useDisclosure";

const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarVariant, setSnackbarVariant] = useState("success");

  const {
    isOpen: isSnackbarOpen,
    onOpen: onSnackbarOpen,
    onClose: onSnackbarClose,
  } = useDisclosure();

  return (
    <SnackbarContext.Provider
      value={{
        setSnackbarMessage,
        setSnackbarVariant,
        onSnackbarOpen,
      }}
    >
      <>
        {children}
        <CustomSnackbar
          message={snackbarMessage}
          variant={snackbarVariant}
          open={isSnackbarOpen}
          onClose={onSnackbarClose}
        />
      </>
    </SnackbarContext.Provider>
  );
};

export { SnackbarContext, SnackbarProvider };
