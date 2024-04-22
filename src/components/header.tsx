import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"

type Props = {
    title: string,
}

export function Header( {title}: Props ){
    return(
        <View className="pb-10">
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
        <Ionicons className="absolute" name="chevron-back-outline" size={30} color="black"/>
        </TouchableOpacity>
        <View className="items-center">
        <Text className="font-inter-bold text-xl">{title}</Text>
        </View>
    </View>
    )
}