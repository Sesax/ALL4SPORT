/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SpringModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-image">
              <img
                src="https://www.mondelibre.org/wp-content/uploads/chien-heureux.jpg"
                width="100%"
              ></img>
            </Typography>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Crucial BX500 240Go
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Vous êtes-vous déjà demandé pourquoi votre smartphone était plus
              rapide que votre ordinateur? C’est parce que votre téléphone f
              onctionne avec de la mémoire flash. Ajoutez de la mémoire flash à
              votre ordinateur avec le SSD Crucial BX500, le meilleur moyen
              d’obtenir les performances d’un ordinateur neuf sans en payer le
              prix. Tout va plus vite.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
