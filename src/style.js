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
        '4%': {
            transform: 'translate3d(0, -4px, 0)',
        },
        '8%': {
            transform: 'translate3d(0, -8px, 0)',
        },
        '12%': {
            transform: 'translate3d(0, -12px, 0)',
        },
        '16%': {
            transform: 'translate3d(0, -16px, 0)',
        },
        '20%': {
            transform: 'translate3d(20px, -20px, 0)',
        },
        '24%': {
            transform: 'translate3d(0, -24px, 0)',
        },
        '28%': {
            transform: 'translate3d(0, -28px, 0)',
        },
        '32%': {
            transform: 'translate3d(0, -32px, 0)',
        },
        '36%': {
            transform: 'translate3d(0, -36px, 0)',
        },
        '40%': {
            transform: 'translate3d(-20px, -40px, 0)',
        },
        '44%': {
            transform: 'translate3d(0, -44px, 0)',
        },
        '48%': {
            transform: 'translate3d(0, -48px, 0)',
        },
        '52%': {
            transform: 'translate3d(0, -52px, 0)',
        },
        '56%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '60%': {
            transform: 'translate3d(20px,-60px, 0)',
        },
        '64%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '68%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '72%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '76%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '80%': {
            transform: 'translate3d(-20px, -80px, 0)',
        },
        '84%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '88%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '92%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '96%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '100%': {
            transform: 'translate3d(0, -100px, 0)',
        },
    },
})

export default useStyles
