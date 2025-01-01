import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/global.css'

export const container = style({
    backgroundColor: vars.color.window,
    height: 500,
})
