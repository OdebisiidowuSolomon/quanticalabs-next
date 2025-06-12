import React from 'react'

export default function BreadCrumb({ title, linkTo = '?page=home', label }: { title: string, label: string, linkTo?: string }) {
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
    )
}


