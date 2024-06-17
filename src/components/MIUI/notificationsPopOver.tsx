import * as React from 'react';
import Popover from '@mui/material/Popover';
import IconButton from "@mui/material/IconButton";
import {Badge} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Divider from '@mui/material/Divider';
import {useAppSelector} from "@/redux/hooks";
import { Button, Empty } from 'antd';



export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const auth = useAppSelector(state => state.auth.auth)
    const userNotifications = useAppSelector(state => state.userNotifications.userNotification);

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
                <Badge badgeContent={userNotifications.map((notification)=>{
                    if (!notification.read){
                        return notification;
                    }
                }).length} color="error">
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
                <div className={'p-[10px] w-[300px] flex-col h-fit overflow-y-scroll max-h-[60vh] flex justify-center items-center'}>
                    {!auth.isAuthenticated?
                        <>
                            <Empty
                                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                imageStyle={{ height: 60 }}
                                description={
                                    <span>
                                        You have to be signed in in to see the notifications
                                    </span>
                                }
                            >
                                <Button className={'bg-black'} type="primary">Sign in</Button>
                            </Empty>
                        </>:
                        <>
                            {userNotifications.length<=0?<Empty description={
                                <span>
                            Notifications are empty
                          </span>
                            }/>:<>
                                {userNotifications.map((notification) => (
                                    <div key={notification.id}>
                                        <p className={'font-bold mt-[10px]'}>{notification.title}</p>
                                        <p className={'text-gray-600 text-[14px] mb-[10px]'}>{notification.description}</p>
                                        <Divider variant="middle" component="div"/>
                                    </div>
                                ))}
                            </>}
                        </>}

                </div>
            </Popover>
        </div>
    );
}
