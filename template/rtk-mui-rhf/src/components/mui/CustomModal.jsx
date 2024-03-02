import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";

function CustomModal({ children, closeTopRight, ...otherProps }) {
  const { onClose, ...noOnCloseProps } = otherProps;

  return (
    <Modal {...noOnCloseProps}>
      <Box className="customModal">
        {closeTopRight && (
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          >
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
        )}

        {children}
      </Box>
    </Modal>
  );
}

export default CustomModal;
