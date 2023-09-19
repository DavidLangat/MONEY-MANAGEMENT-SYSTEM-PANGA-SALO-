import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OtpVerification2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpVerification2}>
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
        source={require("../assets/otp-1.png")}
      />
      <Text style={styles.otpVerification}>OTP Verification</Text>
      <Text style={[styles.enterTheOtpContainer, styles.containerLayout]}>
        <Text style={styles.enterTheOtp}>{`Enter the OTP sent to `}</Text>
        <Text style={styles.text}>+91 888 888 8887</Text>
      </Text>
      <Text style={[styles.didntYouReceiveContainer, styles.containerLayout]}>
        <Text
          style={styles.didntYouReceive}
        >{`Didn’t you receive the OTP? `}</Text>
        <Text style={styles.resendOtp}>Resend OTP</Text>
      </Text>
      <View style={styles.otpNumber}>
        <View style={[styles.otpNumberChild, styles.otpLayout]} />
        <View style={[styles.otpNumberItem, styles.otpLayout]} />
        <View style={[styles.otpNumberInner, styles.otpLayout]} />
        <Image
          style={[styles.lineIcon, styles.otpLayout]}
          resizeMode="cover"
          source={require("../assets/line-5.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>7</Text>
        <Text style={[styles.text2, styles.textTypo]}>3</Text>
        <Text style={[styles.text3, styles.textTypo]}>3</Text>
        <Text style={[styles.text4, styles.textTypo]}>3</Text>
      </View>
      <Pressable
        style={[styles.verifyButton, styles.verifyLayout]}
        onPress={() => navigation.navigate("Profile1")}
      >
        <LinearGradient
          style={[styles.verifyButtonChild, styles.verifyLayout]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={[styles.maskGroupIcon, styles.verifyLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group11.png")}
        />
        <Text style={styles.verify}>Verify</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  light1Position: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  containerLayout: {
    height: 52,
    width: 328,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  otpLayout: {
    height: 1,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  verifyLayout: {
    width: 317,
    height: 52,
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
    textAlign: "left",
    color: Color.colorBlack,
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
    left: 0,
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
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  enterTheOtp: {
    fontFamily: FontFamily.montserratRegular,
  },
  text: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  enterTheOtpContainer: {
    top: 452,
    left: 23,
    fontSize: FontSize.size_base,
    height: 52,
    width: 328,
    lineHeight: 24,
    color: Color.colorDarkslategray,
  },
  didntYouReceive: {
    color: Color.colorSilver,
  },
  resendOtp: {
    color: Color.colorMediumblue_200,
  },
  didntYouReceiveContainer: {
    top: 622,
    left: 18,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
  },
  otpNumberChild: {
    width: 49,
    borderTopWidth: 1,
    borderColor: Color.colorMediumblue_200,
    borderStyle: "solid",
    top: 37,
    height: 1,
    left: 0,
  },
  otpNumberItem: {
    left: 72,
    width: 49,
    borderTopWidth: 1,
    borderColor: Color.colorMediumblue_200,
    borderStyle: "solid",
    top: 37,
    height: 1,
  },
  otpNumberInner: {
    left: 144,
    width: 49,
    borderTopWidth: 1,
    borderColor: Color.colorMediumblue_200,
    borderStyle: "solid",
    top: 37,
    height: 1,
  },
  lineIcon: {
    top: 36,
    left: 215,
    width: 48,
  },
  text1: {
    left: 15,
  },
  text2: {
    left: 86,
  },
  text3: {
    left: 160,
  },
  text4: {
    left: 231,
  },
  otpNumber: {
    top: 562,
    left: 55,
    width: 263,
    height: 37,
    position: "absolute",
  },
  verifyButtonChild: {
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
  verify: {
    top: 16,
    left: 136,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  verifyButton: {
    top: 698,
    left: 29,
  },
  otpVerification2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OtpVerification2;
