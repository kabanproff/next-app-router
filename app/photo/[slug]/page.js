import Modal from '@/components/Modal';
import { imgUrls } from '@/data';
import Image from 'next/image';
import React from 'react';

const PhotoPage = ({ params: { slug } }) => {
  const img = imgUrls[slug];

  return (
    <Modal>
      <div className="photo_container">
        <Image
          src={imgUrls[slug]}
          alt={imgUrls[slug]}
          width={100}
          height={100}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          sizes="60vw"
          priority
        />
      </div>
    </Modal>
  );
};

export default PhotoPage;
