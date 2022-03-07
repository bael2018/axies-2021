import cls from './Create.module.scss'
import { useState } from 'react'
import Empty from '../../Empty'
import SignHeader from '../SignHeader'
import { Link } from 'react-router-dom'

const Create = () => {
    const [password , setPassword] = useState('')
    const [pasVal , setPasVal] = useState(false)
    const [email , setEmail] = useState('')
    const [emailVal , setEmailVal] = useState(false)
    const [repeat , setRepeat] = useState('')
    const [repVal , setRepVal] = useState(false)
    const [showF , setShowF] = useState(false)
    const [showS , setShowS] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if(email !== '' && password !== '' && repeat !== ''){
            setEmail('')
            setRepeat('')
            setPassword('')
            setPasVal(false)
            setEmailVal(false)
            setRepVal(false)
        }else{
            setPasVal(true)
            setEmailVal(true)
            setRepVal(true)
        }
    }

    return (
        <section className={cls.login}>
            <SignHeader/>
            <div className={cls.login_wrapper}>
                <div className={cls.login_title}>
                    <h3 className={cls.login_wrapper_header}>Create account</h3>
                    <p>Already a member? <Link to='/login'>Sign in</Link></p>
                </div>

                <div className={cls.login_wrapper_body}>
                    <form action="address">
                        <label>
                            Email address*
                            <input 
                                style={{
                                    border: emailVal ? '1px solid rgba(225, 29, 72, 1)' : null
                                }}
                                placeholder='Enter email address' 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Empty state={emailVal} value='Please enter your email address'/>
                        </label>
                        <label>
                            <img 
                                style={{
                                    bottom: repVal ? '37px' : '21px'
                                }}
                                onClick={() => setShowF(!showF)} 
                                src={
                                    showF ? '/img/eye.png' : '/img/smile.png'
                                } alt="smile" 
                            />
                            Create password*
                            <input 
                                style={{
                                    border: repVal ? '1px solid rgba(225, 29, 72, 1)' : null
                                }}
                                placeholder='Password' 
                                type={showF ? 'text' : 'password'} 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Empty state={repVal} value='Please enter your email password'/>
                        </label>
                        <label>
                            <img   
                                style={{
                                    bottom: pasVal ? '37px' : '21px'
                                }}
                                onClick={() => setShowS(!showS)} 
                                src={
                                    showS ? '/img/eye.png' : '/img/smile.png'
                                } alt="smile" 
                            />
                            Repeat password*
                            <input
                                style={{
                                    border: pasVal ? '1px solid rgba(225, 29, 72, 1)' : null
                                }} 
                                placeholder='Repeat password' 
                                type={showS ? 'text' : 'password'} 
                                value={repeat}
                                onChange={e => setRepeat(e.target.value)}
                            />
                            <Empty state={pasVal} value='Please repeat your email address'/>
                        </label>
                    </form>
                </div>
                <div className={cls.login_wrapper_content}>
                    <label>
                        <input type="checkbox" />
                        I agree to <a href="terms">terms & conditions</a>
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
            </div>
        </section>
    )
}

export default Create