import { View, Image, TouchableOpacity, Text } from "react-native"
import { Link, Redirect } from "expo-router"

import { Button } from "@/components/button"

export default function Home() {
    return (
        <View className="flex-1 bg-green-500 items-center pt-40 p-14">

            <Image source={require("@/assets/logo.png")}/>

            <View className="w-full gap-8">
                <Button title="Login com o google" />
                <Button title="Login" />
            </View>
            
            <TouchableOpacity activeOpacity={0.7}>
                <Link href="/register" className="pt-6 text-white font-bold">Ainda nâo possui conta?</Link>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
                <Link href="/login" className="pt-6 text-white font-bold">LOGIN TESTE</Link>
            </TouchableOpacity>
        </View>
    )
}