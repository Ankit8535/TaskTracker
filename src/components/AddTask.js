import React, { useState } from 'react';


const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority] = useState('P0');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const [status, setStatus] = useState('Pending');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add a title');
            return;
        }

        onAdd({ title, description, assignee, priority, startDate, endDate, reminder, status });

        // Clear the form fields after submission
        setTitle('');
        setDescription('');
        setAssignee('');
        setPriority('P0');
        setStartDate('');
        setEndDate('');
        setReminder(false);
        setStatus('Pending');
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='Add Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Assignee</label>
                <input type='text' placeholder='Add Assignee' value={assignee} onChange={(e) => setAssignee(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value='P0'>P0</option>
                    <option value='P1'>P1</option>
                    <option value='P2'>P2</option>
                </select>
            </div>
            <div className='form-control'>
                <label>Start Date</label>
                <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>End Date</label>
                <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className='form-control'>
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value='Pending'>Pending</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                    <option value='Deployed'>Deployed</option>
                    <option value='Deferred'>Deferred</option>
                </select>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    );
};

export default AddTask;
