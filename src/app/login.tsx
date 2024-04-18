import { View, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Dimensions, StatusBar } from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";
import { supabase } from "@/services/supabase";

import { ButtonLogin } from "@/components/button-login";
import { InputLogin } from "@/components/input-login";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

      async function handleSignIn() {
        if(!password.trim() || !email.trim()){
          return Alert.alert("Login", "Preencha todos os campos!")
        }
        setLoading(true)
        const { error, } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
    
        if (error) {
        Alert.alert(error.message)
        setLoading(false)
        }else {
          router.navigate("/home")
        }
      }

    return (
        
        <View
  className="bg-gray-100 items-center"
  style={{
    height: Dimensions.get("screen").height - (StatusBar.currentHeight ?? 0),
  }}
>
  <View className="bg-white w-screen max-h-[330px] pt-14 items-center justify-center rounded-b-[40px] gap-8">
    <Image
      className="rounded-full w-40 h-40"
      source={require("@/assets/logo.png")}
    />
    <View className="flex-row gap-32">
      <TouchableOpacity activeOpacity={0.7}>
        <Text className="font-inter-bold text-lg border-b-2 border-green-500 pb-3">
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.navigate("/register")}
      >
        <Text className="font-inter-bold text-lg">Registro</Text>
      </TouchableOpacity>
    </View>
  </View>
  <View className="flex-1 px-12 py-8 w-full">
    <Text className="pb-2 font-inter-bold">Endereço de email</Text>
    <InputLogin>
      <InputLogin.Field
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
    </InputLogin>
    <Text className="pt-4 pb-2 font-inter-bold">Senha</Text>
    <InputLogin>
      <InputLogin.Field placeholder="Senha" onChangeText={setPassword} value={password}/>
    </InputLogin>
    <Link href="/login" className="text-green-500 pt-6 font-inter-bold">
      Esqueceu sua senha?
    </Link>
    <View style={{ marginTop: "auto" }} className="pb-4">
      <ButtonLogin className="" title="Login" onPress={handleSignIn} disabled={loading}/>
    </View>
  </View>
</View>
    )
}