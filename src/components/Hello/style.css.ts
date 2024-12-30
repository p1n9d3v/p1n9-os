import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/global.css'

export const test1 = style({
    fontWeight: '400',
    fontSize: '56px',
    fontFamily: vars.fontFamily.dankMono,
})

export const test2 = style({
    fontWeight: '200',
    fontSize: '56px',
})
