import type { Metadata } from 'next'
import localFont from 'next/font/local'

const DankMonoFonts = localFont({
    src: [
        {
            path: '../../public/fonts/DankMono-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/DankMono-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/DankMono-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})

export const metadata: Metadata = {
    title: 'P1n9 OS',
    description: 'P1n9 OS',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={DankMonoFonts.className}>{children}</body>
        </html>
    )
}
