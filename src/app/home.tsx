import { Text, TouchableOpacity, View } from "react-native";
import { Feather, AntDesign, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Search } from "@/components/search";
import { Categories } from "@/components/categories";

import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Products } from "@/components/products";
import { useState } from "react";

export default function Home() {
    const [isVisibleMenu, setVisibleMenu] = useState(false)

    return (
        <View className="flex-1 p-8 px-10 pt-20 bg-gray-100">
            
            <View className="flex-row justify-between">

            <TouchableOpacity activeOpacity={0.7}>
            <Feather name="menu" size={30} color="black" onPress={ () => setVisibleMenu }/>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
            <Feather name="shopping-cart" size={30} color="black" />
            </TouchableOpacity>
            
            </View>
            <View className="flex-1">
            <Text className="font-inter-bold text-[35px] mt-8 mb-14">Produtos incríveis para você</Text>
            
            
            <Search placeholder="Pesquisar"/>
            
            
            <Categories />
            
            <Products title="Controle de Tv" price="29,90"/>
        
            </View>
            

            <View className="flex-row justify-between">
            <Entypo name="home" size={26} color={colors.green[500]} onPress={ () => router.navigate("/home")}/>
            <FontAwesome5 name="heart" size={22} color={colors.gray[200]} onPress={ () => router.navigate("/favorite")}/>
            <Feather name="user" size={24} color={colors.gray[200]} onPress={ () => router.navigate("/profile")}/>
            <MaterialIcons name="history" size={26} color={colors.gray[200]} onPress={() => router.navigate("/history")}/>
            </View>

            
        </View>
    )
}