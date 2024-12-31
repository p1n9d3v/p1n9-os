import Window from '@/components/system/Window'
import { useProcessContext } from '@/stores/process'
import type { Process } from '@/types/store/process'

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
        <RenderProcess key={id} Component={Component} hasWindow={hasWindow} />
    ))
}

export default ProcessLoader
