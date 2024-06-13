import Button from "components/Button/Button";
import { CounterComponent, CounterResult } from './styles'

//8. Импортируем хуки для диспатча и селекторов
import { useAppDispatch, useAppSelector } from 'store/hooks'
//9. Импортируем экшены и селекторы, которые мы экспортировали в слайсе
import { counterSliceActions, counterSliceSelectors } from 'store/redux/counter/counterSlice'

function Counter() {
    //10. Забираем значение count из стора
    const count = useAppSelector(counterSliceSelectors.count)
    //11. Сохранить функцию dispatch, которую возвращает вызов хука useDispatch
    const dispatch = useAppDispatch();

    const onPlus = () => {
        // 12. Диспатчим экшен plus, который вызовет reducer - plus
        dispatch(counterSliceActions.plus())
    }

    const onMinus = () => {
        // 13. Диспатчим экшен minus, который вызовет reducer - minus
        dispatch(counterSliceActions.minus())
    }

    return (
        <CounterComponent>
            <Button name="-" onClick={onMinus} />
            <CounterResult>{count}</CounterResult>
            <Button name="+" onClick={onPlus} />
        </CounterComponent>
    );
}

export default Counter;