import cls from './Navbar.module.scss'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GrFormCheckmark } from 'react-icons/gr'
import { useState } from 'react'
import { initialState } from '../../helpers'
import { Link } from 'react-router-dom'

const Navbar = ({burger}) => {
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
        <section className={cls.navbar}>
            <div className={cls.navbar_wrapper}>
                <div className={cls.navbar_wrapper_link}>
                    <img src="/img/army.png" alt="logo" />
                    <span className={cls.display}>
                        <a href='#about'>About</a>
                        <a href='#how'>How to</a>
                        <a href='#faq'>FAQ</a>
                    </span>
                </div>

                <div 
                    className={cls.burger}
                    onClick={() => burger(true)}
                >
                    <span></span><span></span><span></span>
                </div>

                <div className={
                    `${cls.navbar_wrapper_inner} ${cls.display}`
                }>
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

                    <Link exact to='/login'>
                        <span>
                            LOG IN
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar