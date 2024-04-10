import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";

import { ButtonLogin } from "@/components/button-login";
import { InputLogin } from "@/components/input-login";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        try {
            if(!password.trim() || !email.trim()){
                return Alert.alert("Login", "Preencha todos os campos!")
            }
            router.navigate("/home")

    } catch (error) {
        console.log(error)
    }}

    return (
        
        <View className="flex-1 bg-gray-100 items-center">

            <View className="flex-1 bg-white w-full pt-2 items-center justify-center max-h-[330px] rounded-b-[40px] ">
            <Image className="rounded-full h-44 w-44" source={require("@/assets/logo.png")}/>

            <View className="flex-row gap-32 absolute bottom-0">

            <TouchableOpacity activeOpacity={0.7}>
                <Text className="font-inter-bold text-lg border-b-2 pb-3 border-green-500">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ () => router.navigate("/register")}>
                <Text className="font-inter-bold text-lg">Registro</Text>
            </TouchableOpacity>

            </View>

            </View>
            
            <View className="pr-12 pl-12 pt-8 w-full">

                <Text className="pb-2 font-inter-bold">Endereço de email</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Email" keyboardType="email-address" onChangeText={setEmail}/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-inter-bold">Senha</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Senha" onChangeText={setPassword}/>
                </InputLogin>

                <Link href="/login" className="text-green-500 pt-6 font-inter-bold">Esqueceu sua senha?</Link>

            <View className="flex-1 pt-44">
            <ButtonLogin className="" title="Login" onPress={handleLogin}/>
            </View>
            </View>
        </View>
    )
}