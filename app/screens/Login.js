import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Button,
    Image,
    KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavigationProp } from '@react-navigation/native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
            alert("Sign in failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                {/* <View>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                        <Ionicons name="arrow-back" style={styles.arrow} size={24} color="black" />
                        <Text style={styles.back}>Back</Text>
                    </TouchableOpacity>
                </View> */}
                <Image source={require('../../assets/env2.png')} style={styles.env2} />
                <Text style={styles.heading}>Welcome Back Saathi!</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password" value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                    />
                </View>
                {loading ? (
                    <ActivityIndicator />
                ) : (
                    <>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity
                                style={styles.appButtonContainer1}
                                onPress={signIn}
                            >
                                <Text style={styles.appButtonText}>Login</Text>
                            </TouchableOpacity>

                            <View style={styles.loginOption}>
                                <Text style={styles.logInText}>Don't have an account?</Text>
                                <TouchableOpacity
                                    style={styles.login}
                                    onPress={() => navigation.navigate("SignUp")}>
                                    <Text style={styles.signup}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    arrow: {
        alignSelf: "center",
        color: "green",
        paddingLeft: 3,
        marginLeft: 4,
        borderRadius: 10,
        // width: 250,
        borderWidth: 2,
        borderColor: '#D0E7D2',
        backgroundColor: "#D0E7D2",
        // textAlign:'center'
    },
    backButton: {
        marginBottom: 70,
        marginVertical: 50,
        marginLeft: 12,
        height: 30,
        width: 100,
        color: 'green',
        flexDirection: 'row',

    },
    back: {
        paddingHorizontal: 9,
        // paddingVertical: 4,
        paddingBottom: 4,
        fontSize: 17,
        fontWeight: '500',
        color: 'green',
    },
    env2: {
        alignSelf: 'center',
        height: 250,
        width: 300,
    },
    heading: {
        fontSize: 25,
        color: "#07411B",
        alignSelf: "center",
        fontWeight: '900'
    },
    inputWrapper: {
        alignItems: "center",
        // marginLeft: 50,
        marginTop: 40,
    },
    inpText: {
        color: "#34572F",
        fontSize: 10,
        alignSelf: "flex-start",
        marginTop: 14,
    },
    input: {
        backgroundColor: "#D0E7D2",
        width: 280,
        // height:40,
        alignSelf: "center",
        height: 40,
        borderRadius: 10,
        marginTop: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 3
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 40,
    },
    appButtonContainer1: {
        backgroundColor: "#07411B",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        width: 250,
    },
    appButtonText: {
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
    },
    loginOption: {
        flexDirection: 'row',
    },
    logInText: {
        alignSelf: "center",
        marginTop: 25,
        fontSize: 15,
        marginBottom: 25,
    },
    login: {
        alignSelf: "center",
    },
    signup: {
        alignSelf: "center",
        color: "green",
        marginTop: 25,
        fontSize: 15,
        marginBottom: 25,
        fontWeight: '400',
        textDecorationLine: 'underline'
    }
});

export default Login;
