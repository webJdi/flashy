import { AppBar, Button, Container, Toolbar, Typography, Link, Box} from "@mui/material";
import {SignUp} from '@clerk/nextjs';

export default function SignUpPage(){
    return (
    <Container
        maxWidth="100vw"
        padding="0"
        margin="0"
    >
        <AppBar
            position="static"
            sx={{backgroundColor:'#3f51b5'}}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx = {{
                        flexGrow: 1
                    }}
                >
                    Flashy
                </Typography>
                <Button
                    color="inherit"
                >
                    <Link href="/sign-in" passHref>
                        Sign In
                    </Link>
                </Button>
                <Button
                    color="inherit"
                >
                    <Link href="/sign-up" passHref>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        
        <Box
            display="flex"
            flexDirection="Column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography
                variant="h4"
            >
                Sign Up
            </Typography>
            <SignUp />
        </Box>
    </Container>
    )


}