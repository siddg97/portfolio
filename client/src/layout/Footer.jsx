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
      color='black'
      vertical 
      style={{ padding:'4em', border:0, borderRadius:0 }}
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
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>www.flaticon.com</a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer;