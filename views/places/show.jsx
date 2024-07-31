const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">No comments yet!!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border" key={c.id}>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main className="show-main">
                <div>
                   <img src={data.place.pic}></img>
                   <h3>
                        Located in {data.place.city}, {data.place.state}
                   </h3>
                </div>
                <div>
                    <h1>{data.place.name}</h1>
                    <section>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </section>
                    <section>
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </section>
                    <section>
                        <h2>Comments</h2>
                        {comments}
                    </section>
                    <div>
                        <h2>Leave a Review</h2>
                        <form id="comment-form" action={`/places/${data.place.id}/comment`} method="POST">
                            <div className="comment-layouts">
                                <label htmlFor="author">Author</label>
                                <input type="text" name="author"></input>

                                <label htmlFor="content">Content</label>
                                <input type="textarea" name="content"></input>
                            </div><br/>
                            <div className="other-form-layouts">
                                <div className="star-rating">
                                    <label htmlFor="star-rating">Star Rating</label><br/>
                                    <input type="range" name="star-rating" min="0" max="5" step="0.5" required></input><br/>
                                    <datalist id="values">
                                        <option values="0" label="0"></option>
                                        <option values="1" label="1"></option>
                                        <option values="2" label="2"></option>
                                        <option values="3" label="3"></option>
                                        <option values="4" label="4"></option>
                                        <option values="5" label="5"></option>
                                    </datalist>
                                </div>    
                                <div>  
                                    <label htmlFor="rant">Rant</label><br/>
                                    <input type="checkbox" name="rant" id="rant"></input>
                                </div>
                                <div>

                                    <button type="submit">Add Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>     
            <br/>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
    
        </Def>
    )
}

module.exports = show



