import { Link } from "react-router-dom"
function Footer() {
    return (
        <>





            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className=" mt-5 p-5 border-top">
                    <form action="">
                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form5Example24" className="form-control" placeholder="Email address" />
                                    
                                </div>
                            </div>
                            <div className="col-auto">

                                <button data-mdb-ripple-init type="submit" className="btn btn-outline-success mb-4">
                                    Subscribe
                                </button>
                            </div>

                        </div>

                    </form>
                </section>

                <section className=" p-4 ">
                    <div className="container text-center text-md-start mt-2">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Meshoo
                                </h6>
                                <p>
                                    There are many benefits of shopping online. You can take your time and look at
                                    different options to find exactly what you want. It's easy to compare prices
                                    online and find exactly what you are looking for. And now with Meesho, you can
                                    shop for anything you want at the lowest prices in the market. Even if you want
                                    to shop for cool gifts for your friends and family, there are many options that
                                    you can find on the Internet.
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link to="/dresses" className="text-reset text-decoration-none">Dresses</Link>
                                </p>
                                <p>
                                    <Link to="/saree" className="text-reset text-decoration-none">saree</Link>
                                </p>
                                <p>
                                    <Link to="/tshirts" className="text-reset text-decoration-none">T-Shirt</Link>
                                </p>
                                <p>
                                    <Link to="/tops" className="text-reset text-decoration-none">Tops</Link>
                                </p>
                                <p>
                                    <Link to="/elctronics" className="text-reset text-decoration-none">Electronics</Link>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                {/* <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6> */}
                                <p>
                                    <Link to="https://www.meesho.io/jobs?utm_medium=footer&utm_source=meesho_website&utm_campaign=careerspagepromotion" className="text-reset text-decoration-none">Careers</Link>
                                </p>
                                <p>
                                    <Link to="https://www.meesho.com/legal/hall-of-fame?embed=true" className="text-reset text-decoration-none">Hall of Fame</Link>
                                </p>
                                <p>
                                    <Link to="https://www.meesho.io/blog?utm_medium=footer&utm_source=meesho_website&utm_campaign=blogpagepromotion" className="text-reset text-decoration-none">Meshoo Tech Blog</Link>
                                </p>
                                <p>
                                    <Link to="https://www.meesho.com/sitemap" className="text-reset text-decoration-none">Sitemap</Link>
                                </p>
                                <p>
                                    <Link to="https://www.meesho.com/notices_and_returns?embed=true" className="text-reset text-decoration-none">Notices and Returns</Link>
                                </p>
                            </div>


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h4 className="text-uppercase fw-bold mb-4">Contact Us</h4>

                                <p>Fashnear Technologies Private Limited,
                                    CIN: U74900KA2015PTC082263
                                    3rd Floor, Wing-E, Helios Business Park,Kadubeesanahalli Village,
                                    Varthur Hobli, Outer Ring Road Bellandur, Bangalore
                                    Bangalore South, Karnataka, India, 560103
                                    E-mail address: query@meesho.com
                                    © 2015-2024 Meesho.com</p>
                            </div>

                        </div>

                    </div>
                </section>





            </footer>




        </>
    )
}

export default Footer