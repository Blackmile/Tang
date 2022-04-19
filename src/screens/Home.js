import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions } from 'react-native';
import { VideoSingle } from '../actions/video';
import { getFeed } from '../actions/posts';


export default function Home() {
  const [posts, setPosts] = useState([])
  const mediaRefs = useRef([])

  useEffect(() => {
    getFeed().then(setPosts)
  }, [])
  

  const onViewableItemsChanged = useRef(({changed}) => {
    changed.forEach(element => {
      const cell = mediaRefs.current[element.key]
      if(cell) {
        // console.log()
        if(element.isViewable){
          cell.play()
        }else{
          cell.stop()
        }
      }
    })
  })
  const renderItem = ({ item, index }) => {
    return (
      <View style={{flex: 1, height: Dimensions.get('window').height - 71, backgroundColor: 'black', padding: 30}}>
        <VideoSingle item={item} ref={VideoSingleRef => (mediaRefs.current[item.id] = VideoSingleRef)} />
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 0
        }}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={item => item.id}
        decelerationRate={'normal'}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}