import React, { useState } from 'react';

import Alarm from './Assets/musics/Alarm.mp3';
import Alert from './Assets/musics/Alert.mp3';
import Beep from './Assets/musics/Beep.mp3';
import Bell from './Assets/musics/Bell.mp3';
import Bugle from './Assets/musics/Bugle.mp3';
import Digital from './Assets/musics/Digital.mp3';
import Drop from './Assets/musics/Drop.mp3';
import Horn from './Assets/musics/Horn.mp3';
import Music from './Assets/musics/Music.mp3';
import Ring from './Assets/musics/Ring.mp3';
import Warning from './Assets/musics/Warning.mp3';
import Weapon from './Assets/musics/Weapon.mp3';
import Whistle from './Assets/musics/Whistle.mp3';
import Default from './Assets/musics/Default.mp3';

let audio;

export default function MusicData() {
    const [workBreakMusic, setWorkBreakMusic] = useState({
        work: 'none',
        break: 'none'
    });

    function playControl(type, music) {
        if (audio)
            audio.pause();

        audio = document.querySelector(`.music[data-key=${music}]`);

        if (audio)
            audio.play();

        setWorkBreakMusic({
            ...workBreakMusic,
            [type]: music
        });

    }
    const audioDOM =
        <>
            <audio
                src={Alarm}
                data-key='alarm'
                className="music"
            >
            </audio>
            <audio
                src={Bell}
                data-key='bell'
                className="music"
            >
            </audio>
            <audio
                src={Beep}
                data-key='beep'
                className="music"
            >
            </audio>
            <audio
                src={Alert}
                data-key='alert'
                className="music"
            >
            </audio>
            <audio
                src={Bugle}
                data-key='bugle'
                className="music"
            >
            </audio>
            <audio
                src={Digital}
                data-key='digital'
                className="music"
            >
            </audio>
            <audio
                src={Drop}
                data-key='drop'
                className="music"
            >
            </audio>
            <audio
                src={Horn}
                data-key='horn'
                className="music"
            >
            </audio>
            <audio
                src={Music}
                data-key='music'
                className="music"
            >
            </audio>
            <audio
                src={Ring}
                data-key='ring'
                className="music"
            >
            </audio>
            <audio
                src={Warning}
                data-key='warning'
                className="music"
            >
            </audio>
            <audio
                src={Weapon}
                data-key='weapon'
                className="music"
            >
            </audio>
            <audio
                src={Whistle}
                data-key='whistle'
                className="music"
            >
            </audio>
            <audio
                src={Default}
                data-key='default'
                className="music"
            >
            </audio>
        </>
    return [audioDOM, playControl, workBreakMusic];
}