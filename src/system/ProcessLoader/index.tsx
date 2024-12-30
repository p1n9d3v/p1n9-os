import { useProcessContext } from '@/stores/process'
import { Suspense } from 'react'

export const WindowManager = () => {
    const { processes } = useProcessContext()

    return Object.entries(processes).map(([id, { Component }]) => (
        <Suspense key={id} fallback={<div>...Lading</div>}>
            <Component />
        </Suspense>
    ))
}
