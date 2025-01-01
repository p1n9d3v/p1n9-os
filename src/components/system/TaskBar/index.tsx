import Clock from '../Clock'
import StartMenu from '../StartMenu'
import TaskBarEntries from '../TaskBarEntries'
import TaskBarEntry from '../TaskBarEntry'
import * as styles from './styles.css'

function TaskBar() {
    return (
        <nav className={styles.taskBar}>
            <StartMenu />
            <TaskBarEntries>
                <TaskBarEntry />
                <TaskBarEntry />
            </TaskBarEntries>
            <Clock />
        </nav>
    )
}

export default TaskBar
