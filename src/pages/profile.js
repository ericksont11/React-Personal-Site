import React from "react";
import profilePic from '../assets/tom.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faSchool, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {

    const [visibility, setVisibility] = React.useState('visible');
    const [text, setText] = React.useState('These are my hobbies');

    const handleHome = () => {
        setVisibility('hidden')
        setText('I like to spend my free time hiking, camping, spending time with my dog Ronnie, trying new food, etc.')
    }

    const styles = {
        page:{
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            display: 'flex'
        },
        row:{
            backgroundColor: '#6690B2',
            borderBottom: '1px black solid'
        },
        div:{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '2.5px',
            boxShadow: '0 1px 2px black; 0 -1px 1px #666 inset; 0 -1px 1px rgba(0,0,0,0.5); inset 0 1px 1px rgba(255,255,255,0.8)',
            textAlign: 'center',
            color: 'white',
            fontSize: '10vh',
            paddingTop: '30vh'
        },
        avatar: {
            borderRadius: '50%',
            height: '50vh',
            width: '50vh',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            border: '5px white solid',
            backgroundColor: '#6690B2',
            visibility: visibility
        },
        centerDiv: {
            borderRadius: '50%',
            height: '50vh',
            width: '50vh',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            border: '5px white solid',
            backgroundColor: '#6690B2',
            textAlign: 'center',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        },
        homeIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            top: '20%'
        },
        workIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            top: '20%'
        },
        educationIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            top: '70%'
        },
        passionsIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            top: '70%'
        }
    }

    return(
        <div style={styles.page}>
            <div className="row" style={styles.row}>
                <div className="column" style={styles.div} onMouseOver={()=> handleHome()} onMouseLeave={()=> setVisibility('visible')}>
                    About Me
                </div>
                <div className="column" style={styles.div}>
                    Projects
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="column" style={styles.div}>
                    Coding Skills
                </div>
                <div className="column" style={styles.div}>
                    Education
                </div>
            </div>
            <div style={styles.centerDiv}>
                {text}
            </div>
            <img alt='profile' src={profilePic} style={styles.avatar}/>
            <FontAwesomeIcon icon={faHome} style={styles.homeIcon} onMouseOver={()=> handleHome()} onMouseLeave={()=> setVisibility('visible')}/>
            <FontAwesomeIcon icon={faLaptopCode} style={styles.workIcon} />
            <FontAwesomeIcon icon={faSchool} style={styles.educationIcon} />
            <FontAwesomeIcon icon={faBriefcase} style={styles.passionsIcon} />
        </div>
    );
}
