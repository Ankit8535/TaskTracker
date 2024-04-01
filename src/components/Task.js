import { FaTimes, FaCheck, FaClock, FaArrowAltCircleDown, FaBan } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggle }) => {
    const { id, title, description, assignee, priority, reminder, startDate, endDate, status } = task;

    const handleIconClick = () => {
        if (status === 'Pending') {
            onDelete(id);
        } else {
            onToggle(id);
        }
    };

    const renderIcon = () => {
        switch (status) {
            case 'Completed':
                return <FaCheck style={{ color: 'green', cursor: 'pointer' }} onClick={handleIconClick} />;
            case 'In Progress':
                return <FaClock style={{ color: 'yellow', cursor: 'pointer' }} onClick={handleIconClick} />;
            case 'Deployed':
                return <FaArrowAltCircleDown style={{ color: 'purple', cursor: 'pointer' }} onClick={handleIconClick} />;
            case 'Deferred':
                return <FaBan style={{ color: 'lightpink', cursor: 'pointer' }} onClick={handleIconClick} />;
            default:
                return <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={handleIconClick} />;
        }
    };

    return (
        <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3>{title} {renderIcon()}</h3>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Assignee:</strong> {assignee}</p>
            <p><strong>Priority:</strong> {priority}</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>End Date:</strong> {endDate}</p>
            <p><strong>Reminder:</strong> {reminder ? 'Yes' : 'No'}</p>
            <p><strong>Status:</strong> {status}</p>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        assignee: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        reminder: PropTypes.bool.isRequired,
        status: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default Task;
