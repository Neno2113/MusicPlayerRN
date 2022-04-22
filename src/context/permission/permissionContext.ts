import { createContext } from 'react';
import { PermissionsState } from './PermissionsProvider';


type PermissionsContextProps = {
    permissions: PermissionsState;
    askStoragePermisiion: () => void;
    checkStoragePermisiion: () => void;

}

export const PermissionsContext = createContext({} as PermissionsContextProps );