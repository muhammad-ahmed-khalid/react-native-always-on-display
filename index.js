import { NativeModules } from 'react-native';

export const activate = () => NativeModules.KCKeepAwake.activate();
export const deactivate = () => NativeModules.KCKeepAwake.deactivate();