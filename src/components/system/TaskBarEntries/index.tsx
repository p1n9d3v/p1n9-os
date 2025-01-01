import * as styles from './styles.css'

function TaskBarEntries({ children }: { children: React.ReactNode }) {
    return <ol className={styles.taskBarEntries}>{children}</ol>
}

export default TaskBarEntries
