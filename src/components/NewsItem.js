import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/02/09/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1675986524309_1675986524309.jpeg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-desc">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem