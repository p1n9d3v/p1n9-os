'use client'

import useWallpaper from '@/hooks/useWallpaper'
import { useRef } from 'react'
import * as styles from './styles.css'

type DesktopProps = {
    children: React.ReactNode
}

function Desktop({ children }: DesktopProps) {
    const desktopRef = useRef<HTMLElement>(null)
    useWallpaper(desktopRef)

    return (
        <main ref={desktopRef} className={styles.container}>
            {children}
        </main>
    )
}

export default Desktop
