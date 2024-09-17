import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Modal as BootstrapModal } from 'bootstrap';

function MenuView({ cars, chdate, redate }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalInstance, setModalInstance] = useState(null);

  const handleModalOpen = (car, chdate, redate, event) => {
    event.preventDefault();
    console.log(chdate);
    setSelectedCar(car);
  };

  useEffect(() => {
    const modalElement = document.getElementById('carModal');

    if (selectedCar && modalElement) {
      // Destroy any previous modal instance to reset it
      if (modalInstance) {
        modalInstance.hide();
        setModalInstance(null);
      }

      // Create and show new modal instance
      const modal = new BootstrapModal(modalElement, { backdrop: 'static' });
      setModalInstance(modal);
      modal.show();
      
      // Cleanup modal after hide
      modalElement.addEventListener('hidden.bs.modal', () => {
        setSelectedCar(null);
      });
    }
  }, [selectedCar]);

  return (
    <div className="container pb-5">
      <h1>Available Cars</h1>
      <div className="g-4 justify-content-center mt-2 mb-3 row row-cols-lg-3 row-cols-md-2">
        {cars && cars.length > 0 ? (
          cars.map((car, index) => (
            <div key={index} className="col" onClick={(event) => handleModalOpen(car, chdate, redate, event)}>
              <div className="bg-white border shadow-sm">
                <a href="#">
                  <img
                    src={car.imgs}
                    className="img-fluid w-100"
                    alt={car.carType}
                    width="600"
                    height="450"
                  />
                </a>
                <div className="p-4">
                  <h4 className="fw-bold h5">
                    <a href="#" className="link-secondary text-decoration-none">
                      {car.carType}
                    </a>
                  </h4>
                  <p className="small">description</p>
                  <hr />
                  <div className="align-items-center d-flex justify-content-between">
                    <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                      <span>{car.rating}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="1.125em"
                        height="1.125em"
                        className="text-primary"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="fw-bold pb-1 pt-1 text-dark">${car.price}/day</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cars available for the selected criteria.</p>
        )}
      </div>

      {/* Modal component */}
      <Modal car={selectedCar} chdate={chdate} redate={redate} />
    </div>
  );
}

export default MenuView;
