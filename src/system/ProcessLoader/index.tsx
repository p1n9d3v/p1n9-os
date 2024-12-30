import { useProcessContext } from '@/stores/process'

export const WindowManager = () => {
    const { processes } = useProcessContext()

    return Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
    ))
}
