import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/images/logo.png';
import { Modal, ModalBody } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const ThankYouPopUp = (props) => {
    return (
      <Modal className='thank-you-popup'
        isOpen={props.isOpen} toggle={props.toggle}>
        <ModalBody>
          <FontAwesomeIcon icon={faCheck} size='6x' />
          <h3>Keep your phone handy, You are gonna get a call anytime now.</h3>
        </ModalBody>
      </Modal>
    )
}

export default ThankYouPopUp
