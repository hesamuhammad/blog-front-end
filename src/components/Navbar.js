import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "reactstrap";
import Link from "@material-ui/core/Link";
import { Icon } from "antd";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ marginTop: "1em" }}>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Icon
                    type="appstore"
                    theme="twoTone"
                    style={{ fontSize: "30px", color: "#08c" }}
                />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link
                        href="/"
                        // onClick={preventDefault}
                        variant="body2"
                        style={{ color: "black" }}
                    >
                        {"Blogs"}
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        href="/mashes"
                        // onClick={preventDefault}
                        variant="body2"
                        style={{ color: "black" }}
                    >
                        {"About"}
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        href="/signin"
                        // onClick={preventDefault}
                        variant="body2"
                        style={{ color: "black" }}
                    >
                        {"Login"}
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
