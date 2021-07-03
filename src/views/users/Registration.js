import React from 'react'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

const Registration = () => {
    return(
        <div style={{backgroundColor: "#CCFFCC"}}>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size='large'>
                    <Segment stacked>
                        <h1>একাউন্ট খুলুন</h1>
                        <Message color='olive'><a href="/register">জাতীয় পরিচয়পত্র দিয়ে</a></Message>
                        <Message color='olive'><a href="/register">গুগল একাউন্ট দিয়ে</a></Message>
                        <h3>অথবা ইমেইল/ফোন নাম্বার দিয়ে একাউন্ট খুলুন</h3>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='ইমেইল' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='পাসওয়ার্ড'
                            type='password'
                        />
                        <Button color='green' fluid size='large'>একাউন্ট খুলুন</Button>
                    </Segment>
                </Form>
                <Message>একাউন্ট আছে?<Button color='green' fluid size='tiny'>প্রবেশ করুন</Button></Message>
            </Grid.Column>
            </Grid>
        </div>    
    )
}

export default Registration