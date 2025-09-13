import { useParams } from 'react-router-dom';
import courses from '../data/courses.json';

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return (
    <h2>Course not found</h2>
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <img src={course.image} alt={course.title} className="w-full rounded mb-4" />
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-700 mt-2">{course.details}</p>
      <p className="mt-4 font-semibold">Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p className="text-green-600 font-bold mt-2">${course.price}</p>
    </div>
  );
}

export default CourseDetails;