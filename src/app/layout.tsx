import '@/styles/global.css'
import { macTheme } from '@/styles/theme.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import localFont from 'next/font/local'

const DankMonoFont = localFont({
    src: [
        {
            path: '../../public/fonts/DankMono-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../../public/fonts/DankMono-Italic.woff2',
            weight: 'normal',
            style: 'italic',
        },
        {
            path: '../../public/fonts/DankMono-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-dank-mono',
})

const PretendardFont = localFont({
    src: '../../public/fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '100 900',
    variable: '--font-pretendard',
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
        <html suppressHydrationWarning>
            <body
                className={`${PretendardFont.className} ${DankMonoFont.className} `}
            >
                <ThemeProvider
                    enableSystem={false}
                    attribute="class"
                    value={{
                        mac: macTheme,
                    }}
                    defaultTheme="mac"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
