import React from 'react'

function ContactSection2() {
    return (
        <div className="row margin-top-95">
            <div className="column column-1-3">
                <h3>Contact details</h3>
                <ul className="features-list margin-top-44">
                    <li className="gray">
                        <div className="icon template-phone"></div>
                        <div className="item-content">
                            <p>PHONE</p>
                            <h5><a href="tel:+10555223224">+10 555 223 224</a></h5>
                        </div>
                    </li>
                    <li className="gray">
                        <div className="icon template-email2"></div>
                        <div className="item-content">
                            <p>EMAIL</p>
                            <h5><a href="/cdn-cgi/l/email-protection#75161a1b0114160135131c1b0510141e5b161a18"><span className="__cf_email__" data-cfemail="d4b7bbbaa0b5b7a094b2bdbaa4b1b5bffab7bbb9">[email&nbsp;protected]</span></a></h5>
                        </div>
                    </li>
                    <li className="gray">
                        <div className="icon template-calc"></div>
                        <div className="item-content">
                            <p>ONLINE</p>
                            <h5><a href="?page=loan_cost_calculator">Loan Calculator</a></h5>
                        </div>
                    </li>
                    <li className="gray">
                        <div className="icon template-location2"></div>
                        <div className="item-content">
                            <p>ADDRESS</p>
                            <h5>4744 Havanna Street<br />Greensboro, NC 27444</h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="column column-2-3">
                <h3>Get in touch with our team</h3>
                <form className="contact-form margin-top-44" id="contact-form" method="post" action="contact_form/contact_form.php">
                    <div className="row flex-box">
                        <fieldset className="column column-1-2">
                            <div className="border-container">
                                <label>Name *</label>
                                <input className="text-input" name="name" type="text" value="" placeholder="Your Name" data-required="1" />
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-2">
                            <div className="border-container">
                                <label>Email *</label>
                                <input className="text-input" name="email" type="text" value="" placeholder="your@email.com" data-required="1" />
                            </div>
                        </fieldset>
                    </div>
                    <div className="row flex-box">
                        <fieldset className="column column-1-2">
                            <div className="border-container">
                                <label>Phone</label>
                                <input className="text-input" name="phone" type="text" value="" placeholder="(123) 456" />
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-2">
                            <div className="border-container">
                                <label>Subject</label>
                                <select name="subject" id="subject" className="cost-dropdown">
                                    <option value="" selected>Choose...</option>
                                    <option value="Business Consulting">Business Consulting</option>
                                    <option value="Accounting Office">Accounting Office</option>
                                    <option value="Loans and Leasing">Loans and Leasing</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>
                    <div className="row flex-box">
                        <fieldset className="column column-1-1">
                            <div className="border-container">
                                <label>Message *</label>
                                <textarea name="message" placeholder="Hi there..." data-required="1"></textarea>
                            </div>
                        </fieldset>
                    </div>
                    <fieldset className="submit-container margin-top-30">
                        <input type="hidden" name="action" value="contact_form" />
                        <div className="row align-center">
                            <a className="more submit-contact-form" href="#" title="Submit now">Submit now</a>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ContactSection2
