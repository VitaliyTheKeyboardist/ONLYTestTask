import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/scss"
import "swiper/scss/navigation"
import styles from "./slider.module.scss"
import TextContentBlock from "../../components/textContentBlock/textContentBlock"

const Slider = () => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      navigation
      spaceBetween={80}
      slidesPerView={3}
    >
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
      <SwiperSlide>
        <TextContentBlock />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
