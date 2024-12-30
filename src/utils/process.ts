import dynamic from 'next/dynamic'
export const processDirectory = {
    Hello: {
        Component: dynamic(() => import('@/components/Hello')),
        hasWindow: true,
    },
}
