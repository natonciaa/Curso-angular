interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
 interface Details
    {
        author: string;
        year: number;
 }
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'mess',
    details: {
        author: 'Ed Sheran',
        year: 2015
    }
}

const { song: anotherSong, songDuration:duration, details } = audioPlayer;
const { author, year } = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);
// console.log('Year: ', year);

const [, , trunks='not found']: string[] = ['Goku','Vegeta','Trunks'];
console.log('Personaje 3: ',trunks || 'Personaje no encontrado');



 