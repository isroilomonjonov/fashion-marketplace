import AboutUs from "@/components/aboutUs";
import AllCollection from "@/components/allCollection";
import CollectionCard from "@/components/collectionCard";
import Contact from "@/components/contact";
import CreatorCard from "@/components/creatorCard";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import { Data, LikeDataType } from "@/interfaces";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Data[] = await res.json();
  const likedData: LikeDataType[] = products.map((e) => {
    return { ...e, isLiked: false };
  });
  const upcomingCreators=[
    {
      name:'John Wick',
      image:'creator.png',
      bgImage:'bg.png'
    },
    {
      name:'John Wick',
      image:'creator2.png',
      bgImage:'bg2.png'
    },
    {
      name:'John Wick',
      image:'creator3.png',
      bgImage:'bg3.png'
    }
  ]
  const upcomingBrands=[
    {
      name:'Adidas',
      image:'adidasImage.png',
      bgImage:'bgAdidas.png'
    },
    {
      name:'Nike',
      image:'nikeImage.png',
      bgImage:'bgNike.png'
    },
    {
      name:'Lacoste',
      image:'lacosteImage.png',
      bgImage:'bgLacoste.png'
    }
  ]
  const newAndTrandingData:LikeDataType[] = likedData.slice(0,3)
  return (
    <div className="mt-50 mx-auto max-w-7xl pb-10">
      <Hero />
      <Sponsors />
      <AboutUs />
      <div id="AllCollection">
        <AllCollection />
        <section className="text-gray-600 body-font mb-5">
          <div className="flex flex-wrap -m-4">
            {likedData.map((data) => (
              <CollectionCard key={data.id} data={data} />
            ))}
          </div>
        </section>
      </div>
      <div id="NewAndTranding">
        <div className="flex items-center flex-col justify-center mt-10">
          <h2 className="title-font text-3xl mb-2 font-bold text-white sm:text-5xl sm:mb-4">
            New & Trending
          </h2>
          <p
            className="text-gray-400 text-xl text-center"
            style={{ maxWidth: "423px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <section className="text-gray-600 body-font mt-5">
          <div className="flex flex-wrap -m-4 justify-around items-center ">
            {newAndTrandingData.map((data) => (
              <CollectionCard key={data.id} data={data} />
            ))}
          </div>
        </section>
      </div>
      <div id="UpcomingCreators">
      <div className="flex items-center flex-col justify-center mt-10 mb-8">
          <h2 className="title-font text-3xl mb-2 font-bold text-white sm:text-5xl sm:mb-4">
          Upcoming Creators
          </h2>
          <p
            className="text-gray-400 text-xl text-center"
            style={{ maxWidth: "423px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <section className="text-gray-600 body-font mt-5">
          <div className="flex flex-wrap -m-4 justify-around gap-10 lg:gap-0">
            {upcomingCreators.map((data) => (
              <CreatorCard key={data.image} data={data} />
            ))}
          </div>
        </section>
      </div>
      <div id="UpcomingBrands">
      <div className="flex items-center flex-col justify-center mt-10 mb-8">
          <h2 className="title-font text-3xl mb-2 font-bold text-white sm:text-5xl sm:mb-4">
          Upcoming Brands
          </h2>
          <p
            className="text-gray-400 text-xl text-center"
            style={{ maxWidth: "423px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <section className="text-gray-600 body-font mt-5">
          <div className="flex flex-wrap -m-4 justify-around gap-10 lg:gap-0">
            {upcomingBrands.map((data) => (
              <CreatorCard key={data.image} data={data} />
            ))}
          </div>
        </section>
      </div>
      <Contact/>
    </div>
  );
}
