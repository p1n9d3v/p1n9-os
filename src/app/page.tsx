'use client'

import { ProcessProvider } from '@/stores/process'
import ProcessLoader from '@/system/ProcessLoader'
import { getStartupProcesses } from '@/utils/processDirectory'

export default function Home() {
    const processDirectory = getStartupProcesses()
    return (
        <ProcessProvider startupProcesses={processDirectory}>
            <ProcessLoader />
        </ProcessProvider>
    )
}
