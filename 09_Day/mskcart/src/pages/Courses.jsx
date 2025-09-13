import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://mskinstitute.github.io/assets/js/courses.json")
            .then(res => res.json())
            .then(data => {
                const coursesArray = Object.values(data);
                setCourses(coursesArray);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
            });
    }, []);



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {courses.map((item, index) => (
                        <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img
                                    src={ "https://mskinstitute.github.io/" + item.featured_image}
                                    alt={item.name || "Course Image"}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h5 className="text-xl font-semibold mb-2">{item.name}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {item.description.split(" ").slice(0, 20).join(" ") + "..." || "Some quick example text to build on the card title."}
                                    </p>
                                    <Link to={"https://mskinstitute.github.io/" + item.link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" >
                                        Go somewhere
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;