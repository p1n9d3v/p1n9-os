import { useProcessContext } from '@/stores/process'
import { Suspense } from 'react'
import Window from '@/system/Window'

export const WindowManager = () => {
    const { processes } = useProcessContext()

    return Object.entries(processes).map(([id, { Component, hasWindow }]) =>
        hasWindow ? (
            <Window key={id}>
                <Suspense
                    fallback={<div>...Loading</div>}
                    children={<Component />}
                />
            </Window>
        ) : (
            <Suspense
                key={id}
                fallback={<div>...Loading</div>}
                children={<Component />}
            />
        )
    )
}
