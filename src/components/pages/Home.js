import './css/Home.css';

export default function Home({ handlePageChange }) {
    return (
        <div className="jumbotron py-5 min-vh-100">
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center text-light">
                        <h1 className="display-4">Hi, I'm Xander</h1>
                        <p className="lead">Welcome to my portfolio.</p>
                        <button type="button" className="btn btn-outline-light" onClick={() => handlePageChange('About Me')}>About Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}