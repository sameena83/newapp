import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label> Task</label>
                <input type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label> Task</label>
                <input type='text' placeholder='Day and time'/>
            </div>
            <div className='form-control'>
                <label> Task</label>
                <input type='checkbox'/>
            </div>
        </form>
    )
}

export default AddTask
