const CourseCardOne = ({ image, title, lectures, duration }) => {
    return (
        // image path: https://mskinstitute.github.io/featured_image

        <div className="rounded overflow-hidden shadow-lg p-4 bg-white">
            <img class="w-full" src={'https://mskinstitute.github.io/' + image} alt="course image" />
            <div className="py-4 mb-4">
                <h5 className="font-bold text-xl mb-2">{title}</h5>
            </div>
            <div>
                <div className='flex gap-3 text-gray-500'>
                    <span>
                        <i className='fa-solid fa-book me-1'></i>{lectures} Chapters
                    </span>
                    <span>
                        <i className='fa-solid fa-clock me-1'></i>{duration}
                    </span>
                </div>
            </div>
            <button className='inline-block mt-4 float-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View More</button>
        </div>
    )
}
export default CourseCardOne