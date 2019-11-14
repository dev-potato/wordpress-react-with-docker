import React, { Component } from 'react'
import axios from 'axios';
import BlogTile from '../BlogTile/blogTile';


export class Blog extends Component {
         constructor(props) {
           super(props);

           this.state = {
             posts: [],
             isLoaded: false
           };
        }

         componentDidMount = () => {
           axios
             .get(`/wp-json/wp/v2/posts`)
             .then(res => {
               // Quickly sort the blog posts from Oldest to newest... Not for any reason in particular. But because I wanted to have the
               // Lunch post at the top, because that was the top post in the given design.
               let sortedPosts = res.data.sort(
                 (a, b) => new Date(a.date) - new Date(b.date)
               );
               this.setState({
                 posts: sortedPosts,
                 isLoaded: true
               });
             })
             .catch(err => console.error(err));
         };

         render() {
           const { posts, isLoaded } = this.state;
            if (isLoaded) {
                return (
                <div>
                 {posts.map(post => (
                   <BlogTile
                     key={post.id}
                     post={post}
                     stopLoader={this.props.stopLoader}
                     startLoader={this.props.startLoader}
                   />
                 ))}
                 <hr />
               </div>
             );
           } else {
             return null;
           }
         }
       }

export default Blog
