import { Competition } from '..';
import styles from './Competitions.module.css'
import { useEffect } from 'react';

const Competitions = ({ competitions }) => {
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
            {competitions.map(({ id, name, start_at, end_at, status, ...rest }) => (
                <Competition key={id} title={name} id={id} start_at={start_at} end_at={end_at} status={status} />
            ))}
        </div>
    )
}


export default Competitions