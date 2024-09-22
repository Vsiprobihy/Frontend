"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { ImageProps } from "next/image";
import CarouselButton from "@/app/components/carousel/CarouselButton";
import DotButton, { useDotButton } from "@/app/components/carousel/CarouselDot";

// The aspect ratio of component is always 14:17

type SlideType = {
  image: ImageProps;
};

interface CarouselProps {
  elements: SlideType[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`relative h-0 w-full pb-[calc(82.35%)]`}>
      <div
        className={`absolute inset-0 grid h-full w-full grid-cols-1 grid-rows-[1fr,auto]`}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {props.elements.map(({ image }, index) => (
              <div key={index} className="flex-full mx-1 h-full">
                <Image
                  {...{ ...image, className: "h-full w-full rounded-2xl" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`buttons absolute bottom-12 right-4`}>
          <div
            className={`flex flex-row items-center justify-center gap-2 md:gap-3`}
          >
            <CarouselButton direction={"left"} onClick={scrollPrev} />
            <CarouselButton direction={"right"} onClick={scrollNext} />
          </div>
        </div>
        <div className={`flex flex-row gap-1`}>
          {scrollSnaps.map((_, index) => (
            <div key={index} className={`flex-1`}>
              <DotButton
                onClick={() => onDotButtonClick(index)}
                selected={index === selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
