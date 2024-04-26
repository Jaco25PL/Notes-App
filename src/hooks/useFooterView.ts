import { RefObject, useEffect } from "react"
import { footerViewport } from "../store/footerViewportSlice/slice"
import { useActions } from "./useActions"

interface Props {
    footerRef: RefObject<HTMLDivElement>
}

export function useFooterView ({ footerRef }: Props) {
    
    const { dispatch } = useActions()

    useEffect(() => {

        const footer = footerRef?.current

        const options = {
            root: null, //viewport as the toot
            rootMargin: '0px', // no margin
            thresHold: 0 // Trigger when any part of the element is visible
        }
        const observer = new IntersectionObserver(([entry]) => {
            dispatch(footerViewport(entry.isIntersecting))
        }, options)

        footer && observer.observe(footer)

        return () => observer.disconnect()  // Clean observer

    }, [footerRef , dispatch])
}