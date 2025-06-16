import React from 'react'

export default function CalculatorSection2() {
    return (
        <div className="row margin-top-95 margin-bottom-30 cost-calculator-hidden" id="calculator-hidden">
            <h3 className="align-center">Simply complete the form below and we'll get back to you shortly</h3>
            <p className="align-center margin-top-21">Please complete the form below and a member or our staff will contact you promptly.<br />You will receive a copy of this calculation to your e-mail address.</p>
            <div className="column column-2-3 centered">
                <form className="contact-form margin-top-33" id="cost-calculator-form" method="post" action="contact_form/contact_form.php" data-append="bookkeeping-calculator">
                    <div className="row flex-box">
                        <fieldset className="column column-1-2">
                            <div className="border-container">
                                <label>Name *</label>
                                <input className="text-input" name="name" type="text" defaultValue="" placeholder="Your Name" data-required="1" />
                            </div>
                            <div className="border-container">
                                <label>Email *</label>
                                <input className="text-input" name="email" type="text" defaultValue="" placeholder="your@email.com" data-required="1" />
                            </div>
                            <div className="border-container">
                                <label>Phone</label>
                                <input className="text-input" name="phone" type="text" defaultValue="" placeholder="(123) 456" />
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-2">
                            <div className="border-container stretch">
                                <label>Questions or comments *</label>
                                <textarea name="message" placeholder="Hi there..." data-required="1"></textarea>
                            </div>
                        </fieldset>
                    </div>
                    <fieldset className="submit-container margin-top-30">
                        <input type="hidden" name="action" defaultValue="contact_form" />
                        <input type="hidden" name="plan" defaultValue="" data-default="" />
                        <input type="hidden" name="plan-label" defaultValue="Selected plan" />
                        <div className="row align-center">
                            <a className="more submit-contact-form" href="#" title="Submit now">Submit now</a>
                        </div>
                        <p className="align-center margin-top-47">Didn't find what you're looking for? Please <a href="/contact" title="Contact us">contact us</a> for custom setups.
                        </p></fieldset>
                </form>
            </div>
        </div>
    )
}
