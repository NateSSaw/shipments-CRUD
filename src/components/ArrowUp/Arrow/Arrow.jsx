import ArrowDown from "components/ArrowDown/ArrowDown"
import ArrowUp from "../ArrowUp"

export default function Arrow({ directionSort }){
    return (directionSort? <ArrowUp/> : <ArrowDown/>)
    
}