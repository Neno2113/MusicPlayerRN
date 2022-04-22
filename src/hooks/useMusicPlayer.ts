import { useEffect } from 'react';
import TrackPlayer, { 
    State,
    usePlaybackState,
    useProgress,
  } from 'react-native-track-player';
import { Songs } from '../data/songs';


export const useMusicPlayer = () => {




    useEffect(() => {
        setupPlayer();
    }, []);

    const setupPlayer = async() => {
         // if app was relaunched and music was already playing, we don't setup again.
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack !== null) {
            return;
        }
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(Songs);
    };

    const togglePlayback = async( playbackState: State  ) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();

        if ( currentTrack != null ){
            if ( playbackState === State.Paused ) {
            await TrackPlayer.play();
            } else {
            await TrackPlayer.pause();
            }
        }
    };


    return {
        TrackPlayer,
        setupPlayer,
        togglePlayback,
        usePlaybackState,
        State,
        useProgress,
    }
}
