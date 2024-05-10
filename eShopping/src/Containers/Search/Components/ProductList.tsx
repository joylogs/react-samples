import { FlatList, ScrollView, View } from "react-native";
import { useListProducts } from "../../../Hooks/useListProducts";
import { useCallback } from "react";
import { Avatar, List, Text } from 'react-native-paper';
import LoadingView from "../../../Components/LoadingView";

export const ProductList = () => {

    const { data: products, isFetching } = useListProducts();
    const getProductImageURL = useCallback((productId: string) => {
        const IMAGE_BASE = 'https://cdn.dummyjson.com/product-images'
        return `${IMAGE_BASE}/${productId}/1.jpg`
    }, [])

    return (

        <View style={{
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            backgroundColor: "white"
        }}>
            {isFetching ? (
                <LoadingView></LoadingView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{}}>
                        {/* {console.log("-->", products)} */}
                        {
                            products.map((product: any, index: any) => (
                                <List.Accordion
                                    key={index}
                                    title={product.title}
                                    description={product.description}
                                    titleStyle={{
                                        fontWeight: 'bold',
                                    }}
                                    descriptionStyle={{
                                        fontWeight: '300',
                                    }}

                                    left={(props) => (
                                        <Avatar.Image
                                            {...props}
                                            size={64}
                                            source={{ uri: getProductImageURL(product.id.toString()) }}
                                        />
                                    )
                                    }
                                >
                                    <Text>
                                        {product.title}
                                    </Text>

                                    <Text>
                                        Quote Count {product.productCount}
                                    </Text>
                                </List.Accordion>
                            ))
                        }
                    </View>
                </ScrollView>
            )}
        </View>
    )
}