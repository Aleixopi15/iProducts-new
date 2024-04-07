import { View, Image, Text, KeyboardAvoidingView } from "react-native";
import { Link } from "expo-router";

import { ButtonLogin } from "@/components/button-login";
import { InputLogin } from "@/components/input-login";

export default function Login() {
    return (
        
        <View className="flex-1 bg-gray-100 items-center">

            <View className="flex-1 bg-white w-full pt-2 items-center justify-center max-h-96 rounded-b-[40px] ">
            <Image className="rounded-full h-44 w-44" source={require("@/assets/logo.png")}/>
            </View>
            <View className="pr-12 pl-12 pt-8 w-full">

                <Text className="pb-2 font-semibold">Endereço de email</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Email"/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-semibold">Senha</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Senha"/>
                </InputLogin>

                <Link href="/login" className="text-green-500 pt-6 font-bold">Esqueceu sua senha?</Link>

            <View className="flex-1 pt-44">
            <ButtonLogin className="" title="Login" />
            </View>
            </View>
        </View>
    )
}