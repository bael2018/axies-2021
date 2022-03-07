import cls from './Empty.module.scss'

const Empty = ({value , state}) => {
    return (
        <section 
            className={cls.empty}
            style={{
                display: state ? 'block' : 'none'
            }}
        >
            {value}
        </section>
    )
}

export default Empty