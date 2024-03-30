import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

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
                <div className="float-right">
                  <Image src="/chart.png" className="max-w-sm rounded-lg shadow-2xl" width={500} height={300} alt="chart"/>
                </div>
              </div>
            </div>
          </div>

          <section id="howitworks" className="my-14">
            <div className="container mx-auto">
              <h2 className="text-5xl font-bold">How it works?</h2>

              <div className="flex flex-row justify-between gap-2">
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


          <section id="listings" className="my-14">
            <div className="container mx-auto">
              <h2 className="text-5xl font-bold">Featured Properties</h2>

              <div className="flex flex-row justify-between gap-6">
                <div className="card bg-primary text-neutral-content shadow-xl">
                  <figure><img src="/Lisbon/old_lisbon.png" alt="Lisbon" /></figure>
                  <div className="card-body">
                    <h4 className="card-title text-2xl font-bold">Historic Gem</h4>
                    <span className="text-sm">📌Lisbon, Portugal</span>
                    <span className="text-sm">Invest in reviving a piece of
history. Anticipated 7% annual ROI.</span>

                    <Link href="property/1" className="btn btn-sm btn-wide btn-white mt-auto">More details</Link>
                  </div>
                </div>

                <div className="card bg-primary text-neutral-content shadow-xl">
                  <figure><img src="/bucharest.png" alt="Bucharest" /></figure>
                  <div className="card-body">
                    <h4 className="card-title text-2xl font-bold">Art Deco</h4>
                    <span className="text-sm">📌Bucharest, Romania</span>
                    <span className="text-sm">Transform and profit from an architectural masterpiece. Expected 8% annual ROI.</span>

                    <Link href="property/2" className="btn btn-sm btn-wide btn-white mt-auto">More details</Link>
                  </div>
                </div>

                <div className="card bg-primary text-neutral-content shadow-xl">
                  <figure style={{ position: 'relative' }}>
                    <img src="/coming_soon.png" alt="castle in paris" className="image-full" />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(100, 105, 116, 0.8)' }}>
                      <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem', color: 'white' }}>Coming soon</p>
                    </div>
                  </figure>
                  <div className="card-body">
                    <h4 className="card-title text-2xl font-bold">Castle in France</h4>
                    <span className="text-sm">📌Paris, France</span>
                    <span className="text-sm">New object coming soon.</span>

                    <button className="btn btn-sm btn-wide btn-white mt-auto">More details</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </>
  );
};

export default Home;
