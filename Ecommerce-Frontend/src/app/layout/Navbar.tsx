import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type props = {
    toggledarkmode : () => void;
    darkmode: boolean;
}

export default function Navbar({toggledarkmode,darkmode} : props) {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <IconButton onClick={toggledarkmode}>
                 {darkmode ? <DarkMode /> : <LightMode sx={{color:'yellow'}}/>}   
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
 