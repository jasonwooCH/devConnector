import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Alert = ({ alerts }) => alerts?.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        { alert.msg }
    </div>
))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}


// get Alert state into this component. mapping redux state to a props in this component.
const mapStateToProps = state => ({
    //      from root reducer
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);
