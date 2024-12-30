'use client'

import type { ProcessContextState } from '@/types/store/process'
import { processDirectory } from '@/utils/process'
import { createContext, ReactNode, useContext, useState } from 'react'

const ProcessContext = createContext<ProcessContextState>({
    processes: {},
})

export const ProcessProvider = ({ children }: { children: ReactNode }) => {
    const [processes] = useState(processDirectory)

    return (
        <ProcessContext.Provider value={{ processes }}>
            {children}
        </ProcessContext.Provider>
    )
}

export const useProcess = () => {
    const processContext = useContext(ProcessContext)

    if (!processContext)
        throw new Error('useProcess: ProcessContext is undefined')

    return processContext
}
