import React from 'react'

export default function TeamSection3() {
    return (
        <div className="row gray full-width padding-top-95 padding-bottom-100">
            <div className="row">
                <div className="column column-1-1">
                    <label className="box-header align-center">TESTIMONIALS</label>
                    <h2 className="box-header align-center margin-top-15">What our clients think about us</h2>
                    <div className="row testimonials-container type-small margin-top-65">
                        <a href="#" className="slider-control left template-left3"></a>
                        <ul className="testimonials-list testimonials-carousel scroll-1 visible-2">
                            <li>
                                <div className="testimonial">
                                    <img src="/images/image_07_1.jpg" alt="" />
                                    <div className="testimonial-content template-big-quote-after">
                                        <h5>"We began working with Finpeak team because we were facing a lot of challenges with our firm. We were not organized, we were not effectively using our tools and we were not delivering projects to clients on time."</h5>
                                        <p className="padding-top-30 padding-bottom-6">Robert Bryan</p>
                                        <p className="small light padding-0">Crystal Inc</p>
                                    </div>
                                </div>
                            </li>
                            <li className="page-margin-top">
                                <div className="testimonial">
                                    <img src="/images/image_08_1.jpg" alt="" />
                                    <div className="testimonial-content template-big-quote-after">
                                        <h5>"It was great working with the Finpeak, as this was our first time working with vendor on a bigger scale. The team was patient and persistent, and ultimately we are thrilled with the end result and level of training we have received."</h5>
                                        <p className="padding-top-30 padding-bottom-6">William Smith</p>
                                        <p className="small light padding-0">Smith &amp; Sons</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="testimonial">
                                    <img src="/images/image_09.jpg" alt="" />
                                    <div className="testimonial-content template-big-quote-after">
                                        <h5>"In the last six months we have seen our organizational profitability increase significantly thanks in large part to the change in practices around resource management and global resourcing of our projects."</h5>
                                        <p className="padding-top-30 padding-bottom-6">Dakota Johnson</p>
                                        <p className="small light padding-0">PCMI Group</p>
                                    </div>
                                </div>
                            </li>
                            <li className="page-margin-top">
                                <div className="testimonial">
                                    <img src="/images/image_10_1.jpg" alt="" />
                                    <div className="testimonial-content template-big-quote-after">
                                        <h5>"Business plan. So overlooked in business today. We look a long time to develop it and that was a mistake. Finpeak allowed us not only to increase profits, but also identified errors and optimized the process."</h5>
                                        <p className="padding-top-30 padding-bottom-6">Rebeca Hill</p>
                                        <p className="small light padding-0">Dino</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <a href="#" className="slider-control right template-right3"></a>
                    </div>
                </div>
            </div>
            <div className="row align-center page-margin-top">
                <a className="more" href="?page=testimonials" title="Testimonials">Testimonials</a>
            </div>
        </div>
    )
}
