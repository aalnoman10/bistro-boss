import { Parallax } from 'react-parallax';

const Cover = ({ coverImg, coverHeading, coverDescribtion }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={coverImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className='grid place-items-center text-center text-white h-[300px] md:h-[600px]'  >
                <div className='bg-black bg-opacity-70 w-9/12 py-10 md:py-12'>
                    <h3 className="text-3xl uppercase pb-2">{coverHeading}</h3>
                    <p>{coverDescribtion}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;