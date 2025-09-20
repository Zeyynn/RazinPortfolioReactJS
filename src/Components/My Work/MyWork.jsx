import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern1.svg'
import mywork_data from '../../assets/mywork_data'
import ModalWork from '../Modal/modalWork'

const MyWork = () => { 
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleImageClick = (imageUrl, description) => {
    setSelectedImage(imageUrl);
    setSelectedDescription(description);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return ( 
    <div id='work' className="mywork">                {/*Past Projects Title*/}
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">            {/*Past Projects Contents*/}
            {mywork_data.map((work, index) => (
                <img 
                    key={index} 
                    src={work.w_img} 
                    alt={work.title || "Project preview"} 
                    onClick={() => handleImageClick(work.w_img, work.w_desc)}
                    style={{ cursor: 'pointer' }}
                />
            ))}
        </div>
        <ModalWork 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            imageUrl={selectedImage}
            description={selectedDescription}
        />
    </div>
  )
}

export default MyWork