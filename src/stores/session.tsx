'use client'

import { createContext, ReactNode, useContext } from 'react'

const SessionContext = createContext({})

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SessionContext.Provider value={{}}>{children}</SessionContext.Provider>
    )
}

export const useSessionContext = () => {
    const sessionContext = useContext(SessionContext)

    if (!sessionContext)
        throw new Error('useSessionContext: SessionContext is undefined')

    return sessionContext
}
