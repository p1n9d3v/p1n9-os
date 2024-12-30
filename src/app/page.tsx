'use client'

import { ProcessProvider } from '@/stores/process'
import { WindowManager } from '@/system/ProcessLoader'
import { processDirectory } from '@/utils/process'

export default function Home() {
    return (
        <ProcessProvider startupProcesses={processDirectory}>
            <WindowManager />
        </ProcessProvider>
    )
}
