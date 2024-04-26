import { useEffect, useState } from "react"
import type { FullNote } from "../types"

export function useDebounce (value: FullNote[] , delay: number): FullNote[] {
	const [ debounceValue, setDebounceValue ] = useState<FullNote[]>( value )

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebounceValue(value)
		}, delay)
		
		return () => clearTimeout(timeoutId)
	}, [value, delay])
	
	return debounceValue
}