import { useEffect, useState } from "react"
import type { FullNoteRender } from "../types"

export function useDebounce (value: FullNoteRender[] , delay: number): FullNoteRender[] {
	const [ debouncedNote, setDebouncedNote ] = useState<FullNoteRender[]>( value )

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedNote(value)
		}, delay)
		
		return () => clearTimeout(timeoutId)
	}, [value, delay])
	
	return debouncedNote
}