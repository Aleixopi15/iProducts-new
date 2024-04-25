import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

type Props = {
    title: string,
    image?: string,
    price: string,
}

export function Products( { title, image, price, }: Props) {
    return(
    <ScrollView horizontal className="-mr-10" showsHorizontalScrollIndicator={false}>
    <View className="flex-row mt-16 gap-3">

    <View className="flex-1 items-center bg-white w-48 max-h-72 rounded-[30px]">
        <Image className="w-32 h-32 rounded-full -mt-8" source={{ uri: "https://source.unsplash.com/random" }} />
        <Text className="pt-5 font-inter-bold uppercase">Loja da esquina</Text>
        <Text className="pt-5 font-inter-regular text-gray-200">Loja com produtos variados, utensilios, eletronicos.</Text>
    </View>

    <View className="flex-1 items-center bg-white w-48 max-h-72 rounded-[30px]">
        <Image className="w-32 h-32 rounded-full -mt-8" source={{ uri: "https://source.unsplash.com/random" }} />
        <Text className="pt-5 font-inter-bold uppercase">Loja da esquina</Text>
        <Text className="pt-5 font-inter-regular text-gray-200">Loja com produtos variados, utensilios, eletronicos.</Text>
    </View>

    <View className="flex-1 items-center bg-white w-48 max-h-72 rounded-[30px]">
        <Image className="w-32 h-32 rounded-full -mt-8" source={{ uri: "https://source.unsplash.com/random" }} />
        <Text className="pt-5 font-inter-bold uppercase">Loja da esquina</Text>
        <Text className="pt-5 font-inter-regular text-gray-200">Loja com produtos variados, utensilios, eletronicos.</Text>
    </View>

    <View className="flex-1 items-center bg-white w-48 max-h-72 rounded-[30px]">
        <Image className="w-32 h-32 rounded-full -mt-8" source={{ uri: "https://source.unsplash.com/random" }} />
        <Text className="pt-5 font-inter-bold uppercase">Loja da esquina</Text>
        <Text className="pt-5 font-inter-regular text-gray-200">Loja com produtos variados, utensilios, eletronicos.</Text>
    </View>

    </View>
    </ScrollView>
    )
}