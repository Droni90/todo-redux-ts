import { HexColorPicker } from "react-colorful";
import { makeStyles, Modal, DialogContent } from "@material-ui/core";
import React from "react";
import { IModal } from "../interfaces";

interface IColorListModal {
  handleClose: () => void;
  handleColor: (color: string) => void;
  isOpen: IModal;
  onEnter: (evt: React.KeyboardEvent) => void;
}
const useStyles = makeStyles(() => ({
  colorPicker: {
    zIndex: 5,
    marginLeft: "40%",
    marginTop: "250px",
  },
}));

const ColorPickerModal: React.FC<IColorListModal> = ({
  isOpen,
  handleClose,
  handleColor,
  onEnter,
}) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen.isOpen} onClose={handleClose} onKeyPress={onEnter}>
      <DialogContent>
        <HexColorPicker
          color={"#000"}
          onChange={handleColor}
          className={classes.colorPicker}
        />
      </DialogContent>
    </Modal>
  );
};

export default ColorPickerModal;
