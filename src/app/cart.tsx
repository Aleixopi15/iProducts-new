import { View, Text } from "react-native";

import { Header } from "@/components/header";
import { ButtonLogin } from "@/components/button-login";
import { CartProduct } from "@/components/cart-product";

export default function Cart() {
    return(
        <View className="flex-1 bg-gray-100 p-8 pt-16">
            <Header title="Carrinho" />
            <View className="items-center pb-10">
                <Text className="font-inter-regular">deslize em um item para excluir</Text>
            </View>
            
            <CartProduct/>

            <View style={{ marginTop: 'auto' }} className="pb-4 pt-4">
            <View className="border-b opacity-50"></View>
            <View className="flex-row justify-between mb-8 pt-6">
                <Text className="font-inter-bold text-xl">Total:</Text>
                <Text className="font-inter-bold text-xl">R$399,90</Text>
            </View>
            <ButtonLogin title="Completar pedido" />
            </View>
        </View>
    )
}