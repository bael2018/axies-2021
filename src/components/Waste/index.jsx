import { Link } from 'react-router-dom'
import cls from './Waste.module.scss'

const Waste = () => {
    return (
        <section className={cls.waste}>
            <img className={cls.waste_cover_right} src="/img/rightCover.png" alt="cover" />
            <img className={cls.waste_cover} src="/img/cover.png" alt="cover" />
            <img className={cls.waste_line_one} src="/img/lineCover.png" alt="lineCover" />
            <img className={cls.waste_line_stick_one} src="/img/line.png" alt="line" />
            <img className={cls.waste_line_second} src="/img/lineCover2.png" alt="line2" />
            <img className={cls.waste_line_stick_second} src="/img/line2.png" alt="line2" />
            <img className={cls.waste_line_third} src="/img/lineCover3.png" alt="line3" />
            <img className={cls.waste_line_stick_third} src="/img/line3.png" alt="line3" />
            <img className={cls.waste_line_fourth} src="/img/lineCover4.png" alt="line4" />
            <img className={cls.waste_line_stick_fourth} src="/img/line4.png" alt="line4" />
            <img className={cls.waste_line_fifth} src="/img/lineCover5.png" alt="line5" />
            <img className={cls.waste_line_stick_fifth} src="/img/Line5.png" alt="line5" />
            <img className={cls.waste_line_sixth} src="/img/lineCover6.png" alt="line6" />
            <img className={cls.waste_line_stick_sixth} src="/img/line6.png" alt="line6" />
            <img className={cls.waste_light} src="/img/light.png" alt="light" />
            <img className={cls.waste_soft} src="/img/soft.png" alt="soft" />
            <img className={cls.waste_storm} src="/img/storm1.png" alt="storm" />
            <img className={cls.waste_storm} src="/img/storm2.png" alt="storm" />
            <img className={cls.waste_storm} src="/img/storm3.png" alt="storm" />
            <img className={cls.waste_storm} src="/img/storm4.png" alt="storm" />

            <div className={cls.waste_receive}>
                <span>
                    <img className={cls.waste_receive_inner} src="/img/cup.png" alt="cup" />
                    <img className={cls.waste_receive_wrapper} src="/img/cupCover.png" alt="cupCover" />
                    <img className={cls.waste_receive_inside} src="/img/cupping.png" alt="cupping" />
                    <img className={cls.waste_receive_close} src="/img/closing.png" alt="closing" />
                </span>
                <h4>
                    Received
                    <p>+20 SLP</p>
                </h4>
            </div>

            <div className={cls.waste_receive_alt}>
                <span>
                    <img className={cls.waste_receive_inner} src="/img/cup.png" alt="cup" />
                    <img className={cls.waste_receive_wrapper} src="/img/cupCover.png" alt="cupCover" />
                    <img className={cls.waste_receive_inside} src="/img/cupping.png" alt="cupping" />
                    <img className={cls.waste_receive_close} src="/img/closing.png" alt="closing" />
                </span>
                <h4>
                    Received
                    <p>+15 SLP</p>
                </h4>
            </div>

            <div className={cls.waste_child}>
                <img src="/img/green.png" alt="green" />

                <span>
                    +
                </span>
            </div>

            <div className={cls.waste_child_alt}>
                <img src="/img/white.png" alt="white" />

                <span>
                    +
                </span>
            </div>

            <div className={cls.waste_container}>

                <h3>Don’t waste time, sign up now and start earning money with Axie Infinity!</h3>
                <Link to='/create'>   
                    <span>
                        <p className={cls.waste_container_first}>CREATE AN ACCOUNT</p>
                        <p className={cls.waste_container_second}>PICK AXIES AND START PLAYING</p>
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default Waste