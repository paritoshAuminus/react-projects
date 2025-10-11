import React, { useId } from 'react'

const Select = ({
    options = [],
    label,
    className = '',
    ...props
}, ref) => {

    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 border-gray-200 w-full ${className}`}
                {...props}
                id={id}
                ref={ref}>
                    {options?.map((option) => (
                        <option key={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    )
}

// forwarding the reference to the parent (2); (1) in Input.jsx
export default React.forwardRef(Select)