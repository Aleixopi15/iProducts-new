import { Header } from "@/components/header";
import { View } from "react-native";

export default function Profile() {
    return(
    <View className="flex-1 bg-gray-100 p-8 pt-16">
        <Header title="Meu perfil" />
    </View>
    )
}