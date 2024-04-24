import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { ButtonLogin } from "@/components/button-login";



export default function Favorite() {
    return(
    <View className="flex-1 bg-gray-100 p-8 pt-16">
        <Header title="Produtos favoritos" />

        <View className="items-center justify-center">
        <FontAwesome5 className="pt-32 opacity-50" name="heart" size={200} color={colors.gray[200]}/>
        <Text className="font-inter-bold text-3xl">Nenhum item salvo</Text>
        <Text className="pt-2 font-inter-medium text-lg text-center">Você ainda não favoritou nenhum produto!</Text>
        </View>
        <View style={{ marginTop: 'auto' }} className="pb-4">
            <ButtonLogin title="Ver produtos" onPress={ () => router.navigate("/home")}/>
        </View>
        
    </View>
    )
}