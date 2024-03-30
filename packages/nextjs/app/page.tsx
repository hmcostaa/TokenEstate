import type { NextPage } from "next";
import Image from "next/image";
import oldLisbon from "~~/public/Lisbon/old_lisbon.png"

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow bg-white">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url("/hero1.png")'}}>
            <div className="hero-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Invest in the Future of Real Estate</h1>
                <p className="mb-5">Tokenized Real Estate: Your Revolutionary, Affordable Gateway to Property Investment</p>
                <button className="btn btn-primary">Explore Listings</button>
                <button className="btn mx-3">Learn How It Works</button>
              </div>
            </div>
          </div>

          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <Image src="/hero2.png" className="max-w-sm rounded-lg shadow-2xl" width={500} height={300} alt="hero 2"/>
              <div>
                <h2 className="text-4xl font-bold">What is TokenEstate?</h2>
                <p className="py-6">Brief explanation of the platform&apos;s purpose, highlighting the democratization of real estate investment through blockchain technology.</p>
                <div className="text-center">
                  <Image src="/chart.png" className="max-w-sm rounded-lg shadow-2xl" width={500} height={300} alt="chart"/>
                </div>
              </div>
            </div>
          </div>

          <section className="my-20">
            <div className="container mx-auto">
              <h2 className="text-5xl font-bold">How it works?</h2>

              <div className="flex flex-row">
                <div className="card bg-base-100 shadow-xl mx-1">
                  <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Choose Your Property</h2>
                    <p className="text-sm">Conduct thorough research on various properties, considering factors like location, market trends, and amenities to align with your investment goals.</p>
                  </div>
                </div>

                <div className="card bg-primary text-neutral-content shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Invest Securely</h2>
                    <p className="text-sm">Explore financing options that suit your financial situation and minimize risk, ensuring you choose the most secure method for funding your property investment.</p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl mx-1">
                  <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Earn Rental Income</h2>
                    <p className="text-sm">Develop effective marketing strategies to attract tenants, screen them rigorously, and establish comprehensive lease agreements to ensure stable rental income.</p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl mx-1">
                  <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Vote on Property Decisions</h2>
                    <p className="text-sm">Engage actively with other stakeholders, participate in decision-making processes through meetings or consultations, and understand your legal rights and obligations as a property owner.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-row py-6 gap-10">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><Image src={oldLisbon} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><Image src={oldLisbon} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><Image src={oldLisbon} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Home;
