import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmation}>
      <Image
        style={[styles.confirmationChild, styles.maskGroupPosition]}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
      <View style={[styles.dark1, styles.maskGroupPosition]}>
        <View style={styles.barsStatusBarIphoneD}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cellular-connection1.png")}
          />
          <View style={[styles.barsStatusBarIphoneX, styles.timePosition]}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationBar}>
        <Text style={styles.transactions}>Transaction</Text>
        <Image
          style={[styles.navArrow2Icon, styles.timePosition]}
          resizeMode="cover"
          source={require("../assets/navarrow-2.png")}
        />
      </View>
      <Text style={styles.youHaveSuccessfullyContainer}>
        <Text
          style={styles.youHaveSuccessfully}
        >{`You have Successfully sent $99 to `}</Text>
        <Text style={styles.scarlett}>Scarlett</Text>
      </Text>
      <Image
        style={styles.done1Icon}
        resizeMode="cover"
        source={require("../assets/done-1.png")}
      />
      <View style={styles.profileImage}>
        <Image
          style={styles.whiteIcon}
          resizeMode="cover"
          source={require("../assets/white7.png")}
        />
        <Image
          style={styles.profileImageChild}
          resizeMode="cover"
          source={require("../assets/ellipse-64.png")}
        />
      </View>
      <Pressable
        style={[styles.executeButton, styles.buttonGroupLayout]}
        onPress={() => navigation.navigate("Transfer")}
      >
        <LinearGradient
          style={[styles.executeButtonChild, styles.buttonChildLayout]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={[styles.maskGroupIcon, styles.buttonGroupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.executeAgain, styles.executeAgainTypo]}>
          Execute Again
        </Text>
      </Pressable>
      <Pressable
        style={[styles.confirmationButton, styles.buttonGroupLayout]}
        onPress={() => navigation.navigate("Notification1")}
      >
        <View
          style={[styles.confirmationButtonChild, styles.buttonChildLayout]}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.buttonGroupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={[styles.confirmation1, styles.executeAgainTypo]}>
          Confirmation
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timePosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  buttonGroupLayout: {
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
  executeAgainTypo: {
    fontSize: FontSize.size_base,
    top: 16,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  confirmationChild: {
    width: 375,
    height: 250,
    position: "absolute",
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    right: "0%",
    bottom: "12.96%",
    left: "92.59%",
    position: "absolute",
  },
  wifiIcon: {
    height: "61.11%",
    width: "4.67%",
    top: "24.06%",
    right: "8.94%",
    bottom: "14.83%",
    left: "86.39%",
    position: "absolute",
  },
  cellularConnectionIcon: {
    height: "59.26%",
    width: "5.18%",
    top: "25.93%",
    right: "15.13%",
    bottom: "14.82%",
    left: "79.69%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    height: "100%",
    left: "0%",
  },
  barsStatusBarIphoneD: {
    height: "40.91%",
    width: "87.28%",
    top: "29.55%",
    right: "4.08%",
    bottom: "29.55%",
    left: "8.64%",
    position: "absolute",
  },
  dark1: {
    width: 376,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  transactions: {
    left: "49.77%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorWhite,
    top: "0%",
    position: "absolute",
  },
  navArrow2Icon: {
    width: "11.27%",
    right: "88.73%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navigationBar: {
    top: 47,
    width: 213,
    height: 24,
    left: 30,
    position: "absolute",
  },
  youHaveSuccessfully: {
    fontFamily: FontFamily.montserratRegular,
  },
  scarlett: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  youHaveSuccessfullyContainer: {
    top: 351,
    left: 51,
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    width: 272,
    color: Color.colorMediumblue_200,
    textAlign: "center",
    position: "absolute",
  },
  done1Icon: {
    top: 217,
    left: 133,
    width: 110,
    height: 110,
    position: "absolute",
    overflow: "hidden",
  },
  whiteIcon: {
    top: -33,
    left: -51,
    borderRadius: 28,
    width: 180,
    height: 180,
    position: "absolute",
  },
  profileImageChild: {
    top: 62,
    left: 60,
    width: 18,
    height: 16,
    position: "absolute",
  },
  profileImage: {
    top: 445,
    left: 149,
    width: 78,
    height: 78,
    position: "absolute",
  },
  executeButtonChild: {
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
  maskGroupIcon: {
    width: 317,
    height: 52,
    left: 0,
    top: 0,
  },
  executeAgain: {
    left: 100,
    textAlign: "center",
    color: Color.colorWhite,
  },
  executeButton: {
    top: 631,
    width: 317,
    height: 52,
    left: 30,
  },
  confirmationButtonChild: {
    borderStyle: "solid",
    borderColor: Color.colorMediumblue_200,
    borderWidth: 1,
  },
  maskGroupIcon1: {
    width: 321,
    left: 0,
    top: 0,
  },
  confirmation1: {
    left: 105,
    color: Color.colorMediumblue_200,
    textAlign: "left",
  },
  confirmationButton: {
    top: 699,
    left: 29,
    width: 317,
    height: 52,
  },
  confirmation: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Confirmation;
