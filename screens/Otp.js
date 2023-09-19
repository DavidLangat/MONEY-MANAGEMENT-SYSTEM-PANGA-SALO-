import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Otp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otp}>
      <View style={[styles.light1, styles.light1Position]}>
        <View style={styles.barsStatusBarIphoneL}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.barsStatusBarIphoneX}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.otp1Icon}
        resizeMode="cover"
        source={require("../assets/otp-12.png")}
      />
      <Text style={styles.otpVerification}>OTP Verification</Text>
      <Text style={styles.enterMobileNumber}>Enter Mobile Number</Text>
      <Text style={styles.text}>+91 888 888 8887</Text>
      <Text style={[styles.weWillSend, styles.getOtpTypo]}>
        We will send you one-time password to this mobile number
      </Text>
      <View style={styles.otpChild} />
      <Pressable
        style={[styles.getOtpButton, styles.getLayout]}
        onPress={() => navigation.navigate("OtpVerification1")}
      >
        <LinearGradient
          style={[styles.getOtpButtonChild, styles.getLayout]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={[styles.maskGroupIcon, styles.getLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group11.png")}
        />
        <Text style={[styles.getOtp, styles.getOtpTypo]}>Get OTP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  light1Position: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getOtpTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  getLayout: {
    height: 52,
    width: 317,
    position: "absolute",
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    right: "0%",
    bottom: "12.96%",
    left: "92.59%",
  },
  wifiIcon: {
    height: "61.11%",
    width: "4.67%",
    top: "24.06%",
    right: "8.94%",
    bottom: "14.83%",
    left: "86.39%",
  },
  cellularConnectionIcon: {
    height: "59.26%",
    width: "5.18%",
    top: "25.93%",
    right: "15.13%",
    bottom: "14.81%",
    left: "79.69%",
  },
  time: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  barsStatusBarIphoneX: {
    height: "100%",
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "40.91%",
    width: "87.51%",
    top: "29.55%",
    right: "3.82%",
    bottom: "29.55%",
    left: "8.66%",
    position: "absolute",
  },
  light1: {
    width: 375,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  otp1Icon: {
    top: 100,
    left: 76,
    width: 223,
    height: 233,
    position: "absolute",
    overflow: "hidden",
  },
  otpVerification: {
    top: 393,
    left: 85,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    color: Color.colorDarkslategray,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  enterMobileNumber: {
    top: 533,
    left: 117,
    fontSize: FontSize.size_sm,
    color: Color.colorSilver,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 570,
    left: 102,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    color: Color.colorDarkslategray,
    fontWeight: "700",
    position: "absolute",
  },
  weWillSend: {
    top: 452,
    left: 33,
    lineHeight: 24,
    width: 309,
    height: 49,
    color: Color.colorDarkslategray,
  },
  otpChild: {
    top: 599,
    left: 71,
    borderStyle: "solid",
    borderColor: Color.colorMediumblue_200,
    borderTopWidth: 1,
    width: 234,
    height: 1,
    position: "absolute",
  },
  getOtpButtonChild: {
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
    left: 0,
    top: 0,
  },
  maskGroupIcon: {
    left: 0,
    top: 0,
  },
  getOtp: {
    top: 16,
    left: 125,
    color: Color.colorWhite,
  },
  getOtpButton: {
    top: 696,
    left: 29,
  },
  otp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Otp;
