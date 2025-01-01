import { createGlobalTheme } from '@vanilla-extract/css'

export const globalTheme = createGlobalTheme(':root', {
    fontFamily: {
        dankMono: 'DankMonoFont',
        pretendard: 'PretendardFont',
    },
    fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px',
    },
    color: {
        primary: '#008000',
        window: '#808080',
        background: '#000',
    },
})
