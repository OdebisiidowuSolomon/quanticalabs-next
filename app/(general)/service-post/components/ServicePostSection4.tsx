import React from 'react'

function ServicePostSection4() {
    return (
        <>
            <div className="row margin-top-65">
                <div className="column column-1-2">
                    <table>
                        <tbody><tr className="header-row">
                            <th colSpan={2}>Consulting services price list</th>
                        </tr>
                            <tr>
                                <td><p className="bullet">Preparation of a business plan</p></td>
                                <td>$2,500 - $5,000</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Development of an economic model</p></td>
                                <td>$1,250</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Business valuation</p></td>
                                <td>$350</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Intellectual property valuation</p></td>
                                <td>$750 - $2,500</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Trademark and brand valuation</p></td>
                                <td>$3,500</td>
                            </tr>
                        </tbody></table>
                </div>
                <div className="column column-1-2">
                    <table>
                        <tbody><tr className="header-row">
                            <th colSpan={2}>Acquiring financing price list</th>
                        </tr>
                            <tr>
                                <td><p className="bullet">Preparation of the grand application</p></td>
                                <td>$2,500 - $5,000</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Audit of subsidy possibilities</p></td>
                                <td>$1,250</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Development of a loan application</p></td>
                                <td>$350</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Loan application for share capital</p></td>
                                <td>$150 / hour</td>
                            </tr>
                            <tr>
                                <td><p className="bullet">Grant consulting</p></td>
                                <td>$250 / hour</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
            <div className="row align-center page-margin-top padding-bottom-100">
                <a className="more" href="?page=price_list" title="Price List">Go to full price list</a>
            </div>
        </>
    )
}

export default ServicePostSection4