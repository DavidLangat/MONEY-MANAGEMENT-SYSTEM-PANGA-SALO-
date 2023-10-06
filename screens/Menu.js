import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
     
      <Pressable
        style={styles.menuChild}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Image
        style={[styles.menuItem, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Pressable
     onPress={() => navigation.navigate("Onboarding1")}>
      <View style={[styles.signOutButton, styles.signLayout]}>
        <View style={[styles.signOutButtonChild, styles.signLayout]} />
        <Text style={styles.signOut}>Sign Out</Text>
        <Image
          style={styles.logOut1}
          resizeMode="cover"
          source={require("../assets/log-out-1.png")}
        />
          <Image
          style={[styles.maskGroupIcon, styles.confirmationLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group1.png")}
        />
      </View>
      </Pressable>
      <View style={[styles.profileInfo, styles.profileInfoLayout]}>
        <View style={[styles.imageOnline, styles.profileInfoLayout]}>
          <Image
            style={[styles.whiteIcon, styles.signLayout]}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
          <Image
            style={styles.imageOnlineChild}
            resizeMode="cover"
            source={require("../assets/ellipse-65.png")}
          />
        </View>
        <View style={styles.nameParent}>
          <Text style={[styles.nameb, styles.namePosition]}>
           John Doe
          </Text>
          <Text style={[styles.name, styles.namePosition]}>
            @John
          </Text>
        </View>
      </View>
      <Image
        style={[styles.menuInner, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Pressable  onPress={() => navigation.navigate("Income")}>
      <View style={[styles.payments, styles.paymentsPosition]}>
        <View style={styles.payments1Parent}>
          <Image
            style={[styles.payments1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/payments-1.png")}
          />
          <Text style={[styles.payments1, styles.myCards1Typo]}>Income</Text>
        </View>
        <Image
          style={[styles.smallArrow2, styles.smallLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-2.png")}
        />
      </View>
      </Pressable>
      
      <Pressable  onPress={() => navigation.navigate("TrackGoals")}>
      <View style={[styles.transactions, styles.paymentsPosition]}>
        <View style={styles.payments1Group}>
          <Image
            style={[styles.payments1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/payments-11.png")}
          />
          <Text style={[styles.transactions1, styles.savingsPosition]}>
            Track Goals
          </Text>
        </View>
        <Image
          style={[styles.smallArrow21, styles.smallLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-2.png")}
        />
      </View>
      </Pressable>

      <Pressable  onPress={() => navigation.navigate("Education")}>
      <View style={styles.myCards}>
        <View style={styles.payments1Container}>
          <Image
            style={[styles.payments1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/payments-12.png")}
          />
          <Text style={[styles.myCards1, styles.myCards1Typo]}>Education</Text>
        </View>
        <Image
          style={[styles.smallArrow22, styles.smallLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-2.png")}
        />
      </View>
      </Pressable>
      <Pressable  onPress={() => navigation.navigate("Advisor")}>
      <View style={styles.promotions}>
        <View style={styles.promotionsWrapper}>
          <Text style={[styles.promotions1, styles.myCards1Typo]}>
             Advisors
          </Text>
        </View>
        <Image
          style={[styles.smallArrow23, styles.smallLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-2.png")}
        />
        <Image
          style={styles.promotions1Icon}
          resizeMode="cover"
          source={require("../assets/promotions-1.png")}
        />
      </View>
      </Pressable>
     
    </View>
  );
};

const styles = StyleSheet.create({
    maskGroupIcon: {
    width: 321,
    right:96 ,
    top: 0,
  },
 
  
  menuPosition: {
    width: 281,
    left: 0,
    position: "absolute",
  },
  signLayout: {
    height: 50,
    position: "absolute",
  },
  profileInfoLayout: {
    height: 50,
    position: "absolute",
  },
  namePosition: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  paymentsPosition: {
    left: 35,
    height: 22,
    position: "absolute",
  },
  iconPosition: {
    height: 21,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  myCards1Typo: {
    color: Color.colorMediumblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    top: 0,
  },
  smallLayout: {
    height: 12,
    width: 7,
    position: "absolute",
    overflow: "hidden",
  },
  savingsPosition: {
    left: 31,
    position: "absolute",
  },
  homePage1: {
    left: 266,
    width: 375,
    top: 0,
    position: "absolute",
    height: 812,
  },
  menuChild: {
    left: 251,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: 124,
    top: 0,
    position: "absolute",
    height: 812,
  },
  menuItem: {
    top: 0,
    height: 812,
  },
  signOutButtonChild: {
    borderRadius: Border.br_9xl,
    borderStyle: "solid",
    borderColor: Color.colorMediumblue_200,
    borderWidth: 1,
    width: 221,
    height: 72,
    left: 0,
    top: 0,
  },
  signOut: {
    top: 12,
    left: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorMediumblue_200,
    width: 94,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  logOut1: {
    top: 16,
    left: 176,
    width: 21,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  signOutButton: {
    top: 684,
    width: 221,
    height: 72,
    left: 29,
  },
  whiteIcon: {
    top: 2,
    left: -11,
    borderRadius: 18,
    width: 50,
    
  },
  imageOnlineChild: {
    top: 41,
    left: 30,
    width: 10,
    height: 8,
    position: "absolute",
  },
  imageOnline: {
    width: 50,
    left: 0,
    top: 0,
  },
  nameb: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    top: 0,
  },
  name: {
    top: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray,
  },
  nameParent: {
    top: 7,
    left: 58,
    width: 126,
    height: 37,
    position: "absolute",
  },
  profileInfo: {
    top: 64,
    width: 184,
    left: 30,
  },
  menuInner: {
    top: 167,
    height: 60,
  },
  payments1Icon: {
    width: 22,
    top: 1,
  },
  payments1: {
    left: 29,
    position: "absolute",
  },
  payments1Parent: {
    width: 121,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smallArrow2: {
    left: 207,
    top: 5,
    height: 12,
    width: 7,
  },
  payments: {
    top: 186,
    width: 214,
  },
  transactions1: {
    color: Color.colorMediumblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    top: 0,
  },
  payments1Group: {
    width: 146,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smallArrow21: {
    left: 209,
    top: 5,
    height: 12,
    width: 7,
  },
  transactions: {
    top: 258,
    width: 216,
  },
  myCards1: {
    left: 30,
    position: "absolute",
  },
  payments1Container: {
    width: 114,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smallArrow22: {
    left: 208,
    top: 5,
    height: 12,
    width: 7,
  },
  myCards: {
    top: 330,
    left: 36,
    width: 215,
    height: 22,
    position: "absolute",
  },
  promotions1: {
    left: 0,
    position: "absolute",
  },
  promotionsWrapper: {
    left: 34,
    width: 106,
    top: 1,
    height: 22,
    position: "absolute",
  },
  smallArrow23: {
    top: 6,
    left: 212,
  },
  promotions1Icon: {
    width: 22,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  promotions: {
    top: 401,
    left: 33,
    width: 219,
    height: 23,
    position: "absolute",
  },
  savingsWrapper: {
    left: 39,
    width: 70,
    height: 22,
    top: 0,
    position: "absolute",
  },
  smallArrow24: {
    left: 217,
    top: 5,
    height: 12,
    width: 7,
  },
  savings1Icon: {
    width: 18,
    top: 0,
  },
  savings: {
    top: 474,
    width: 224,
    height: 22,
  },
  menu: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Menu;
