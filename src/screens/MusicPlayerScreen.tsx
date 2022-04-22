/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useRef } from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Songs } from '../data/songs';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/gradient/gradientContext';
import { GradientBackground } from '../components/GradientBackground';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { MusicPlayer } from '../components/MusicPlayer';


const { width: screenWidth, height } = Dimensions.get('window');


export const MusicPlayerScreen = () => {

  const { usePlaybackState, setupPlayer, togglePlayback, State, TrackPlayer, useProgress } = useMusicPlayer();
  const playbackState = usePlaybackState();
  const progres = useProgress();

  let carouselRef = useRef<Carousel<any>>();
  const { setMainColors, colors } = useContext( GradientContext );


  useEffect(() => {
    setupPlayer();
  }, []);
 
  useEffect(() => {
    if ( Songs.length > 0 ){
      getCoverColors(0);
    }
  }, []);

  const getCoverColors = async( index:number ) => {
    const music = Songs[index];
    const uri = music.artwork;
    const { primary = 'red', secondary = 'blue'} = await getImageColors( uri );
    setMainColors({ primary, secondary });
  };


  const next = () => {
    carouselRef.current!.snapToNext();
    TrackPlayer.skipToNext();
  };

  const prev = () => {
    carouselRef.current!.snapToPrev();
    TrackPlayer.skipToPrevious();
  };


  return (
    <GradientBackground>
      <StatusBar backgroundColor={ colors.primary } />
      <Carousel
        data={ Songs }
        ref={ (c) => { carouselRef.current = c; }}
        renderItem={ ({ item }) => <MusicPlayer music={ item } />}
        sliderWidth={ screenWidth}
        itemWidth={ screenWidth }
        layout="default"
        scrollEnabled={ false }
        onSnapToItem={ ( index ) => {
          getCoverColors( index );
        }}
      />

      <View style={ styles.slider }>
          <Slider
            value={ progres.position }
            animateTransitions
            thumbStyle={{ backgroundColor: colors.primary, borderColor: '#fff'}}
            trackStyle={{ backgroundColor: '#fff', height: 4, borderColor: colors.primary}}
            minimumValue={0}
            maximumValue={ progres.duration }
            onSlidingComplete={ async(value) => {
              await TrackPlayer.seekTo( value[0] );
            }}
          />
      </View>
      <View style={ styles.labelProgressContainer }>
        <Text>
          { new Date(progres.position * 1000).toISOString().substr(15, 4)}
        </Text>
        <Text>
          { new Date((progres.duration - progres.position) * 1000 ).toISOString().substr(15, 4)}
        </Text>
      </View>
      <View style={ styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={ 0.7 }
          style={ styles.buttonStyles }
          onPress={ prev }
        >
          <Icon name="skip-previous"  size={50} style={styles.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ 0.7 }
          style={ styles.buttonStyles }
          onPress={ () => togglePlayback( playbackState )}
        >
          <Icon name={ playbackState === State.Playing ? 'pause' : 'play-arrow' }  size={50} style={styles.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ 0.7 }
          style={ styles.buttonStyles }
          onPress={ next }
        >
          <Icon name="skip-next"  size={50} style={styles.iconColor} />
        </TouchableOpacity>
      </View>
    </GradientBackground>

  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverContainer:{
    marginBottom: 40,
    elevation: 7,
  },
  playerCover:{
    // flex: 1,
    height: height - 0.4 * height,
    // backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover:{
    width: 250,
    height: 250,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  musicTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
  },
  musicArtist: {
    fontSize: 14,
    color: '#9a9b9e',
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 160,
    marginTop: 30
  },
  iconColor:{
    color: '#fff',
  },
  buttonStyles:{
    borderRadius: 100,
    backgroundColor: 'rgba(181, 177, 177, 0.1)',
    padding: 10,
  },
  slider:{
    marginHorizontal: 30,
    marginBottom: 0,
  },
  labelProgressContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,

  }

});