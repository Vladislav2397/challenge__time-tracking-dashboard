import { useMemo } from 'react'
import styles from './StatisticCard.module.scss'
import ellipsisIcon from '@/assets/icon-ellipsis.svg'

import exerciseIcon from '@/assets/icon-exercise.svg'
import playIcon from '@/assets/icon-play.svg'
import studyIcon from '@/assets/icon-study.svg'
import socialIcon from '@/assets/icon-social.svg'
import workIcon from '@/assets/icon-work.svg'
import selfCareIcon from '@/assets/icon-self-care.svg'

const icons = {
    exercise: exerciseIcon,
    play: playIcon,
    study: studyIcon,
    social: socialIcon,
    work: workIcon,
    'self-care': selfCareIcon,
} as const

export const StatisticCard = ({
    label,
    value,
    description,
    kind,
}: {
    label: string
    value: string
    description: string
    kind: 'exercise' | 'play' | 'study' | 'social' | 'work' | 'self-care'
}) => {
    const { color } = useMemo(() => decorationMap[kind], [kind])

    return (
        <article
            className={styles.root}
            style={{ backgroundColor: color }}>
            <picture
                className={styles.icon}
                aria-hidden="true">
                <img
                    src={icons[kind]}
                    alt=""
                />
            </picture>
            <div className={styles.card}>
                <div className={styles.top}>
                    <h2 className={styles.label}>{label}</h2>
                    <button
                        type="button"
                        className={styles.ellipsis}
                        aria-label={`More options for ${label}`}>
                        <img
                            src={ellipsisIcon}
                            alt=""
                        />
                    </button>
                </div>
                <div className={styles.bottom}>
                    <p
                        className={styles.value}
                        aria-live="polite">
                        {value}
                    </p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </article>
    )
}

const decorationMap = {
    exercise: {
        color: 'var(--color-primary-green-400)',
    },
    play: {
        color: 'var(--color-primary-blue-300)',
    },
    study: {
        color: 'var(--color-primary-pink-400)',
    },
    social: {
        color: 'var(--color-primary-purple-700)',
    },
    work: {
        color: 'var(--color-primary-orange-300)',
    },
    'self-care': {
        color: 'var(--color-primary-yellow-300)',
    },
} as const
