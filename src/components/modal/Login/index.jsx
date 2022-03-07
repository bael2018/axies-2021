import cls from './Login.module.scss'
import { useState } from 'react'
import Warner from '../../Warner'
import SignHeader from '../SignHeader'
import { Link } from 'react-router-dom'

const Login = () => {
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [show , setShow] = useState(false)
    const [warner , setWarner] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if(email !== '' && password !== ''){
            setEmail('')
            setPassword('')
            setWarner(false)
        }else{
            setWarner(true)
        }
    }

    return (
        <section className={cls.login}>
            <SignHeader/>
            <div className={cls.login_wrapper}>
                <div className={cls.login_title}>
                    <h3 className={cls.login_wrapper_header}>Log in</h3>
                    <p className={cls.login_sign}>Not a member? <Link to='/create'>Sign up</Link></p>
                </div>
                <div className={cls.login_wrapper_body}>
                    <form action="address">
                        <label>
                            Email address
                            <input 
                                placeholder='Enter email address' 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <img onClick={() => setShow(!show)} src={
                                show ? '/img/eye.png' : '/img/smile.png'
                            } alt="smile" />
                            Password
                            <input 
                                placeholder='Enter email address' 
                                type={show ? 'text' : 'password'} 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </label>
                    </form>
                </div>
                <Warner value='Incorrect email or password! Try later.' state={warner}/>
                <div className={cls.login_wrapper_content}>
                    <label>
                        <input type="checkbox" />
                        I agree to <a href="terms">terms & conditions</a>
                    </label>
                    <label>
                        <input type="checkbox" />
                        Keep me logged in
                    </label>

                    <button
                        type='submit'
                        onClick={handleSubmit}
                    >
                        <span>
                            CREATE ACCOUNT
                        </span>
                    </button>
                </div>

                <div className={cls.login_wrapper_footer}>
                    <Link to='/reset'>Forgot Password?</Link>
                </div>
            </div>
        </section>
    )
}

export default Login