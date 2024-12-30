'use client'

import type { ProcessContextState, Processes } from '@/types/store/process'
import { createContext, ReactNode, useContext, useState } from 'react'

const ProcessContext = createContext<ProcessContextState>({
    processes: {},
})

export const ProcessProvider = ({
    startupProcesses = {},
    children,
}: {
    startupProcesses: Processes
    children: ReactNode
}) => {
    const [processes] = useState(startupProcesses)

    return (
        <ProcessContext.Provider value={{ processes }}>
            {children}
        </ProcessContext.Provider>
    )
}

export const useProcessContext = () => {
    const processContext = useContext(ProcessContext)

    if (!processContext)
        throw new Error('useProcess: ProcessContext is undefined')

    return processContext
}
