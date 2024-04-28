import { useEffect, useState } from "react"

interface Props {
    isScrolling: boolean
    isScrollingDarkBtn: boolean
}

export function useHeaderHomeScroll (): Props {

    const [ isScrolling, setIsScrolling ] = useState<boolean>(false)
    const [ isScrollingDarkBtn, setIsScrollingDarkBtn ] = useState<boolean>(false)
    const handleScroll = () => {
        const scrollY: number = window.scrollY
        scrollY > 44 ? setIsScrolling(true) : setIsScrolling(false)
        scrollY > 4 ? setIsScrollingDarkBtn(true) : setIsScrollingDarkBtn(false)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return{
        isScrolling,
        isScrollingDarkBtn
    }

}



