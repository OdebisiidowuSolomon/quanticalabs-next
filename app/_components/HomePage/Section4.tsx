import React from 'react'

export default function Section4() {
    return (
        <div className="row gray full-width">
            <div className="row page-padding-top padding-bottom-70">
                <div className="column column-1-2">
                    <div className="row">
                        <ul
                            className="features-list padding white-background side-image side-right-60 side-bottom-minus-30 side-zindex-2">
                            <li className="gray">
                                <div className="icon template-shield"></div>
                                <div className="item-content">
                                    <h4><span className="list-number number animated-element"
                                        data-value="150">0</span>M</h4>
                                    <p>SAVED IN TAXES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                </div>
                            </li>
                        </ul>
                        <div className="single-image fp-preload image-80-percent">
                            <img src="/images/image_01_2.jpg" alt="img" />
                        </div>
                    </div>
                    <svg className="side-image margin-top-70" xmlns="http://www.w3.org/2000/svg" width="180"
                        height="180" viewBox="0 0 180 180">
                        <rect fill="#377ef9" opacity="0.15" y="90" width="90" height="90" rx="45" ry="45">
                        </rect>
                        <path fill="#377ef9" opacity="0.15"
                            d="M135,0h45a0,0,0,0,1,0,0V45a45,45,0,0,1-45,45h0A45,45,0,0,1,90,45v0A45,45,0,0,1,135,0Z">
                        </path>
                        <path fill="#377ef9"
                            d="M0,0H45A45,45,0,0,1,90,45V90a0,0,0,0,1,0,0H45A45,45,0,0,1,0,45V0A0,0,0,0,1,0,0Z">
                        </path>
                        <foreignObject x="33" y="33" width="24" height="22">
                            <span className="template-big-quote"></span>
                        </foreignObject>
                    </svg>
                    <div className="row padding-left-40 padding-right-100 margin-top-194">
                        <h5>Insur is reliable cooperation partner that approaches its work very
                            professionally, even in the case of smaller entities. Throughout our cooperation I
                            had a sense of comfort and security.</h5>
                        <p className="padding-top-30 padding-bottom-6">Markus Willberg</p>
                        <p className="small light padding-0">PNG Investing</p>
                    </div>
                </div>
                <div className="column column-1-2">
                    <label className="box-header">CONSULTING SERVICES</label>
                    <h2 className="box-header margin-top-15">We will implement a marketing strategy for your company
                    </h2>
                    <h5 className="margin-top-40">We will implement a marketing strategy for your brand. If you
                        would like to achieve more but you do not know how - we will define new directions of
                        your branding development using the latest knowledge.</h5>
                    <p className="margin-top-15">We'll look at how your company makes market proposals and show you
                        how it can do it better. We will optimize your sales funnel, review how your acquire
                        customers and suggest how you could do it more effectively by attracting more of them or
                        by persuading them to buy more, more often and for more money.</p>
                    <ul className="list margin-top-10">
                        <li className="template-check6">We will analyze the conept of your brand.</li>
                        <li className="template-check6">We will optimize your sales funnel.</li>
                    </ul>
                    <div className="single-image fp-preload margin-top-60">
                        <img src="/images/decor_04.png" alt="img" />
                    </div>
                    <p className="small align-center margin-top-20">Year-on-year increase in the value of the
                        average company after the development and the implementation of the business strategy
                    </p>
                </div>
            </div>
        </div>
    )
}
