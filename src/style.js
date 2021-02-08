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
    },
    particle: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: 'blue',
    },
})

export default useStyles
