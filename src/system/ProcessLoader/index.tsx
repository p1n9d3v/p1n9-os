import Window from '@/components/Window'
import { useProcessContext } from '@/stores/process'
import type { Process } from '@/types/store/process'
import { Suspense } from 'react'

const RenderProcess = ({ Component, hasWindow }: Process) =>
    hasWindow ? (
        <Window>
            <Component />
        </Window>
    ) : (
        <Component />
    )

const ProcessLoader = () => {
    const { processes } = useProcessContext()

    return Object.entries(processes).map(([id, { Component, hasWindow }]) => (
        <Suspense key={id} fallback={<div>...Loading</div>}>
            <RenderProcess Component={Component} hasWindow={hasWindow} />
        </Suspense>
    ))
}

export default ProcessLoader
