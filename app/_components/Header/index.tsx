import React from 'react'



const headerLinks = [
    { title: '', linkTo: '', subMenu: [{ title: '', linkTo: '' }] }
]

export default function Header() {
    return (
        <>
            <div className="header-top-bar-container clearfix">
                <div className="header-top-bar">
                    <ul className="contact-details clearfix">
                        <li className="template-location1">
                            4744 Havanna Street, Greensboro
                        </li>
                        <li className="template-phone">
                            <a href="tel:+48555223224">+48 555 223 224</a>
                        </li>
                    </ul>
                    <ul className="contact-details clearfix hide-on-mobiles">
                        <li className="template-time">
                            Mon - Fri: 8:00 am - 5:00 pm&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Closed on Weekends
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li className="show-on-mobiles">
                            <a href="#" className="template-cart"><span className="cart-items-number">2<span
                                className="cart-items-number-arrow"></span></span></a>
                        </li>
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
                <a href="#" className="header-toggle template-chev-up1"></a>
            </div>
            <div className="header-container sticky">
                {/* <!--<div className="header-container sticky">--> */}
                <div className="header clearfix with-more-button">
                    <div className="logo">
                        <h1>
                            <a href="?page=home" title="Finpeak">
                                <img src="/images/logo.png" srcSet="images/logo_retina.png 2x" className="primary-logo"
                                    alt="logo" />
                                <img src="/images/logo_alternative.png" srcSet="images/logo_alternative_retina.png 2x"
                                    className="secondary-logo" alt="logo" />
                                <span className="logo-text">FINPEAK</span>
                            </a>
                        </h1>
                    </div>
                    <div className="menu-container clearfix">
                        <nav>
                            <ul className="sf-menu">
                                <li className="selected">
                                    <a href="?page=home" title="Home">
                                        Home
                                    </a>
                                </li>
                                <li className="submenul">
                                    <a href="/about" title="About Us">
                                        About Us
                                    </a>

                                </li>
                                <li className="submenul">
                                    <a href="/services" title="Services">
                                        Services
                                    </a>

                                </li>
                                <li className="submenul">
                                    <a href="/case-studies" title="Case Studies">
                                        Case Studies
                                    </a>
                                </li>
                                <li className="submenul">
                                    <a href="/blogs" title="Blog">
                                        Blog
                                    </a>
                                </li>
                                <li className="submenul">
                                    <a href="/bookkeeping-quoting-calculator" title="Calculator">
                                        Calculator
                                    </a>
                                </li>
                                <li className="submenul">
                                    <a href="/compare/your-car" title="Compare">
                                        Compare
                                    </a>
                                </li>
                                {/* <li className="submenul">
                                    <a href="?page=case_studies" title="Case studies">
                                        Studies
                                    </a>
                                    
                                </li>
                                <li className="submenul">
                                    <a href="?page=bookkeeping_quoting_calculator" title="Calculator">
                                        Calculator
                                    </a>
                                   
                                </li>
                                <li className="submenul">
                                    <a href="?page=blog" title="Blog">
                                        Blog
                                    </a>
                                  
                                </li> */}
                                <li className="left-flyout submenul">
                                    <a href="/contact" title="Contact">
                                        Contact
                                    </a>
                                    {/* <ul>
                                        <li>
                                            <a href="?page=contact" title="Contact style 1">
                                                Contact style 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="?page=contact_2" title="Contact style 2">
                                                Contact style 2
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>
                            </ul>
                        </nav>
                        <div className="mobile-menu-container">
                            <nav>
                                <ul className="mobile-menu collapsible-mobile-submenus">
                                    <li><a className="template-big-arrow-horizontal-sm" href="#">&nbsp;</a></li>
                                    <li className="selected">
                                        <a href="/home" title="Home">
                                            Home
                                        </a>
                                        <a href="#" className="template-plus3i"></a>
                                    </li>

                                    <li>
                                        <a href="/services" title="Services">
                                            Services
                                        </a>
                                        <a href="#" className="template-plus3i"></a>

                                    </li>
                                    <li>
                                        <a href="/case-studies" title="Case studies">
                                            Case Studies
                                        </a>
                                        <a href="#" className="template-plus3i"></a>
                                    </li>
                                    <li>
                                        <a href="/blogs" title="Blog">
                                            Blog
                                        </a>
                                        <a href="#" className="template-plus3i"></a>
                                    </li>
                                    <li>
                                        <a href="/bookkeeping-quoting-calculator" title="Calculator">
                                            Calculator
                                        </a>
                                        <a href="#" className="template-plus3i"></a>
                                        {/* <ul>
                                            <li>
                                                <a href="?page=bookkeeping_quoting_calculator"
                                                    title="Bookkeeping quoting calculator">
                                                    Bookkeeping calculator
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=loan_cost_calculator" title="Loan cost calculator">
                                                    Loan cost calculator
                                                </a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className="submenul">
                                        <a href="/compare/your-car" title="Compare">
                                            Compare
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" title="Contact">
                                            Contact
                                        </a>
                                        <a href="#" className="template-plus3i"></a>
                                        {/* <ul>
                                            <li>
                                                <a href="?page=contact" title="Contact style 1">
                                                    Contact style 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=contact_2" title="Contact style 2">
                                                    Contact style 2
                                                </a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li>
                                        <a className="more display-block" href="/bookkeeping-quoting-calculator"
                                            title="Get a quote">Get a quote</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-icons-container">
                        <a className="template-big-search" href="#" title="Search"></a>
                        {/* <a href="#" className="template-big-cart hide-on-mobiles"><span className="cart-items-number">2<span
                            className="cart-items-number-arrow"></span></span></a> */}
                    </div>
                    <a href="#" className="mobile-menu-switch">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </a>
                </div>
            </div>
        </>
    )
}
