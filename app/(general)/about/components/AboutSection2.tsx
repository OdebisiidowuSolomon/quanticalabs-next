import React from 'react'

export default function AboutSection2() {
    return (
        <div className="row gray full-width page-margin-top-section-large">
            <div className="row page-padding-top-section-large padding-bottom-70">
                <div className="column column-1-2">
                    <div className="row">
                        <ul className="features-list padding white-background side-image side-right-60 side-bottom-minus-30 side-zindex-2">
                            <li className="gray">
                                <div className="icon template-shield"></div>
                                <div className="item-content">
                                    <h4><span className="list-number number animated-element" data-value="150">0</span>M</h4>
                                    <p>SAVED IN TAXES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                </div>
                            </li>
                        </ul>
                        <div className="single-image fp-preload image-80-percent">
                            <img src="/images/image_04_2.jpg" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="column column-1-2">
                    <label className="box-header">CONSULTING SERVICES</label>
                    <h2 className="box-header margin-top-15">We will implement a marketing strategy for your company</h2>
                    <p className="margin-top-23">We will implement a marketing strategy for your brand. If you would like to achieve more but you do not know how - we will define new directions of your branding development using the latest knowledge.</p>
                    <ul className="progress-bar margin-top-33 clearfix">
                        <li className="single-bar">
                            <small className="bar-label">Consulting service</small>
                            <span data-percentage-value="92" className="bar animated-element"></span>
                            <span className="bar-label-units">92%</span>
                        </li>
                        <li className="single-bar">
                            <small className="bar-label">Business planning</small>
                            <span data-percentage-value="85" className="bar animated-element"></span>
                            <span className="bar-label-units">85%</span>
                        </li>
                        <li className="single-bar">
                            <small className="bar-label">Marketing and SEO</small>
                            <span data-percentage-value="95" className="bar animated-element"></span>
                            <span className="bar-label-units">95%</span>
                        </li>
                        <li className="single-bar">
                            <small className="bar-label">Accounting service</small>
                            <span data-percentage-value="80" className="bar animated-element"></span>
                            <span className="bar-label-units">80%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
