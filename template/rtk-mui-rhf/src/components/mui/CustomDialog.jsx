import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SevereWarning from "../../assets/images/SevereWarning.svg";
import RegularWarning from "../../assets/images/RegularWarning.svg";
import Notify from "../../assets/images/Notify.svg";

function CustomDialog({
  severity = "notify",
  isLoading,
  confirmCallback,
  disableConfirm,
  title,
  content,
  ...otherProps
}) {
  const { onClose } = otherProps;

  return (
    <Dialog {...otherProps}>
      <Box className="customDialog">
        <Box className="customDialog__icon">
          <img
            src={
              severity === "error"
                ? SevereWarning
                : severity === "warning"
                ? RegularWarning
                : Notify
            }
            alt="alert-img"
          />
        </Box>

        <DialogTitle className="customDialog__title">{title}</DialogTitle>

        <DialogContent className="customDialog__content">
          {content}
        </DialogContent>

        <DialogActions className="customDialog__actions">
          <Button
            color="error"
            variant="outlined"
            onClick={onClose}
            disabled={isLoading}
          >
            No
          </Button>

          <Button
            variant="contained"
            disabled={isLoading || disableConfirm}
            onClick={confirmCallback}
          >
            {isLoading ? <CircularProgress size="20px" color="white" /> : "Yes"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default CustomDialog;
