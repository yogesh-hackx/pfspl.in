import { useKeenSlider } from 'keen-slider/react';
import Zoom from 'react-medium-image-zoom';
import { useInterval } from 'react-use';

const Gallery = () => {
    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 3,
        spacing: 15,
        loop: true,
        breakpoints: {
            '(max-width: 500px)': {
                slidesPerView: 1,
                mode: 'free-snap',
            },
            '(min-width: 1200px)': {
                slidesPerView: 3,
                mode: 'free-snap',
            },
        },
    });
    useInterval(() => {
        slider.next();
    }, 2600);
    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {[
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                ].map((item) => (
                    <img
                        src={`/gallery/${item}.jpg`}
                        className="keen-slider__slide slides"
                        key={item}
                    />
                ))}
            </div>
        </>
    );
};

export default Gallery;
