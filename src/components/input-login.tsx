import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, View, TextInputProps } from "react-native";

function InputLogin({ children }: { children: ReactNode }){
    return <View className="w-full h-12 flex-row items-center gap-3 border-b border-black">{children}</View>
}

function Field({ ...rest }: TextInputProps){
    return (
    <TextInput 
    className="flex-1 text-black text-base font-regular"
    placeholderTextColor={colors.gray[200]}
    {...rest}
    />
    )
}

InputLogin.Field = Field

export { InputLogin }