import React, { useState } from 'react';
import { GradientContext } from './gradientContext';


interface Props {
    children: JSX.Element | JSX.Element[];
}

export interface ImageColors{
    primary: string;
    secondary: string;
}

export const GradientProvider = ({ children }: Props) => {
    
    const [ colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [ prevColors, setPrevColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = ( colorsImg: ImageColors ) => {
        setColors( colorsImg );
    };

    const setPrevMainColors = ( colorsImg: ImageColors ) => {
        setPrevColors( colorsImg );
    };
    
    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
            
        }}>
            { children }
        </GradientContext.Provider>
    )
}
