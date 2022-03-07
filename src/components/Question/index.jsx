import cls from './Question.module.scss'
import { useState } from 'react'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const inittialState = [
    {
        id: 1,
        isClicked: false,
        title: 'How it works?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi culpa maiores asperiores possimus, culpa maiores asperiores possimus, optio recusandae maxime cumque quidem aperiam doloribus harum dolor. Sapiente molestias, officia in dolorum deserunt nisi?'
    },
    {
        id: 2,
        isClicked: false,
        title: 'How it works?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi culpa maiores asperiores possimus, culpa maiores asperiores possimus, optio recusandae maxime cumque quidem aperiam doloribus harum dolor. Sapiente molestias, officia in dolorum deserunt nisi?'
    },
    {
        id: 3,
        isClicked: false,
        title: 'How it works?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi culpa maiores asperiores possimus, culpa maiores asperiores possimus, optio recusandae maxime cumque quidem aperiam doloribus harum dolor. Sapiente molestias, officia in dolorum deserunt nisi?'
    },
    {
        id: 4,
        isClicked: false,
        title: 'How it works?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi culpa maiores asperiores possimus, culpa maiores asperiores possimus, optio recusandae maxime cumque quidem aperiam doloribus harum dolor. Sapiente molestias, officia in dolorum deserunt nisi?'
    },
    {
        id: 5,
        isClicked: false,
        title: 'How it works?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi culpa maiores asperiores possimus, culpa maiores asperiores possimus, optio recusandae maxime cumque quidem aperiam doloribus harum dolor. Sapiente molestias, officia in dolorum deserunt nisi?'
    },
    {
        id: 6,
        isClicked: false,
        title: 'How it works?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi culpa maiores asperiores possimus, culpa maiores asperiores possimus, optio recusandae maxime cumque quidem aperiam doloribus harum dolor. Sapiente molestias, officia in dolorum deserunt nisi?'
    }
]

const Question = () => {
    const [base , setBase] = useState(inittialState)

    const handleQuest = e => {
        const filteredArray = base.map(item => {
            if(item.id === e){
                return {
                    ...item,
                    isClicked: !item.isClicked
                }
            }else{
                return item
            }
        })

        setBase(filteredArray)
    }

    return (
        <section id='faq' className={cls.quest}>
            <div className={cls.quest_title}>
                <h3>We have the answers. All you have to do is ask the right questions!</h3>
            </div>
            <div className={cls.quest_body}>
                {
                    base.map(({title , content , isClicked , id}) => {
                        return <div key={id} 
                            style={{
                                marginBottom: isClicked ? '0' : '20px'
                            }}
                            className={cls.quest_body_child}
                            >
                            <div onClick={() => handleQuest(id)}
                                style={{
                                    background: isClicked ? '#160D3A' : '#F4F4F4'
                                }}
                                className={cls.quest_body_child_title}
                            >
                                <span 
                                    style={{
                                        background: isClicked ? 'white' : '#888888',
                                        color: isClicked ? '#160D3A' : 'black'
                                    }}
                                >
                                <h5 
                                 style={{
                                    color: isClicked ? 'black' : 'white'
                                }}>
                                    {
                                        isClicked ? <AiOutlineMinus/> : <AiOutlinePlus/>
                                    }
                                </h5>
                                </span>
                                <p style={{
                                    color: isClicked ? 'white' : 'black'
                                }}>
                                    {title}
                                </p>
                            </div>
                            <div   
                                className={
                                    isClicked ? `${cls.quest_body_child_body} ${cls.quest_body_child_body_active}` 
                                    : cls.quest_body_child_body
                                }
                            >
                                <p>
                                   {content}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Question