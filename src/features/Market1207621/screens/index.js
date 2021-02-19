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
      <View style={styles.View_3_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_3_4}
        />
        <View style={styles.View_3_9}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_3_10}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_3_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_3_18}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_3_23}
        />
      </View>
      <View style={styles.View_3_25}>
        <View style={styles.View_3_26}>
          <Text style={styles.Text_3_26}>Filter</Text>
        </View>
        <View style={styles.View_3_27}>
          <Text style={styles.Text_3_27}>Messages</Text>
        </View>
        <View style={styles.View_3_31}>
          <Text style={styles.Text_3_31}>Back</Text>
        </View>
      </View>
      <View style={styles.View_3_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_3_33}
        />
        <View style={styles.View_3_34}>
          <Text style={styles.Text_3_34}>Message here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edc3/0436/3b8a24a32260c92aed44f3ba2d4bf5b2"
          }}
          style={styles.ImageBackground_3_35}
        />
      </View>
      <View style={styles.View_3_50}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07e7/3810/46a0fc89a0685cf8f86e45992168f29b"
          }}
          style={styles.ImageBackground_3_51}
        />
        <View style={styles.View_3_52}>
          <Text style={styles.Text_3_52}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla quam eu faci lisis mollis.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_3_53}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07e7/3810/46a0fc89a0685cf8f86e45992168f29b"
          }}
          style={styles.ImageBackground_3_54}
        />
        <View style={styles.View_3_55}>
          <Text style={styles.Text_3_55}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla quam eu faci lisis mollis.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_3_56}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd29/65dc/c8c95d63a93a5944942d077b910adce7"
          }}
          style={styles.ImageBackground_3_57}
        />
        <View style={styles.View_3_58}>
          <Text style={styles.Text_3_58}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_3_59}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd29/65dc/c8c95d63a93a5944942d077b910adce7"
          }}
          style={styles.ImageBackground_3_60}
        />
        <View style={styles.View_3_61}>
          <Text style={styles.Text_3_61}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_3: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_4: {
    width: 375,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_3_9: {
    width: 66.661376953125,
    minWidth: 66.661376953125,
    height: 11.336018562316895,
    minHeight: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.3306884765625
  },
  ImageBackground_3_10: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.3333740234375,
    top: 0.002685546875
  },
  ImageBackground_3_14: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027099609375,
    top: 0
  },
  ImageBackground_3_18: {
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
  ImageBackground_3_23: {
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
  View_3_25: {
    flexGrow: 1,
    width: 343,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_26: {
    width: 39,
    minWidth: 39,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    top: 8
  },
  Text_3_26: {
    color: "rgba(51, 15, 119, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_27: {
    width: 149,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 0
  },
  Text_3_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_31: {
    width: 38,
    minWidth: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_3_31: {
    color: "rgba(51, 15, 119, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_32: {
    flexGrow: 1,
    width: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 746,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_33: {
    width: 343,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_3_34: {
    width: 122,
    minWidth: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  Text_3_34: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_35: {
    width: 34,
    minWidth: 34,
    height: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 8
  },
  View_3_50: {
    width: 235,
    minWidth: 235,
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_51: {
    width: 235,
    height: 126,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_3_52: {
    flexGrow: 1,
    width: 203,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 15
  },
  Text_3_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_53: {
    width: 235,
    minWidth: 235,
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 474,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_54: {
    width: 235,
    height: 126,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_3_55: {
    flexGrow: 1,
    width: 203,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 15
  },
  Text_3_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_56: {
    width: 235,
    minWidth: 235,
    height: 86,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 270,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_57: {
    width: 235,
    height: 86,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_3_58: {
    flexGrow: 1,
    width: 203,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 15
  },
  Text_3_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_59: {
    width: 235,
    minWidth: 235,
    height: 86,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 372,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_60: {
    width: 235,
    height: 86,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_3_61: {
    flexGrow: 1,
    width: 203,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 15
  },
  Text_3_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
