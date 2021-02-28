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
    // keyframes for ball bouncing
    '@keyframes bounce': {
        from: {
            transform: 'translate3d(0, 0, 0)',
        },
        to: {
            transform: 'translate3d(0, -150px, 0)',
        },
    },
    // origin point for snow, but it looks like ground
    line: {
        width: '100px',
        height: '10px',
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // snow flakes, which is just composes of circles that are colored white
    particle: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: 'green',
        marginLeft: 5,
        animation: '$float 2s',
        animationDirection: 'reverse',
        animationIterationCount: 'infinite',
        opacity: 0,
    },
    sunOrb: {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        backgroundColor: 'orange',
    },
    // these dots will bounce around the given area and connect a line when they get close to another dot
    connectingDots: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: 'black',
    },
    // this will act like a border for the bounce dots
    containerDots: {
        width: '350px',
        height: '250px',
    },
    // MEME CSS settings
    // TODO Add animation to text when hovered over
    text: {
        color: 'white',
        fontWeight: 500,
        fontSize: 30,
        fontFamily: 'Times New Roman, serif',
        textAlign: 'center',
    },
    // settings for the word roses: color and font weight
    roses: {
        color: '#9B1919',
        fontFamily: 'Brush Script MT, cursive',
        fontWeight: 500,
    },
    // settings for the word violets: color and font weight
    violets: {
        color: '#039DC3',
        fontWeight: 500,
    },
    // setting for the last sentence
    punchline: {
        color: '#FF4343',
        fontWeight: 200,
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
    },
    errorPart2: {
        marginLeft: 30,
    },
    // creating the effect of snow with css, added opacity to the last 20% and first 20% to give it a smooth animation
    '@keyframes float': {
        '0%': {
            transform: 'translate3d(0, 0, 0)',
            opacity: 0,
        },
        '4%': {
            transform: 'translate3d(2px, -4px, 0)',
        },
        '8%': {
            transform: 'translate3d(4px, -8px, 0)',
        },
        '12%': {
            transform: 'translate3d(6px, -12px, 0)',
        },
        '16%': {
            transform: 'translate3d(4px, -16px, 0)',
        },
        '20%': {
            transform: 'translate3d(2px, -20px, 0)',
        },
        '24%': {
            transform: 'translate3d(0, -24px, 0)',
            opacity: 1,
        },
        '28%': {
            transform: 'translate3d(-2px, -28px, 0)',
        },
        '32%': {
            transform: 'translate3d(-4px, -32px, 0)',
        },
        '36%': {
            transform: 'translate3d(-6px, -36px, 0)',
        },
        '40%': {
            transform: 'translate3d(-4px, -40px, 0)',
        },
        '44%': {
            transform: 'translate3d(-2px, -44px, 0)',
        },
        '48%': {
            transform: 'translate3d(0, -48px, 0)',
        },
        '52%': {
            transform: 'translate3d(2px, -52px, 0)',
        },
        '56%': {
            transform: 'translate3d(4px, -55px, 0)',
        },
        '60%': {
            transform: 'translate3d(6px,-60px, 0)',
        },
        '64%': {
            transform: 'translate3d(4px, -64px, 0)',
        },
        '68%': {
            transform: 'translate3d(2px, -68px, 0)',
        },
        '72%': {
            transform: 'translate3d(0, -72px, 0)',
        },
        '76%': {
            transform: 'translate3d(-2px, -76px, 0)',
        },
        '80%': {
            transform: 'translate3d(-4px, -80px, 0)',

            opacity: 1,
        },
        '84%': {
            transform: 'translate3d(-6px, -84px, 0)',
        },
        '88%': {
            transform: 'translate3d(-4px, -88px, 0)',
        },
        '92%': {
            transform: 'translate3d(-2px, -92px, 0)',
        },
        '96%': {
            transform: 'translate3d(0, -96px, 0)',
        },
        '100%': {
            transform: 'translate3d(2px, -100px, 0)',
            opacity: 0,
        },
    },
})

export default useStyles
