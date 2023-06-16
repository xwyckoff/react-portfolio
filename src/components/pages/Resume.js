import resumeFile from '../../files/Wyckoff, Xander resume1.pdf';

export default function Resume() {
    return (
        <div className="container">
            <h1 className="display-4 text-center">Resume</h1>
            <button className="btn btn-outline-dark" href={resumeFile} download="Xander Wyckoff Resume" target='_blank'>Download my Resume</button>
            <ul className="list-group">
                <figcaption className="display-6">Front-end Proficiencies</figcaption>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap</li>
            </ul>
            <ul className="list-group">
                <figcaption className="display-6">Back-end Proficiencies</figcaption>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express.js</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">Sequelize</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Mongoose</li>
                <li className="list-group-item">Handlebars</li>
            </ul>
        </div>
    )
}