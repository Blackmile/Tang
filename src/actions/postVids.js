import firebase from 'firebase';
import { saveMediaToStorage } from './random';
require('firebase/firebase-auth')
require('firebase/firestore')
import uuid from 'uuid-random'

export const createPost = (video, thumbnail) => new Promise((resolve, reject) => {
    let storagePostId = uuid()
    let allSavePromises = Promise.all([
        saveMediaToStorage(video, `posts/${firebase.auth().currentUser.uid}/${storagePostId}/video`),
        saveMediaToStorage(thumbnail, `posts/${firebase.auth().currentUser.uid}/${storagePostId}/thumbnail`)
    ])

    allSavePromises
        .then((media) => {
            firebase.firestore()
                .collection('post')
                .add({
                    creator: firebase.auth().currentUser.uid,
                    media,
                    creation: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => resolve())
                .catch(() => reject())
        })
        console.log(allSavePromises)
        .catch(() => reject())
})

export const getPost = (uid = firebase.auth().currentUser.uid) => new Promise((resolve, reject) => {
    firebase.firestore()
    .collection('post')
    .where('creator', '==', uid)
    .orderBy('creation', 'desc')
    .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map(doc => {
            const data = doc.data()
            const id = doc.id
            return {id, ...data}
        })
    })
})