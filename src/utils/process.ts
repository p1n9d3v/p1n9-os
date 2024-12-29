import { lazy } from 'react'

export const processDirectory = {
    Hello: {
        Component: lazy(() => import('@/components/Hello')),
    },
}
