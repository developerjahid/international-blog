import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Collapse, NavbarToggler, Container } from 'reactstrap'
import Navitem from './navitem'

const Navme = (props) => {
    //Nacbar Toggler
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Fragment>
            <Navbar className='navbar-dark' expand='md'>
                <Container>
                    <Link className='navbar-brand' to='/'>
                        International Blog
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <Navitem name='Sign Up' url='/signup' />
                            <Navitem name='Login' url='/login' />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Navme
