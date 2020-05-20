import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        if (password !== password2) {
            console.log('Password don"t match.')
        } else {
            const newUser = {
                name,
                email,
                password,
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }

                const body = JSON.stringify(newUser)

                const res = await axios.post('/auth/signup', body, config)
                console.log(res.data)
            } catch (err) {
                console.log(err.response.data)
            }
        }
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <Form onSubmit={onSubmit} className='signup'>
                    <div className='account-create'>
                        <h4>Create your account.</h4>
                    </div>
                    <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input
                            onChange={onChange}
                            value={name}
                            type='text'
                            name='name'
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            onChange={onChange}
                            value={email}
                            type='email'
                            name='email'
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            onChange={onChange}
                            value={password}
                            type='password'
                            name='password'
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Confirm Password</Label>
                        <Input
                            onChange={onChange}
                            value={password2}
                            type='password'
                            name='password2'
                            required
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                    <div className='under-form'>
                        <p>
                            Have an account? Please{' '}
                            <Link to='/login'>Login</Link>.
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signup
