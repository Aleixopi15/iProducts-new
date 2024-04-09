import { View, TextInputProps, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

export function Search({ ...rest }: TextInputProps) {
    return (
    <View className="">
        <View className="w-full h-[60px] flex-row items-center gap-3 p-3 border bg-white border-black/20 rounded-full">
        <Feather className="pl-3" name="search" size={24} color="black" />
        <TextInput 
    className="flex-1 text-black text-base font-inter-regular"
    {...rest}
    />
        </View>
    </View>
    )
}