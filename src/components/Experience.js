import React, { useState } from 'react';
import Modal from 'react-modal';
import './Experience.css';

Modal.setAppElement('#root');

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      company: 'Rosbank',
      role: 'Team Lead of Motivation and Business Planning',
      description: 'Managed a team of six employees developers a staff motivation system in the Retail department',
      imageUrl: '/assets/Rosbank_logo.jpg',
    },
    {
      company: 'Qiwi',
      role: 'Oracle PL/SQL Developer',
      description: 'Development and support of regular financial and analytical reporting',
      imageUrl: '/assets/qiwi_logo.jpg',
    },
    {
      company: 'Bank Otkritie Financial Corporation',
      role: 'T-SQL Report Developer',
      description: 'Development and support of regular financial and analytical reporting',
      imageUrl: '/assets/open_logo.jpg',
    },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section className="experience">
      <h2>Опыт работы</h2>
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <img src={exp.imageUrl} alt={exp.company} className="company-logo" />
          <h3>{exp.company}</h3>
          <h4>{exp.role}</h4>
          <p>{exp.description}</p>
          <button onClick={() => openModal(exp)}>Подробнее</button>
        </div>
      ))}

      {selectedExperience && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Подробное описание"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2>{selectedExperience.company}</h2>
          <h4>{selectedExperience.role}</h4>
          <p>{selectedExperience.details}</p>
          <button onClick={closeModal}>Закрыть</button>
        </Modal>
      )}
    </section>
  );
};

export default Experience;