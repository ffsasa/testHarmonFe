import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Flex } from 'antd';

export const MiddleSection = ({ title, action, cardData, renderCard }) => {
  return (
    <div>
      <Flex justify='space-between'>
        <h1 style={{ color: 'rgba(157, 116, 215, 1)' }}>{title}</h1>
        <h3 style={{ marginRight: '2rem', color: 'rgba(157, 116, 215, 1)' }}>{action}</h3>
      </Flex>
      <Swiper
        style={{ padding: '1.2rem' }}
        navigation={true}
        modules={[Pagination]}
        className='mySwiper'
        slidesPerView={3} // Show 3 cards at a time
        spaceBetween={20} // Add spacing between slides
        initialSlide={1} // Start with the second item centered (0-indexed)
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>{renderCard(card)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
