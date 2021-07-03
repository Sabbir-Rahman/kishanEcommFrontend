import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = () => {
    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size='large'>
                    <Segment stacked>
                        <h1>প্রবেশ করুন</h1>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='ইমেইল' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='পাসওয়ার্ড'
                            type='password'
                        />
                        <Button color='teal' fluid size='large'>প্রবেশ করুন</Button>
                    </Segment>
                </Form>
                <Message>একাউন্ট নেই?<a href='/register'><br/>নতুন একাউন্ট খুলুন</a></Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login