import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './components/pages/home'
import './styles/app.css'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                        </Routes>
                    </Layout>
                </Router>
            </Fragment>
        )
    }
}

export default App
