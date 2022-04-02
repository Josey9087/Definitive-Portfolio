import './resume.css';
import ResumePDF from '/Users/joseyanez/Definitive-Portfolio/src/Resume/JoseYanezResume.pdf'
const Resume = () => {
    return(
        <div className="resume">
            <div className="resumeTitle">
                <div className="resumeSubTitle">
                    <h1 className="resumeName">
                        Jose Yanez
                    </h1>
                    <span className="resumeCatch">
                        SOFTWARE ENGINEER, Full-Stack Web Devloper
                    </span>
                </div>
            </div>
            <div className="resumeContainer">
                <div className="resumeSubContain">
                <div className="resume-left">
                <div className="resumeEd">
                    <h2 className="educationTitle">
                        EDUCATION
                    </h2>
                    <div className="educationHeader">
                        <span className="edName">Denver University </span>
                        <span className="edTime">2021 - 2022</span>
                    </div>
                    <div className="edDegree">
                        Full Stack Developer Certificate
                    </div>
                    <div className="educationHeader">
                        <span className="edName">Community College of Aurora</span>
                        <span className="edTime">2018 - 2018</span>
                    </div>
                    <div className="edDegree">
                        EMT Certficicate
                    </div>
                    <div className="educationHeader">
                        <span className="edName">Aurora Central High School</span>
                        <span className="edTime">2013 - 2017</span>
                    </div>
                    <div className="edDegree">
                        High School Diploma
                    </div>
                </div>

            </div>
            <div className="resume-right">
                <div className="resumeStack">
                    <h3 className="stackTitle"> 
                    STACK
                    </h3>
                    <span className="stackTopic">Languages: </span> 
                    <span className="stackContent">HTML, CSS, JavaScript, SQL (MySQL), Node.js, NoSQL (MongoDB), GraphQL, TypeScript</span>
                    <span className="stackTopic">Libraries: </span> 
                    <span className="stackContent">Bootstrap, Bulma, jQuery, Materialize, Mongoose, NextJS, Node, Express, Handlebars, ReactJS, Sequelize</span>
                    <span className="stackTopic">Applications: </span> 
                    <span className="stackContent">GitHub, GitLab, Heroku, Atlas, Npm, Eslint, Yarn, Compass, Insomnia, Postman, MySQL Workbench</span>
                </div>
                <div className="resumeSoftie">
                    <h3 className="softieTitle"> 
                    SOFT SKILLS
                    </h3>
                    
                </div>
                <div className="resumeContact">
                    <span className='ResumeDownload'><a href={ResumePDF} download rel="noreferrer">Download Resume</a></span>
                    
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Resume;