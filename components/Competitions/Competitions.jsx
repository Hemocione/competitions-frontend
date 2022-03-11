import { Competition } from '..';
import styles from './Competitions.module.css'
import { useEffect } from 'react';

const Competitions = ({ available, finished }) => {
    useEffect(() => {
        const scriptExist = document.getElementById("recaptcha-key");
        if (!scriptExist) {
            const script = document.createElement("script")
            script.id = "recaptcha-key"
            script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_SITE_KEY}`
            script.onload = () => console.log('captcha loaded')
            document.body.appendChild(script)
        }
    }, []);
    return (
        <div className={styles.list}>
            {available.map(({ _id, name, startAt, endAt, institutions, ...rest }) => (
                <Competition key={_id} title={name} id={_id} start_at={startAt} end_at={endAt} participants={institutions} available={true} />
            ))}
            {finished.map(({ _id, name, startAt, endAt, institutions, ...rest }) => (
                <Competition key={_id} title={name} id={_id} start_at={startAt} end_at={endAt} participants={institutions} available={false} />
            ))}
        </div>
    )
}


export default Competitions