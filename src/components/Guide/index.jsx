import cls from './Guide.module.scss'
import { AiOutlineRight } from 'react-icons/ai'

const Guide = () => {
    return (
        <section id='how' className={cls.guide}>
            <div className={cls.guide_header}>
                <h3>Step by step guide</h3>
                <p>Get started with 4 easy steps</p>
            </div>
            <div className={cls.guide_body}>
                <div className={cls.guide_body_child}>
                    <div className={cls.guide_body_child_content}>
                        <img src="/img/plus.png" alt="plus" />
                        <h3>1.SIGN UP</h3>
                        <p>Register with email and password for 1 minute</p>
                    </div>
                    <div className={cls.guide_body_child_change}>
                        <span>
                            <AiOutlineRight/>
                        </span>
                    </div>
                </div>  

                <div className={cls.guide_body_child}>
                    <div className={cls.guide_body_child_content}>
                        <img src="/img/check.png" alt="check" />
                        <h3>2.SET UP YOUR ACCOUNT</h3>
                        <p>Confirm email, enter your wallet address and name.</p>
                    </div>
                    <div className={cls.guide_body_child_change}>
                        <span>
                            <AiOutlineRight/>
                        </span>
                    </div>
                </div>  

                 <div className={
                            `${cls.guide_body_child} ${cls.guide_body_child_alt2}`
                        }>
                    <div className={cls.guide_body_child_content}>
                        <img src="/img/take.png" alt="take" />
                        <h3>3.TAKE AXIES</h3>
                        <p>Choose 3 axies according to your game strategy and transfer them to your account.</p>
                        <p>That’s all — you can start playing immediately afterwards.</p>
                    </div>
                    <div className={cls.guide_body_child_change}>
                        <span>
                            <AiOutlineRight/>
                        </span>
                    </div>
                </div>  
                <div className={
                            `${cls.guide_body_child} ${cls.guide_body_child_alt}`
                        }>
                    <div className={cls.guide_body_child_content}>
                        <img src="/img/earn.png" alt="earn" />
                        <h3>4.EARN SLP</h3>
                        <p>Every 14 days SLP is claimed automatically and sent to your address. You don’t need to worry about anything, it all happens automatically.</p>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Guide