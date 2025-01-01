import { style } from '@vanilla-extract/css'

export const taskBar = style({
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '30px',
    backgroundColor: 'pink',
})
