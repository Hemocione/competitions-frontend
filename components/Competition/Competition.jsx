import styles from './Competition.module.css'
import React, { useRef, useEffect, useState } from "react";
import { Ranking, CompetitionStatus } from '..'
import { getHumanReadableDate } from '../../utils/dates';
import { getCompetitionRankingBy } from '../../utils/api';
import { CircularProgress } from '@mui/material';
import Image from 'next/image'

const Competition = ({ id, start_at, end_at, title, status, ...rest }) => {
    const [height, setHeight] = useState(0)
    // 0 = not loading, 1 = loading, 2 = loaded
    const [loadingRanking, setLoadingRanking] = useState(0)
    const [ranking, setRanking] = useState([])
    const [rankingType, setRankingType] = useState('teams')
    const [arrowRotation, setArrowRotation] = useState(0)
    const ref = useRef(null);
    const arrowSize = 40

    const handleFilterOpening = () => {
        if (loadingRanking > 0) {
            setLoadingRanking(0)
        } else {
            setLoadingRanking(1)
            setRanking([]);
        }
    }
    const handleRankingTypeChange = async (type) => {
        setLoadingRanking(1)
        setRankingType(type);
        try {
            const { data } = await getCompetitionRankingBy(id, type)
            setRanking(data)
            setLoadingRanking(2)
        } catch (error) {
            setLoadingRanking(0)
        }
    }

    useEffect(() => {
        if (loadingRanking === 2) {
            /*
                hotfix - this must be changed on the future as it is only a
                fast way to fix a rendering problem
            */
            setTimeout(() => {
                setHeight(ref.current?.getBoundingClientRect().height)
                setArrowRotation(90)
            }, 100)
        } else if (loadingRanking === 1 && ranking.length == 0) {
            getCompetitionRankingBy(id, rankingType).then(({ data }) => {
                setRanking(data)
                setLoadingRanking(2)
            }).catch((error) => {
                setLoadingRanking(0)
            })
        } else {
            setHeight(0)
            setArrowRotation(0)
        }
    }, [loadingRanking, id, ranking, rankingType]);

    return (
        <div className={styles.wholeItem} key={id}>
            <div className={styles.show} onClick={handleFilterOpening}>
                <div className={styles.dataContainer}>
                    <div className={styles.titleContainer}>
                        {status === 2 ? <span className={styles.live} /> : null}
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                    <p className={styles.date}>Início: <b>{getHumanReadableDate(start_at)}</b></p>
                    <p className={styles.date}>Fim: <b>{getHumanReadableDate(end_at)}</b></p>
                    <CompetitionStatus status={status} />
                </div>
                {loadingRanking === 1 ? <div style={
                    {
                        width: `${arrowSize}px`,
                        height: `${arrowSize}px`,
                        marginRight: '20px',
                        marginLeft: '20px'
                    }
                }>
                    <CircularProgress style={{ 'color': 'rgb(224, 14, 22)' }} />
                </div> : <div style={
                    {
                        transform: `rotate(${arrowRotation}deg)`,
                        transformOrigin: `center`,
                        width: `${arrowSize}px`,
                        height: `${arrowSize}px`,
                        marginRight: '20px',
                        marginLeft: '20px',
                        transition: 'transform 0.4s ease-in-out'
                    }
                }>
                    <Image height={arrowSize} width={arrowSize} alt='Arrow' src='/arrow.svg' />
                </div>}
            </div>
            <div className={styles.hidden} style={{height}}>
                <div className={styles.ranking} ref={ref}>
                    <Ranking
                        competition_id={id}
                        ranking={ranking}
                        ableToDonate={status === 2}
                        rankingType={rankingType}
                        onRankingTypeChange={handleRankingTypeChange}
                    />
                </div>
            </div>
        </div >
    )
}

export default Competition
