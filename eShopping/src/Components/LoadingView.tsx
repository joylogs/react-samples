import { ActivityIndicator, View } from "react-native"

type Props = {}

const LoadingView = (props: Props) => {
    return (
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <ActivityIndicator size={'large'} color={'grey'} />
        </View>
    )
}

export default LoadingView;