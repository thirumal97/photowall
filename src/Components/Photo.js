import React from 'react'

//PhotoWall component instanace passess ana array of posts and map the array to render out three phot cpmpnent instances ,
//And for every photo instance that is created for each post that we're iterating through we're passing
//in props of the post associate it to that photo that was just looped through.

function Photo(props) {
    const post = props.post
        return <figure className="figure">
                    <img className = "photo" src = {post.imageLink} alt={post.description} />
                    <figcaption> <p> {post.description} </p></figcaption>
                    <div className = "button-container">
                        <button className="remove-button"> Remove </button>
                    </div>
                </figure>
}


export default Photo