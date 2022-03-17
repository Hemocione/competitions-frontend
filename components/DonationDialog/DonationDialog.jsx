import styles from './DonationDialog.module.css'
import { React, useState } from "react";
import { registerDonation } from '../../utils/api';
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
        competitionTeamId: 0,
        user_name: '',
        user_email: ''
    })
    const [errorText, setErrorText] = useState('')
    const canSend = donationData.user_name != ''
        && donationData.user_email != ''
        && donationData.competitionTeamId != 0
        && !loading

    const handleTeamChange = (event) => {
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
                return (submitWithToken(token))
            });
        });
    }
    const submitWithToken = (token) => {
        registerDonation({ ...donationData, token: token }).then((response) => {
            if (response.status === 201) {
                return handleClose();
            }
            setLoading(false);
            setErrorText(response.data.message);
        }).catch((error) => {
            setLoading(false);
            setErrorText("Ocorreu um erro inesperado. Por favor, tente novamente.")
        })
    }

    return (
        <Dialog disableEnforceFocus open={open} onClose={handleClose}>
            <DialogTitle>
                Registro
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Informe seus dados para registrar sua doação
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
                    variant="standard"
                />
                <TextField
                    onChange={handleEmailChange}
                    value={donationData.user_email}
                    error={donationData.user_email == ''}
                    helperText={donationData.user_email == '' && 'Campo obrigatório'}
                    autoFocus
                    required
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
                        placeholder='Time'
                        label="Time"
                        onChange={handleTeamChange}
                        fullWidth
                    >
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
            <p style={{ color: "#FF0000", textAlign: 'center', marginTop: 0, marginBottom: '1.5em' }}>{errorText}</p>
        </Dialog>
    )
}
export default DonationDialog