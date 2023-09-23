import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homePage, styles.iconLayout1]}>
      <Image
        style={[styles.homePageChild, styles.tabBarIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Pressable
        style={[]}
        onPress={() => navigation.navigate("Profile")}
      >
      <View style={[styles.imageOnline, styles.imageOnlinePosition]}>
        <Image
          style={styles.whiteIcon}
          resizeMode="cover"
          source={require("../assets/user.png")}
        />
        <Image
          style={styles.imageOnlineChild}
          resizeMode="cover"
          source={require("../assets/ellipse-65.png")}
        />
      </View>
      </Pressable>
      <Pressable
        style={[styles.hamburgerMenu1, styles.imageOnlinePosition]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/hamburger-menu-1.png")}
        />
      </Pressable>
      
      <Pressable
        style={[styles.bankAccountsCard, styles.bankCardLayout]}
        onPress={() => navigation.navigate("TransactionsDetail")}
      >
        <LinearGradient
          style={[styles.bankAccountsCardChild, styles.cardChildShadowBox]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={[styles.maskGroupIcon, styles.dark1Position]}
          resizeMode="cover"
          source={require("../assets/mask-group9.png")}
        />
        <Text style={[styles.checkYourAccount, styles.yourTypo]}>
          Check your Expense balance
        </Text>
        <Image
          style={[styles.smallArrow1, styles.imageOnlinePosition]}
          resizeMode="cover"
          source={require("../assets/small-arrow-1.png")}
        />
      </Pressable>
      <Text style={[styles.goodMorningSukh, styles.yourTypo]}>{`Good Morning
JOHN,`}</Text>
      <View style={[styles.balanceCard, styles.balanceCardLayout]}>
        <View style={[styles.balanceCardChild, styles.balanceCardLayout]} />
        <Text style={[styles.yourAccountBalance, styles.yourTypo]}>
          Your account balance
        </Text>
        <Text style={[styles.text, styles.timeFlexBox]}>KSH.8900.00</Text>
        <Image
          style={styles.more1Icon}
          resizeMode="cover"
          source={require("../assets/more-1.png")}
        />
        <Image
          style={styles.columnsIcon}
          resizeMode="cover"
          source={require("../assets/columns.png")}
        />
      </View>
      {/* <View
        style={[styles.tabBarIcon, styles.tabBarIconPosition]}
        
      
      /> */}
      
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
        style={[styles.tabBarIcon3, styles.tabBarIconPosition3]}
        
        
        source={require("../assets/bell.png")}
      />
      </Pressable>
      
       <Pressable
        onPress={() => navigation.navigate("Expense")}
      >
        <Image
        style={[styles.tabBarIcon2, styles.tabBarIconPosition2]}
        
        
        source={require("../assets/expenses.png")}
      />
      </Pressable> 
       <Pressable
        onPress={() => navigation.navigate("Reports")}
      >
        <Image
        style={[styles.tabBarIcon4, styles.tabBarIconPosition4]}
        
        
        source={require("../assets/report.png")}
      />
      </Pressable>
   
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  tabBarIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  imageOnlinePosition: {
    top: 68,
    position: "absolute",
  },
  dark1Position: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    left: "0%",
    top: "0%",
  },
  timeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  bankCardLayout: {
    height: 146,
    width: 315,
    position: "absolute",
  },
  cardChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
  },
  yourTypo: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  balanceCardLayout: {
    height: 315,
    width: 315,
    position: "absolute",
  },
  homePageChild: {
    height: 290,
    top:-5,
    width:200,
    right:200,
    margin:5,
  },
  whiteIcon: {
    top: 5,
    left: -1,
    borderRadius: 10,
    width: 40,
    height: 40,
    position: "absolute",
  },
  imageOnlineChild: {
    top: 33,
    left: 28,
    width: 10,
    height: 9,
    position: "absolute",
  },
  imageOnline: {
    left: 320,
    width: 50,
    height: 50,
    marginTop:-40
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  hamburgerMenu1: {
    width: 25,
    height: 20,
    left: 25,
     marginTop:-30
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
    color: Color.colorWhite,
    left: "0%",
    top: "0%",
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    height: "100%",
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
    top: 0,
    overflow: "hidden",
  },
  bankAccountsCardChild: {
    shadowColor: "rgba(27, 57, 255, 0.2)",
    shadowRadius: 16,
    elevation: 16,
    backgroundColor: "transparent",
    height: 146,
    width: 315,
    position: "absolute",
  },
  maskGroupIcon: {
    top: -8,
    width: 331,
    height: 178,
  },
  checkYourAccount: {
    top: 49,
    fontSize: FontSize.size_xl,
    width: 182,
    left: 32,
    color: Color.colorWhite,
  },
  smallArrow1: {
    left: 276,
    width: 7,
    height: 12,
    overflow: "hidden",
  },
  bankAccountsCard: {
    top: 537,
    left: 30,
  },
  goodMorningSukh: {
    top: 124,
    left: 60,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
  },
  balanceCardChild: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  yourAccountBalance: {
    top: 32,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
    left: 32,
  },
  text: {
    top: 60,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: "#2d99ff",
    left: 32,
  },
  more1Icon: {
    top: 40,
    left: 267,
    width: 16,
    height: 4,
    position: "absolute",
    overflow: "hidden",
  },
  columnsIcon: {
    top: 123,
    left: 49,
    width: 218,
    height: 161,
    position: "absolute",
  },
  balanceCard: {
    top: 198,
    left: 30,
  },
  tabBarIcon: {
    top: 702,
    height: 110,
  },
  homePage: {
    flex: 1,
    overflow: "hidden",
    // backgroundColor: Color.colorWhite,
  },
   tabBarIconPosition1: {
    width: 30,
    left: 35,
    position: "absolute",
    
  },
   tabBarIcon1: {
    top: 730,
    height: 30,
    
    
  },
   tabBarIconPosition2: {
    width: 30,
    left: 125,
    position: "absolute",
    
  },
   tabBarIcon2: {
    top: 730,
    height: 30,
    
    
  },
     tabBarIconPosition3: {
    width: 30,
    right: 125,
    position: "absolute",
    
  },
   tabBarIcon3: {
    top: 730,
    height: 30,
    
    
  },
     tabBarIconPosition4: {
    width: 30,
    right: 35,
   
    position: "absolute",
    
  },
   tabBarIcon4: {
    top: 730,
    height: 30,
    
    
  },
});

export default HomePage;
