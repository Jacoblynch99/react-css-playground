import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    ball: {
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
        borderRadius: '50%',
        animation: '$bounce .5s cubic-bezier(.5,1,.9,1)',
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
})

export default useStyles
