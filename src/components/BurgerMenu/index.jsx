import cls from './BurgerMenu.module.scss'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react'
import { initialState } from '../../helpers'
import { GrFormCheckmark } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const BurgerMenu = ({ state , close }) => {
    const [activeDrop , setActiveDrop] = useState(false)
    const [base , setBase] = useState(initialState)
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
        <section 
            style={{
                left: state ? '0' : '-100%'
            }}
            className={cls.burger}
        >
            <div className={cls.burger_container}>
                <div className={cls.burger_header}>
                    <img src="/img/army.png" alt="army" />
                    <span onClick={() => close(false)}>
                        <IoCloseOutline/>
                    </span>
                </div>

                <div className={cls.burger_body}>
                    <p>Menu</p>

                    <a 
                        href='#about'
                        onClick={() => close(false)}
                    >
                        About
                    </a>
                    <a 
                        href='#how'
                        onClick={() => close(false)}
                    >
                        How to
                    </a>
                    <a 
                        href='#faq'
                        onClick={() => close(false)}
                    >
                        FAQ
                    </a>
                </div>

                <div className={cls.burger_btns}>
                    <Link to='/create' 
                        className={cls.sign}
                    >
                        <span>
                            SIGN UP
                        </span>
                    </Link>
                    
                    <Link to='/login' 
                        className={cls.log}
                    >
                        <span>
                            LOG IN
                        </span>
                    </Link>
                </div> 

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
        </section>
    )
}

export default BurgerMenu