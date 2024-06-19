import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Lesson15 from "./lessons/Lesson15/Lesson15";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import HomeWork15 from "./HomeWorks/HomeWork15";
import Layout2 from "./pages/Layout2/Layout2";
import Lesson17 from "./lessons/Lesson17/Lesson17";


const App = () => {
    return (
        <BrowserRouter>
            {/*/!*<Lesson15/>*!/*/}
            {/*<Layout2>*/}
            {/*    <Routes>*/}
            {/*        <Route path='/' element={<Home/>}/>*/}
            {/*        <Route path='/users' element={<Users/>}/>*/}
            {/*        <Route path='*' element={'Page not found'}/>*/}
            {/*    </Routes>*/}


            {/*</Layout2>*/}


            {/*<HomeWork15/>*/}
            <Lesson17/>


        </BrowserRouter>
    )
}

export default App
