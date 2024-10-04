import { useLayoutEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import gsap from "gsap"
import TextContentBlock from "../../components/textContentBlock/textContentBlock"

import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"

import SliderNavigateButton from "../../components/sliderNavigateButtons/sliderNavigateButton"

import "swiper/scss"
import styles from "./slider.module.scss"

const Slider = () => {
  const { content, currentChoice } = useAppSelector(historicalDatesSelector)

  const swiperRef = useRef(null)

  const index = currentChoice - 1

  useLayoutEffect(() => {
    gsap.fromTo(
      swiperRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, delay: 0.5, duration: 0.5 }
    )
  }, [currentChoice])

  return (
    <>
      <Swiper
        ref={swiperRef}
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        navigation={{}}
        spaceBetween={80}
        slidesPerView={"auto"}
      >
        {content.historicalDates[index].dates.map((item) => {
          return (
            <SwiperSlide key={item.slideId} style={{ width: "320px" }}>
              <TextContentBlock slide={item} />
            </SwiperSlide>
          )
        })}
        <SliderNavigateButton type="leftArrow" isActive={true} />
        <SliderNavigateButton type="rightArrow" isActive={true} />
      </Swiper>
    </>
  )
}

export default Slider
