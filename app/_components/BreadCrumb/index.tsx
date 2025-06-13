import React from 'react'


interface IBreadCrumbProps {
    title?: string, label: string, linkTo?: string, crumbs?: ICrumb[]
}

interface ICrumb {
    title: string,
    linkTo?: string
}



export default function BreadCrumb({ title = "Home", linkTo = '/home', label, crumbs = [] }: IBreadCrumbProps) {
    return (
        <div className="row full-width page-header header-background header-background-9 fp-overlay">
            <div className="row">
                <div className="bread-crumb-container">
                    <ul className="bread-crumb">
                        <li>
                            <a title={title} href={linkTo}>
                                {title}
                            </a>
                        </li>

                        {crumbs.map(crumb => (
                            <React.Fragment key={crumb.title}>
                                <li className="separator">
                                    ·
                                </li>
                                <li>
                                    {crumb.linkTo ?
                                        <a href={crumb.linkTo}>
                                            {crumb.title}
                                        </a>
                                        :
                                        crumb.title
                                    }
                                </li>
                            </React.Fragment>
                        ))}

                    </ul>
                </div>
                <h1>{label}</h1>
            </div>
        </div>
    )
}



export const PageBreadCrumb = ({ title = "Home", label, linkTo = "/home" }: IBreadCrumbProps) => {
    return <div className="row full-width page-header">
        <div className="row">
            <div className="bread-crumb-container">
                <ul className="bread-crumb">
                    <li>
                        <a title={title} href={linkTo}>
                            {title}
                        </a>
                    </li>
                    <li className="separator">
                        ·
                    </li>
                    <li>
                        {label}
                    </li>
                </ul>
            </div>
            <h1>{label}</h1>
        </div>
    </div>
}