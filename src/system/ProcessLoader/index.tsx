import Window from '@/components/Window'
import { useProcessContext } from '@/stores/process'
import { Suspense } from 'react'

const ProcessLoader = () => {
    const { processes } = useProcessContext()

    return Object.entries(processes).map(([id, { Component, hasWindow }]) => (
        <Suspense key={id} fallback={<div>...Loading</div>}>
            {hasWindow ? (
                <Window>
                    <Component />
                </Window>
            ) : (
                <Component />
            )}
        </Suspense>
    ))
}

export default ProcessLoader
