import { useAppDispatch, useAppSelector } from "./useStore"

export function useActions() {
    const dispatch = useAppDispatch()
    const display = useAppSelector(state => state.display)
    
    return{
        dispatch,
        display
    }
}