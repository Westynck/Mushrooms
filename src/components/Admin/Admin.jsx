import React from 'react';
import MushroomForm from '../MushroomForm/MushroomForm';
// import PropTypes from 'prop-types';

import './adminStyles.module.scss';

function Admin() {
    return (
        <div className='d-flex flex-fill justify-content-center align-items-center p-20 '>
            <MushroomForm />
        </div>
    );
}
// Admin.propTypes = {};

// Admin.defaultProps = {};

export default React.memo(Admin);