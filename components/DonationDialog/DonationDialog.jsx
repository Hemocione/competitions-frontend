import styles from './DonationDialog.module.css'
import { React, useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';

const DonationDialog = ({ open, handleClose }) => {
    const [loading, setLoading] = useState(false)

    const handleOnSend = e => {
        e.preventDefault();
        setLoading(true);
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
                submitToken(token);
            });
        });
    }
    const submitToken = (token) => {
        // call a backend API to verify reCAPTCHA response
        fetch(`${process.env.BACKEND_URL}/verify`, {
            method: 'POST',
            body: JSON.stringify({
                "g-recaptcha-response": token
            })
        }).then(res => res.json()).then(res => {
            setLoading(false);
        });
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Registro
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Informe seus dados para poder registrar sua doação
                </DialogContentText>
            </DialogContent>
            <div className={styles.textFieldsContainer}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nome completo"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="Time"
                    fullWidth
                    variant="standard"
                />
            </div>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleOnSend} color="primary" autoFocus>
                    Enviar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default DonationDialog