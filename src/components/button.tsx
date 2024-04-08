import { Link } from "expo-router"
import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

type Props = TouchableOpacityProps & {
    title: string,
}

export function Button( { title, ...rest }: Props ){
    return (
        <TouchableOpacity activeOpacity={0.7} {...rest}>
            <View className="w-full h-16 items-center bg-white justify-center rounded-full">
                <Text className="font-inter-bold text-lg"> {title} </Text>
            </View>
        </TouchableOpacity>
    )
}