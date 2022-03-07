import cls from './Warner.module.scss'
import { AiOutlineWarning } from 'react-icons/ai'

const Warner = ({state , value}) => {
    return (
        <section 
            style={{
                display: state ? 'flex' : 'none'
            }}
            className={cls.warner}
        >
            <AiOutlineWarning/>
            {/* Incorrect email or password! Try later. */}
            {value}
        </section>
    )
}

export default Warner