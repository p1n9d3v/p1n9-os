import * as styles from './styles.css'

const Window = ({ children }: { children: React.ReactNode }) => {
    return <section className={styles.container}>{children}</section>
}

export default Window
