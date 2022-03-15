import styles from './DonationDialog.module.css'
import { React, useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const DonationDialog = ({ open, handleClose, competitionTeams, competitionId }) => {
    const [loading, setLoading] = useState(false)
    const [donationData, setDonationData] = useState({
        competitionId: competitionId,
        competitionTeamId: 'Nenhum',
        user_name: '',
        user_email: ''
    })

    const handleTeamChange = (event) => {
        console.log('aqui')
        setDonationData({ ...donationData, competitionTeamId: event.target.value })
    }
    const handleNameChange = (event) => {
        setDonationData({ ...donationData, user_name: event.target.value })
    }
    const handleEmailChange = (event) => {
        setDonationData({ ...donationData, user_email: event.target.value })
    }

    const handleOnSend = e => {
        e.preventDefault();
        setLoading(true);
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(process.env.NEXT_PUBLIC_SITE_KEY, { action: 'submit' }).then(token => {
                submitWithToken(token);
            });
        });
    }
    const submitWithToken = (token) => {
        // call a backend API to verify reCAPTCHA response
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donations`, {
            method: 'POST',
            body: JSON.stringify({
                "g-recaptcha-response": token,
                "id": donationData.competitionId,
                "user_name": donationData.user_name,
                "user_email": donationData.user_email,
                "competitionTeamId": donationData.competitionTeamId,
            })
        }).then(res => res.json()).then(res => {
            setLoading(false);
        });
    }
    const canSend = donationData.user_name != '' && donationData.user_email != ''
    console.log(canSend)
    return (
        <Dialog disableEnforceFocus open={open} onClose={handleClose}>
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
                    onChange={handleNameChange}
                    value={donationData.user_name}
                    error={donationData.user_name == ''}
                    helperText={donationData.user_name == '' && 'Campo obrigatório'}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nome completo"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleEmailChange}
                    value={donationData.user_email}
                    error={donationData.user_email == ''}
                    helperText={donationData.user_email == '' && 'Campo obrigatório'}
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <br />
                <br />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                        id="team-selector"
                        value={donationData.competitionTeamId}
                        label="Time"
                        onChange={handleTeamChange}
                        fullWidth
                    >
                        <MenuItem value='Nenhum'><em>Nenhum</em></MenuItem>
                        {competitionTeams.map(competitionTeam => (
                            <MenuItem value={competitionTeam.id} key={competitionTeam.id}>{competitionTeam.team.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button disabled={!canSend} onClick={handleOnSend} color="primary" autoFocus>
                    {loading ? 'Enviando...' : 'Enviar'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default DonationDialog