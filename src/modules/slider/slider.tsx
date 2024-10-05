import { useLayoutEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import gsap from "gsap"
import TextContentBlock from "../../components/textContentBlock/textContentBlock"

import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"

import SliderNavigateButton from "../../components/sliderNavigateButtons/sliderNavigateButton"

import "swiper/scss"
import "swiper/css/pagination"

import Label from "../../components/label/label"
import Line from "../../components/line/line"
import styles from "./slider.module.scss"

const Slider = () => {
  const { content, currentChoice } = useAppSelector(historicalDatesSelector)

  const swiperRef = useRef(null)

  const index = currentChoice - 1

  const datesBlock = content.historicalDates[index]

  useLayoutEffect(() => {
    gsap.fromTo(
      swiperRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, delay: 0.5, duration: 0.5 }
    )
  }, [currentChoice])

  return (
    <>
      <div className={styles.sliderContainerMobile} ref={swiperRef}>
        <Label content={datesBlock.label} />
        <Line type="horizontalMobile" />
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          navigation
          spaceBetween={80}
          slidesPerView={"auto"}
        >
          {datesBlock.dates.map((item) => {
            return (
              <SwiperSlide key={item.slideId} className={styles.swiperSlide}>
                <TextContentBlock slide={item} />
              </SwiperSlide>
            )
          })}
          <SliderNavigateButton type="leftArrow" isActive={true} />
          <SliderNavigateButton type="rightArrow" isActive={true} />
        </Swiper>
      </div>
    </>
  )
}

export default Slider
