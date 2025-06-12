import React from 'react'

export default function Section1() {
    return (
        <div className="row full-width gray padding-top-bottom-50">
            <div className="row slider-top-row row-4-4">
                <div className="column column-1-4">
                    <ul className="features-list">
                        <li>
                            <div className="icon template-wallet"></div>
                            <div className="item-content">
                                <h4><span className="list-number number animated-element" data-value="250">0</span>K
                                </h4>
                                <p>AWARDED GRANDS</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="column column-1-4">
                    <ul className="features-list">
                        <li>
                            <div className="icon template-data2"></div>
                            <div className="item-content">
                                <h4><span className="list-number number" data-value="1.18">1.18</span></h4>
                                <p>EUR / USD RATE</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="column column-1-4">
                    <ul className="features-list">
                        <li>
                            <div className="icon template-shield"></div>
                            <div className="item-content">
                                <h4><span className="list-number number animated-element" data-value="150">0</span>M
                                </h4>
                                <p>SAVED IN TAXES</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="column column-1-4">
                    <ul className="features-list">
                        <li>
                            <div className="icon template-document3"></div>
                            <div className="item-content">
                                <h4><span className="list-number number animated-element" data-value="2500">0</span>
                                </h4>
                                <p>BUSINESS PLANS</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
