import "../styles/global.css"

import { Slot } from "expo-router"

import { Loading } from "@/components/loading"

import { 
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
 } from '@expo-google-fonts/inter'

 import {
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_500Medium,
    MPLUSRounded1c_700Bold,
    MPLUSRounded1c_900Black,
 } from '@expo-google-fonts/m-plus-rounded-1c'

export default function Layout() {
    const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_500Medium,
    MPLUSRounded1c_700Bold,
    MPLUSRounded1c_900Black,
    })

    if(!fontsLoaded){
        return <Loading/>
    }

    return <Slot /> 
}