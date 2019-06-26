import React from "react";
import { AppBar, Toolbar, TextField, List, ListItem, Divider, LogoIcon, Button } from "react95";

export interface ITaskBar {
}

export function TaskBar(T: ITaskBar): JSX.Element {
    return (
        <AppBar>
            <Toolbar style={{ justifyContent: "space-between" }}>
                <Menu />
                <TextField style={{ width: `300px`, marginLeft: 4 }}/>
            </Toolbar>
        </AppBar>
    );
}

function Menu(): JSX.Element {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {open && (
                <List horizontalAlign="left" verticalAlign="bottom" onClick={handleClose}>
                    <ListItem>👨‍💻 Profile</ListItem>
                    <ListItem>📁 My account</ListItem>
                    <Divider />
                    <ListItem>🔙 Logout</ListItem>
                </List>
            )}
        <Button onClick={handleClick} active={open} style={{ fontWeight: "bold" }}>
         🦄 Start
        </Button>
        </div>
    );
}