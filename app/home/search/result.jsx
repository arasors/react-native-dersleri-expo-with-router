import { View, Text } from "react-native";
import {useSearchParams} from "expo-router";

export default function Result() {

    const params = useSearchParams();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/*<Text style={{fontSize: 60}}>Search Result</Text>*/}
            <Text>{JSON.stringify(params, null, 3)}</Text>
        </View>
    );
}
