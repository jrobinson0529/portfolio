import React from 'react';
import {
  Segment,
  Container,
  Grid,
  List,
  Icon,
  Header
} from 'semantic-ui-react';

function Footer() {
  return (
    <div className="profile-footer">
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable columns="equal" centered>
            <Grid.Row centered>
              <Grid.Column width={6} centered>
                <List
                  link
                  inverted
                  horizontal
                  className="d-flex justify-content-between"
                >
                  <List.Item
                    as="a"
                    href="https://github.com/jrobinson0529"
                    target="_blank"
                  >
                    <Icon name="github" size="huge" className="footer-icon" />
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/jesse-robinson0529/"
                    target="_blank"
                  >
                    <Icon name="linkedin" size="huge" className="footer-icon" />
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://www.instagram.com/jessedoesthingsnstuff/"
                    target="_blank"
                  >
                    <Icon
                      name="instagram"
                      size="huge"
                      className="footer-icon"
                    />
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://twitter.com/Jesserobinsons"
                    target="_blank"
                  >
                    <Icon name="twitter" size="huge" className="footer-icon" />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Header inverted className="text-muted my-5">
            &copy; 2021 Jesse Robinson
          </Header>
        </Container>
        <List bulleted horizontal link inverted>
          <List.Item as="a" href="#top">
            Top
          </List.Item>
          <List.Item as="a" href="mailto: jesse0529robinson@gmail.com">
            Contact
          </List.Item>
        </List>
      </Segment>
    </div>
  );
}

export default Footer;
