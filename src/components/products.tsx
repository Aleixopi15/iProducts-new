import { View, Text, ScrollView } from "react-native";

type Props = {
    title: string,
    image?: string,
    price: string,
}

export function Products( { title, image, price, }: Props) {
    return(
    <View className="flex-1 bg-white w-52 max-h-52"></View>
    )
}