import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2_15} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241e/3884/6ca7988b7a199f886a271d24f482c687"
        }}
        style={styles.ImageBackground_2_16}
      />
      <View style={styles.View_2_17}>
        <View style={styles.View_2_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_2_19}
          />
          <View style={styles.View_2_24}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_2_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_2_29}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_2_33}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_2_38}
          />
        </View>
      </View>
      <View style={styles.View_2_40}>
        <View style={styles.View_2_41}>
          <Text style={styles.Text_2_41}>Logout</Text>
        </View>
        <View style={styles.View_2_42}>
          <Text style={styles.Text_2_42}>Profile</Text>
        </View>
        <View style={styles.View_2_46}>
          <Text style={styles.Text_2_46}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_2_47}>
        <View style={styles.View_2_48}>
          <Text style={styles.Text_2_48}>Victoria Robertson</Text>
        </View>
        <View style={styles.View_2_49}>
          <Text style={styles.Text_2_49}>A mantra goes here</Text>
        </View>
      </View>
      <View style={styles.View_2_50}>
        <View style={styles.View_2_51}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3803/1c54/7bcca50b68bf63bdec04ce9db482995b"
            }}
            style={styles.ImageBackground_2_52}
          />
          <View style={styles.View_2_53}>
            <Text style={styles.Text_2_53}>Photos</Text>
          </View>
          <View style={styles.View_2_54}>
            <Text style={styles.Text_2_54}>Search</Text>
          </View>
          <View style={styles.View_2_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06bc/16b9/202802ad62f090adec18b72aa07347cc"
              }}
              style={styles.ImageBackground_2_56}
            />
            <View style={styles.View_2_57}>
              <Text style={styles.Text_2_57}>Posts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_61}>
        <View style={styles.View_2_62} />
        <View style={styles.View_2_63}>
          <Text style={styles.Text_2_63}>Header</Text>
        </View>
        <View style={styles.View_2_64}>
          <Text style={styles.Text_2_64}>8m ago</Text>
        </View>
        <View style={styles.View_2_65}>
          <Text style={styles.Text_2_65}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65e/c6f1/ce698d5a212a83ff0521dfd3ac08728f"
          }}
          style={styles.ImageBackground_2_66}
        />
      </View>
      <View style={styles.View_2_67}>
        <View style={styles.View_2_68} />
        <View style={styles.View_2_69}>
          <Text style={styles.Text_2_69}>Header</Text>
        </View>
        <View style={styles.View_2_70}>
          <Text style={styles.Text_2_70}>8m ago</Text>
        </View>
        <View style={styles.View_2_71}>
          <Text style={styles.Text_2_71}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65e/c6f1/ce698d5a212a83ff0521dfd3ac08728f"
          }}
          style={styles.ImageBackground_2_72}
        />
      </View>
      <View style={styles.View_2_73}>
        <View style={styles.View_2_74} />
        <View style={styles.View_2_75}>
          <Text style={styles.Text_2_75}>Header</Text>
        </View>
        <View style={styles.View_2_76}>
          <Text style={styles.Text_2_76}>8m ago</Text>
        </View>
        <View style={styles.View_2_77}>
          <Text style={styles.Text_2_77}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65e/c6f1/ce698d5a212a83ff0521dfd3ac08728f"
          }}
          style={styles.ImageBackground_2_78}
        />
      </View>
      <View style={styles.View_2_79}>
        <View style={styles.View_2_80} />
        <View style={styles.View_2_81}>
          <Text style={styles.Text_2_81}>Header</Text>
        </View>
        <View style={styles.View_2_82}>
          <Text style={styles.Text_2_82}>8m ago</Text>
        </View>
        <View style={styles.View_2_83}>
          <Text style={styles.Text_2_83}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65e/c6f1/ce698d5a212a83ff0521dfd3ac08728f"
          }}
          style={styles.ImageBackground_2_84}
        />
      </View>
      <View style={styles.View_2_85}>
        <View style={styles.View_2_86}>
          <View style={styles.View_2_87} />
          <View style={styles.View_2_88}>
            <View style={styles.View_2_89} />
          </View>
        </View>
        <View style={styles.View_2_90}>
          <View style={styles.View_2_91} />
          <View style={styles.View_2_92} />
          <View style={styles.View_2_93} />
          <View style={styles.View_2_94} />
          <View style={styles.View_2_95} />
        </View>
        <View style={styles.View_2_96} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_15: {
    flexGrow: 1,
    width: 375,
    height: 245,
    minHeight: 245,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 0,
    backgroundColor: "rgba(51, 15, 119, 1)"
  },
  ImageBackground_2_16: {
    width: 158,
    height: 158,
    minHeight: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 128
  },
  View_2_17: {
    flexGrow: 1,
    width: 374,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_18: {
    width: 374,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_19: {
    width: 374,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_2_24: {
    width: 66.661376953125,
    minWidth: 66.661376953125,
    height: 11.336018562316895,
    minHeight: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292.6666564941406,
    top: 17.3306884765625
  },
  ImageBackground_2_25: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.333343505859375,
    top: 0.002685546875
  },
  ImageBackground_2_29: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965570449829102,
    minHeight: 10.965570449829102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027069091796875,
    top: 0
  },
  ImageBackground_2_33: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.3359375
  },
  ImageBackground_2_38: {
    width: 28.42616844177246,
    minWidth: 28.42616844177246,
    height: 11.0888671875,
    minHeight: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.453521728515625,
    top: 17.16748046875
  },
  View_2_40: {
    flexGrow: 1,
    width: 342,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_41: {
    width: 54,
    minWidth: 54,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 8
  },
  Text_2_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_42: {
    width: 94,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 0
  },
  Text_2_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_46: {
    width: 64,
    minWidth: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_2_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_47: {
    width: 272,
    minWidth: 272,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 302
  },
  View_2_48: {
    width: 272,
    minWidth: 272,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_2_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_49: {
    width: 151,
    minWidth: 151,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 44
  },
  Text_2_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_50: {
    flexGrow: 1,
    width: 342,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 389,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_51: {
    width: 342,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_52: {
    width: 342,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_2_53: {
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 16
  },
  Text_2_53: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_54: {
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 16
  },
  Text_2_54: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_55: {
    width: 170.5,
    minWidth: 170.5,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 2
  },
  ImageBackground_2_56: {
    flexGrow: 1,
    width: 170.5,
    height: 46,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_2_57: {
    width: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 14
  },
  Text_2_57: {
    color: "rgba(51, 15, 119, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_61: {
    flexGrow: 1,
    width: 342,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 455,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_62: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_2_63: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_2_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_64: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 2
  },
  Text_2_64: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_65: {
    flexGrow: 1,
    width: 268,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_2_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_66: {
    flexGrow: 1,
    width: 276,
    height: 0.000024128688892233185,
    minHeight: 0.000024128688892233185,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_2_67: {
    flexGrow: 1,
    width: 342,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 548,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_68: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_2_69: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_2_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_70: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 2
  },
  Text_2_70: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_71: {
    flexGrow: 1,
    width: 268,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_2_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_72: {
    flexGrow: 1,
    width: 276,
    height: 0.000024128688892233185,
    minHeight: 0.000024128688892233185,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_2_73: {
    flexGrow: 1,
    width: 342,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 641,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_74: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_2_75: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_2_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_76: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 2
  },
  Text_2_76: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_77: {
    flexGrow: 1,
    width: 268,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_2_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_78: {
    flexGrow: 1,
    width: 276,
    height: 0.000024128688892233185,
    minHeight: 0.000024128688892233185,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_2_79: {
    flexGrow: 1,
    width: 342,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 734,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_80: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_2_81: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_2_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_82: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 2
  },
  Text_2_82: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_83: {
    flexGrow: 1,
    width: 268,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_2_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_84: {
    flexGrow: 1,
    width: 276,
    height: 0.000024128688892233185,
    minHeight: 0.000024128688892233185,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_2_85: {
    flexGrow: 1,
    width: 374,
    height: 83.5,
    minHeight: 83.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 729,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_86: {
    width: 374,
    height: 83,
    top: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_2_87: {
    flexGrow: 1,
    width: 374,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_2_88: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119
  },
  View_2_89: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_90: {
    width: 320,
    minWidth: 320,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 15
  },
  View_2_91: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(51, 15, 119, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_2_92: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_2_93: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_2_94: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 216,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_2_95: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_2_96: {
    flexGrow: 1,
    width: 374,
    height: 0.5,
    minHeight: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(189, 197, 205, 1)"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
