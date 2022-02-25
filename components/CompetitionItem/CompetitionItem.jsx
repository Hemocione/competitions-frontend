import styles from './CompetitionItem.module.css'
import React, { useState } from "react";

const CompetitionItem = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <li className={styles.wholeItem} onClick={handleFilterOpening}>
            <div className={styles.show}>
                <img src="https://upload.travelawaits.com/ta/uploads/2021/04/aerial-view-of-rio-de-janeiroee4454.jpg" />
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            <div><hr /></div>
            {isOpen && <div>
                <p>
                    RANKING:<br />
                    TIME ALPHA:123<br />
                    TIME BETA:123<br />
                    TIME TETA:123<br />
                </p>
            </div>}
        </li >
    )
}

export default CompetitionItem