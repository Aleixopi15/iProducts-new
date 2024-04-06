import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

type Props = TouchableOpacityProps & {
    title: string,
}

export function Button( { title, ...rest }: Props ){
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View className="w-full h-16 bg-white items-center justify-center rounded-full">
                <Text className="font-bold text-lg"> {title} </Text>
            </View>
        </TouchableOpacity>
    )
}