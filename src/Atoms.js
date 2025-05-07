import { atom } from "recoil"

export const colorAtom = atom({
    key: "colorAtom",
    default: "black"
})

export const switchAtom = atom({
    key: "switchAtom",
    default: false, 
})