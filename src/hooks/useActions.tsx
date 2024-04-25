import { useAppDispatch, useAppSelector } from "./useStore"
import type { FullNote } from "../types"

export function useActions() {
    const dispatch = useAppDispatch()
    const display = useAppSelector(state => state.display)
    const noteState: FullNote[] = useAppSelector(state => state.notes as FullNote[])
    
    return{
        dispatch,
        display,
        noteState
    }
}       