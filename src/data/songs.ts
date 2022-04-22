import { MusicInterface } from '../interfaces/Music';


export const Songs: MusicInterface[] = [
    {
        id: 1,
        title: 'Persona 5 Beneath the Mask',
        artist: 'Persona 5',
        url: require('../assets/audio/persona5-beneath.mp3'),
        artwork: require('../assets/cover/beneath_the_mask.jpg'),
        duration: 278,
    },
    {
        id: 2,
        title: 'Fire Emblem Three Houses - Tearing Through Heaven',
        artist: 'Fire Emblem Three Houses',
        url: require('../assets/audio/FE_Three_Houses_TearingThroughHeaven.mp3'),
        artwork: require('../assets/cover/fe_dimitri.jpg'),
        duration: 172,
    },
    {
        id: 1,
        title: 'Hades - Rage of the Myrmidons',
        artist: 'Darren',
        url: require('../assets/audio/Hades_Rage_of_the_Myrmidons.mp3'),
        artwork: require('../assets/cover/Hades.jpg'),
        duration: 557,
    },
    {
        id: 1,
        title: 'Doom Eternal OST - The Only Thing they Fear is You',
        artist: 'Mick Gordon',
        url: require('../assets/audio/Doom_Eternal_OST-The-Only-Thing-they-Fear-is-You.mp3'),
        artwork: require('../assets/cover/doom_eternal.jpeg'),
        duration: 305,
    },

    {
        id: 1,
        title: 'The Weeknd - Save Your Tears',
        artist: 'The Weeknd',
        url: require('../assets/audio/The_Weeknd_Save_Your_Tears.mp3'),
        artwork: require('../assets/cover/the-weeknd.jpg'),
        duration: 216,
    },

];