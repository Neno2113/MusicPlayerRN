/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';
import { PermissionsContext } from './permissionContext';


export interface PermissionsState{
    storageStatus: PermissionStatus;
};

export const permissionInitState: PermissionsState = {
    storageStatus: 'unavailable',
};

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PermissionsProvider = ( { children}: Props) => {

    const [permissions, setPermissions] = useState( permissionInitState );

    useEffect(() => {

        checkStoragePermisiion();

        AppState.addEventListener('change', state => {

            if ( state !== 'active' ) {return;}

            checkStoragePermisiion();

        });
    }, []);


    const askStoragePermisiion = async() => {
        let permissionStatus: PermissionStatus;

        if ( Platform.OS === 'ios' ){
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );

        } else {
            permissionStatus = await request( PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE );
        }

        if ( permissionStatus === 'blocked' ) {
            openSettings();
        }

        setPermissions({
            ...permissions,
            storageStatus: permissionStatus,
        });
    };

    const checkStoragePermisiion = async() => {
        let permissionStatus: PermissionStatus;

        if ( Platform.OS === 'ios' ){
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );

        } else {
            permissionStatus = await check( PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE );

        }

        setPermissions({
            ...permissions,
            storageStatus: permissionStatus,
        });
    };


    return (
        <PermissionsContext.Provider  value={{
            permissions,
            askStoragePermisiion,
            checkStoragePermisiion,

        }}>
            { children }
        </PermissionsContext.Provider>
    );
};
