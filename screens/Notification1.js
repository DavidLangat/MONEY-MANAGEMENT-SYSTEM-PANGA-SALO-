import * as React from "react";
import { Image, StyleSheet, Text, View ,Pressable} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Notification1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.notification}> 
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
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.search1Icon}
          resizeMode="cover"
          source={require("../assets/search-1.png")}
        />
      </View>
      <Text style={[styles.youCanCheck, styles.timeFlexBox]}>
        You can check your expenses here
      </Text>
      <View style={[styles.message, styles.messageLayout]}>
        <View style={[styles.profileImage, styles.profileImagePosition]}>
          <Image
            style={[styles.whiteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/white1.png")}
          />
          <Image
            style={[styles.profileImageChild, styles.profileImageChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-61.png")}
          />
        </View>
        <View style={[styles.theresaWebbParent, styles.profileImagePosition]}>
          <Text style={[styles.theresaWebb, styles.sentYou99Typo]}>
            Theresa Webb
          </Text>
          <Text style={[styles.sentYou99, styles.sentYou99Typo]}>
            Sent you $99. Happy Birthday
          </Text>
        </View>
        <Image
          style={[styles.smallArrow4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-4.png")}
        />
        <View style={styles.messageChild} />
      </View>
      <View style={[styles.message1, styles.messageLayout]}>
        <View style={[styles.profileImage, styles.profileImagePosition]}>
          <Image
            style={[styles.whiteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/white2.png")}
          />
          <Image
            style={[styles.profileImageChild, styles.profileImageChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-62.png")}
          />
        </View>
        <View style={[styles.theresaWebbParent, styles.profileImagePosition]}>
          <Text style={[styles.theresaWebb, styles.sentYou99Typo]}>
            Guy Hawkins
          </Text>
          <Text style={[styles.sentYou99, styles.sentYou99Typo]}>
            Sent you $99. Happy Birthday
          </Text>
        </View>
        <Image
          style={[styles.smallArrow4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-4.png")}
        />
        <View style={styles.messageChild} />
      </View>
      <View style={[styles.message2, styles.messageLayout]}>
        <View style={[styles.profileImage, styles.profileImagePosition]}>
          <Image
            style={[styles.whiteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/white3.png")}
          />
          <Image
            style={[styles.profileImageChild, styles.profileImageChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-63.png")}
          />
        </View>
        <View style={[styles.theresaWebbParent, styles.profileImagePosition]}>
          <Text style={[styles.theresaWebb, styles.sentYou99Typo]}>
            Jane Cooper
          </Text>
          <Text style={[styles.sentYou99, styles.sentYou99Typo]}>
            Sent you $99. Happy Birthday
          </Text>
        </View>
        <Image
          style={[styles.smallArrow4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-4.png")}
        />
        <View style={styles.messageChild} />
      </View>
      <View style={[styles.message3, styles.messageLayout]}>
        <View style={[styles.profileImage, styles.profileImagePosition]}>
          <Image
            style={[styles.whiteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/white4.png")}
          />
          <Image
            style={[styles.profileImageChild, styles.profileImageChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-61.png")}
          />
        </View>
        <View style={[styles.theresaWebbParent, styles.profileImagePosition]}>
          <Text style={[styles.theresaWebb, styles.sentYou99Typo]}>
            Arlene McCoy
          </Text>
          <Text style={[styles.sentYou99, styles.sentYou99Typo]}>
            Sent you $99. Happy Birthday
          </Text>
        </View>
        <Image
          style={[styles.smallArrow4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-4.png")}
        />
        <View style={styles.messageChild} />
      </View>
      <View style={[styles.message4, styles.messageLayout]}>
        <View style={[styles.profileImage, styles.profileImagePosition]}>
          <Image
            style={[styles.whiteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/white5.png")}
          />
          <Image
            style={[styles.profileImageChild, styles.profileImageChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-63.png")}
          />
        </View>
        <View style={[styles.theresaWebbParent, styles.profileImagePosition]}>
          <Text style={[styles.theresaWebb, styles.sentYou99Typo]}>
            Courtney Henry
          </Text>
          <Text style={[styles.sentYou99, styles.sentYou99Typo]}>
            Sent you $99. Happy Birthday
          </Text>
        </View>
        <Image
          style={[styles.smallArrow4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-4.png")}
        />
        <View style={styles.messageChild} />
      </View>
      <View style={[styles.message5, styles.messageLayout]}>
        <View style={[styles.profileImage, styles.profileImagePosition]}>
          <Image
            style={[styles.whiteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/white6.png")}
          />
          <Image
            style={[styles.profileImageChild, styles.profileImageChildPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-61.png")}
          />
        </View>
        <View style={[styles.theresaWebbParent, styles.profileImagePosition]}>
          <Text style={[styles.theresaWebb, styles.sentYou99Typo]}>
            Dianne Russell
          </Text>
          <Text style={[styles.sentYou99, styles.sentYou99Typo]}>
            Sent you $99. Happy Birthday
          </Text>
        </View>
        <Image
          style={[styles.smallArrow4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-4.png")}
        />
        <View style={styles.messageChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  light1Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileImageChildPosition: {
    bottom: "0%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  searchLayout: {
    height: 53,
    width: 315,
    position: "absolute",
  },
  messageLayout: {
    height: 56,
    width: 315,
    left: 30,
    position: "absolute",
  },
  profileImagePosition: {
    bottom: "28.57%",
    height: "71.43%",
    top: "0%",
    position: "absolute",
  },
  sentYou99Typo: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    bottom: "12.96%",
    left: "92.59%",
    right: "0%",
    maxWidth: "100%",
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
    color: Color.colorBlack,
    top: "0%",
    left: "0%",
  },
  barsStatusBarIphoneX: {
    height: "100%",
    width: "8.84%",
    right: "91.16%",
    left: "0%",
    top: "0%",
    bottom: "0%",
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
    width: 375,
    overflow: "hidden",
  },
  tabBarIcon: {
    top: 702,
    height: 110,
  },
  searchBarChild: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorGhostwhite_200,
    left: 0,
    height: 53,
    width: 315,
    top: -40,
  },
  search: {
    top: -24,
    left: 55,
    fontFamily: FontFamily.sFProText,
    color: Color.colorMediumslateblue_100,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  search1Icon: {
    top: -23,
    left: 15,
    width: 22,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  searchBar: {
    top: 60,
    left: 30,
  },
  youCanCheck: {
    top: 105,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorDarkslategray,
    width: 301,
    left: 30,
  },
  whiteIcon: {
    height: "259.9%",
    width: "255.08%",
    top: "-50.96%",
    right: "-80.08%",
    bottom: "-108.94%",
    left: "-75%",
    borderRadius: 17,
    position: "absolute",
  },
  profileImageChild: {
    height: "20.72%",
    width: "23.08%",
    top: "79.28%",
    left: "76.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
  },
  profileImage: {
    width: "12.7%",
    right: "87.3%",
    left: "0%",
  },
  theresaWebb: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    top: "0%",
  },
  sentYou99: {
    top: "50%",
    color: Color.colorMediumblue_200,
    fontSize: FontSize.size_base,
  },
  theresaWebbParent: {
    width: "75.24%",
    right: "9.52%",
    left: "15.24%",
  },
  smallArrow4: {
    height: "21.43%",
    width: "2.22%",
    top: "25%",
    bottom: "53.57%",
    left: "97.78%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  messageChild: {
    height: "1.79%",
    width: "100.32%",
    top: "99.11%",
    right: "-0.16%",
    bottom: "-0.89%",
    left: "-0.16%",
    borderStyle: "solid",
    borderColor: Color.colorLavender,
    borderTopWidth: 1,
    position: "absolute",
  },
  message: {
    top: 240,
  },
  message1: {
    top: 312,
  },
  message2: {
    top: 384,
  },
  message3: {
    top: 456,
  },
  message4: {
    top: 528,
  },
  message5: {
    top: 600,
  },
  notification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
 
    overflow: "hidden",
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

export default Notification1;
