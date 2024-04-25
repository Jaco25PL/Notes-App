export type DarkMode = boolean

export interface Note {
    noteTitle?: string
    noteMessage?: string
}

export interface Date {
    D: number
    M: number
    Y: number
}

export type Id = {
    id: `${string}-${string}-${string}-${string}-${string}`
}

export interface NoteWithId extends Note {
    id: Id.id
}

export interface FullNote extends Note { 
    id: Id.id
    date?: Date
}
