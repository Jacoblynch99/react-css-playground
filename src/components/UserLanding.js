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
import React, { useState } from 'react'
import useStyles from '../style'

const UserLanding = (props) => {
    const classes = useStyles()
    console.log(classes)
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
                        }}
                    >
                        <div className={classes.ball}></div>
                        {/* Orange bouncing ball */}
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
                        4 {/* Add css graphic here */}
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
