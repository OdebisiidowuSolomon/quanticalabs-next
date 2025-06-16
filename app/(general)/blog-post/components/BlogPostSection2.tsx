import React from 'react'

export default function BlogPostSection2() {
    return (
        <div className="column column-1-3 fp-smart-column">
            <div className="fp-smart-column-wrapper">
                <ul className="vertical-menu widget-categories">
                    <li>
                        <a href="?page=category&amp;cat=accounting" title="Accounting">
                            Accounting
                            <span>4</span>
                        </a>
                    </li>
                    <li>
                        <a href="?page=category&amp;cat=business" title="Business">
                            Business
                            <span>2</span>
                        </a>
                    </li>
                    <li>
                        <a href="?page=category&amp;cat=consulting" title="Consulting">
                            Consulting
                            <span>3</span>
                        </a>
                    </li>
                    <li>
                        <a href="?page=category&amp;cat=finances" title="Finances">
                            Finances
                            <span>1</span>
                        </a>
                    </li>
                    <li>
                        <a href="?page=category&amp;cat=planning" title="Planning">
                            Planning
                            <span>2</span>
                        </a>
                    </li>
                    <li>
                        <a href="?page=category&amp;cat=taxes" title="Taxes">
                            Taxes
                            <span>6</span>
                        </a>
                    </li>
                </ul>
                <h5 className="margin-top-44">Latests posts</h5>
                <ul className="blog small margin-top-36 clearfix">
                    <li>
                        <a href="?page=post" title="5 reasons why your business needs an expense policy" className="post-image">
                            <img src="/images/image_01_4.jpg" alt="" />
                        </a>
                        <div className="post-content">
                            <a href="?page=post" title="5 reasons why your business needs an expense policy">5 reasons why your business needs an expense policy</a>
                            <abbr title="April 10, 2022">April 10, 2022</abbr>
                        </div>
                    </li>
                    <li>
                        <a href="?page=post" title="6 main differences between an LLC and a corporation" className="post-image">
                            <img src="/images/image_02_3.jpg" alt="" />
                        </a>
                        <div className="post-content">
                            <a href="?page=post" title="6 main differences between an LLC and a corporation">6 main differences between an LLC and a corporation</a>
                            <abbr title="March 17, 2022">March 17, 2022</abbr>
                        </div>
                    </li>
                    <li>
                        <a href="?page=post" title="What you need to know about bookkeeping services" className="post-image">
                            <img src="/images/image_03_3.jpg" alt="" />
                        </a>
                        <div className="post-content">
                            <a href="?page=post" title="What you need to know about bookkeeping services">What you need to know about bookkeeping services</a>
                            <abbr title="March 10, 2022">March 10, 2022</abbr>
                        </div>
                    </li>
                </ul>
                <form className="search-form page-margin-top" action="?page=search">
                    <div className="border-container">
                        <label>Search</label>
                        <input className="text-input" name="s" type="text" value="" placeholder="e.g. business consulting" />
                        <input type="hidden" name="page" value="search" />
                        <fieldset className="search-submit-container">
                            <span className="template-search4"></span>
                            <input type="submit" value="" className="search-submit" />
                        </fieldset>
                    </div>
                </form>
                <ul className="services-list page-margin-top">
                    <li className="background background-6 fp-overlay">
                        <h3><a href="?page=service_performance_management_and_improvement" title="Performance management and improvement">Get connected</a></h3>
                        <h5>Feel free to get connected with our dedicated bookkeeping account for business.</h5>
                        <div className="align-center">
                            <a className="more style-4" href="?page=service_performance_management_and_improvement" title="Get started">Get started</a>
                        </div>
                    </li>
                </ul>
                <div className="row dark padding page-margin-top">
                    <h5 className="white width-70">View our 2022 brochures for an easy to read guide on all of the services offer.</h5>
                    <a className="fp-action-button template-download style-2 margin-top-36" href="#" title="Brochure Advisory">Brochure Advisory</a>
                    <a className="fp-action-button template-download style-2 margin-top-10" href="#" title="Brochure Consulting">Brochure Consulting</a>
                </div>
                <h5 className="margin-top-44">Tags</h5>
                <ul className="taxonomies margin-top-36 clearfix">
                    <li className="selected"><a href="#" title="Audit">AUDIT</a></li>
                    <li><a href="#" title="Business">BUSINESS</a></li>
                    <li><a href="#" title="Consulting">CONSULTING</a></li>
                    <li><a href="#" title="Loans">LOANS</a></li>
                    <li><a href="#" title="Finances">FINANCES</a></li>
                    <li><a href="#" title="Fintech">FINTECH</a></li>
                    <li><a href="#" title="Money">MONEY</a></li>
                    <li><a href="#" title="Taxes">TAXES</a></li>
                    <li><a href="#" title="Technology">TECHNOLOGY</a></li>
                </ul>
            </div>
        </div>
    )
}
