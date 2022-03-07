import { Link } from 'react-router-dom'
import cls from './About.module.scss'

const About = ({create}) => {
    return (
        <section id="about" className={cls.about}>
            <div className={cls.about_wrapper_left}>
                <div className={cls.about_wrapper_child}>
                    <div className={cls.about_wrapper_child_icon}>
                        <img src="/img/blue.png" alt="blue" />
                        <img className={cls.about_wrapper_child_icon_image} src="/img/close.png" alt="close" />
                    </div>

                    <div className={cls.about_wrapper_child_content}>
                        <h3>GUILD-AS-A-SERVICE</h3>
                        <p>Automatic payouts, fair distribution.</p>
                    </div>
                </div>
                <div className={
                    `${cls.about_wrapper_child} ${cls.about_wrapper_child_alt}`
                    }>
                    <div className={cls.about_wrapper_child_icon}>
                        <img src="/img/red.png" alt="red" />
                        <img className={
                            `${
                                cls.about_wrapper_child_icon_image} ${cls.about_wrapper_child_icon_image_alt}`
                            } src="/img/stormy.png" alt="stormy" />
                    </div>

                    <div className={cls.about_wrapper_child_content}>
                        <h3 style={{marginBottom: '15px'}}>Ready in 5 minutes</h3>
                        
                        <div>
                            <span>
                                1
                            </span>
                            <Link to='/create' className={cls.active}>Create an account</Link>
                        </div>
                        <div>
                            <span>
                                2
                            </span>
                            <p>Choose game</p>
                        </div>
                        <div>
                            <span>
                                3
                            </span>
                            <p>Take assets</p>
                        </div>
                        <div>
                            <span>
                                4
                            </span>
                            <p>Play and earn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.about_wrapper_right}>
                <div className={cls.about_wrapper_child}>
                    <div className={cls.about_wrapper_child_icon}>
                        <img src="/img/orange.png" alt="orange" />
                        <img className={cls.about_wrapper_child_icon_image} src="/img/vase.png" alt="vase" />
                        <span>$</span>
                    </div>

                    <div className={cls.about_wrapper_child_content}>
                        <h3>FREE</h3>
                        <p>Free to use , platform fee will be deducted from your paychecks.</p>
                    </div>
                </div>

                <div className={cls.about_wrapper_child}>
                    <div className={cls.about_wrapper_child_header}>
                        <p>SUPPORTED GAMES</p>
                        <img src="/img/axie.png" alt="axie" />
                    </div>

                    <div className={cls.about_wrapper_child_footer}>
                        <h3>Axie Infinity</h3>

                        <Link to='/create' >
                            <span>
                                PLAY FREE NOW
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About