import React from 'react';
import { 
  Container, 
  Button,  
  Segment, 
  Icon,
  Grid,
  Header 
} from 'semantic-ui-react';


const Footer = ({ social }) => {
  return (
    <Segment
      color='grey'
      inverted
      vertical 
      style={{ padding:'4em', border:0, borderRadius:0}}
    >
      <Container>
        <Grid 
          divided 
          stackable 
          celled='internally'
        >
          <Grid.Row>
            <Grid.Column 
              width={6} 
              textAlign='center' 
              verticalAlign='middle'
            >
            {
              social.map((item,i) =>
                <Button
                  size='large' 
                  key={i} 
                  circular 
                  color={item.color2} 
                  icon={item.icon} 
                  href={item.href}
                  style={{margin:5}} 
                />
              )
            }
              <Button
                circular
                color='red'
                icon='download'
                content='Resume'
                size='large'
                href='https://drive.google.com/file/d/1v808eT9XgOxtgzL02rM_HVu0gVOrxpQy/view?usp=sharing'
              />
            </Grid.Column>
            <Grid.Column 
              width={10} 
              textAlign='center' 
              verticalAlign='middle'
            >
              <Header 
                as='span' 
                size='medium'
              >
                Created with {' '}
              </Header>
              <Icon 
                name='like' 
                color='red' 
                size='large'
              />
              <Header 
                as='span' 
                size='medium'
              >
                by Siddharth Gupta
              </Header>
              <Header
                size='tiny' 
              >
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer;