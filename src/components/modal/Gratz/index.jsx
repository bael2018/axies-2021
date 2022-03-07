import { Link } from 'react-router-dom'
import SignHeader from '../SignHeader'
import cls from './Gratz.module.scss'

const Gratz = () => {

    return (
        <section className={cls.login}>
            <SignHeader/>
            <div className={cls.login_wrapper}>
                <div className={cls.login_title}>
                    <h3 className={cls.login_wrapper_header}>Reset Your Password</h3>
                </div>
                <div className={cls.login_wrapper_content}>
                    <img src="/img/check.png" alt="check" />
                    <h3>Congratulations!</h3>
                    <p>Your password has been changed.</p>
                    <Link to='/login'>
                        <span>
                            LOG IN
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Gratz