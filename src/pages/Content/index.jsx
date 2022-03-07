import { useState } from 'react'
import About from '../../components/About'
import ArmyHeader from '../../components/ArmyHeader'
import Available from '../../components/Available'
import AxieTitle from '../../components/AxieTitle'
import Footer from '../../components/Footer'
import Guide from '../../components/Guide'
import Navbar from '../../components/Navbar'
import Question from '../../components/Question'
import Waste from '../../components/Waste'
import BurgerMenu from '../../components/BurgerMenu'

const Content = () => {
    const [burger , setBurger] = useState(false)

    return (
        <>
            <BurgerMenu state={burger} close={setBurger}/>
            <Navbar burger={setBurger}/>
            <ArmyHeader />
            <About/>
            <AxieTitle />
            <Available />
            <Guide/>
            <Waste />
            <Question/>
            <Footer/>
        </>
    )
}

export default Content