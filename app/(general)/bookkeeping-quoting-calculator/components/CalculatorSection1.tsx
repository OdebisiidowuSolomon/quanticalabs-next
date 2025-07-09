import React from 'react'

export default function CalculatorSection1() {
    return (
        <div className="row gray full-width">
            <div className="row padding-top-95 padding-bottom-100">
                <h5 className="align-center">Join thousands of small business owners who trust Insur with their books.<br />Tell us your average monthly transactions and we'll suggest the plan that's right for your business.</h5>
                <form className="cost-calculator-container cost-calculator-form margin-top-65" id="bookkeeping-calculator" method="post" action="?page=bookkeeping_quoting_calculator">
                    <div className="row">
                        <fieldset className="column column-1-2">
                            <div className="cost-calculator-box clearfix">
                                <label className="display-inline">No. of sales invoices per month</label>
                                <ul className="cost-calculator-slider-min-max">
                                    <li>5</li>
                                    <li>–</li>
                                    <li>1000</li>
                                </ul>
                                <input type="hidden" name="sales-per-month-label" defaultValue="No. of sales invoices per month" />
                                <div className="cost-slider-container">
                                    <input id="sales-per-month" className="cost-slider-input cost-calculator-cost-slider-input-hidden" name="sales-per-month" type="number" defaultValue="430" />
                                    <input id="sales-per-month-value" type="hidden" defaultValue="43" data-default="43" />
                                    <div className="cost-slider" data-value="430" data-step="5" data-min="5" data-max="1000" data-input="sales-per-month" data-value-input="sales-per-month-value" data-price="0.1"></div>
                                </div>
                            </div>
                            {/* <!-- date input */}
                            <div className="cost-calculator-box clearfix">
                                <label>Prefered date</label>
                                <input type="hidden" name="service-date-label" defaultValue="Prefered date" />
                                <div className="datepicker-container">
                                    <span className="ui-icon template-arrow-dropdown"></span>
                                    <input id="service-date" className="cost-slider-datepicker big" name="service-date" defaultValue="" placeholder="Preffered date" />
                                </div>
                            </div>
                            {/* --> */}
                        </fieldset>
                        <fieldset className="column column-1-2">
                            <div className="cost-calculator-box clearfix">
                                <label className="display-inline">No. of purchase invoices per month</label>
                                <ul className="cost-calculator-slider-min-max">
                                    <li>5</li>
                                    <li>–</li>
                                    <li>1000</li>
                                </ul>
                                <input type="hidden" name="purchase-per-month-label" defaultValue="No. of purchase invoices per month" />
                                <div className="cost-slider-container">
                                    <input id="purchase-per-month" className="cost-slider-input cost-calculator-cost-slider-input-hidden" name="purchase-per-month" type="number" defaultValue="360" />
                                    <input id="purchase-per-month-value" type="hidden" defaultValue="36" data-default="36" />
                                    <div className="cost-slider" data-value="360" data-step="5" data-min="5" data-max="1000" data-input="purchase-per-month" data-value-input="purchase-per-month-value" data-price="0.1"></div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="row page-margin-top">
                        <fieldset className="column column-1-3">
                            <div className="cost-calculator-box clearfix">
                                <div className="border-container">
                                    <label className="cost-calculator-select-label">Select type of business</label>
                                    <select name="business-type" id="business-type" className="cost-dropdown">
                                        <option defaultValue="1">Sole Trader</option>
                                        <option defaultValue="2">Partnership</option>
                                        <option defaultValue="3">Limited Liability Company</option>
                                        <option defaultValue="5">Corporation</option>
                                    </select>
                                    <input type="hidden" name="business-type-label" defaultValue="Select type of business" />
                                    <input type="hidden" className="business-type" name="business-type-name" defaultValue="" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-3">
                            <div className="cost-calculator-box clearfix">
                                <div className="border-container">
                                    <label className="cost-calculator-select-label">Select number of employees</label>
                                    <select name="employees-number" id="employees-number" className="cost-dropdown">
                                        <option defaultValue="">Choose...</option>
                                        <option defaultValue="0">No employees</option>
                                        <option defaultValue="1">1 employee</option>
                                        <option defaultValue="2">2 employees</option>
                                        <option defaultValue="3">3 employees</option>
                                        <option defaultValue="4">4 employees</option>
                                        <option defaultValue="5">5 employees</option>
                                        <option defaultValue="6">6 employees</option>
                                        <option defaultValue="7">7 employees</option>
                                        <option defaultValue="8">8 employees</option>
                                        <option defaultValue="9">9 employees</option>
                                        <option defaultValue="10">10 employees</option>
                                    </select>
                                    <input type="hidden" name="employees-number-label" defaultValue="Select number of employees" />
                                    <input type="hidden" className="employees-number" name="employees-number-name" defaultValue="" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-3">
                            <div className="cost-calculator-box clearfix">
                                <label>Do you handle foreign currency?</label>
                                <label htmlFor="foreign-currency" className="cost-calculator-switch radius">
                                    <input type="hidden" defaultValue="Do you handle foreign currency?" name="foreign-currency-label" />
                                    <input type="checkbox" data-value="2" defaultValue="0" name="foreign-currency" className="cost-slider-input type-checkbox" id="foreign-currency" />
                                    <span className="cost-calculator-switch-slider" data-yes="Yes" data-no="No"></span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="row page-margin-top">
                        <div className="cost-calculator-box clearfix">
                            <label>Add-on services</label>
                            <ul className="checkboxes-list">
                                <li>
                                    <input type="hidden" defaultValue="Annual tax return filling" name="annual-tax-label" />
                                    <input type="checkbox" data-value="50" defaultValue="0" name="annual-tax" className="cost-slider-input type-checkbox" id="annual-tax" />
                                    <label htmlFor="annual-tax" className="checkbox-label template-bullet">Annual tax return filling</label>
                                </li>
                                <li>
                                    <input type="hidden" defaultValue="Invoicing for customers" name="invoicing-customers-label" />
                                    <input type="checkbox" data-value="1" defaultValue="0" name="invoicing-customers" className="cost-slider-input type-checkbox" id="invoicing-customers" />
                                    <label htmlFor="invoicing-customers" className="checkbox-label template-bullet">Invoicing for customers</label>
                                </li>
                                <li>
                                    <input type="hidden" defaultValue="Tax advisor" name="tax-advisor-label" />
                                    <input type="checkbox" data-value="150" defaultValue="0" name="tax-advisor" className="cost-slider-input type-checkbox" id="tax-advisor" />
                                    <label htmlFor="tax-advisor" className="checkbox-label template-bullet">Tax advisor</label>
                                </li>
                                <li>
                                    <input type="hidden" defaultValue="Tax optimization" name="tax-optimization-label" />
                                    <input type="checkbox" data-value="100" defaultValue="0" name="tax-optimization" className="cost-slider-input type-checkbox" id="tax-optimization" />
                                    <label htmlFor="tax-optimization" className="checkbox-label template-bullet">Tax optimization</label>
                                </li>
                                <li>
                                    <input type="hidden" defaultValue="Preparation of contracts" name="contracts-preparation-label" />
                                    <input type="checkbox" data-value="500" defaultValue="0" name="contracts-preparation" className="cost-slider-input type-checkbox" id="contracts-preparation" />
                                    <label htmlFor="contracts-preparation" className="checkbox-label template-bullet">Preparation of contracts</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row page-margin-top-section flex-box">
                        <fieldset className="column column-1-3 cost-calculator-summary-box margin-top-40">
                            <div className="cost-calculator-box clearfix">
                                <label>Startup</label>
                                <span className="cost-calculator-price small-currency align-bottom-after margin-top-15" id="startup"><span className="currency">$</span>0.00<span className="currency">/ month</span></span>
                                <input type="hidden" id="startup-total" name="startup-total" />
                                <input type="hidden" id="startup-total-value" name="startup-total-value" defaultValue="0" />
                                <input type="hidden" name="startup-total-summarylabel" defaultValue="Startup" />
                                <p className="top-border margin-top-30 padding-top-34">Ideal if you are just starting out. Monthly account closing with ECI filing. Free xero subscription is included.</p>
                                <h5 className="colored margin-top-13">Features included:</h5>
                                <ul className="list margin-top-15">
                                    <li className="template-check6">Monthly account closing</li>
                                    <li className="template-check6">Xero subscription</li>
                                    <li className="template-check6">ECI filing</li>
                                </ul>
                                <div className="cost-calculator-submit-container">
                                    <a className="more display-block" href="#calculator-hidden" title="Choose plan" data-plan="startup">Choose plan</a>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-3 cost-calculator-summary-box">
                            <div className="ribbon-container">
                                <p className="ribbon">Most popular</p>
                            </div>
                            <div className="cost-calculator-box clearfix">
                                <label>Timesaver</label>
                                <span className="cost-calculator-price small-currency align-bottom-after margin-top-15" id="timesaver"><span className="currency">$</span>0.00<span className="currency">/ month</span></span>
                                <input type="hidden" id="timesaver-total" name="timesaver-total" />
                                <input type="hidden" id="timesaver-total-value" name="timesaver-total-value" defaultValue="0" />
                                <input type="hidden" name="timesaver-total-summarylabel" defaultValue="Timesaver" />
                                <p className="top-border margin-top-30 padding-top-34">Everything you need to focus your business. Monthly account closking with ECI filing and submission. Company tax planning.</p>
                                <h5 className="colored margin-top-13">Startup plan plus:</h5>
                                <ul className="list margin-top-15">
                                    <li className="template-check6">ECI submission</li>
                                    <li className="template-check6">Company tax planning</li>
                                    <li className="template-check6">Monthly reports</li>
                                </ul>
                                <div className="cost-calculator-submit-container">
                                    <a className="more display-block" href="#calculator-hidden" title="Choose plan" data-plan="timesaver">Choose plan</a>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="column column-1-3 cost-calculator-summary-box">
                            <div className="ribbon-container">
                                <p className="ribbon">For Business Sharks</p>
                            </div>
                            <div className="cost-calculator-box clearfix">
                                <label>Enterprise</label>
                                <span className="cost-calculator-price small-currency align-bottom-after margin-top-15" id="enterprise"><span className="currency">$</span>0.00<span className="currency">/ month</span></span>
                                <input type="hidden" id="enterprise-total" name="enterprise-total" />
                                <input type="hidden" id="enterprise-total-value" name="enterprise-total-value" defaultValue="0" />
                                <input type="hidden" name="enterprise-total-summarylabel" defaultValue="Enterprise" />
                                <p className="top-border margin-top-30 padding-top-34">Dedicated account manager with face-to-face meetings. Revenue recognition with advanced monthly reports.</p>
                                <h5 className="colored margin-top-13">Timesaver plan plus:</h5>
                                <ul className="list margin-top-15">
                                    <li className="template-check6">Digital archiving</li>
                                    <li className="template-check6">Advanced monthly reports</li>
                                    <li className="template-check6">Revenue recognition</li>
                                    <li className="template-check6">Dedicated account manager</li>
                                </ul>
                                <div className="cost-calculator-submit-container">
                                    <a className="more display-block" href="#calculator-hidden" title="Choose plan" data-plan="enterprise">Choose plan</a>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}
