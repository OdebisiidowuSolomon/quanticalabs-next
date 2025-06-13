import React from 'react'

export default function ServicePostSection2() {
    return (
        <div className="row full-width gray padding-top-95 padding-bottom-100">
            <div className="row">
                <div className="column column-1-2 padding-right-50">
                    <label className="box-header">ONE STEP AWAY FROM CHANGE</label>
                    <h2 className="box-header margin-top-15">Financing your business in three simple steps</h2>
                    <div className="timeline-item margin-top-47">
                        <div className="timeline-number-container">
                            <h5 className="number white">01.</h5>
                        </div>
                        <div className="timeline-content">
                            <h5>Select the loan amount and repayment period</h5>
                            <p>You choose the amount and repayment period using our loan calculator. You provide your details and wait for our contact.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-number-container">
                            <h5 className="number white">02.</h5>
                        </div>
                        <div className="timeline-content">
                            <h5>Wait for the telephone verification of the application</h5>
                            <p>We will verify your application and contact you to inform you about the possibility of granting a loan.</p>
                        </div>
                    </div>
                    <div className="timeline-item last">
                        <div className="timeline-number-container">
                            <h5 className="number white">03.</h5>
                        </div>
                        <div className="timeline-content">
                            <h5>We will transfer the money directly to your account</h5>
                            <p>After positive verification, the money will be transfered to your account within fifteen minutes to an hour.</p>
                        </div>
                    </div>
                </div>
                <div className="column column-1-2 margin-bottom-95">
                    <div className="single-image fp-preload radius-bottom float-right">
                        <img src="/images/image_02_4.jpg" alt="img" />
                    </div>
                    <ul className="features-list type-big spacings-small side-image side-zindex-2 side-top-100">
                        <li className="column column-1-4 align-center">
                            <div className="content-box">
                                <h5 className="colored">01.</h5>
                                <h5>Select the loan amount and repayment period</h5>
                                <div className="progress-bar type-step clearfix">
                                    {/* <!--<div className="progress-bar type-step animation-disabled margin-top-26 clearfix">--> */}
                                    <div className="single-bar">
                                        <span data-step="1" data-steps="3" className="bar animated-element"></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="features-list type-big spacings-small side-image side-zindex-2 side-bottom-minus-15">
                        <li className="column column-1-4 align-center">
                            <div className="content-box">
                                <h5 className="colored">02.</h5>
                                <h5>Telephone verification of the application</h5>
                                <div className="progress-bar type-step clearfix">
                                    <div className="single-bar">
                                        <span data-step="2" data-steps="3" className="bar animated-element"></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="features-list type-big spacings-small side-image side-zindex-2 side-bottom-minus-95 side-right-0">
                        <li className="column column-1-4 align-center">
                            <div className="content-box">
                                <h5 className="colored">03.</h5>
                                <h5>Withdrawal of funds to your bank account</h5>
                                <div className="progress-bar type-step clearfix">
                                    <div className="single-bar">
                                        <span data-step="3" data-steps="3" className="bar animated-element"></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
