import styles from './Competition.module.css'
import React, { useRef, useEffect, useState } from "react";
import { ButtonWithLink, Ranking } from '..'

const Competition = ({ children, title }) => {
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
                <img src="https://upload.travelawaits.com/ta/uploads/2021/04/aerial-view-of-rio-de-janeiroee4454.jpg" />
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            <div className={styles.hidden} style={{ height }}>
                <div className={styles.ranking} ref={ref}>
                    <Ranking />
                    <div className={styles.buttonBox}>
                        <ButtonWithLink link='/donated' text='Registre sua doação' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Competition