import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

import { ButtonLogin } from "@/components/button-login";
import { InputLogin } from "@/components/input-login";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function handleRegister() {
        try {
            if(!password.trim() || !email.trim()){
                return Alert.alert("Registro", "Preencha todos os campos!")
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

            <TouchableOpacity activeOpacity={0.7} onPress={ () => router.navigate("/login")}>
                <Text className="font-inter-bold text-lg">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
                <Text className="font-inter-bold text-lg border-b-2 border-green-500 pb-3">Registro</Text>
            </TouchableOpacity>

            </View>

            </View>
            <View className="pr-12 pl-12 pt-8 w-full">

                <Text className="pb-2 font-inter-bold">Nome e sobrenome</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Nome" onChangeText={setName}/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-inter-bold">Endereço de email</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Email" keyboardType="email-address" onChangeText={setEmail}/>
                </InputLogin>

                <Text className="pb-2 pt-4 font-inter-bold">Senha</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Senha" onChangeText={setPassword}/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-inter-bold">Confirmar senha</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Confirmar senha" onChangeText={setConfirmPassword}/>
                </InputLogin>

            <View className="flex-1 pt-8">
            <ButtonLogin className="" title="Login" onPress={handleRegister}/>
            </View>
            </View>
        </View>
    )
}