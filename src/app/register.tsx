import { View, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Dimensions, StatusBar} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { supabase } from "@/services/supabase";

import { ButtonLogin } from "@/components/button-login";
import { InputLogin } from "@/components/input-login";
import { Loading } from "@/components/loading";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading ] = useState(false)
    
      async function handleSignUp() {
        if(!password.trim() || !email.trim()){
          return Alert.alert("Registro", "Preencha todos os campos!")
        }
        setIsLoading(true)
        const {
          data: { session },
          error,
        } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    
        if (error) {
        Alert.alert(error.message)
        setIsLoading(false)
      }else {
        router.navigate("/home")
      }

        
      }

    return (
        
        <View className="bg-gray-100 items-center " style={{
            height: Dimensions.get("screen").height - (StatusBar.currentHeight ?? 0),
          }}>

            <View className="max-h-[330px] w-screen bg-white pt-14 items-center justify-center rounded-b-[40px] gap-8">
            <Image className="rounded-full h-40 w-40" source={require("@/assets/logo.png")}/>

            <View className="flex-row gap-32">

            <TouchableOpacity activeOpacity={0.7} onPress={ () => router.navigate("/login")}>
                <Text className="font-inter-bold text-lg">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ () => router.navigate("/register")}>
                <Text className="font-inter-bold text-lg border-b-2 pb-3 border-green-500">Registro</Text>
            </TouchableOpacity>

            </View>

            </View>
            
            
            <View className="flex-1 px-12 py-8 w-full">

                <Text className="pb-2 font-inter-bold">Nome completo</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Nome" onChangeText={setName}/>
                </InputLogin>

                <Text className="pt-4 pb-2 font-inter-bold">Endereço de email</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Email" keyboardType="email-address" onChangeText={setEmail} value={email}/>
                </InputLogin>

                <Text className="pb-2 pt-4 font-inter-bold">Senha</Text>
                <InputLogin>
                <InputLogin.Field placeholder="Senha" onChangeText={setPassword} value={password}/>
                </InputLogin>

            <View style={{ marginTop: 'auto' }} className="pb-4">
            <ButtonLogin title="Login" onPress={handleSignUp} isLoading={isLoading}/>
            </View>

            </View>
        
            
        </View>
    )
}