export default function Contact() {
    return (
        <div className="container">
            <h1 className="display-4 text-center">Contact</h1>
            <form className="row needs-validation">
                <div className="form-group col-md-6">
                    <label for="nameInput">Name</label>
                    <input type="text" className="form-control" placeholder="Your name here" id="nameInput" required></input>
                </div>
                <div className="form-group col-md-6">
                    <label for="emailInput">Email Address</label>
                    <input type="email" className="form-control" placeholder="email@example.com"></input>
                </div>
                <div className="form-group col-md-12">
                    <label for="textInput">Message</label>
                    <textarea className="form-control" id="textInput" required></textarea>
                </div>
                <div className="col-12 py-3">
                    <button className="btn btn-outline-dark" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}