import React from 'react'

export default function AboutSection5() {
    return (
        <div className="row gray full-width background-4 features-phone-2">
            <div className="row padding-top-91 padding-bottom-100">
                <h3 className="box-header align-center">Enter your phone number, we'll call you back!</h3>
                <form className="contact-form style-simple margin-top-65" id="contact-form" method="post" action="contact_form/contact_form.php">
                    <div className="row flex-box">
                        <fieldset>
                            <label>Your Name</label>
                            <input className="text-input" name="name" type="text" value="" placeholder="Your Name" data-required="1" />
                        </fieldset>
                        <fieldset>
                            <label>Your Phone</label>
                            <input className="text-input" name="phone" type="text" value="" placeholder="(123) 456" data-required="1" />
                        </fieldset>
                        <fieldset>
                            <label>Subject</label>
                            <select name="subject" id="subject" className="cost-dropdown" data-required="1">
                                <option value="" selected>Choose...</option>
                                <option value="Business Consulting">Business Consulting</option>
                                <option value="Accounting Office">Accounting Office</option>
                                <option value="Loans and Leasing">Loans and Leasing</option>
                            </select>
                        </fieldset>
                        <fieldset className="submit-container column">
                            <input type="hidden" name="action" value="contact_form" />
                            <div className="row align-center">
                                <a className="more submit-contact-form" href="#" title="Call me back">Call me back</a>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}
