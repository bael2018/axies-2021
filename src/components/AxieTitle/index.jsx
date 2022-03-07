import { Link } from 'react-router-dom'
import cls from './AxieTitle.module.scss'

const AxieTitle = () => {
    
    return (
        <section className={cls.axie}>
            <div className={cls.axie_header}>
                <h3>You <span>don't need <span className={cls.active}>a manager</span></span> and initial capital to play and earn anymore!</h3>
                <p>
                    Our platform gives you an access to various blockchain games, for free. You don't have to buy any assets or 
                    trust guild managers anymore. You can pick assets from our inventory and use them to play. The platfrom will 
                    ake its cut from your earnings.
                </p>
                <Link to='/create'>
                    <span>
                        SIGN UP AND START EARNING
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default AxieTitle