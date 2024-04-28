import { FlatList, View } from "react-native";


const ProductList = () => {

    const { data: products, isFetching } ;



return (
    
    <View style = {{ 
        paddingTop: 16, 
        paddingLeft: 16, 
        paddingRight: 16,
        backgroundColor: "white"
        }}>
            {isFetching ? () : (
                
            )}

    </View>
    
    
    // {<FlatList 
    // data={}
    // keyExtractor={}
    // renderItem={

    // }>


    // </FlatList>}
);
}