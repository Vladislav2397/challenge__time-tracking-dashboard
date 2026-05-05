import clsx from 'clsx'
import styles from './ViewerCard.module.scss'
import avatar from '@/assets/image-jeremy.png'

export const ViewerCard = ({
    className,
    active,
    setActive,
}: {
    className?: string
    active: string
    setActive: (period: 'daily' | 'weekly' | 'monthly') => void
}) => {
    const name = 'Jeremy Robson'
    const periods = {
        daily: 'Daily',
        weekly: 'Weekly',
        monthly: 'Monthly',
    }

    return (
        <section
            className={clsx(styles.root, className)}
            aria-label="Time tracking report">
            <header className={styles.header}>
                <picture className={styles.avatar}>
                    <img
                        src={avatar}
                        alt=""
                    />
                </picture>
                <div className={styles.content}>
                    <p className={styles.label}>Report for</p>
                    <h1 className={styles.name}>{name}</h1>
                </div>
            </header>
            <ul
                className={styles.links}
                role="list"
                aria-label="Time period">
                {Object.entries(periods).map(([value, label]) => (
                    <li
                        key={value}
                        className={clsx(
                            styles.link,
                            active === value && styles.active,
                        )}>
                        <button
                            type="button"
                            onClick={() =>
                                setActive(
                                    value as 'daily' | 'weekly' | 'monthly',
                                )
                            }
                            aria-current={active === value ? 'true' : undefined}>
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
