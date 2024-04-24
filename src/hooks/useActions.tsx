import { useAppDispatch, useAppSelector } from "./useStore"

export function useActions() {
    const dispatch = useAppDispatch()
    const display = useAppSelector(state => state.display)
    const noteState = useAppSelector(state => state.notes)
    
    return{
        dispatch,
        display,
        noteState
    }
}