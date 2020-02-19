import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));

const Example = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const classes = useStyles();

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/blogs">BLOG</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/mashes">About MASHES</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="/logout">Log Out</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <Button color="secondary">Sign Out</Button>
                </Collapse>
            </Navbar>
        </div>

        // <div>
        //   <Navbar color="faded" light>
        //     <NavbarBrand href="/blogs" className="mr-auto">MASHES BLOG</NavbarBrand>
        //     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        //     <Collapse isOpen={!collapsed} navbar>
        //       <Nav navbar>
        //         <NavItem>
        //           <NavLink href="/contactme/">Contact Me</NavLink>
        //         </NavItem>
        //         <NavItem>
        //           <NavLink href="/logout">Log Out</NavLink>
        //         </NavItem>
        //       </Nav>
        //     </Collapse>
        //   </Navbar>
        // </div>
    );
};

export default Example;
