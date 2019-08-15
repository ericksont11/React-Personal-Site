import React from 'react';

export default function Profile(props) {

    // const [visibility, setVisibility] = React.useState('visible');
    // const [text, setText] = React.useState('These are my hobbies');
      

    const styles = {
        page:{
            width: '80%',
            height: '80%',
            top: '10%',
            left:'10%',
            padding: 0,
            backgroundColor: 'red',
            position: 'absolute'
        },
    }

    return(
        <div style={styles.page}>

        </div>
    );
}
