import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.topheadershapesIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/topheadershapes1.png")}
      />
      <Image
        style={styles.logoWhite3Icon}
        resizeMode="cover"
        source={require("../assets/logowhite-3.png")}
      />
      <Text style={styles.welcomeBack}>WELCOMEBACK</Text>
      <Pressable
        style={[styles.signupButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignUp1")}
      >
        <View style={[styles.signupButtonChild, styles.buttonChildLayout]} />
        <Image
          style={[styles.maskGroupIcon, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={styles.navArrow1Icon}
          resizeMode="cover"
          source={require("../assets/navarrow-11.png")}
        />
        <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
      </Pressable>
      <Pressable
        style={[styles.signinButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <LinearGradient
          style={[styles.signinButtonChild, styles.buttonChildLayout]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={[styles.maskGroupIcon, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group13.png")}
        />
        <Image
          style={styles.navArrow1Icon}
          resizeMode="cover"
          source={require("../assets/navarrow-1.png")}
        />
        <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    top: 0,
  },
  buttonLayout: {
    height: 52,
    position: "absolute",
  },
  buttonChildLayout: {
    borderRadius: Border.br_9xl,
    height: 52,
    width: 317,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signTypo: {
    fontSize: FontSize.size_base,
    left: 20,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  topheadershapesIcon: {
    width: 375,
    height: 722,
    position: "absolute",
  },
  logoWhite3Icon: {
    bottom: 686,
    width: 60,
    height: 59,
    left: 45,
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBack: {
    top: 141,
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    left: 45,
    position: "absolute",
  },
  signupButtonChild: {
    borderStyle: "solid",
    borderColor: Color.colorMediumblue_200,
    borderWidth: 1,
  },
  maskGroupIcon: {
    width: 321,
    left: 0,
    top: 0,
  },
  navArrow1Icon: {
    top: 14,
    left: 273,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    color: Color.colorMediumblue_200,
  },
  signupButton: {
    top: 696,
    width: 317,
    left: 29,
    height: 52,
  },
  signinButtonChild: {
    shadowColor: "rgba(27, 57, 255, 0.2)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  signIn: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    left: 20,
    top: 16,
  },
  signinButton: {
    top: 620,
    width: 317,
    left: 29,
    height: 52,
  },
  welcome: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Welcome;
