/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/gradient/gradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ( { children }: Props ) => {

    const { colors, prevColors, setPrevMainColors } = useContext( GradientContext );
    const { primary, secondary } = prevColors;
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn( () => {
            setPrevMainColors( colors );
            fadeOut(0);
        });

    }, [ colors ]);
    
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient 
                colors={[ primary, secondary, 'black' ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.4, y: 0.2 }}
                end={{ x: 0.5, y: 0.5 }}
            />
            <Animated.View 
                style={{ 
                    ...StyleSheet.absoluteFillObject, 
                    opacity,
                }}
            >
                <LinearGradient 
                    colors={[ colors.primary, colors.secondary, 'black' ]}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    // start={{ x: 0.1, y: 0.1 }}
                    start={{ x: 0.4, y: 0.2 }}
                    end={{ x: 0.5, y: 0.5 }}

                />
            </Animated.View>

            { children }
        </View>
    )
}
