import cls from './ResetForm.module.scss'
import { useState } from 'react'
import SignHeader from '../SignHeader'
import { Link } from 'react-router-dom'

const ResetForm = () => {
    const [password , setPassword] = useState('')
    const [passwordAlt ,  setPasswordAlt] = useState('')
    const [show , setShow] = useState(false)
    const [showAlt , setShowAlt] = useState(false)

    return (
        <section className={cls.login}>
            <SignHeader/>
            <div className={cls.login_wrapper}>
                <div className={cls.login_title}>
                    <h3 className={cls.login_wrapper_header}>Reset Your Password</h3>
                </div>
                <div className={cls.login_wrapper_body}>
                    <form action="address">
                        <label>
                            <img onClick={() => setShow(!show)} src={
                                show ? '/img/eye.png' : '/img/smile.png'
                            } alt="smile" />
                            Create a new password*
                            <input 
                                placeholder='Enter email address' 
                                type={show ? 'text' : 'password'} 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </label>

                        <label>
                            <img onClick={() => setShowAlt(!showAlt)} src={
                                showAlt ? '/img/eye.png' : '/img/smile.png'
                            } alt="smile" />
                            Repeat password*
                            <input 
                                placeholder='Enter email address' 
                                type={showAlt ? 'text' : 'password'} 
                                value={passwordAlt}
                                onChange={e => setPasswordAlt(e.target.value)}
                            />
                        </label>
                    </form>
                </div>
                <div className={cls.login_wrapper_content}>

                    <Link to='/gratz' >
                        <span>
                            CONFIRM
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default ResetForm