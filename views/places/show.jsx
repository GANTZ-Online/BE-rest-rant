function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '★'
    }
    rating = (
      <h3>{stars} stars</h3>
    )
  }

  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          {/* Add comment content here */}
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <div className="row">
          ...
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            {rating}
            <br />
            {/* Add comment section here */}
            ...
          </div>
        </div>
      </main>
    </Def>
  )
}

function EditPlace(data) {
  return (
    <div>
      <h1>Edit Place</h1>
      <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
        ...
        <div className="row">
          ...
          <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input className="form-control"
              id="founded"
              name="founded"
              value={data.place.founded}
            />
          </div>
        </div>
        ...
        <input className="btn btn-primary" type="submit" value="Update Place" />
      </form>
    </div>
  )
}






