"use client";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { fetchBanners } from '../services/api';
import BannerModel from '../services/model/banner';

const ImageSlider = () => {
  const [banners, setBanners] = useState<BannerModel[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchBannersData();
  }, []);

  const fetchBannersData = async () => {
    try {
      const response = await fetchBanners();
      setBanners(response);
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  const getImageUrl = (banner: BannerModel | undefined) => {
    return banner?.mobileImageUrl || '';
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  return (
    <div className="sliderContainer">
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        infiniteLoop={false}
        showArrows={true}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div className="previousButton absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <div className="circle-icon bg-white bg-opacity-75 text-gray-800 p-2 rounded-full w-10 h-10">
              <button onClick={onClickHandler}>
                <FaChevronLeft size={24} />
              </button>
            </div>
          </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div className="nextButton absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <div className="circle-icon bg-white bg-opacity-75 text-gray-800 p-2 rounded-full w-10 h-10">
                <button onClick={onClickHandler}>
                  <FaChevronRight size={24} /> 
                </button>
              </div>
            </div>
          )
        }
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-5/5 ">
            <img
              className="bannerImage"
              src={getImageUrl(banner)}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
