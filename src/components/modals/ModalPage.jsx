import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const ModalPage = ({ children, open = false, handleClose = () => { }, ...props }) => {
    const theme = useTheme();

    return (
        <Dialog
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            scroll={'paper'}
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: theme.palette.background.paperSecondary,
                }
            }}
            {...props}
        >
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
