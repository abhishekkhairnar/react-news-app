import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imgUrl,newsUrl,date,author,source} =this.props;
    return (
      <>
      <div className="card" >
          <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:2}}>{source}<span className="visually-hidden"></span></span>
              <h5 className="card-title">{title}</h5><span className="badge bg-danger">New</span>
              <p className="card-text">{description}<a href={newsUrl} target = "_blank"rel="noreferrer"className="btn btn-info btn-sm">Read More</a></p>
              <p className="card-text"><small className="text-muted">
                By {author} on {new Date(date).toGMTString()}</small></p>

          </div>
      </div>
      </>
    )
  }
}
