import { View, Text } from "react-native";
import {Link} from "expo-router";

export default function Index() {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize: 60}}>Search</Text>

            <Link
                href={{
                    pathname: "home/search/result",
                    params: {
                        name: "Aras"
                    }
                }}
            >
                Go result
            </Link>
        </View>
    );
}
