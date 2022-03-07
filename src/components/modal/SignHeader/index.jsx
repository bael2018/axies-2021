import { useState } from 'react'
import { GrFormCheckmark } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { initialState } from '../../../helpers'
import cls from './SignHeader.module.scss'

const SignHeader = () => {
    const [base , setBase] = useState(initialState)
    const [activeDrop , setActiveDrop] = useState(false)
    const [flag , setFlag] = useState('/img/united.png')
    const [title , setTitle] = useState('English')

    const handleDrop = (flag , title , id) => {
        setFlag(flag)
        setTitle(title)

        const newBase = base.map((item) => {
            return {
                ...item,
                isChoosen: false
            }
        })

        const filteredArray = newBase.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    isChoosen: !item.isChoosen
                }
            }else{
                return item
            }
        })

        setBase(filteredArray)
    }

    return (
        <div className={cls.login_header}>
            <Link to='/'>
            <img
                className={cls.login_logo}
                src="/img/army.png" 
                alt="logo" 
            />
            </Link>
        <div 
            onClick={() => setActiveDrop(!activeDrop)}
            style={{
                border: activeDrop ? '1px solid #FF7512' : '1px solid #00426947'
            }}
            className={cls.navbar_wrapper_inner_lang}
        >
            <div className={cls.navbar_wrapper_inner_left}>
                <img src={flag} alt='language' />
                {title}
            </div>
            <div className={cls.navbar_wrapper_inner_right}>
                <IoMdArrowDropdown/>
            </div>

            <div 
                style={{
                    opacity: activeDrop ? '1' : '0',
                    pointerEvents: activeDrop ? 'all' : 'none',
                    transform: activeDrop ? 'scale(1)' : 'scale(.9)'
                }}
                className={cls.drop}
            >
                {
                    base.map(({title , flag , isChoosen , id}) => {
                        return <div  
                            className={cls.drop_child} key={id}
                            onClick={() => handleDrop(flag , title , id)}
                        >
                            <span>
                                {
                                    isChoosen ? <GrFormCheckmark/> : null
                                }
                            </span>

                            <div>
                                <img src={flag} alt="dropdown" />
                                {title}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default SignHeader