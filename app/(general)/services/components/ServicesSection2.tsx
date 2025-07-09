import React from 'react'

export default function ServicesSection2() {
    return (
        <div className="row gray full-width page-padding-top-section-large">
            <div className="row padding-top-95 padding-bottom-95 background-2">
                <label className="box-header align-center">TESTIMONIALS</label>
                <h2 className="box-header align-center margin-top-15">Opinions of our clients</h2>
                <div className="row testimonials-container margin-top-65">
                    <a href="#" className="slider-control left template-left3"></a>
                    <ul className="testimonials-list testimonials-carousel effect-crossfade">
                        <li>
                            <img src="/images/image_07_1.jpg" alt="" />
                            <h5>"In the last six months we have seen our organizational profitability increase significantly thanks in large part to the change in practices around resource management and global resourcing of our projects."</h5>
                            <p className="padding-top-30 padding-bottom-6">Dakota Johnson</p>
                            <p className="small light padding-0">PCMI Group</p>
                        </li>
                        <li>
                            <img src="/images/image_08_1.jpg" alt="" />
                            <h5>"We began working with Insur team because we were facing a lot of challenges with our firm. We were not organized, we were not effectively using our tools and we were not delivering projects to clients on time."</h5>
                            <p className="padding-top-30 padding-bottom-6">Molly Nilson</p>
                            <p className="small light padding-0">Golden Bar</p>
                        </li>
                        <li>
                            <img src="/images/image_09_1.jpg" alt="" />
                            <h5>"It was great working with the Insur, as this was our first time working with vendor on a bigger scale. The team was patient and persistent, and ultimately we are thrilled with the end result and level of training we have received."</h5>
                            <p className="padding-top-30 padding-bottom-6">Robert Bryan</p>
                            <p className="small light padding-0">Crystal Inc</p>
                        </li>
                    </ul>
                    <a href="#" className="slider-control right template-right3"></a>
                </div>
            </div>
        </div>
    )
}
