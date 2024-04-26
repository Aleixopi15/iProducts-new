import { View, TouchableOpacity, ActivityIndicator, TouchableOpacityProps, Text } from "react-native"

type Props = TouchableOpacityProps & {
    title: string,
    isLoading?: boolean,
}

export function ButtonLogin( { title, isLoading, ...rest }: Props ){
    return (
        <TouchableOpacity activeOpacity={0.7}  disabled={isLoading} {...rest}>
            <View className="w-full h-[64px] bg-green-500 items-center justify-center rounded-full">
                {isLoading ? (<ActivityIndicator className="text-white" />
                ) : (
                <Text className="text-white font-inter-bold text-lg"> {title} </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}