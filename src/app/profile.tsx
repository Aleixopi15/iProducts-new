import { Header } from "@/components/header";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    return(
    <View className="flex-1 bg-gray-100 p-8 pt-16">
        <Header title="Meu perfil" />
        <Text className="font-inter-bold text-xl pb-4">Meu perfil</Text>
        <View className="bg-white w-full h-40 rounded-3xl">
        </View>

        <Text className="font-inter-bold text-xl pb-4 pt-12">Informações</Text>
        <View className="gap-8">

        <View className="bg-white w-full h-16 rounded-3xl flex-row items-center px-6 justify-between">
            <Text className="font-inter-medium">Editar perfil</Text><Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>

        <View className="bg-white w-full h-16 rounded-3xl flex-row items-center px-6 justify-between">
            <Text className="font-inter-medium">Pagamentos</Text><Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>

        <View className="bg-white w-full h-16 rounded-3xl flex-row items-center px-6 justify-between">
            <Text className="font-inter-medium">Configurações</Text><Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>

        <View className="bg-white w-full h-16 rounded-3xl flex-row items-center px-6 justify-between">
            <Text className="font-inter-medium">Ajuda</Text><Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
        
        </View>

    </View>
    )
}