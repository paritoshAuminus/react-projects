import React from 'react'
import { Link } from 'react-router-dom'
import courses from '../data/courses.json';


const Courses1 = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {courses.map(course => ( 
                        <div key={course.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img src={course.image} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h5 className="text-xl font-semibold mb-2">{course.title}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {course.description}
                                    </p>
                                    <Link to={"/course/" + course.id} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" >
                                        Go somewhere
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses1