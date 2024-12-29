'use client'

import { ProcessProvider } from '@/stores/process'
import { WindowManager } from '@/system/WindowManager'

export default function Home() {
    return (
        <ProcessProvider>
            <WindowManager />
        </ProcessProvider>
    )
}
