import React from 'react';

function CourseItem({title, description, thumbnail, link}) {
    return (
        <article className="course">
            <img className="course__img" src={thumbnail} alt="" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description} </div>
            </div>
            <div className="course__icons">
                <button className="btn">
                    <i className="fa-solid fa-heart"></i>
                </button>
                <a className="btn" href={link} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-link"></i>
                </a>
            </div>
        </article>
    );
}

export default CourseItem;