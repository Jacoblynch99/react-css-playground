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

const UserLanding = (props) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ width: '100vw', height: '100vh' }}
        >
            <Grid
                item
                xs={3}
                container
                direction="column"
                style={{ width: '25vw' }}
            >
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    1 {/* Add css graphic here */}
                </Grid>
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    4 {/* Add css graphic here */}
                </Grid>
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    7 {/* Add css graphic here */}
                </Grid>
            </Grid>
            <Grid
                item
                xs={3}
                container
                direction="column"
                style={{ width: '25vw' }}
            >
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    2 {/* Add css graphic here */}
                </Grid>
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    5 {/* Add css graphic here */}
                </Grid>
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    8 {/* Add css graphic here */}
                </Grid>
            </Grid>
            <Grid
                item
                xs={3}
                container
                direction="column"
                style={{ width: '25vw' }}
            >
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    3 {/* Add css graphic here */}
                </Grid>
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    6 {/* Add css graphic here */}
                </Grid>
                <Grid
                    item
                    style={{ height: '40vh', borderStyle: 'solid', margin: 5 }}
                >
                    9 {/* Add css graphic here */}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserLanding
