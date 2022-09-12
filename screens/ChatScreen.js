import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {auth, db} from '../firebase'

const ChatScreen = () => {

const [messages, setMessages] = useState([]);

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(
            snapshot => setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.data()._id, 
                    createdAt: doc.data().createdAt, 
                    text: doc.data().text
                }))
            )
        )
        return unsubscribe;
    }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
        _id, 
        createdAt, 
        text
    }=  messages[0]

    db.collection('chats').add(
        {
            _id, 
            createdAt, 
            text
        }
    )
  }, [])

  return (
    <GiftedChat 
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email
      }}
    />
  )
}

export default ChatScreen
