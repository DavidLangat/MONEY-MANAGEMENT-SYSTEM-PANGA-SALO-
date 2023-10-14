import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import  { useState } from 'react';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    // Create an object with the form data
    const formData = {
        email,
        password,
    };

    // Send a POST request to the PHP script
    console.log(JSON.stringify(formData));
    fetch('http://192.168.1.105:80/pangasolo/signin.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        // Redirect to the home page or show a success message
        // navigation.navigate("HomePage");
        if (data.status === 'error'){
          alert(data.message);
        }
        else {
          navigation.navigate("HomePage1");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
  return (
    <View style={styles.signIn}>
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
      <Text style={[styles.welcomeBack, styles.signIn1Typo]}>WELCOMEBACK</Text>
      <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign in</Text>
      <View style={[styles.emailAddress, styles.emailLayout]}>
        <View style={[styles.emailAddress1, styles.emailLayout]}>
          <View style={styles.emailAddressChild} />
          <Text style={[styles.emailAddress2, styles.emailAddress2Typo]}>
            Email Address
          </Text>
          <TextInput
           style={[styles.name, styles.nameTypo]}
            value={email}
            onChangeText={(text) => setemail(text)}
            placeholder="Enter your Email"
          />
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
         <TextInput
           style={[styles.name, styles.nameTypo]}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your Password"
          />
        </View>
        <Image
          style={[styles.eye1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/eye-1.png")}
        />
      </View>
      <Text style={[styles.forgotPassword, styles.signIn2Typo]}>
        Forgot Password?
      </Text>
      <Pressable
        style={[styles.signinButton, styles.signinLayout]}
        onPress={handleSignIn}
      >
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
        <Text style={[styles.signIn2, styles.signIn2Typo]}>Sign in</Text>
      </Pressable>
      <Image
        style={styles.socialIcons}
        resizeMode="cover"
        source={require("../assets/social-icons1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    top: 24,
    fontSize: FontSize.size_sm,
  },
   nameTypo: {
    color: Color.colorMediumblue_200,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  signIn1Typo: {
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
  signIn2Typo: {
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
  signIn1: {
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
  signIn2: {
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
    width: 138,
    height: 30,
    position: "absolute",
  },
  signIn: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignIn;
