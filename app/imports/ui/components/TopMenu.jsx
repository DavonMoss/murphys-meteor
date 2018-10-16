import React from 'react';
import { Menu, Container, Dropdown, Image, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">
        <Container>
          <Menu.Item><Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/></Menu.Item>
          <Menu.Item position="right">Home</Menu.Item>
          <Dropdown item text="About Us">
            <Dropdown.Menu>
              <Dropdown.Item>Getting Here</Dropdown.Item>
              <Dropdown.Item>Catering/Private Events</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>St. Patricks Day</Menu.Item>
          <Dropdown item text="Menus">
            <Dropdown.Menu>
              <Dropdown.Item>Lunch Menu</Dropdown.Item>
              <Dropdown.Item>Dinner Menu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>Bar</Menu.Item>
          <Menu.Item><Icon name="search"/></Menu.Item>
        </Container>
      </Menu>
    );
  }
}
