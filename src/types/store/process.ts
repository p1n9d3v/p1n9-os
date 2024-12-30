type Process = {
    Component: React.ComponentType
}

export type Processes = {
    [id: string]: Process
}

export type ProcessContextState = {
    processes: Processes
}
