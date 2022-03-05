import styles from './Competition.module.css'
import React, { useRef, useEffect, useState } from "react";
import { Ranking } from '..'
import { getHumanReadableDate } from '../../utils/dates';
import Image from 'next/image'

const Competition = ({ id, start_at, end_at, participants, title, key, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [arrowRotation, setArrowRotation] = useState(0)
    const arrowSize = 40
    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    }

    const ref = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setHeight(ref.current?.getBoundingClientRect().height)
            setArrowRotation(90)
        } else {
            setHeight(0)
            setArrowRotation(0)
        }
    }, [isOpen]);

    return (
        <div className={styles.wholeItem} >
            <div className={styles.show} onClick={handleFilterOpening}>
                <div style={
                    {
                        marginLeft: '10px'
                    }
                }>
                    <h3>{title}</h3>
                    <p>Participantes: {participants}</p>
                    <p>Início: {getHumanReadableDate(start_at)}</p>
                    <p>Fim: {getHumanReadableDate(end_at)}</p>
                </div>
                <div style={
                    {
                        transform: `rotate(${arrowRotation}deg)`,
                        transformOrigin: `center`,
                        width: `${arrowSize}px`,
                        height: `${arrowSize}px`,
                        marginRight: '20px',
                        marginLeft: '20px'
                    }
                }>
                    <Image height={arrowSize} width={arrowSize} alt='Arrow' src='/arrow.svg' />
                </div>
            </div>
            <div className={styles.hidden} style={{ height }}>
                <div className={styles.ranking} ref={ref}>
                    <Ranking competition_id={id} />
                </div>
            </div>
        </div >
    )
}

export default Competition