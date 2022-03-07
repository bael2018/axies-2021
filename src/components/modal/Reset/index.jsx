import cls from './Reset.module.scss'
import { useState } from 'react'
import Empty from '../../Empty'
import SignHeader from '../SignHeader'
import { Link } from 'react-router-dom'

const Reset = () => {
    const [email , setEmail] = useState('')
    const [empty , setEmpty] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if(email !== ''){
            setEmail('')
            setEmpty(false)
        }else{
            setEmpty(true)
        }
    }

    return (
        <section className={cls.login}>
            <SignHeader/>
            <div className={cls.login_wrapper}>
                <div className={cls.login_title}>
                    <h3 className={cls.login_wrapper_header}>Reset Your Password</h3>
                    <p className={cls.login_sign}>Already a member? <Link to='/login'>Sign in</Link></p>
                </div>

                <div className={cls.login_wrapper_body}>
                    <form action="address">
                        <label>
                            Enter the account email
                            <input 
                                style={{
                                    border: empty ? '1px solid rgba(225, 29, 72, 1)' : '1px solid #8692A6'
                                }}
                                placeholder='Enter email address' 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Empty state={empty} value='Please enter your email address'/>
                        </label>
                    </form>
                </div>
                <div className={cls.login_wrapper_content}>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                    >
                        <Link to='/link'>
                            SEND SECRET LINK
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Reset