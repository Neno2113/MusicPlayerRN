import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { check, PERMISSIONS } from 'react-native-permissions';

import { PermissionsContext } from '../context/permission/permissionContext';

export const PermissionScreen = () => {

    const { permissions, askStoragePermisiion } = useContext(PermissionsContext);


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Es necesario darle acceso al Storage para que funcione esta app</Text>

            <TouchableOpacity 
                style={ styles.btn }
                activeOpacity={ 0.7}
                onPress={ askStoragePermisiion }
            >
                <Text style={ styles.btnText}>Permiso</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#000',
        width: 300,
        textAlign: 'center',
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#000',
        width: 200,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 9,
    },
    btnText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',

    },
});
