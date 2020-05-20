import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <Form onSubmit={onSubmit} className='login'>
                    <div className='account-login'>
                        <h4>Login your account.</h4>
                    </div>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            onChange={onChange}
                            type='email'
                            name='email'
                            value={email}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            onChange={onChange}
                            type='password'
                            name='password'
                            value={password}
                            required
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                    <div className='under-form'>
                        <p>
                            Don't have any account? Please{' '}
                            <Link to='/signup'>Sign Up</Link>.
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login
