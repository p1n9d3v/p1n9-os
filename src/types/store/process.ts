type Process = {
    Component: React.ComponentType
}

type Processes = {
    [id: string]: Process
}

export type ProcessContextState = {
    processes: Processes
}
