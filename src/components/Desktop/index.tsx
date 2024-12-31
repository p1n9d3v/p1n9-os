import * as styles from './styles.css'

type DesktopProps = {
    children: React.ReactNode
}

function Desktop({ children }: DesktopProps) {
    return <main className={styles.container}>{children}</main>
}

export default Desktop
