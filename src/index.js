import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Key(props){
    return(
        <div 
            id={props.value}
            className="key"
            data-key={props.keyCode}
            onClick={()=>props.onClick(props.value)
            }>
            <kbd>{props.value}</kbd>
            <span className="sound">{props.name}</span>
            <audio src={props.soundUrl}></audio>
        </div>
    )
}

class Drum extends React.Component {
    constructor(props){
        super(props);
        this.keys = [
            {
                value: 'A',
                name: 'clap',
                keyCode: 65,
                soundUrl: 'sounds/clap.wav',
            },
            {
                value: 'S',
                name: 'hithat',
                keyCode: 83,
                soundUrl: 'sounds/hihat.wav',
            },
            {
                value: 'D',
                name: 'kick',
                keyCode: 68,
                soundUrl: 'sounds/kick.wav',
            },
            {
                value: 'F',
                name: 'openhat',
                keyCode: 70,
                soundUrl: 'sounds/openhat.wav',
            },
            {
                value: 'G',
                name: 'boom',
                keyCode: 71,
                soundUrl: 'sounds/boom.wav',
            },
            {
                value: 'H',
                name: 'ride',
                keyCode: 72,
                soundUrl: 'sounds/ride.wav',
            }
        ]
    }

    renderKeys(){
        let keysList = [];
        for(let i = 0; i<this.keys.length; i++){
            keysList.push(
                <Key
                key={i}
                value={this.keys[i].value}
                name={this.keys[i].name}
                keyCode={this.keys[i].keyCode}
                soundUrl={this.keys[i].soundUrl}
                onClick={(id)=>this.handleClick(id)}
                />
            );
        }
        return(
            keysList         
        )
    }
    render(){
        return(
            <div className="keys">
              {this.renderKeys()}
            </div>
        )
    }

    handleClick(id){
        const audio = document.querySelector('#' + id + ' > audio');
        audio.play();
    }

    keySoundPlay(){
        window.onkeyup = (e) => {
            const audio = document.querySelector('div[data-key="' + e.keyCode + '"] > audio');
            if(audio){
                audio.play();
            }
            else{
                console.log("There is no key audio por key code: " + e.keyCode);
            }
        }
    }

    componentDidMount () {
        this.keySoundPlay();
    }
}

ReactDOM.render( 
    <Drum /> ,
    document.getElementById('root')
);