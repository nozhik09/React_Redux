export interface CounterProps {
    count: number,
    onMinus: () => void,
    onPlus: () => void,
    disabledMinus?: boolean,
    disabledPlus?: boolean
}