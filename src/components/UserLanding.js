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
                        }}
                        s
                    >
                        {/* balls drifting up from a line */}
                        <div className={classes.line}>
                            <div
                                className={classes.particle}
                                style={{ animationDelay: '-.2s' }}
                            ></div>
                            <div className={classes.particle}></div>
                            <div className={classes.particle}></div>
                            <div className={classes.particle}></div>
                            <div className={classes.particle}></div>
                            <div className={classes.particle}></div>
                            <div className={classes.particle}></div>
                            <div className={classes.particle}></div>
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
                        7 {/* Add css graphic here */}
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
                        2 {/* Add css graphic here */}
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
                        5 {/* Add css graphic here */}
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
                        8 {/* Add css graphic here */}
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
