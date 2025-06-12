import React from 'react'

export default function SliderRevolution() {
    return (
        // < !--Slider Revolution-- >
        <div className="revolution-slider-container">
            <div className="revolution-slider" data-version="5.4.8" data-autoplay="1" data-onhoverstop="0">
                <ul>
                    {/* <!-- SLIDE 1 --> */}
                    <li data-transition="fade" data-masterspeed="500" data-slotamount="1" data-delay="6000">
                        {/* <!-- MAIN IMAGE --> */}
                        <img src="/images/image_01_3.jpg" alt="slidebg1" data-bgfit="cover" />
                    </li>
                    {/* <!-- SLIDE 2 --> */}
                    <li data-transition="fade" data-masterspeed="500" data-slotamount="1" data-delay="6000">
                        {/* <!-- MAIN IMAGE --> */}
                        <img src="/images/image_02_2.jpg" alt="slidebg2" data-bgfit="cover" />
                    </li>

                    {/* <!-- SLIDE 3 --> */}
                    <li data-transition="fade" data-masterspeed="500" data-slotamount="1" data-delay="6000">
                        {/* <!-- MAIN IMAGE --> */}
                        <img src="/images/image_03_2.jpg" alt="slidebg3" data-bgfit="cover" />
                    </li>
                </ul>
                {/* <!-- STATIC LAYERS --> */}
                <div className="tp-static-layers" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                    {/* <!-- LAYER 01 --> */}
                    <div className="tp-static-layer tp-caption" data-startslide="0" data-endslide="99"
                        data-frames="[{&quot;delay&quot;:500,&quot;split&quot;:&quot;lines&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:1500,&quot;from&quot;:&quot;y:50;z:0;o:0;&quot;,&quot;ease&quot;:&quot;easeInOutQuart&quot;},{&quot;delay&quot;:&quot;wait&quot;}]"
                        data-x="left" data-y="['136', '162', '172', '167', '128']" data-width="full">
                        <h2>You go about your<br />business. We'll do<br />the rest.</h2>
                    </div>
                    {/* <!-- LAYER 02 --> */}
                    <div className="tp-static-layer tp-caption" data-startslide="0" data-endslide="99"
                        data-frames="[{&quot;delay&quot;:1200,&quot;speed&quot;:1500,&quot;from&quot;:&quot;y:20;o:0;&quot;,&quot;ease&quot;:&quot;easeInOutQuart&quot;},{&quot;delay&quot;:&quot;wait&quot;}]"
                        data-x="left" data-y="['324', '350', '324', '283', '213']" data-width="full">
                        <h4>Accounting office and tax advisory services.</h4>
                    </div>
                    {/* <!-- LAYER 03 --> */}
                    <div className="tp-static-layer tp-caption" data-startslide="0" data-endslide="99"
                        data-frames="[{&quot;delay&quot;:1900,&quot;speed&quot;:1000,&quot;from&quot;:&quot;y:20;o:0;&quot;,&quot;ease&quot;:&quot;easeInOutQuart&quot;},{&quot;delay&quot;:&quot;wait&quot;}]"
                        data-x="left" data-y="['404', '430', '378', '328', '278']" data-width="full">
                        <a className="more" href="?page=bookkeeping_quoting_calculator" title="Let's get started">Let's get
                            started</a>
                    </div>
                    {/* <!-- LAYER 04 --> */}
                    <div className="tp-static-layer tp-caption" data-startslide="0" data-endslide="99"
                        data-frames="[{&quot;delay&quot;:2300,&quot;speed&quot;:1000,&quot;from&quot;:&quot;y:20;o:0;&quot;,&quot;ease&quot;:&quot;easeInOutQuart&quot;},{&quot;delay&quot;:&quot;wait&quot;}]"
                        data-visibility="['on','on','on','on','off']" data-x="['223', '223', '193', '193', '193']"
                        data-y="['404', '430', '378', '328', '278']" data-width="250">
                        <a className="more style-4 template-video1 prettyPhoto"
                            href="https://www.youtube.com/watch?v=AivyFZXT2ek&amp;width=800&amp;height=450"
                            title="Accounting office and tax advisory services">Watch the video</a>
                    </div>
                    {/* <!-- LAYER CALCULATOR --> */}
                    <div className="tp-static-layer tp-caption" data-startslide="0" data-endslide="99"
                        data-frames="[{&quot;delay&quot;:400,&quot;speed&quot;:2000,&quot;from&quot;:&quot;y:40;o:0;&quot;,&quot;ease&quot;:&quot;easeInOutQuart&quot;},{&quot;delay&quot;:&quot;wait&quot;}]"
                        data-x="right" data-y="['150', '150', '174', '420', '370']">
                        <form className="cost-calculator-container cost-calculator-form" method="post"
                            action="?page=bookkeeping_quoting_calculator">
                            <fieldset className="column column-1-3 float-right cost-calculator-custom-mobile-padding">
                                <div className="cost-calculator-box clearfix">
                                    <label>No. of sales invoices per month</label>
                                    <input type="hidden" name="sales-per-month-label"
                                        defaultValue="No. of sales invoices per month" />
                                    <div className="cost-slider-container">
                                        <input id="sales-per-month"
                                            className="cost-slider-input cost-calculator-cost-slider-input-hidden"
                                            name="sales-per-month" type="number" defaultValue="430" />
                                        <input id="sales-per-month-value" type="hidden" defaultValue="43" data-default="43" />
                                        <div className="cost-slider" data-value="430" data-step="5" data-min="5"
                                            data-max="1000" data-input="sales-per-month"
                                            data-value-input="sales-per-month-value" data-price="0.1"></div>
                                    </div>
                                </div>
                                <div className="cost-calculator-box cost-calculator-summary-box clearfix">
                                    <label>Your plan from</label>
                                    <span className="cost-calculator-price small-currency align-bottom-after margin-top-15"
                                        id="final-service-cost"><span className="currency">$</span>0.00<span
                                            className="currency">/ month</span></span>
                                    <input type="hidden" id="final-service-cost-total" name="final-service-cost-total" />
                                    <input type="hidden" id="final-service-cost-total-value"
                                        name="final-service-cost-total-value" defaultValue="0" />
                                </div>
                                <a className="template-right2 more-submit" href="#"></a>
                            </fieldset>
                        </form>
                    </div>
                    {/* <!-- / --> */}
                </div>
            </div>
        </div>

    )
}
