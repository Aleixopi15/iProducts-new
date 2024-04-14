import { View, Text, TouchableOpacity } from "react-native";

import { Header } from "@/components/header";

export default function History() {
    return(
    <View className="flex-1 bg-gray-100 p-8 pt-16">
        <Header title="Histórico de pedidos" />
    </View>
    )
}