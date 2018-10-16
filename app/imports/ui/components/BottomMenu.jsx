import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class BottomMenu extends React.Component {
  render() {
    return (
      <div className="footer-background">
        <Grid container columns="three">
          <Grid.Column>
            Lunch
            <hr/>
            <List>
              <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
              <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Bar
            <hr/>
            <List>
              <List.Item>Monday- Friday from 11:00am</List.Item>
              <List.Item>Saturday- Sunday from 4:00pm</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Dinner
            <hr/>
            <List>
              <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
              <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
