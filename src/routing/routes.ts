import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum MainRoutes {
    Splash = 'Splash', // display a logo or splash image
    Demo = 'Demo',
}

export type MainStackParamList = {
    [MainRoutes.Splash]: undefined
    [MainRoutes.Demo]: undefined
}

export type MainNavigationProp<RouteName extends keyof MainStackParamList = MainRoutes> = NativeStackNavigationProp<
    MainStackParamList,
    RouteName
>

export const MainStack = createNativeStackNavigator<MainStackParamList>()
