import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ProfileCompleted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileCompleted}>
      <LinearGradient
        style={[styles.profileCompletedChild, styles.dark1Position]}
        locations={[0, 1]}
        colors={["rgba(73, 96, 249, 0.84)", "#1937fe"]}
        useAngle={true}
        angle={167.25}
      />
      <Pressable
        style={[styles.signupButton, styles.signupLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <View style={[styles.signupButtonChild, styles.childPosition]} />
        <Image
          style={[styles.maskGroupIcon, styles.dark1Position]}
          resizeMode="cover"
          source={require("../assets/mask-group10.png")}
        />
        <View style={styles.completeText}>
          <Text style={styles.complete}>Complete</Text>
          <Image
            style={[styles.tick1Icon, styles.tick1IconLayout]}
            resizeMode="cover"
            source={require("../assets/tick-11.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.dark1, styles.dark1Position]}>
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
          <View style={styles.barsStatusBarIphoneX}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.leftArrow1Icon}
        resizeMode="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <View style={styles.profileImage}>
        <View style={[styles.purple, styles.blueLayout]} />
        <View style={[styles.blue, styles.blueLayout]} />
        <Image
          style={styles.whiteIcon}
          resizeMode="cover"
          source={require("../assets/white10.png")}
        />
      </View>
      <View style={[styles.username, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Text style={styles.username2}>Username</Text>
          <Text style={[styles.sukhMahey, styles.maheyTypo]}>Sukh_Mahey</Text>
          <Image
            style={[styles.tick1Icon1, styles.tick1IconLayout]}
            resizeMode="cover"
            source={require("../assets/tick-1.png")}
          />
        </View>
      </View>
      <View style={[styles.firstName, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Text style={styles.username2}>First Name</Text>
          <Text style={[styles.sukhMahey, styles.maheyTypo]}>Sukh</Text>
          <Image
            style={[styles.tick1Icon1, styles.tick1IconLayout]}
            resizeMode="cover"
            source={require("../assets/tick-1.png")}
          />
        </View>
      </View>
      <View style={[styles.lastName, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Text style={styles.username2}>Last Name</Text>
          <Text style={[styles.mahey, styles.maheyTypo]}>Mahey</Text>
          <Image
            style={[styles.tick1Icon1, styles.tick1IconLayout]}
            resizeMode="cover"
            source={require("../assets/tick-1.png")}
          />
        </View>
      </View>
      <View style={[styles.dob, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Text style={styles.username2}>Date of Birth</Text>
          <Text style={[styles.text, styles.maheyTypo]}>15-12-2077</Text>
          <Image
            style={[styles.tick1Icon1, styles.tick1IconLayout]}
            resizeMode="cover"
            source={require("../assets/tick-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dark1Position: {
    left: 0,
    top: 0,
  },
  signupLayout: {
    width: 317,
    height: 52,
  },
  childPosition: {
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  tick1IconLayout: {
    height: 13,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  blueLayout: {
    transform: [
      {
        rotate: "36deg",
      },
    ],
    height: 300,
    width: 300,
    borderRadius: Border.br_131xl,
    position: "absolute",
  },
  usernameLayout: {
    height: 58,
    width: 315,
    position: "absolute",
  },
  maheyTypo: {
    fontFamily: FontFamily.sFProText,
    top: 33,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  profileCompletedChild: {
    width: 375,
    backgroundColor: "transparent",
    position: "absolute",
    height: 812,
  },
  signupButtonChild: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorGhostwhite_100,
    borderWidth: 1,
    height: 52,
    width: 317,
    top: 0,
  },
  maskGroupIcon: {
    width: 321,
    height: 52,
    position: "absolute",
  },
  complete: {
    fontSize: FontSize.size_base,
    color: "#3d56fc",
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tick1Icon: {
    top: 3,
    left: 86,
  },
  completeText: {
    top: 16,
    left: 107,
    width: 104,
    height: 20,
    position: "absolute",
  },
  signupButton: {
    top: 696,
    left: 29,
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
    color: Color.colorWhite,
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
  leftArrow1Icon: {
    top: 60,
    width: 26,
    height: 21,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  purple: {
    top: 131,
    left: 319,
    backgroundColor: "#b52ff8",
  },
  blue: {
    left: 171,
    backgroundColor: "#40cef2",
    top: 0,
  },
  whiteIcon: {
    top: 365,
    left: 58,
    borderRadius: 36,
    width: 144,
    height: 144,
    position: "absolute",
  },
  profileImage: {
    top: -270,
    left: 57,
    width: 562,
    height: 550,
    position: "absolute",
  },
  usernameChild: {
    top: 58,
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 316,
    height: 1,
  },
  username2: {
    color: Color.colorSkyblue_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sukhMahey: {
    color: Color.colorWhite,
    top: 33,
  },
  tick1Icon1: {
    top: 28,
    left: 281,
  },
  username1: {
    left: 0,
    top: 0,
  },
  username: {
    top: 297,
    left: 30,
  },
  firstName: {
    top: 379,
    left: 30,
  },
  mahey: {
    color: "#fafeff",
  },
  lastName: {
    top: 461,
    left: 30,
  },
  text: {
    color: "#fafafa",
  },
  dob: {
    top: 543,
    left: 30,
  },
  profileCompleted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default ProfileCompleted;
