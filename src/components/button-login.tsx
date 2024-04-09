import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

type Props = TouchableOpacityProps & {
    title: string,
}

export function ButtonLogin( { title, ...rest }: Props ){
    return (
        <TouchableOpacity activeOpacity={0.7} {...rest}>
            <View className="w-full h-[64px] bg-green-500 items-center justify-center rounded-full">
                <Text className="text-white font-inter-bold text-lg"> {title} </Text>
            </View>
        </TouchableOpacity>
    )
}