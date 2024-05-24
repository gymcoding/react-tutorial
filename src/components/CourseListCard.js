import React from 'react';
import CourseItem from './CourseItem';

function CourseListCard({title, courses}) {
    return (
        <div className="card">
            <div className="card__header">{title}</div>
            <div className="card__body">
                <div className="courses">
                  {
                    courses.map(course => <CourseItem
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      thumbnail={course.thumbnail}
                      link={course.link}
                    />)
                  }
                </div>
            </div>
        </div>
    );
}

export default CourseListCard;