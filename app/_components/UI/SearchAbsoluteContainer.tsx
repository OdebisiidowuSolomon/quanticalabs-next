import React from 'react'

export default function SearchAbsoluteContainer() {
    return (
        <div className="search-absolute-container">
            <form className="search-form" action="?page=search">
                <input type="text" name="s" placeholder="Search and hit enter..." className="search-input" />
                <fieldset className="search-submit-container">
                    <span className="template-big-search"></span>
                    <input type="submit" className="search-submit" />
                </fieldset>
                <input type="hidden" name="page" value="search" />
            </form>
            <a href="#search-close" className="search-close template-big-close" title="Close search"></a>
        </div>
    )
}
