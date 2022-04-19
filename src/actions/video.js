import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Video } from 'expo-av';
import { View } from 'react-native';


export const VideoSingle = forwardRef(({item}, parentRef) => {
  
    const ref = useRef(null);

    useImperativeHandle(parentRef, () => ({
        play,
        unload,
        stop
    }))

    useEffect(() => {
        return () => unload();
    }, [])

    const play = async () => {
        if(ref.current == null){
            return;
        }
        const status = await ref.current.getStatusAsync()
        if(status?.isPlaying) {
            return;
        }
        try {
            await ref.current.playAsync();
        } catch (e) {
            console.log(e)
        }
    }
    const stop = async () => {
        if(ref.current == null){
            return;
        }
        const status = await ref.current.getStatusAsync()
        if(!status?.isPlaying) {
            return;
        }
        try {
            await ref.current.stopAsync();
        } catch (e) {
            console.log(e)
        }
    }
    const unload = async () => {
        console.log(unload)
        if(ref.current == null){
            return;
        }
        try {
            await ref.current.unloadAsync();
        } catch (e) {
            console.log(e)
        }
    }
    
  return (
   <View style={{ flex: 1}}>
      <Video
          ref={ref}
          style={{ flex: 1, marginBottom: 10}}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          shouldPlay={false}
          usePoster
          isLooping
          posterSource={{ uri: item.media[1]}}
          posterStyle={{ resizeMode: 'cover', height: '100%' }}
          source={{uri: item.media[0]}}
        />
        
    </View>
  )
})

export default VideoSingle;