import styles from './App.module.scss'
import { useState } from 'react'
import { ViewerCard } from './components/ViewerCard'
import data from '../data.json'
import { StatisticCard } from './components/StatisticCard'

function App() {
    const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>(
        'weekly',
    )

    const kinds = [
        'work',
        'play',
        'study',
        'exercise',
        'social',
        'self-care',
    ] as const

    return (
        <main className={styles.root}>
            <ViewerCard
                className={styles.viewer}
                active={period}
                setActive={setPeriod}
            />
            {data.map((item, index) => (
                <StatisticCard
                    key={item.title}
                    label={item.title}
                    value={`${item.timeframes[period].current}hrs`}
                    description={`Last Week - ${item.timeframes[period].previous}hrs`}
                    kind={kinds[index]}
                />
            ))}
        </main>
    )
}

export default App
