import { PermissionsAndroid, Platform } from 'react-native'
if (Platform.OS === 'android' && Platform.Version >= 33) {
  PermissionsAndroid.request('android.permission.POST_NOTIFICATIONS')
}
import { AppRegistry } from 'react-native'
import AppWrapper from './components/app-wrapper'
import './i18n/i18n';

AppRegistry.registerComponent('drip', () => AppWrapper)