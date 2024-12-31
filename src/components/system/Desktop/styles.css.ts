import { vars } from '@/styles/global.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    backgroundColor: vars.theme.color.background,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    width: '100vw',
    height: '100vh',
})
