import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../Loader/loader'

import { monthObj as months } from '../../Utilities/months';
import { chevron } from '../../Assets/Icons/cheveron-right.svg';
import './blogTile.scss';


export default class BlogTile extends Component {

    state = {
        blogImage: '',
        isLoaded: false,
        months: []
    }

    componentDidMount() {
        const { featured_media } = this.props.post;

        axios.get(`/wp-json/wp/v2/media/${featured_media}`)
        .then( res  => 
            this.setState({ 
                blogImage: res.data.media_details.sizes.full.source_url,
                isLoaded: true
            }, () => this.props.stopLoader())
            )

        this.setState({
            months: months
        })
    }

    constructDate() {
        const { date } = this.props.post;
        const { months } = this.state;

        const d = new Date(date);
        const year = d.getFullYear();
        const month = d.getMonth();
        const calendarMonth = months[`${month}`];
        const day = d.getDate();

        return `${calendarMonth}, ${day} ${year}`
    }
    
    render() {
        const { title, excerpt, id } = this.props.post;
        const { blogImage, isLoaded } = this.state;

        if (isLoaded) {
            return (
              <div className="blog-tile">
                <img src={blogImage} alt=""/>
                <div className="blog-title">
                  <h4>{this.constructDate()}</h4>
                  <h1>
                      <Link onClick={this.props.startLoader} to={`/blog/post/${id}`}>
                        <span dangerouslySetInnerHTML={{ __html: title.rendered}}></span>
                      </Link>
                  </h1>
                  <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></p>
                  <span>
                  <Link onClick={this.props.startLoader} className="read-more" to={`/blog/post/${id}`}>Read more</Link> 
                  <img src={chevron} alt="" />
                  </span>
                  <hr />
                </div>
              </div>
            );
        } else {
            return ('Done!')
        }
    }
}
