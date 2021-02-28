import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
    Grid,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from '../style'

// GOAL: TRY AND CREATE UNIQUE AND FUN ANIMATIONS.
// AIM FOR NINE UNIQUE ANIMATIONS

const UserLanding = (props) => {
    const classes = useStyles()
    const [particles, setParticles] = useState('')

    useEffect(() => {
        populateParticles()
    })

    const populateParticles = () => {}

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{
                    justifyContent: 'center',
                }}
            >
                <Grid
                    item
                    xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                    >
                        <div className={classes.ball}></div>
                        {/* Green bouncing ball, using pure css. Uses keyframes and animations to bounce up and down. */}
                    </Grid>
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'gray',
                        }}
                        s
                    >
                        {/* snow drifting down, it all originates from the line div */}
                        <div className={classes.line}>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '1.5s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '.2s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '-.4s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '.4s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '1s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '.35s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '1.2s' }}
                            ></div>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '.5s' }}
                            ></div>
                        </div>
                    </Grid>
                    {/* convincing sun graphic, focus on making the sun particles around it first*/}
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div className={classes.sunOrb}>
                            <div>SUN RAYS</div>
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    {/* Particles that connect a line when they get close */}
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                        }}
                    >
                        <div className={classes.containerDots}>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                            <div className={classes.connectingDots}></div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                            backgroundColor: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* MEME */}
                        <div>
                            <div className={classes.text}>
                                Roses are
                                <span className={classes.roses}> red</span>,
                            </div>
                            <div className={classes.text}>
                                Violet's are
                                <span className={classes.violets}> blue</span>,
                            </div>
                            <div className={classes.punchline}>
                                Uncaught SyntaxError:
                                <br />
                                <span className={classes.errorPart2}>
                                    at line 2
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                        }}
                    >
                        {/* create a div that react to user interaction*/}
                        <div>onclick here</div>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                        }}
                    >
                        3 {/* Add css graphic here */}
                    </Grid>
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                        }}
                    >
                        6 {/* Add css graphic here */}
                    </Grid>
                    <Grid
                        item
                        style={{
                            width: '350px',
                            height: '250px',
                            borderStyle: 'solid',
                            margin: 5,
                        }}
                    >
                        9 {/* Add css graphic here */}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserLanding
