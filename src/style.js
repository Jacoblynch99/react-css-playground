import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    ball: {
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
        borderRadius: '50%',
        animation: '$bounce .5s cubic-bezier(.5,1,.8,1)',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
    },
    '@keyframes bounce': {
        from: {
            transform: 'translate3d(0, 0, 0)',
        },
        to: {
            transform: 'translate3d(0, -150px, 0)',
        },
    },
    line: {
        width: '100px',
        height: '10px',
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    particle: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        marginLeft: 5,
        animation: '$float 5s',
        animationDirection: 'normal',
        animationIterationCount: 'infinite',
    },
    '@keyframes float': {
        '0%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '20%': {
            transform: 'translate3d(20px, -100px, 0)',
        },
        '40%': {
            transform: 'translate3d(-20px, -100px, 0)',
        },
        '60%': {
            transform: 'translate3d(20px,-100px, 0)',
        },
        '80%': {
            transform: 'translate3d(-20px, -100px, 0)',
        },
        '100%': {
            transform: 'translate3d(0, -100px, 0)',
        },
    },
})

export default useStyles
