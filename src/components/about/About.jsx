import './about.css';
import Jose from "/Users/joseyanez/Definitive-Portfolio/src/Images/male-avatar-profile-picture-vector-10211761 2.jpeg"
const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
            <img src={Jose} alt="Giant Jose" className="megaJose" />
            </div>
            <div className="intro-right">
                <div className="introBox">
                    <div className="introTitle">
                        <div className="introName">Jose Yanez</div>
                        <div className="intro-title">
                            <div className="intro-title-wrapper">
                                <div className="intro-title-item">&lt;Full Stack Developer&gt; 💻</div>
                                <div className="intro-title-item">Software Engineer 🧠</div>
                            </div>
                        </div>
                        <div className="introAbout">
                            A Full Stack Web Devloper currently pursuing his dreams of being a software developer.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Intro