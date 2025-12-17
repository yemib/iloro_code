export default function Footer() {

    
    return (
        <>


            <footer className="footer">
              
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 mb-45">
                        
                                    <h4>CENTERNUT<span>.</span></h4>
                                    <p>We bring your solution to your doorstep.</p>
                                    <div className="social">
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a> </div>
                            </div>
                            <div className="col-md-3 mb-45">
                                <h5>Quick Links</h5>
                                <ul className="list list-unstyled">
                                    <li><a href="{{ route('home')}}">Home</a></li>
                                    <li><a href="{{  route('gig-list')}}">Services</a></li>
                                    <li><a href="{{ route('contact-us')}}">Contact Us</a></li>
                                    <li><a href="about.html">About Us</a></li>

                                </ul>
                            </div>
                            <div className="col-md-3 mb-45">
                                <h5>Contact Info</h5>
                            
                                <div className="phone"><a href="tel:+2348001234567">800 123 4567</a></div>
                                <div className="mail"><a href="mailto:hello@yourmail.com">support@yourmail.com</a></div>
                            </div>
                            <div className="col-md-3 mb-45">
                                <h5>Subscribe</h5>
                                <p>Subscribe to our newsletter. </p>
                                <div className="subscribe">
                                    <form>
                                        <input type="text" name="search" placeholder="Your email" required  />
                                            <button><i className="fa-solid fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="horizontal-link">
                                    <ul className="rest">
                                        <li className="mr-30"> 
                                            <a href="">Privacy policy</a>
                                        </li>
                                        <li className="mr-30"> <a href="">Legal notice</a> </li>
                                        <li> <a href="">Terms of service</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="copyrights full-width d-flex justify-content-end">
                                    <p>© {new Date().getFullYear()} All Rights Reserved, by 
                                        <span className="underline"><a href="/" target="_blank">CENTERNUT</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );

}