import SignHeader from '../SignHeader'
import cls from './Link.module.scss'
import { Link } from 'react-router-dom'

const Linked = () => {

    return (
        <section className={cls.login}>
            <SignHeader/>
            <div className={cls.login_wrapper}>
                <div className={cls.login_title}>
                    <h3 className={cls.login_wrapper_header}>Reset Your Password</h3>
                </div>
                <div className={cls.login_wrapper_content}>
                    <img src="/img/Mail.png" alt="mail" />
                    <h3>On your email address was sent a recovering link.</h3>
                    <p> Please check the spam folder if you don't see the email.</p>
                    <Link to='/resetForm' >
                        <span>
                            LOG IN
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Linked