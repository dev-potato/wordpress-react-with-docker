import React, { Component } from 'react'
import Loader from '../Loader/loader';
import axios from 'axios';
import './blogPost.scss';

export default class BlogPost extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        post: [],
        isLoaded: false
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/wp-json/wp/v2/posts/${id}`)
            .then( res => this.setState({
                post: res.data,
                isLoaded: true
            }, () => this.props.stopLoader())
            )
            .catch( err => console.log(err) )
    }

    render() {
        const { post, isLoaded } = this.state;
        console.log(post);
      if (isLoaded) {
            return (
                <div className="blog-post">
                    <h1>{post.title.rendered}</h1>
                    <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                </div>
            )
        } else  {
            return (
                <Loader isLoaded={this.state.isLoaded}/>
            )
        }
    }
}
