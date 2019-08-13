import React from "react";
import profilePic from '../assets/tom.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faSchool, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {

    const [border, setCount] = React.useState('5px 0px 5px 5px');
    const [shadow, setShadow] = React.useState('none');

    const handleClick = () =>{
        setShadow('0 0 0 black')
        setCount('10px 10px 10px 10px')
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
        home:{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: border,
            shadow: shadow
        },
        work:{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '0px 5px 5px 5px'
        },
        passions:{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '5px 5px 5px 5px'
        },
        education:{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '0px 5px 5px 0px'
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
            border: '5px white solid'
        },
        homeIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            top: '25%'
        },
        workIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            top: '25%'
        },
        educationIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            top: '75%'
        },
        passionsIcon: {
            color: 'white',
            fontSize: '20vh',
            position: 'fixed',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            top: '75%'
        }
    }

    return(
        <div style={styles.page}>
            <div className="row" style={styles.row}>
                <div className="column" style={styles.home} onClick={() => handleClick()}>
                </div>
                <div className="column" style={styles.work}>
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="column" style={styles.passions}>
                </div>
                <div className="column" style={styles.education}>
                </div>
            </div>
            <img alt="profile" src={profilePic} style={styles.avatar}/>
            <FontAwesomeIcon icon={faHome} style={styles.homeIcon} />
            <FontAwesomeIcon icon={faLaptopCode} style={styles.workIcon} />
            <FontAwesomeIcon icon={faSchool} style={styles.educationIcon} />
            <FontAwesomeIcon icon={faBriefcase} style={styles.passionsIcon} />
        </div>
    );
}
