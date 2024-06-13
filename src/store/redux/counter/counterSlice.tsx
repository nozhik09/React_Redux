//1. Импортируем функцию, с помощью которой создадим Slice
import { createAppSlice } from "store/createAppSlice";
import { CounterStateSlice } from "./types";

//4.1 Создаем объект с первоначальным состоянием, который потом передаем в initialState
const counterInitialState: CounterStateSlice = {
    count: 5
}

//2. Создаем слайс для каунтера
export const counterSlice = createAppSlice({
    //3. Задаем имя под которым будет храниться объект со значением кайнтера в к глобальном стейте
    name: 'COUNTER',
    //4. Задаем объект, в котором храниться начальное состояние
    initialState: counterInitialState,
    //5. Создаём объект, внутри которого будут храниться все редьюсеры
    reducers: create => ({
        plus: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),
        minus: create.reducer((state: CounterStateSlice) => { state.count = state.count - 1 })
    }),
    //6. Создаем селекторы, которые позволяют забрать данные их хранилища в компонент
    selectors: {
        count: (state: CounterStateSlice) => state.count
    }
})

//7. Экспорт экшенов и селекторы для того, чтобы можно было воспользоваться ими в компонентах приложения
export const counterSliceActions = counterSlice.actions;
export const counterSliceSelectors = counterSlice.selectors;