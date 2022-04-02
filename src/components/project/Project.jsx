
import './project.css'

const Project = ({img,gitLink,siteLink,title}) => {
    return (
        <div className="project">
            <div className="card">
            <figure className="front">
                <img src={img} alt={title} className="projectImg" />
                <div className="projectLinks">
                    <div className="cardTitle">
                        Title: {title}
                    </div>
                    <a href={gitLink} target="_blank" rel="noreferrer" className='projectLink'>
                            <div className="githubBlock">
                                <a href={gitLink} target="_blank" rel="noreferrer" className='projectLink'>
                                    View GitHub
                                    </a>
                            </div>
                        </a>
                        <a href={siteLink} target="_blank" rel="noreferrer" className='siteLink'>
                            <div className="siteBlock">
                                <a href={siteLink} target="_blank" rel="noreferrer" className='siteLink'>
                                    View Site
                                    </a>
                            </div>
                        </a>
                    </div>
            </figure>
            </div>
        </div>
    )
};

export default Project