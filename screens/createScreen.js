import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '../context/BlogContext'

export default function createScreen() {
 const {data,addBlogPost}=  useContext(BlogContext)
  return (
    <View>
      <Text>hello  </Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
      data={data}
      keyExtractor={(blogPosts)=>blogPosts.title}
      renderItem={({item})=>{
        return <Text>{item.title}</Text>
      }
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({})