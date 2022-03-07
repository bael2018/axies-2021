import cls from './App.module.scss'
import ResetForm from './components/modal/ResetForm'
import Create from './components/modal/Create'
import Reset from './components/modal/Reset'
import Login from './components/modal/Login'
import Gratz from './components/modal/Gratz'
import { Redirect, Route, Switch } from 'react-router'
import Content from './pages/Content'
import Linked from './components/modal/Link'

const App = () => {
    return (
        <section className={cls.root}>
            <Switch>    
                <Route path='/' exact component={Content}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/create' component={Create}/>
                <Route exact path='/link' component={Linked}/>
                <Route exact path='/reset' component={Reset}/> 
                <Route exact path='/resetForm' component={ResetForm}/> 
                <Route exact path='/gratz' component={Gratz}/> 
                <Redirect to='/'/>
            </Switch>
        </section>  
    )
}

export default App