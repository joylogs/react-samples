import { FlatList, ScrollView, View } from "react-native";
import { useListProducts } from "../Hooks/useListProducts";
import { useCallback } from "react";
import { Avatar, List, Text } from 'react-native-paper';
import LoadingView from "../Components/LoadingView";

export const ProductList = () => {

    const { data: products, isFetching } = useListProducts();
    const getProductImageURL = useCallback((productName: string, size = 100) => {
        const IMAGE_BASE = 'https://someurl'
        return `${IMAGE_BASE}/${size}/${productName}.jpg`
    }, [])

return (
    
    <View style = {{ 
        paddingTop: 16, 
        paddingLeft: 16, 
        paddingRight: 16,
        backgroundColor: "white"
        }}>
            {isFetching ? (
            <LoadingView></LoadingView>
            ) : (
                <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {{}}>
                {products.map((product: any, index: any) => (
                    <List.Accordion
                        key={index}
                        title={product.name}
                        description={product.description}

                        left={(props) => (
                            <Avatar.Image
                                {...props}
                                size={64}
                                source={{ uri: getProductImageURL(product)}}
                            />
                        )}
                    >
                    <Text>
                        {product.title}
                    </Text>

                    <Text>
                        Quote Count {product.productCount}
                    </Text>
                    </List.Accordion>
                ))}
                </View>
                </ScrollView>
            )}
    </View>
)
}