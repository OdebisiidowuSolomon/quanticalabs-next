import React from 'react'

export default function BlogsSection1() {
    return (
        <div className="column column-2-3">
            <ul className="blog">
                <li>
                    <div className="image-box">
                        <a href="?page=post" title="5 reasons why your business needs an expense policy" className="post-image">
                            <img src="/images/image_01_5.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                            <li><a href="?page=category&amp;cat=business" title="Business">BUSINESS</a></li>
                            <li><a href="?page=category&amp;cat=taxes" title="Taxes">TAXES</a></li>
                        </ul>
                    </div>
                    <div className="post-content-container">
                        <ul className="post-details">
                            <li className="date template-calendar"><a href="?page=post" title="5 reasons why your business needs an expense policy">April 10, 2022</a></li>
                            <li className="template-author"><a href="?page=team_klaus_hertzog" title="Klaus Hertzog">Klaus Hertzog</a></li>
                            <li className="template-message3"><a href="?page=post#comments-list" title="2 Comments">2 Comments</a></li>
                            <li className="template-pin">Pinned</li>
                        </ul>
                        <h3><a href="?page=post">5 reasons why your business needs an expense policy</a></h3>
                        <p>Where she produced and hosted a news show for the independent TV network. Claire works alongside her clients to streamline delivery efforts, increase organizational communication...</p>
                        <a className="template-right2 read-more" href="?page=post">Read more</a>
                    </div>
                </li>
                <li>
                    <div className="image-box">
                        <a href="?page=post" title="6 main differences between an LLC and a corporation" className="post-image">
                            <img src="/images/image_02_6.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                            <li><a href="?page=category&amp;cat=finances" title="Finances">FINANCES</a></li>
                        </ul>
                    </div>
                    <div className="post-content-container">
                        <ul className="post-details">
                            <li className="date template-calendar"><a href="?page=post" title="6 main differences between an LLC and a corporation">March 17, 2022</a></li>
                            <li className="template-author"><a href="?page=team_ann_underwood" title="Ann Underwood">Ann Underwood</a></li>
                            <li className="template-message3"><a href="?page=post#comments-list" title="2 Comments">2 Comments</a></li>
                        </ul>
                        <h3><a href="?page=post">6 main differences between an LLC and a corporation</a></h3>
                        <p>Where she produced and hosted a news show for the independent TV network. Claire works alongside her clients to...</p>
                        <a className="template-right2 read-more" href="?page=post">Read more</a>
                    </div>
                </li>
                <li>
                    <div className="image-box">
                        <a href="?page=post" title="What you need to know about bookkeeping services" className="post-image">
                            <img src="/images/image_03_6.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                            <li><a href="?page=category&amp;cat=accounting" title="Accounting">ACCOUNTING</a></li>
                        </ul>
                    </div>
                    <div className="post-content-container">
                        <ul className="post-details">
                            <li className="date template-calendar"><a href="?page=post" title="What you need to know about bookkeeping services">March 10, 2022</a></li>
                            <li className="template-author"><a href="?page=team_raphael_gap" title="Raphael Gap">Raphael Gap</a></li>
                            <li className="template-message3"><a href="?page=post#comments-list" title="0 Comments">0 Comments</a></li>
                        </ul>
                        <h3><a href="?page=post">What you need to know about bookkeeping services</a></h3>
                        <p>Where she produced and hosted a news show for the independent TV network. Claire works alongside her clients to...</p>
                        <a className="template-right2 read-more" href="?page=post">Read more</a>
                    </div>
                </li>
            </ul>
            <ul className="pagination page-margin-top">
                <li className="left">
                    <a href="#" title="" className="template-left3">&nbsp;</a>
                </li>
                <li className="selected">
                    <span>
                        1
                    </span>
                </li>
                <li>
                    <a href="#" title="">
                        2
                    </a>
                </li>
                <li>
                    <a href="#" title="">
                        3
                    </a>
                </li>
                <li className="right">
                    <a href="#" title="" className="template-right3">&nbsp;</a>
                </li>
            </ul>
        </div>
    )
}
