import * as styles from './index.css'

const Window = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className={styles.container}>
            <h1>Hello</h1>
            {children}
        </section>
    )
}

export default Window
