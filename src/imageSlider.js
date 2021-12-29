import React, { useState } from 'react'
import { SliderData } from './sliderData'
import LeftClick from './assets/leftClick.png'
import RightClick from './assets/rightClick.png'
import SlideRight from './assets/slideRight.png'
import SlideLeft from './assets/slideLeft.png'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const [slideValue, setSlideValue] = useState(516)

  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const slideHandler = (e) => {
    console.log(e.nativeEvent)
    setSlideValue(e.nativeEvent.screenX)
  }

  return (
    <>
      <section className='slider'>
        {/* <div className='img-sec-check'>
          <img
            src='https://images.unsplash.com/photo-1639774303909-7b10213f2d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
            alt='travel image'
            className='checkimgBefore'
          />
          <img
            src='https://images.unsplash.com/photo-1617771237527-fe00887c6f64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
            //   className='checkimgAfter'
            style={{ clip: `rect(0px, ${slideValue}px, 585px, 0px)` }}
          />
          <div
            className='imageHandler'
            onDrag={(e) => slideHandler(e)}
            // onMouseEnter={afterMouseMove}
            onMouseMove={afterMouseMove}
            style={{ left: `${slideValue}px` }}
          >
            <span className='twentytwenty-left-arrow'>
              <img src={SlideLeft} />
            </span>
            <span className='twentytwenty-right-arrow'>
              <img src={SlideRight} />
            </span>
          </div>
        </div> */}
        <img src={LeftClick} className='left-arrow' onClick={prevSlide} />

        <img src={RightClick} className='right-arrow' onClick={nextSlide} />

        {SliderData.map((slide, index) => {
          return (
            <>
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <div className='slide-img-container'>
                    <ReactCompareSlider
                      itemOne={
                        <ReactCompareSliderImage
                          src={slide.image}
                          srcSet={slide.image}
                          alt='Image one'
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          src={slide.image2}
                          srcSet={slide.image2}
                          alt='Image two'
                        />
                      }
                    />

                    {/* <img
                      src={slide.image}
                      alt='travel image'
                      className='slide-img-before'
                      style={{ clip: `rect(0px, ${slideValue}px, 585px, 0px)` }}
                    />
                    <img
                      src={slide.image2}
                      alt='travel image'
                      className='slide-img-after'
                    /> */}
                    {/* <div
                      className='imageHandler'
                      // onMouseMove={slideHandler}
                      style={{ left: `${slideValue}px` }}
                    >
                      <span className='twentytwenty-left-arrow'>
                        <img src={SlideLeft} />
                      </span>
                      <span className='twentytwenty-right-arrow'>
                        <img src={SlideRight} />
                      </span>
                    </div> */}
                  </div>
                )}
              </div>
            </>
          )
        })}
      </section>
      <br></br>
    </>
  )
}

export default ImageSlider
