import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import TextContentBlock from "../../components/textContentBlock/textContentBlock"

import "swiper/scss"
import "swiper/scss/navigation"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"

import styles from "./slider.module.scss"

const Slider = () => {
  const { content, currentChoice } = useAppSelector(historicalDatesSelector)

  const index = currentChoice - 1

  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      navigation
      spaceBetween={80}
      slidesPerView={3}
    >
      {content.historicalDates[index].dates.map((item) => {
        return (
          <SwiperSlide key={item.slideId}>
            <TextContentBlock slide={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
