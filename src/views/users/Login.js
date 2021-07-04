import React from 'react'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

const Login = () => {
    return(
        <div style={{backgroundColor: "#F4FFEE"}}>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment stacked>
                            <h1>প্রবেশ করুন</h1>
                            <Message color='olive'><a href="/login">গুগল একাউন্ট দিয়ে</a></Message>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='ইমেইল' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='পাসওয়ার্ড'
                                type='password'
                            />
                            <Button color='green' fluid size='large'>প্রবেশ করুন</Button>
                        </Segment>
                    </Form>
                    <Message>একাউন্ট নেই?<Button color='green' fluid size='tiny'>একাউন্ট খুলুন</Button></Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Login