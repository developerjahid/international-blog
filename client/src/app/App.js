import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './components/pages/home'
import Signup from './components/pages/signup'
import Login from './components/pages/login'
import './styles/app.css'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                            <Route path='/signup' exact element={<Signup />} />
                            <Route path='/login' exact element={<Login />} />
                        </Routes>
                    </Layout>
                </Router>
            </Fragment>
        )
    }
}

export default App
