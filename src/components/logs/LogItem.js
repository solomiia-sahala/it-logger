import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLogs, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const LogItem = ({ log, deleteLogs, setCurrent }) => {

    const onDelete = () => {
        deleteLogs(log.id);
        M.toast({ html: `Log with ID: ${log.id} is successfully deleted` })
    }
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)} >
                    {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by {' '}
                    <span className="black-text">{log.tech}</span> on {' '}
                    <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                    <a href="#!" className="secondary-content">
                        <i className="material-icons grey-text" onClick={onDelete}>delete</i>
                    </a>
                </span>
            </div>

        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLogs: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}


export default connect(null, { deleteLogs, setCurrent })(LogItem);

