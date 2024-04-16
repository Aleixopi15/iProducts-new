import { ScrollView, Text, View } from "react-native";

export function Categories() {
    return (
        <ScrollView className="pt-8 max-h-20 -mr-10" horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-5 justify-center h-10">
            <Text className="font-inter-bold text-green-500 text-2xl border-b-2 border-green-500">Geral</Text>
            <Text className="font-inter-bold text-gray-200 text-2xl">Roupas</Text>
            <Text className="font-inter-bold text-gray-200 text-2xl">Cozinha</Text>
            <Text className="font-inter-bold text-gray-200 text-2xl">Eletrônicos</Text>
            <Text className="font-inter-bold text-gray-200 text-2xl">Saúde</Text>
            <Text className="font-inter-bold text-gray-200 text-2xl">Ferramentas</Text>
            </View>
        </ScrollView>
    )
}