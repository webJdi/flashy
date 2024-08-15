import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import Head from 'next/head';

export default function Home() {
  return (
    <Container
    >
      <Head>
        <title>Flashy</title>
        <meta name="description" content="Create flashcard from text"></meta>
      </Head>

      <AppBar
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            style={{flexGrow: 1}}
          >
            Flashy
          </Typography>
          <SignedOut>
            <Button
              color="inherit"
              href="/sign-in"
            >
              Login
            </Button>
            <Button
              color="inherit"
              href="/sign-up"
            >
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
      <Box
        sx = {{textAlign: 'center', my : 4}}
      >
        <Typography variant="h2">
          Welcome to Flashy
        </Typography>
        <Typography
          variant="h5"
        >
            {''}
            The easiest way to generate Flashcards from text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt:2}}>Get Started</Button>
      </Box>

      <Box
        sx={{my: 6}}
      >
        <Typography
          variant = "h4"
          components="h2"
        >
          Features
        </Typography>
        <Grid
          container
          spacing={4}
        >
            <Grid
              item
              xs={12}
              md={4}
            >
              
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Easy Text Input
                </Typography>
                <Typography>Simply enter your text and let me do the rest! Creating flashcards has never been easier</Typography>
              
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
            >
              
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Smart Flashcards
                </Typography>
                <Typography>Our AI intelligently breaks down your text into concise flashcards</Typography>
            
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
            >
              
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Accesible Anywhere
                </Typography>
                <Typography>Access your flashcards from any device!</Typography>
            
            </Grid>

        </Grid>

        <Typography
          variant = "h4"
          components="h2"
          textAlign={'center'}
          padding={4}
        >
          Pricing
        </Typography>
        <Grid
          container
          spacing={4}
        >
          <Grid
              item
              xs={12}
              md={6}
            >
              <Box
                minHeight={'20vh'}
                sx={{
                  p:3,
                  border:'1px solid',
                  borderColor:'grey.300',
                  borderRadius:2
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Basic
                </Typography>
                <Typography>FREE</Typography>
                <Typography>Access to Basic Flashcard features and storage</Typography>
                <Button
                  variant="contained"
                >
                  Choose
                </Button>
              </Box>
            </Grid>
            
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box
                minHeight={'20vh'}
                sx={{
                  p:3,
                  border:'1px solid',
                  borderColor:'grey.300',
                  borderRadius:2
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Pro
                </Typography>
                <Typography>$5/month</Typography>
                <Typography>Unlimited flashcards and storage</Typography>
                <Button
                  variant="contained"
                  disabled
                >
                  Coming soon
                </Button>
              </Box>
            </Grid>
        </Grid>
      </Box>

    </Container>
  );
}
