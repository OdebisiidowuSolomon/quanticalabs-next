import React from 'react'

export default function CaseStudiesSection1() {
    return (
        <div className="row page-margin-top-section-large">
            <ul className="tabs-navigation isotope-filters align-center clearfix">
                <li><a className="selected" href="#filter-*" title="Show all">Show all</a></li>
                <li><a href="#filter-strategy" title="Strategy">Strategy</a></li>
                <li><a href="#filter-consulting" title="Consulting">Consulting</a></li>
                <li><a href="#filter-subsidies" title="Subsidies">Subsidies</a></li>
                <li><a href="#filter-marketing" title="Marketing">Marketing</a></li>
            </ul>
            <ul className="projects-list isotope clearfix">
                <li className="strategy column-1-3">
                    <div className="case-study-container">
                        <a href="?page=study_consulting_for_corporations" title="Consulting for corporations" className="image-box">
                            <img alt="Consulting for corporations" src="images/image_01_7.jpg" />
                        </a>
                        <div className="project-details">
                            <h4><a href="?page=study_consulting_for_corporations" title="Consulting for corporations">Consulting for corporations</a></h4>
                            <a className="template-right2 more-submit" href="?page=study_consulting_for_corporations"></a>
                        </div>
                    </div>
                </li>
                <li className="consulting column-1-3">
                    <div className="case-study-container">
                        <a href="?page=study_company_value_appraisal" title="Company value appraisal" className="image-box">
                            <img alt="Company value appraisal" src="images/image_02_5.jpg" />
                        </a>
                        <div className="project-details">
                            <h4><a href="?page=study_company_value_appraisal" title="Company value appraisal">Company value appraisal</a></h4>
                            <a className="template-right2 more-submit" href="?page=study_company_value_appraisal"></a>
                        </div>
                    </div>
                </li>
                <li className="strategy column-1-3">
                    <div className="case-study-container">
                        <a href="?page=study_reduction_of_fixed_costs" title="Reduction of fixed costs" className="image-box">
                            <img alt="Reduction of fixed costs" src="images/image_03_5.jpg" />
                        </a>
                        <div className="project-details">
                            <h4><a href="?page=study_reduction_of_fixed_costs" title="Reduction of fixed costs">Reduction of fixed costs</a></h4>
                            <a className="template-right2 more-submit" href="?page=study_reduction_of_fixed_costs"></a>
                        </div>
                    </div>
                </li>
                <li className="consulting marketing column-1-3">
                    <div className="case-study-container">
                        <a href="?page=study_distribution_process_analysis" title="Distribution process analysis" className="image-box">
                            <img alt="Distribution process analysis" src="images/image_04_4.jpg" />
                        </a>
                        <div className="project-details">
                            <h4><a href="?page=study_distribution_process_analysis" title="Distribution process analysis">Distribution process analysis</a></h4>
                            <a className="template-right2 more-submit" href="?page=study_distribution_process_analysis"></a>
                        </div>
                    </div>
                </li>
                {/* <li className="subsidies column-1-3">
                    <div className="case-study-container">
                        <a href="?page=study_optimization_of_financial_flows" title="Optimization of financial flows" className="image-box">
                            <img alt="Optimization of financial flows" src="images/image_05_3.jpg" />
                        </a>
                        <div className="project-details">
                            <h4><a href="?page=study_optimization_of_financial_flows" title="Optimization of financial flows">Optimization of financial flows</a></h4>
                            <a className="template-right2 more-submit" href="?page=study_optimization_of_financial_flows"></a>
                        </div>
                    </div>
                </li>
                <li className="strategy marketing column-1-3">
                    <div className="case-study-container">
                        <a href="?page=study_capital_plans_for_employees" title="Capital plans for employees" className="image-box">
                            <img alt="Capital plans for employees" src="images/image_06_2.jpg" />
                        </a>
                        <div className="project-details">
                            <h4><a href="?page=study_capital_plans_for_employees" title="Capital plans for employees">Capital plans for employees</a></h4>
                            <a className="template-right2 more-submit" href="?page=study_capital_plans_for_employees"></a>
                        </div>
                    </div>
                </li> */}
                <li className="gutter-sizer"></li>
            </ul>
        </div>
    )
}
