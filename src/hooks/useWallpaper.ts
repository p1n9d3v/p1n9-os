import * as THREE from 'three'
import { useEffect } from 'react'
/* @ts-expect-error  Ignore Type Error*/
import WAVES from 'vanta/dist/vanta.waves.min'

const useWallpaper = (desktopRef: React.RefObject<HTMLElement | null>) => {
    useEffect(() => {
        let wallpaper = null
        if (desktopRef.current) {
            wallpaper = WAVES({
                el: desktopRef.current,
                mouseControls: false,
                touchControls: false,
                color: '#881000',
                THREE,
            })
        }

        return () => {
            if (wallpaper) wallpaper.destroy()
        }
    }, [desktopRef])
}

export default useWallpaper
