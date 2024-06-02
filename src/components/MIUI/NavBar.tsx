import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ReactNode} from "react";
import {Avatar, Badge, Menu, MenuItem, Tooltip} from "@mui/material";
import {useRouter} from "next/navigation";
import Link from "next/link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasicPopover from "@/components/MIUI/notificationsPopOver";
import {getServerImagesUrl} from "@/utils/functions";
import {useAppSelector} from "@/redux/hooks";

interface Props {
    window?: () => Window;
    children:ReactNode
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const {children} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const router = useRouter();
    const user = useAppSelector(state => state.auth.auth);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 , color:'#4169E1'}}>
                Loshan Gems
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>{
                            router.push(getRouteName(item))
                        }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{backgroundColor:'white', color:'black', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color:'#4169E1'} }}
                    >
                        Loshan Gems
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'black' }} onClick={()=>{
                                router.push(getRouteName(item))
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <div className={'flex ml-auto '}>
                        <MenuItem>
                            <IconButton size="small" aria-label="show 4 new mails" color="inherit" onClick={()=>{
                                router.push(getRouteName('cart'))
                            }}>
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </MenuItem>

                        <MenuItem>
                            <BasicPopover />
                        </MenuItem>
                        {user.isAuthenticated?
                            <Box className={'flex items-center ml-[10px]'} sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user.name??'User' } src={getServerImagesUrl(user.image??'')} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <Link href={getRouteName(setting)} key={setting}>
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </Box>
                            :
                            <div className={'flex gap-[10px] justify-center items-center'}>
                                <Button sx={{padding:'5px',  width: 'fit-content', height:'fit-content'}} variant={'text'} onClick={()=>{
                                    router.push('/auth/signin')
                                }}>Log in</Button>
                                <Button sx={{padding:'5px 10px',  width: 'fit-content', height:'fit-content'}} variant={'contained'} onClick={()=>{
                                    router.push('/auth/signup')
                                }}>Sign up</Button>
                            </div>}
                    </div>
                </Toolbar>

            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box className={'flex justify-center items-center flex-col w-full'} component="main" sx={{ p: 3}}>
                {children}
            </Box>
        </Box>
    );
}


const getRouteName = (name:string)=>{
    return  `/${name.toLowerCase().replace(' ', '-')}`
}