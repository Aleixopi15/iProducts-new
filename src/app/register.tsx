import { View, Image, Text, KeyboardAvoidingView, Alert } from "react-native";
import { router } from "expo-router";

import { ButtonLogin } from "@/components/button-login";
import { InputLogin } from "@/components/input-login";
import { useState } from "react";

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

            <View className="flex-1 bg-white w-full pt-2 items-center justify-center max-h-96 rounded-b-[40px] ">
            <Image className="rounded-full h-44 w-44" source={require("@/assets/logo.png")}/>
            </View>
            <View className="pr-12 pl-12 pt-8 w-full">

                <Text className="pb-2 font-semibold">Nome e sobrenome</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Nome" onChangeText={setName}/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-semibold">Endereço de email</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Email" keyboardType="email-address" onChangeText={setEmail}/>
                </InputLogin>

                <Text className="pb-2 pt-4 font-semibold">Senha</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Senha" onChangeText={setPassword}/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-semibold">Confirmar senha</Text>
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