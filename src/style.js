import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    ball: {
        width: '100px',
        height: '100px',
        backgroundColor: 'orange',
        borderRadius: '50%',
        animation: '$bounce 3000ms 1',
    },
    '@keyframes bounce': {
        '0%': {
            transform: 'translate3d(0, 0, 0)',
        },
        '100%': {
            transform: 'translate3d(0, 150px, 0)',
        },
    },
})

export default useStyles
