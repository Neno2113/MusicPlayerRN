import React from 'react';
import { Image, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { MusicInterface } from '../interfaces/Music';
import { styles } from '../screens/MusicPlayerScreen';

interface Props {
    music: MusicInterface;
}

export const MusicPlayer = ({ music }: Props) => {

  const { usePlaybackState, State } = useMusicPlayer();
  const playbackState = usePlaybackState();
  const { title, artist, artwork  } = music;

    return (
        <View  style={ styles.playerCover }>
            <View style={ styles.coverContainer }> 
            <Image 
                source={ artwork }
                style={ styles.cover }
            />

            </View>
            {
                (playbackState === State.Playing) ?
                    (
                        <Animatable.Text animation="pulse" iterationCount={5} direction="alternate"
                        style={ styles.musicTitle}
                        >{ title }</Animatable.Text>
                    ) : (
                        <Text style={ styles.musicTitle}>{ title }</Text>
                )
            }
            <Text style={ styles.musicArtist}>{ artist }</Text>

        </View>
    );
};
