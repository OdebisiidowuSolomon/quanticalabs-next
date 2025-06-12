import React from 'react'

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
                            <a target="_blank" href="https://facebook.com/QuanticaLabs" className="social-facebook"
                                title="facebook"></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/QuanticaLabs" className="social-twitter"
                                title="twitter"></a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/quanticalabs/" className="social-pinterest" title="pinterest"></a>
                        </li>
                        <li>
                            <a href="https://www.buymeacoffee.com/quanticalabs" className="social-paypal" title="paypal"></a>
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
                                        <a href="?page=home" title="Home">
                                            Home
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
                                            <li className="selected">
                                                <a href="?page=home" title="Home style 1">
                                                    Home style 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=home_2" title="Home style 2">
                                                    Home style 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=home_transparent_header" title="Home transparent header">
                                                    Home transparent header
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="?page=about" title="Pages">
                                            Pages
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
                                            <li className="submenu">
                                                <a href="?page=about" title="About style 1">
                                                    About
                                                </a>
                                                <a href="#" className="template-plus3"></a>
                                                <ul>
                                                    <li>
                                                        <a href="?page=about" title="About style 1">
                                                            About style 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="?page=about_2" title="About style 2">
                                                            About style 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="submenu">
                                                <a href="?page=services" title="Our services style 1">
                                                    Our services
                                                </a>
                                                <a href="#" className="template-plus3"></a>
                                                <ul>
                                                    <li>
                                                        <a href="?page=services" title="Our services style 1">
                                                            Our services style 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="?page=services_2" title="Our services style 2">
                                                            Our services style 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="?page=service_accounting_and_tax_advisory_services"
                                                            title="Single service style 1">
                                                            Single service style 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="?page=service_strategic_and_transaction_consulting_services"
                                                            title="Single service style 2">
                                                            Single service style 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="submenu">
                                                <a href="?page=case_studies" title="Case studies">
                                                    Case studies
                                                </a>
                                                <a href="#" className="template-plus3"></a>
                                                <ul>
                                                    <li>
                                                        <a href="?page=case_studies" title="Case studies">
                                                            Case studies
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="?page=study_consulting_for_corporations"
                                                            title="Single case study">
                                                            Single case study
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="submenu">
                                                <a href="?page=team" title="Our team">
                                                    Our team
                                                </a>
                                                <a href="#" className="template-plus3"></a>
                                                <ul>
                                                    <li>
                                                        <a href="?page=team" title="Our team">
                                                            Our team
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="?page=team_ann_underwood" title="Single team member">
                                                            Single team member
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="?page=testimonials" title="Testimonials">
                                                    Testimonials
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=price_list" title="Price list">
                                                    Price list
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=404" title="404 not found">
                                                    404 not found
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="?page=services" title="Services">
                                            Services
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
                                            <li>
                                                <a href="?page=service_accounting_and_tax_advisory_services"
                                                    title="Accounting and tax advisory services">
                                                    Accounting and tax advisory
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=service_strategic_and_transaction_consulting_services"
                                                    title="Strategic and transaction consulting services">
                                                    Consulting services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=service_loans_and_reviews_of_financial_statements"
                                                    title="Loans and reviews of financial statements">
                                                    Financial statements
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=service_business_plans_valuations_and_analyzes"
                                                    title="Business plans valuations and analyzes">
                                                    Business growth
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=service_performance_management_and_improvement"
                                                    title="Performance management and improvement">
                                                    Banking advising
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=service_small_business_employee_benefits"
                                                    title="Small business employee benefits">
                                                    Audit marketing
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="?page=case_studies" title="Case studies">
                                            Studies
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
                                            <li>
                                                <a href="?page=study_consulting_for_corporations"
                                                    title="Consulting for corporations">
                                                    Consulting for corporations
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=study_company_value_appraisal"
                                                    title="Company value appraisal">
                                                    Company value appraisal
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=study_reduction_of_fixed_costs"
                                                    title="Reduction of fixed costs">
                                                    Reduction of fixed costs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=study_distribution_process_analysis"
                                                    title="Distribution process analysis">
                                                    Distribution process analysis
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=study_optimization_of_financial_flows"
                                                    title="Optimization of financial flows">
                                                    Optimization of financial flows
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=study_capital_plans_for_employees"
                                                    title="Captial plans for employees">
                                                    Captial plans for employees
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="?page=bookkeeping_quoting_calculator" title="Calculator">
                                            Calculator
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
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
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="?page=blog" title="Blog">
                                            Blog
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
                                            <li>
                                                <a href="?page=blog" title="Blog">
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=blog_grid" title="Blog grid">
                                                    Blog grid
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=blog_grid_with_sidebar" title="Blog grid with sidebar">
                                                    Blog grid with sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=blog_grid_with_left_sidebar" title="Blog grid with sidebar">
                                                    Blog grid with left sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=post" title="Single post">
                                                    Single post
                                                </a>
                                            </li>
                                            <li>
                                                <a href="?page=search&amp;s=ipsum" title="Search template">
                                                    Search template
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="?page=contact" title="Contact">
                                            Contact
                                        </a>
                                        <a href="#" className="template-plus3"></a>
                                        <ul>
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
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="more display-block" href="?page=bookkeeping_quoting_calculator"
                                            title="Get a quote">Get a quote</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-icons-container">
                        <a className="template-big-search" href="#" title="Search"></a>
                        <a href="#" className="template-big-cart hide-on-mobiles"><span className="cart-items-number">2<span
                            className="cart-items-number-arrow"></span></span></a>
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
