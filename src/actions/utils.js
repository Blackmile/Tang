import * as VideoPicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';

export async function pickVideo() {
  let result = VideoPicker.launchImageLibraryAsync({
    mediaTypes: VideoPicker.MediaTypeOptions.Videos,
    quality: 1,
  });
  return result;
}

export const generateThumbnail = async (source) => {
  try {
    const { uri } = await VideoThumbnails.getThumbnailAsync(
      source,
      {
        time: 5000,
      }
    );
    return uri;
  } catch (e) {
    console.warn(e);
  }
};