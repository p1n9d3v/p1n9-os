'use client'

import Desktop from '@/components/system/Desktop'
import ProcessLoader from '@/components/system/ProcessLoader'
import { ProcessProvider } from '@/stores/process'
import { getStartupProcesses } from '@/utils/processDirectory'

export default function Home() {
    const processDirectory = getStartupProcesses()
    return (
        <Desktop>
            <ProcessProvider startupProcesses={processDirectory}>
                <ProcessLoader />
            </ProcessProvider>
        </Desktop>
    )
}
