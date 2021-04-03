import React, {Component} from 'react'

//PhotoWall component instanace passess ana array of posts and map the array to render out three phot cpmpnent instances ,
//And for every photo instance that is created for each post that we're iterating through we're passing
//in props of the post associate it to that photo that was just looped through.


class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure className="figure"> </figure>
    }
}

export default Photo