import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Search } from "@/components/search";

export default function Home() {
    return (
        <View className="flex-1 p-8 px-10 pt-20 bg-gray-100">
            
            <View className="flex-row justify-between">

            <TouchableOpacity activeOpacity={0.7}>
            <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
            <Feather name="shopping-cart" size={30} color="black" />
            </TouchableOpacity>
            
            </View>

            <Text className="font-inter-bold text-[35px] mt-8 mb-14">Produtos incríveis para você</Text>

            <Search placeholder="Pesquisar"/>
        </View>
    )
}