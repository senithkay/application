import * as React from 'react';
import Popover from '@mui/material/Popover';
import IconButton from "@mui/material/IconButton";
import {Badge} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Divider from '@mui/material/Divider';


export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleClick}
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className={'p-[10px] w-[300px] flex flex-col h-[60vh] overflow-y-scroll'}>
                    <p className={'font-bold mt-[10px]'}>We believe in quality over quantity</p>
                    <p className={'text-gray-600 text-[14px] mb-[10px]'}>Each gem in our collection is meticulously
                        selected
                        for its exceptional beauty and rarity. We prioritize excellence,
                        ensuring that every piece we offer meets the highest standards of
                        craftsmanship and authenticity.</p>
                    <Divider variant="middle" component="div"/>
                    <p className={'font-bold mt-[10px]'}>We believe in quality over quantity</p>
                    <p className={'text-gray-600 text-[14px] mb-[10px]'}>Each gem in our collection is meticulously
                        selected
                        for its exceptional beauty and rarity. We prioritize excellence,
                        ensuring that every piece we offer meets the highest standards of
                        craftsmanship and authenticity.</p>
                    <Divider variant="middle" component="div"/>

                    <p className={'font-bold mt-[10px]'}>We believe in quality over quantity</p>
                    <p className={'text-gray-600 text-[14px] mb-[10px]'}>Each gem in our collection is meticulously
                        selected
                        for its exceptional beauty and rarity. We prioritize excellence,
                        ensuring that every piece we offer meets the highest standards of
                        craftsmanship and authenticity.</p>
                    <Divider variant="middle" component="div"/>

                    <p className={'font-bold mt-[10px]'}>We believe in quality over quantity</p>
                    <p className={'text-gray-600 text-[14px] mb-[10px]'}>Each gem in our collection is meticulously
                        selected
                        for its exceptional beauty and rarity. We prioritize excellence,
                        ensuring that every piece we offer meets the highest standards of
                        craftsmanship and authenticity.</p>
                    <Divider variant="middle" component="div"/>
                </div>
            </Popover>
        </div>
    );
}
