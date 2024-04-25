import { ScrollView, View, Image, Text } from "react-native";

export function CartProduct(){
    return(
        <ScrollView>
        <View className="gap-4">
        <View className="flex-row bg-white w-full h-24 border rounded-2xl p-4">
        <Image className="w-16 h-16 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
        <Text className="font-inter-bold">Controle de Xbox</Text>
        <Text className="font-inter-bold text-green-500 pt-2">R$399,90</Text>
        </View>
        </View>
        
        </View>
        </ScrollView>
    )
}