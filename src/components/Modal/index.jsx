import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const BackDrop = styled(motion.div)`
	position: fixed;
	height: 100vh;
	z-index: 10000;
	width: 100%;
	top: 0;
	overflow: hidden;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
`;

const Image = styled(motion.img)`
	display: block;
	margin: 60px auto;
	max-width: 90%;
	max-height: 80%;
	border: 3px solid rgba(255, 255, 255);
`;

const Modal = ({ modalImg, setModalImg }) => {
	return (
		<BackDrop
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			onClick={() => setModalImg(null)}>
			<Image
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
				src={modalImg.url}
				alt='modal'
			/>
		</BackDrop>
	);
};

export default Modal;
