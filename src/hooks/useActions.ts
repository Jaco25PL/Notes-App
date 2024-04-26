import { useAppDispatch, useAppSelector } from "./useStore"
import type { FullNote } from "../types"

export function useActions() {
    const dispatch = useAppDispatch()
    const display: boolean = useAppSelector(state => state.display)
    const noteState: FullNote[] = useAppSelector(state => state.notes as FullNote[])
    const footerViewport: boolean = useAppSelector(state => state.footerViewport)
    
    return{
        dispatch,
        display,
        noteState,
        footerViewport
    }
}       