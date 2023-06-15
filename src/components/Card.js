export default function Card({ cardPic, cardTitle, cardContent, cardLink }) {
    return (
        <div className="card">
            <img className="card-img-top" src={cardPic} alt="Project preview"></img>
            <div className="card-body bg-dark text-light">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardContent}</p>
                <a href={cardLink} className="btn btn-outline-light">Check it out!</a>
            </div>
        </div>
    )
}