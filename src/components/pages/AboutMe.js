import portrait from '../../images/00023-1911885204-portrait of x___.png';
import '../pages/css/AboutMe.css'

export default function AboutMe() {
    return (
        <div className="container-fluid p-3 text-center">
            <h1 className="display-4">About Me</h1>
            <img src={portrait} className="portrait rounded-circle float-left" alt="portrait"></img>
            <hr></hr>
            <p className="lead">My name is Xander and I'm an aspiring full stack software developer looking to persue a career in developing applications.</p>
        </div>
    )
}