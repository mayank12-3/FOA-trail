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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/">Kenya</Link></li>
                            <li><Link className="dropdown-item" to="/">Uganda</Link></li>
                            <li><Link className="dropdown-item" to="/">Tanzania</Link></li>
                        </div>
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