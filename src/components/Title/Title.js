import React from 'react'
import { Link } from 'react-router-dom'

const Title = ({title,subtitle}) => {
    return (
        <div class="breadcrumb-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-12 col-12">
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title">{subtitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title