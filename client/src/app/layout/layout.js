import React, { Fragment } from 'react'
import Navme from './navbar/navbar'

const Layout = (props) => {
    return (
        <Fragment>
            <Navme />
            {props.children}
        </Fragment>
    )
}

export default Layout
