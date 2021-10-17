import { Container, Row, Col, Card } from 'react-bootstrap'
import Iframe from 'react-iframe'

const about = () => {
  return (
    <Container fluid>
      <Container
        fluid
        className='SignInAndUp'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}
      >
        <Iframe
          width='1350'
          height='480'
          src='https://www.youtube.com/embed/KZfjjHaWc38'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></Iframe>
      </Container>
    </Container>
  )
}

export default about
