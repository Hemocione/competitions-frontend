import styles from './Competition.module.css'
import React, { useRef, useEffect, useState } from "react";
import { Ranking } from '..'
import { getHumanReadableDate } from '../../utils/dates';

const Competition = ({ id, start_at, end_at, participants, title, key, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    }

    const ref = useRef(null);

    useEffect(() => {
        if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
        else setHeight(0);
    }, [isOpen]);

    return (
        <div className={styles.wholeItem} >
            <div className={styles.show} onClick={handleFilterOpening}>
                <h3>{title}</h3>
                <p>Participantes: {participants}</p>
                <p>Início: {getHumanReadableDate(start_at)}</p>
                <p>Fim: {getHumanReadableDate(end_at)}</p>
            </div>
            <div className={styles.hidden} style={{ height }}>
                <div className={styles.ranking} ref={ref}>
                    <Ranking open={isOpen} competition_id={id}/>
                </div>
            </div>
        </div >
    )
}

export default Competition