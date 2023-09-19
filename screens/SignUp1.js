import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp1 = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={styles.topheadershapesIcon}
        resizeMode="cover"
        source={require("../assets/topheadershapes.png")}
      />
      <Image
        style={styles.logoWhite3Icon}
        resizeMode="cover"
        source={require("../assets/logowhite-3.png")}
      />
      <Text style={[styles.welcomeBack, styles.signUp1Typo]}>WELCOMEBACK</Text>
      <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign up</Text>
      <View style={[styles.emailAddress, styles.emailLayout]}>
        <View style={[styles.emailAddress1, styles.emailLayout]}>
          <View style={styles.emailAddressChild} />
          <Text style={[styles.emailAddress2, styles.emailAddress2Typo]}>
            Email Address
          </Text>
          <Text style={[styles.sukhbirdesigncom, styles.emailAddress2Typo]}>
            Sukhbir@design.com
          </Text>
          <Image
            style={[styles.tick1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/tick-1.png")}
          />
        </View>
      </View>
      <View style={[styles.password, styles.emailLayout]}>
        <View style={[styles.emailAddress1, styles.emailLayout]}>
          <View style={styles.emailAddressChild} />
          <Text style={[styles.emailAddress2, styles.emailAddress2Typo]}>
            Password
          </Text>
          <Text style={[styles.sukhbirdesigncom, styles.emailAddress2Typo]}>
            1234554321
          </Text>
        </View>
        <Image
          style={[styles.eye1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/eye-1.png")}
        />
      </View>
      <Text style={[styles.forgotPassword, styles.signUp2Typo]}>
        Forgot Password?
      </Text>
      <View style={[styles.signinButton, styles.signinLayout]}>
        <LinearGradient
          style={[styles.signinButtonChild, styles.signinLayout]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={[styles.maskGroupIcon, styles.signinLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={styles.navArrow1Icon}
          resizeMode="cover"
          source={require("../assets/navarrow-1.png")}
        />
        <Text style={[styles.signUp2, styles.signUp2Typo]}>Sign up</Text>
      </View>
      <Image
        style={styles.socialIcons}
        resizeMode="cover"
        source={require("../assets/social-icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  emailLayout: {
    height: 58,
    width: 315,
    position: "absolute",
  },
  emailAddress2Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    width: 18,
    left: 281,
    position: "absolute",
    overflow: "hidden",
  },
  signUp2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  signinLayout: {
    height: 52,
    position: "absolute",
  },
  topheadershapesIcon: {
    width: 412,
    height: 400,
    left: 0,
    top: 0,
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
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    fontSize: FontSize.size_7xl,
    left: 45,
  },
  signUp1: {
    top: 335,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorBlack,
    left: 30,
    textAlign: "left",
    fontSize: FontSize.size_7xl,
  },
  emailAddressChild: {
    top: 58,
    borderStyle: "solid",
    borderColor: Color.colorMediumblue_200,
    borderTopWidth: 1,
    width: 316,
    height: 1,
    left: 0,
    position: "absolute",
  },
  emailAddress2: {
    color: Color.colorSilver,
    top: 0,
  },
  sukhbirdesigncom: {
    top: 33,
    color: Color.colorDarkslategray,
  },
  tick1Icon: {
    top: 28,
    height: 13,
  },
  emailAddress1: {
    left: 0,
    top: 0,
  },
  emailAddress: {
    top: 400,
    left: 30,
  },
  eye1Icon: {
    top: 30,
    height: 12,
  },
  password: {
    top: 482,
    left: 32,
  },
  forgotPassword: {
    top: 564,
    left: 33,
    color: Color.colorMediumblue_100,
  },
  signinButtonChild: {
    borderRadius: Border.br_9xl,
    shadowColor: "rgba(27, 57, 255, 0.2)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    width: 317,
    height: 52,
    left: 0,
    top: 0,
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
  signUp2: {
    top: 16,
    left: 20,
    color: Color.colorWhite,
  },
  signinButton: {
    top: 696,
    left: 29,
    width: 317,
    height: 52,
  },
  socialIcons: {
    top: 608,
    left: 119,
    width: 139,
    height: 30,
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp1;
