import cls from './ArmyHeader.module.scss'
import { AiOutlineCheck } from 'react-icons/ai' 
import { Link } from 'react-router-dom'

const ArmyHeader = () => {
    return (
        <section className={cls.army_el}>
            <div className={cls.army_cover}>
                <img src="/img/grad.svg" alt="grad" />
            </div>
            <div className={cls.army}>
                <div className={cls.army_container}>
                    <div className={cls.army_container_wrapper}>
                        <div className={
                            `${cls.army_container_wrapper_header}`
                        }>
                            <span>
                                <AiOutlineCheck/>
                            </span>
                            Axies available: 68
                        </div>
                        <div className={cls.army_container_wrapper_body}>
                            <h2>Start earning with Axie Infinity now</h2>
                            <p>To start, sign up, pick axies and then you can start playing immediately.</p>
                        </div>
                        <div className={cls.army_container_wrapper_footer}>
                            <Link to='/create'
                                className={cls.army_container_wrapper_footer_first}
                            >
                                <span>
                                    SIGN UP
                                </span>
                            </Link>

                            <a href='#how' className={cls.army_container_wrapper_footer_second}>
                                <span>
                                    HOW IT WORKS
                                </span>
                            </a>
                        </div>  
                    </div>
                    <img className={cls.army_banner} src="/img/sphere.png" alt="sphere" />
                </div>
            </div>
        </section>
    )
}

export default ArmyHeader