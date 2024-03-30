import Image from "next/image";
import oldLisbon from "~~/public/Lisbon/old_lisbon.png"
import plansLisbon from "~~/public/Lisbon/plans_lisbon.png"
import newLisbon from "~~/public/Lisbon/new_lisbon.png"

const Carousel = ({ property }: {property: string}) => {
  return (
    <div className="flex flex-row">
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <Image src={oldLisbon} alt="" className="w-full h-auto max-h-52 contain-content" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <Image src={plansLisbon} alt="" className="w-full h-auto max-h-64 object-fill" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <Image src={newLisbon} alt="" className="w-full h-auto max-h-52" />
                </div> 
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    </div>
  )
}

export default Carousel