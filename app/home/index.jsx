import { View, Text } from "react-native";
import {Stack, useSearchParams, useRouter, Link, Tabs} from "expo-router";
import {AntDesign} from "@expo/vector-icons";

export default function Home() {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize: 60}}>Home</Text>
        </View>
    );
}
