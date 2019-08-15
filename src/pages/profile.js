import React from 'react';
import profilePic from '../assets/tom.jpg'
import AboutMe from '../components/aboutme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faSchool, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {

    const [visibility, setVisibility] = React.useState('visible');
    const [text, setText] = React.useState('These are my hobbies');

    const handleHome = () => {
        setVisibility('hidden')
        setText('I like to spend my free time hiking, camping, spending time with my dog Ronnie, trying new food, etc.')
    }

    function chg(element, hidden, hidden2, hidden3) {
        document.getElementById('home').style.visibility = 'hidden';
        document.getElementById('avatar').style.visibility = 'hidden';
        document.getElementById('centerDiv').style.visibility = 'hidden';
        document.getElementById('coding').style.visibility = 'hidden';
        document.getElementById('education').style.visibility = 'hidden';
        document.getElementById('projects').style.visibility = 'hidden';
        document.getElementById(element).style.margin = '0vw';
        for(let i=50; i <  101; i++){
            let time = 50*(i-50)
            setTimeout(()=>{
                document.getElementById(hidden).style.width = ''+(100-i)+'vw';
                document.getElementById(hidden).style.height = ''+(100-i)+'vh';
                if(hidden2){
                    document.getElementById(hidden2).style.width = ''+(100-i)+'vw';
                }
                if(hidden3){
                    document.getElementById(hidden3).style.width = ''+(100-i)+'vw';
                }
                document.getElementById(element).style.width = ''+i+'vw';
                document.getElementById(element).style.height = ''+i+'vh';
                if (i === 80){
                    document.getElementById(hidden).style.visibility = 'hidden';
                    if(hidden2){
                        document.getElementById(hidden2).style.visibility = 'hidden';
                    }
                    if(hidden3){
                        document.getElementById(hidden3).style.visibility = 'hidden';
                    }
                }
                if(i === 100){
                    document.getElementById(hidden).style.display = 'none';
                    if(hidden2){
                        document.getElementById(hidden2).style.display = 'none';
                    }
                    if(hidden3){
                        document.getElementById(hidden3).style.display = 'none';
                    }
                    document.getElementById(element).style.width = '99.5vw';
                    document.getElementById(element).style.height = '99vh';
                }
            },time)
        }
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
            backgroundColor: '#2a547f',
            borderBottom: '1px black solid'
        },
        div:{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '.5vh .25vw .5vh .25vw',
            boxShadow: '0 1px 2px black; 0 -1px 1px #666 inset; 0 -1px 1px rgba(0,0,0,0.5); inset 0 1px 1px rgba(255,255,255,0.8)',
            textAlign: 'center',
            color: 'white',
            fontSize: '10vh',
            overflow: 'hidden',
            position: 'relative'
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
            <div className='row' style={styles.row}>
                <div className='column' id='homeDiv' style={styles.div} onClick={()=> chg('homeDiv', 'projectsDiv')}>
                    <AboutMe
                        style={{visibility:'hidden'}}
                    />
                </div>
                <div className='column' id='projectsDiv' style={styles.div} onClick={()=> chg('projectsDiv', 'homeDiv')}>
                    <div style={{top: '60%', position: 'relative'}}>Data Visualization</div>
                </div>
            </div>
            <div className='row' style={styles.row}>
                <div className='column' id='codingDiv' style={styles.div}  onClick={()=> chg('codingDiv', 'educationDiv', 'homeDiv', 'projectsDiv')}>
                    <div style={{top: '60%', position: 'relative'}}>Animation</div>
                </div>
                <div className='column' id='educationDiv' style={styles.div} onClick={()=> chg('educationDiv', 'codingDiv', 'homeDiv', 'projectsDiv')}>
                    <div style={{top: '60%', position: 'relative'}}>Design</div>
                </div>
            </div>
            <div style={styles.centerDiv} id='centerDiv'>
                {text}
            </div>
            <img alt='profile' id='avatar' src={profilePic} style={styles.avatar}/>
            <FontAwesomeIcon icon={faHome} id='home' style={styles.homeIcon} onMouseOver={()=> handleHome()} onMouseLeave={()=> setVisibility('visible')}/>
            <FontAwesomeIcon icon={faLaptopCode} id='projects' style={styles.workIcon} />
            <FontAwesomeIcon icon={faSchool} id='coding' style={styles.educationIcon} />
            <FontAwesomeIcon icon={faBriefcase} id='education' style={styles.passionsIcon} />
        </div>
    );
}
