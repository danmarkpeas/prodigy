import Item from "./Item";

function Portfolio() {
  return (
    <div>
      <div class="bg-yellow-500 pb-20">
        <div className="flex flex-col justify-center items-center w-5/6 lg:w-3/6  mx-auto pt-32 font-inter">
          <h1 className="text-5xl font-black text-center text-white">
            WE ARE A GLOBAL MEDIA AGENCY NETWORK
          </h1>
          <p className="text-base mt-5 text-center text-white">
            We are a global media agency network of 9,300 people across 86
            countries with diverse opinions, cultures and passions. We are
            united by our desire to create new media experiences for our clients
            and their consumers and have fun whilst doing it.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center mt-5 gap-8">
          <div className="flex flex-col justify-center items-center gap-8">
            <Item
              src="https://content.mindshareapps.com/media/2019/05/Nothing-beats-a-Londonder-Mindshare-1.jpg"
              name="Nike"
            />
            <Item
              src="https://content.mindshareapps.com/media/2019/11/careers-at-mindshare-home-page.jpg"
              name="Careers at Prodigy"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-20">
            <Item
              src="https://content.mindshareapps.com/media/2019/05/KFC-League-of-Legends-Mindshare.jpg"
              name="KFC"
            />
            <Item
              src="https://content.mindshareapps.com/media/2020/05/Homepage-Tile-Huddle-.jpg"
              name="The Acceleration Huddle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
