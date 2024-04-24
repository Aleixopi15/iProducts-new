import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { ButtonLogin } from "@/components/button-login";
import { Button } from "@/components/button";
import { router } from "expo-router";
colors

export default function History() {
    return(
    <View className="flex-1 bg-gray-100 p-8 pt-16">
        <Header title="Histórico de pedidos" />

        <View className="items-center justify-center">
        <MaterialIcons className="pt-32 opacity-80" name="history" size={200} color={colors.gray[200]}/>
        <Text className="font-inter-bold text-3xl">Nenhum pedido</Text>
        <Text className="pt-2 font-inter-medium text-lg text-center">Você não realizou nenhum pedido ainda!</Text>
        </View>
        <View style={{ marginTop: 'auto' }} className="pb-4">
            <ButtonLogin title="Novo pedido" onPress={ () => router.navigate("/home")}/>
        </View>
        
    </View>
    )
}