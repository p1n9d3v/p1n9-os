import { useProcess } from '@/stores/process'

export const WindowManager = () => {
    const { processes } = useProcess()

    return Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
    ))
}
