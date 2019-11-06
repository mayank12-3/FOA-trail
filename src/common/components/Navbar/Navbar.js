import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Drawer, List, ListItem, ListItemText, ListItemIcon,
  Select, MenuItem, FormControl } from '@material-ui/core';
import { getQueryparams } from '../../../utils/functions'
import './Navbar.scss';

class Navbar extends Component {
    state = {
        isDrawerOpen: false,
        selectedDestination: getQueryparams(this.props.location.search).country
    }

    componentWillReceiveProps (nextProps) {
      if (this.props !== nextProps) {
        this.setState({
          selectedDestination: getQueryparams(nextProps.location.search).country
        })
      }
    }

    listOption = [{
        title: "Home",
        icon: faHome,
        path: '/'
    },{
        title: "Contact Us",
        icon: faPhone,
        path: '/contact-us'
    }];

    toggleDrawer = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }

    redirectTo = (path = '/') => {
        this.toggleDrawer();
        this.props.history.push(path);
    }

    DrawerList = () => {
        return(
            <List>
                {
                    this.listOption.map((option, index) => {
                        return (
                            <ListItem button key={index} onClick={() => this.redirectTo(option.path)}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={option.icon}/>
                                </ListItemIcon>
                                <ListItemText primary={option.title}/>
                            </ListItem>
                        )
                    })
                }
            </List>
        );
    }

    // tour?country=uganda
    handleDestinationSelection = (event) => {
      this.setState({
        selectedDestination: event.target.value
      }, () => {
        this.props.history.push('/tour?country=' + this.state.selectedDestination.toLowerCase())
      })
    }

    render() {
      console.log('props: ', this.props)
        return (
            <nav className="desktop-navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <FormControl>
                        {!this.state.selectedDestination && <span id="drop-down-label">Destinations</span>}
                        <Select
                          labelId="drop-down-label"
                          id="demo-simple-select"
                          value={this.state.selectedDestination}
                          onChange={this.handleDestinationSelection}>
                          <MenuItem value='kenya'>Kenya</MenuItem>
                          <MenuItem value='uganda'>Uganda</MenuItem>
                          <MenuItem value='tanzania'>Tanzania</MenuItem>
                        </Select>
                      </FormControl>
                    </li>
                </ul>
                <div className="mobile-navigation">
                    <FontAwesomeIcon icon={faBars} onClick={this.toggleDrawer}/>
                </div>
                <Drawer
                    anchor="right"
                    open={this.state.isDrawerOpen}
                    onClose={this.toggleDrawer}
                >
                {
                    this.DrawerList()
                }
                </Drawer>
            </nav>
        );
    }
}

export default withRouter(Navbar);
