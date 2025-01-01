import TaskBar from '@/components/system/TaskBar'
import { Processes } from '@/types/store/process'
import dynamic from 'next/dynamic'

const STARTUP_PROCESS: string[] = ['TaskBar']

const processDirectory: Processes = {
    Hello: {
        Component: dynamic(() => import('@/components/Hello'), {
            ssr: false,
            loading: () => <div>Loading .... </div>,
        }),
        hasWindow: true,
    },
    TaskBar: {
        Component: TaskBar,
    },
}

export const getStartupProcesses = () =>
    STARTUP_PROCESS.reduce(
        (processes, processId) => ({
            ...processes,
            [processId]: processDirectory[processId],
        }),
        {}
    )
