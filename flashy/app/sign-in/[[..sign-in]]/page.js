import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function SignUpPage(){
    return (
    <Container
        maxWidth="sm"
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
            </Toolbar>

        </AppBar>

    </Container>
    )


}