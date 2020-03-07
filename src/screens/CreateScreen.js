import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    // const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <BlogPostForm onSubmit={(title, content) => {
        console.log('title', title);
        console.log('content', content);
        addBlogPost(title, content, () => navigation.navigate('Index'));
    }} />

}

const styles = StyleSheet.create({

});

export default CreateScreen;