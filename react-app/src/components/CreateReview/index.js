import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './reviewForm';

function ReviewFormModal() {
    const [showModal, setShowModal] = useState(false);
    console.log('showmodal', showModal)
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setShowModal(true)
    // }
    return (
        <>
            <button onClick={() => setShowModal(true)}>Leave A Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;
