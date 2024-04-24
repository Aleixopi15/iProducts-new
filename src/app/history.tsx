import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { ButtonLogin } from "@/components/button-login";



export default function History() {
    return(
    <View className="flex-1 bg-gray-100 p-8 pt-16">
        <Header title="Histórico de pedidos" />

        <View className="items-center justify-center">
        <MaterialIcons className="pt-32 opacity-50" name="history" size={200} color={colors.gray[200]}/>
        <Text className="font-inter-bold text-3xl">Nenhum pedido</Text>
        <Text className="pt-2 font-inter-medium text-lg text-center">Você ainda não realizou nenhum pedido!</Text>
        </View>
        <View style={{ marginTop: 'auto' }} className="pb-4">
            <ButtonLogin title="Novo pedido" onPress={ () => router.navigate("/home")}/>
        </View>
        
    </View>
    )
}