import React from "react";
import profilePic from '../assets/tom.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faSchool, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {

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
            border: '1px white solid'
        },
        education:{
            border: '1px white solid'
        },
        work:{
            border: '1px white solid'
        },
        passions:{
            border: '1px white solid'
        },
        avatar: {
            borderRadius: '50%',
            height: '50vh',
            width: '50vh',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0px 2px 4px #333'
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
                <div className="column" style={styles.home}>
                </div>
                <div className="column" style={styles.education}>
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="column" style={styles.work}>
                </div>
                <div className="column" style={styles.passions}>
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
