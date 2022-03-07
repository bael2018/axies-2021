import { Link } from 'react-router-dom'
import cls from './Footer.module.scss'

const Footer = () => {
    return (
        <section className={cls.footer}>
            <div className={cls.footer_logo}>
                <img src="/img/footerLogo.png" alt="footerLogo" />
            </div>

            <div className={cls.footer_body}>
                <div className={cls.footer_body_link}>
                    <a href='#about'>About</a>
                    <a href='#how'>How to</a>
                    <a href='#faq'>FAQ</a>
                </div>
                <div className={cls.footer_body_button}>
                    <Link to='/create' className={cls.first_button}>
                        <span>
                            CREATE AN ACCOUNT
                        </span>
                    </Link>

                    <Link to='/login' className={cls.second_button}>
                        <span>
                            LOG IN
                        </span>
                    </Link>
                </div>
            </div>

            <div className={cls.footer_lower}>
                <div className={cls.footer_lower_inner}>
                    <a href="pricary">
                        Privacy Policy
                    </a>
                    <a className={cls.footer_lower_active} href="pricary">
                        Terms and Conditions
                    </a>
                </div>  
                <div className={cls.footer_lower_title}>
                    <h3>
                        © 2021, 1Mln.Army
                    </h3>
                </div>  
            </div>
        </section>
    )
}

export default Footer