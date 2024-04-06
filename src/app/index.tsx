import { View, Image, TouchableOpacity, Text } from "react-native"

import { Button } from "@/components/button"

export default function Home() {
    return (
        <View className="flex-1 bg-green-500 items-center pt-40 p-14">

            <Image source={require("@/assets/logo.png")}/>

            <View className="w-full gap-8">
                <Button title="Login com o google"/>
                <Button title="Login"/>
            </View>
            
            <TouchableOpacity activeOpacity={0.7}>
                <Text className="pt-5 text-white font-bold">Nâo possui conta?</Text>
            </TouchableOpacity>
        </View>
    )
}