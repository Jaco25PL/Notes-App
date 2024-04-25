import type { Date } from "../types"

export const useUpdateDate = () => {
        const newDate = new Date()
        const Y = parseInt(String(newDate.getFullYear()).slice(-2))
        const D = newDate.getDate()
        const M = newDate.getMonth() + 1
        const date: Date = {M, D, Y}
    
        return date
}