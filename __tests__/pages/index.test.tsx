import { vi, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

test('Page', async () => {
    render(<Page />)
    await vi.dynamicImportSettled()
    expect(
        screen.getByRole('heading', { level: 1, name: 'Hello Zero' })
    ).toBeDefined()
})
