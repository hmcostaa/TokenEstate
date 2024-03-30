import Image from "next/image";
import oldLisbon from "~~/public/Lisbon/old_lisbon.png"
import plansLisbon from "~~/public/Lisbon/plans_lisbon.png"
import newLisbon from "~~/public/Lisbon/new_lisbon.png"

const Carousel = ({ property }: {property: string}) => {
  return (
    <div className="flex flex-row justify-center">
        <div className="carousel w-full max-h-96 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <Image src={oldLisbon} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <Image src={plansLisbon} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <Image src={newLisbon} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel