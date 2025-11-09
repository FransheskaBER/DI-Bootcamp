export default function Contacts(){
    return (
    <div className="container text-center gap-4 p-4 mt-5">
        <div className="row g-4 p-4 pb-5" style={{ backgroundColor: 'lightgray'}}>
            <h1>Contact Us</h1>

            <div className="col-12 col-lg-6 text-start">
                <p>Contact us and we will get back to you within 24 hours.</p>
                <div className="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="mb-0">Company Name</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-phone-volume"></i>
                    <p className="mb-0">+256 778 800 900</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-envelope"></i>
                    <p className="mb-0">company.gmail.com</p>
                </div>
            </div>

            <div className="col-12 col-lg-6 text-start">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Contact</label>
                        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" className="form-control" rows="4" placeholder="Write your comment..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style={{ backgroundColor: "orangered", borderColor: "orangered" }}>Send</button>
                </form>
            </div>
        </div>
    </div>
    );

}