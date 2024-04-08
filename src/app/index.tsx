import { View, Image, TouchableOpacity, Text } from "react-native"
import { Link, router } from "expo-router"
import { AntDesign } from '@expo/vector-icons';

import { Button } from "@/components/button"

export default function Initial() {

    return (
        <View className="flex-1 bg-green-500 items-center pt-40 p-14">

            <Image source={require("@/assets/logo.png")}/>

            <View className="w-full gap-8">

                <Button title="Login com o google" />

                <Button title="Login" onPress={ () => router.navigate("/login")} />
                
            </View>
            
            <TouchableOpacity activeOpacity={0.7}>
                <Link href="/register" className="pt-6 text-white font-inter-bold">Ainda não possui conta?</Link>
            </TouchableOpacity>
        </View>
    )
}