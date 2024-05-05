import { createNavigationContainerRef } from "@react-navigation/native";

type RootStackParamList = {
    Splash: undefined
    Login: undefined
    DetailScreen: any
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()