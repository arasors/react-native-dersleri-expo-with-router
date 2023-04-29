import {Stack} from "expo-router";

export const unstable_settings = {
    // Used for `(foo)`
    initialRouteName: "index",
    // Used for `(bar)`
    profile: {
        initialRouteName: "arasors"
    }
};

export default function MainLayout(){

    return(
        <Stack>
            <Stack.Screen
                name={"home"}
                options={{title: "Home Screen", headerShown: false}}
            />

            {/*<Tabs.Screen*/}
            {/*    name={"(search)"}*/}
            {/*    options={{title: "Search Screen"}}*/}
            {/*/>*/}

            {/*<Tabs.Screen*/}
            {/*    name={"profile"}*/}
            {/*    options={{title: "Profile Screen"}}*/}
            {/*/>*/}

        </Stack>
    )
}
