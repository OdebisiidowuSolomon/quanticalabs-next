import { custom_email } from "../Header"

function Footer() {
    return (
        <>
            <div className="row dark footer-row full-width padding-top-100">
                <div className="row row-4-4">
                    <div className="column column-1-4">
                        <ul className="features-list">
                            <li className="dark">
                                <div className="icon template-phone"></div>
                                <div className="item-content">
                                    <p>CALL US</p>
                                    <h5><a href="tel:+48111222333">+48 111 222 333</a></h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="column column-1-4">
                        <ul className="features-list">
                            <li className="dark">
                                <div className="icon template-email2"></div>
                                <div className="item-content">
                                    <p>E-MAIL</p>
                                    <h5><a href="/cdn-cgi/l/email-protection#8ce4e9e0e0e3cceae5e2fce9ede7a2efe3e1"><span
                                        className="__cf_email__"
                                        data-cfemail="91f9f4fdfdfed1f7f8ffe1f4f0fabff2fefc">{custom_email}</span></a>
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="column column-1-4">
                        <ul className="features-list">
                            <li className="dark">
                                <div className="icon template-location2"></div>
                                <div className="item-content">
                                    <p>ADDRESS</p>
                                    {/* <h5>4744 Havanna Street</h5> */}
                                    <h5>4744 Sample Street, London</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="column column-1-4">
                        <ul className="features-list">
                            <li className="dark">
                                <div className="icon template-calc"></div>
                                <div className="item-content">
                                    <p>ONLINE</p>
                                    <h5><a href="/bookkeeping-quoting-calculator">Loan Calculator</a></h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row dark footer-row full-width padding-top-63 padding-bottom-67">
                <div className="row row-4-4">
                    <div className="column column-1-4">
                        <h5>Insur</h5>
                        <p className="margin-top-13">Insur is a company focused on finance. We offer accounting and tax
                            advisory services, strategic consulting and loans. All in one place.</p>
                        <div className="margin-top-30">
                            <a className="more style-3" href="/contact" title="Find us on map">Find us on map</a>
                        </div>
                    </div>
                    <div className="column column-1-4">
                        <h5>Greensboro</h5>
                        <p className="margin-top-13">4744 Sample Street<br />Greensboro, NC 2744400<br /><a
                            href="mailto:sample@gmail.com"><span
                                className="__cf_email__"
                            >{custom_email}</span></a>
                        </p>
                        <h5 className="margin-top-22">Boynton Beach</h5>
                        <p className="margin-top-13">1020 Travis Street<br />Boynton Beach, FL 33436<br /><a
                            href="mailto:sample@gmail.com"><span
                                className="__cf_email__"
                            >{custom_email}</span></a>
                        </p>
                    </div>
                    <div className="column column-1-4">
                        <h5>Resources</h5>
                        <ul className="list simple margin-top-22">
                            <li className="template-right3"><a href="/service-post"
                                title="Accounting Office">Accounting Office</a></li>
                            <li className="template-right3"><a href="/service-post"
                                title="Consulting Office">Consulting Office</a></li>
                            <li className="template-right3"><a href="/service-post"
                                title="Loans and Leasing">Loans and Leasing</a></li>
                            <li className="template-right3"><a href="/about" title="About Us">About Us</a></li>
                            <li className="template-right3"><a href="/services" title="Our Services">Our Services</a></li>
                            <li className="template-right3"><a href="/team" title="Our Team">Our Team</a></li>
                        </ul>
                    </div>
                    <div className="column column-1-4">
                        <h5>Latest posts</h5>
                        <ul className="latest-post margin-top-29">
                            <li>
                                <a href="/blog-post" title="5 reasons why your business needs an expense policy">5 reasons
                                    why your business needs an expense policy</a>
                                <abbr title="April 10, 2022">April 10, 2022</abbr>
                            </li>
                            <li>
                                <a href="/blog-post" title="6 main differences between an LLC and a corporation">6 main
                                    differences between an LLC and a corporation</a>
                                <abbr title="March 17, 2022">March 17, 2022</abbr>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row page-padding-top">
                    <ul className="social-icons align-center">
                        <li>
                            <a target="_blank" href="#" className="social-facebook"
                                title="facebook"></a>
                        </li>
                        <li>
                            <a target="_blank" href="#" className="social-twitter"
                                title="twitter"></a>
                        </li>
                        <li>
                            <a href="#" className="social-pinterest" title="pinterest"></a>
                        </li>
                        <li>
                            <a href="#" className="social-paypal" title="paypal"></a>
                        </li>
                    </ul>
                </div>
                <div className="row align-center padding-top-34">
                    <span className="copyright">© Copyright {new Date().getFullYear()} <a
                        href=""
                        title="Template" target="_blank">Template</a> by <a
                            href="" title="Labs" target="_blank">Labs</a></span>
                </div>
            </div>

        </>
    )
}

export default Footer