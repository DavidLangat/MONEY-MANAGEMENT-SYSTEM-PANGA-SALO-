import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <LinearGradient
        style={[styles.purple, styles.blueLayout]}
        locations={[0, 1]}
        colors={["rgba(181, 47, 248, 0)", "#b52ff8"]}
        useAngle={true}
        angle={186.55}
      />
      <LinearGradient
        style={[styles.blue, styles.blueLayout]}
        locations={[0, 1]}
        colors={["rgba(64, 206, 242, 0)", "#40cef2"]}
        useAngle={true}
        angle={191.45}
      />
      <Pressable
        
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
        style={[styles.tabBarIcon1, styles.tabBarIconPosition1]}
        
        
        source={require("../assets/home.png")}
      />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Notification1")}
      >
         <Image
        style={[styles.tabBarIcon2, styles.tabBarIconPosition2]}
        
        
        source={require("../assets/bell.png")}
      />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
        style={[styles.tabBarIcon3, styles.tabBarIconPosition3]}
        
        
        source={require("../assets/user.png")}
      />
      </Pressable>
      <Text style={[styles.profile1, styles.profile1Clr]}>Profile</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>Username</Text>
          <Text style={[styles.sukhMahey, styles.maheyTypo]}>Sukh_Mahey</Text>
        </View>
      </View>
      <View style={[styles.firstName, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>First Name</Text>
          <Text style={[styles.sukhMahey, styles.maheyTypo]}>Sukh</Text>
        </View>
      </View>
      <View style={[styles.lastName, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>Last Name</Text>
          <Text style={[styles.sukhMahey, styles.maheyTypo]}>Mahey</Text>
          <View style={styles.tick1} />
        </View>
      </View>
      <View style={[styles.dob, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>
            Date of Birth
          </Text>
          <Text style={[styles.sukhMahey, styles.maheyTypo]}>15-12-2077</Text>
          <View style={styles.tick1} />
        </View>
      </View>
      <View style={[styles.confirmationButton, styles.confirmationLayout]}>
        <View
          style={[styles.confirmationButtonChild, styles.confirmationLayout]}
        />
        <Image
          style={[styles.maskGroupIcon, styles.confirmationLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.signOut, styles.onlineTypo]}>Sign out</Text>
      </View>
      <Pressable
        style={styles.page1}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/page-16.png")}
        />
      </Pressable>
      <View style={[styles.profileInfo, styles.profileInfoLayout]}>
        <View style={[styles.imageOnline, styles.profileInfoLayout]}>
          <Image
            style={styles.whiteIcon}
            resizeMode="cover"
            source={require("../assets/white.png")}
          />
          <Image
            style={styles.imageOnlineChild}
            resizeMode="cover"
            source={require("../assets/ellipse-6.png")}
          />
        </View>
        <View style={styles.sukhbirMaheyParent}>
          <Text style={[styles.sukhbirMahey, styles.maheyTypo]}>
            Sukhbir Mahey
          </Text>
          <Text style={[styles.online, styles.onlineTypo]}>Online</Text>
        </View>
      </View>
      <View style={styles.profileChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  blueLayout: {
    backgroundColor: "transparent",
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
  light1Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profile1Clr: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  usernameLayout: {
    height: 58,
    width: 315,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    left: 0,
  },
  maheyTypo: {
    color: Color.colorMediumblue_200,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  confirmationLayout: {
    height: 52,
    position: "absolute",
  },
  onlineTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorMediumblue_200,
    textAlign: "left",
    position: "absolute",
  },
  profileInfoLayout: {
    height: 60,
    position: "absolute",
  },
  purple: {
    top: -110,
    left: 366,
  },
  blue: {
    top: -241,
    left: 218,
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
    bottom: "14.82%",
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
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
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
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  tabBarIcon: {
    top: 702,
    height: 110,
  },
  profile1: {
    top: 35,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    left: 30,
  },
  usernameChild: {
    top: 58,
    borderColor: Color.colorLavender,
    borderTopWidth: 1,
    width: 316,
    height: 1,
    position: "absolute",
  },
  username2: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  sukhMahey: {
    top: 33,
    fontSize: FontSize.size_sm,
  },
  username1: {
    left: 0,
    top: 0,
  },
  username: {
    top: 250,
    left: 30,
  },
  firstName: {
    top: 335,
    left: 30,
  },
  tick1: {
    top: 28,
    left: 281,
    width: 18,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  lastName: {
    top: 430,
    left: 30,
  },
  dob: {
    top: 530,
    left: 30,
  },
  confirmationButtonChild: {
    borderRadius: Border.br_9xl,
    borderColor: Color.colorMediumblue_200,
    borderWidth: 1,
    width: 317,
    height: 52,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  maskGroupIcon: {
    width: 321,
    left: 0,
    top: 0,
  },
  signOut: {
    top: 16,
    fontFamily: FontFamily.montserratRegular,
    left: 30,
  },
  confirmationButton: {
    top: 644,
    left: 29,
    width: 317,
    height: 52,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  page1: {
    left: "76%",
    top: "84.16%",
    right: "18.57%",
    bottom: "16.14%",
    width: "5.43%",
    height: "2.7%",
    position: "absolute",
  },
  whiteIcon: {
    top: -9,
    left: -13,
    borderRadius: 22,
    width: 87,
    height: 87,
    position: "absolute",
  },
  imageOnlineChild: {
    top: 49,
    left: 48,
    width: 12,
    height: 11,
    position: "absolute",
  },
  imageOnline: {
    width: 60,
    left: 0,
    top: 0,
  },
  sukhbirMahey: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    top: 0,
  },
  online: {
    top: 32,
    fontWeight: "300",
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_base,
    left: 0,
  },
  sukhbirMaheyParent: {
    top: 4,
    left: 70,
    width: 144,
    height: 51,
    position: "absolute",
  },
  profileInfo: {
    top: 130,
    width: 214,
    left: 30,
  },
  profileChild: {
    top: 60,
    left: 94,
    width: 6,
    height: 7,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  tabBarIconPosition1: {
    width: 30,
    left: 50,
    position: "absolute",
    
  },
   tabBarIcon1: {
    top: 730,
    height: 30,
    
    
  },
   tabBarIconPosition2: {
    width: 30,
    left: 175,
    position: "absolute",
    
  },
   tabBarIcon2: {
    top: 730,
    height: 30,
    
    
  },
     tabBarIconPosition3: {
    width: 30,
    right: 50,
    position: "absolute",
    
  },
   tabBarIcon3: {
    top: 730,
    height: 30,
    
    
  },
});

export default Profile;
