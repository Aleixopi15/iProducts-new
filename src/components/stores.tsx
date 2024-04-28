import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

export function Stores() {
    return(
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
    <View className="pt-6 gap-3">

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>

    <View className="flex-row items-center p-4 bg-white w-full h-20 rounded-[20px]">
        <Image className="w-14 h-14 rounded-full" source={{ uri: "https://source.unsplash.com/random" }} />
        <View className="pl-4">
            <Text className="font-inter-bold uppercase">Loja da esquina</Text>
            <Text className="font-inter-regular">• Roupas • 2,5km</Text>  
        </View>
        <View className="pl-20"><FontAwesome5 name="heart" size={22} color={colors.gray[200]}/></View>
    </View>


    </View>
    </ScrollView>
    )
}