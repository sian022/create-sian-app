import { useContext } from "react";
import { SnackbarContext } from "../context/SnackbarContext";

const useSnackbar = () => {
  const { setSnackbarMessage, setSnackbarVariant, onSnackbarOpen } =
    useContext(SnackbarContext);

  return ({ message, variant }) => {
    setSnackbarMessage(message);
    setSnackbarVariant(variant);
    onSnackbarOpen();
  };
};

export default useSnackbar;
