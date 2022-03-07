import { Link } from 'react-router-dom'
import cls from './Available.module.scss'

const Available = () => {
    return (
        <section className={cls.avail}>
            <div className={cls.avail_container}>
                <div className={cls.avail_container_child}>
                    <div className={cls.avail_container_child_wrapper}>
                        <img src="/img/five.png" alt="five" />
                        %
                    </div>
                    <div className={
                        `${cls.avail_container_child_wrapper} ${cls.avail_container_child_wrapper_alt}`
                    }>
                        <h4>Platform free</h4>
                        <p>Automatically deducted from your earnings.No minimum payout.</p>
                    </div>
                </div>

                <div className={`${cls.avail_container_child} ${cls.avail_container_child_alt}`}>
                    <div className={cls.avail_container_child_inner}>
                        <img src="/img/42.png" alt="42" />
                        <div>
                            <h3>Available axies</h3>
                            <span>
                                <img src="/img/white.png" alt="white" />
                                <p>+</p>
                            </span>
                            <span>
                                <img src="/img/green.png" alt="green" />
                                <p>+</p>
                            </span>
                        </div>
                    </div> 

                    <div className={cls.avail_container_child_footer}>
                        <Link to='/create'>
                            <span>
                                PICK AXIES AND START PLAYING
                            </span>
                        </Link>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Available