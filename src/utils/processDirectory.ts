import { Processes } from '@/types/store/process'
import dynamic from 'next/dynamic'

const STARTUP_PROCESS: string[] = ['Hello']

const processDirectory: Processes = {
    Hello: {
        Component: dynamic(() => import('@/components/Hello'), { ssr: false }),
        hasWindow: true,
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
