import { View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { pickVideo, generateThumbnail} from "../actions/utils";
import { auth } from "../actions/firebase";
import { useNavigation } from "@react-navigation/native";
import { createPost } from '../actions/postVids'
import SignIn from './SignOut';


function InsertVids(props) {
  const navigation = useNavigation();
  const [requestRunning, setRequestRunning] = useState(false)
  const [selectedVid, setSelectedVid] = useState('');
  const [srcThumb, setSrcThumb] = useState('');

  const handleUpload = () => {
    setRequestRunning(true)
    createPost(selectedVid, srcThumb)
    .then(() => {
      navigation.navigate('Home')
    })
    .catch(() => setRequestRunning(false))
  }
  
  if(requestRunning){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:400}}>
          <ActivityIndicator color='red' size="large" />
        </View>
      )
  }
  async function handleSelect() {
    const result = await pickVideo();
    if (!result.cancelled) {
      setSrcThumb(await generateThumbnail(result.uri))
      setSelectedVid(result.uri);
  }
}


  return (
    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
      }}>
        {!selectedVid ? (
          <>
            <Text>no video selected</Text>
          </>
        ) : (
          <>
            <Text style={{marginBottom: 20}}> {selectedVid} </Text>
            <Button title='upload video' onPress={handleUpload}/>
          </>
        )}
      </TouchableOpacity>
      <View style={{marginTop: 100 }}>
        <Button title='Select Video' onPress={handleSelect} />
      </View>
    </View>
  )
}

function Upload() {
  const user = auth.currentUser;
    return (
        <View>
           <InsertVids />
        </View>
    )
}

export default Upload;