import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItem2 from '../components/Card2';
import {useTheme} from '@react-navigation/native';
import {fetchData} from '../Utils/Functions';

export default function SearchScreen({navigation}) {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const [cardData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResult = () => {
    setLoading(true);

    fetchData('q', value).then((data) => {
      if (data.error) {
        alert(data.error.message);
      } else {
        setData(data);
        setLoading(false);
      }
    });
  };

  global.screenHeight = Math.round(Dimensions.get('window').height) - 80;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.background,
          borderBottomColor: colors.border,
        }}>
        <Ionicons
          style={{color: '#3edced', marginRight: 20}}
          name="md-arrow-back"
          size={25}
          onPress={() => navigation.goBack()}
        />

        <TextInput
          style={{
            ...styles.textInput,
            backgroundColor: colors.border,
            color: colors.text,
          }}
          placeholder="search..."
          placeholderTextColor={colors.text}
          onChangeText={(text) => setValue(text)}
          value={value}
          onSubmitEditing={() => fetchResult()}
        />

        <Ionicons
          style={{color: '#3edced', marginLeft: 20}}
          name="md-send"
          size={23}
          onPress={() => fetchResult()}
        />
      </View>

      {loading ? (
        <ActivityIndicator
          style={{marginTop: 10}}
          size="large"
          color="#3edced"
        />
      ) : null}
      <View>
        <FlatList
          contentContainerStyle={{paddingBottom: screenHeight / 7}}
          data={cardData}
          renderItem={({item}) => {
            return (
              <CardItem2
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                channelId={item.snippet.channelId}
                desc={item.snippet.description}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
  },
  textInput: {
    width: '70%',
    height: 40,
    paddingStart: 15,
    borderRadius: 12,
    fontSize: 15,
  },
});
