import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import './Navbar.scss';

class Navbar extends Component {
    state = {
        isDrawerOpen: false
    }

    listOption = [{
        title: "Home",
        icon: faHome,
        path: '/'
    },{
        title: "Contact Us",
        icon: faPhone,
        path: '/contact'
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

    render() {
        return (
            <nav className="desktop-navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
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