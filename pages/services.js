export default function ServicePage() {
  return (
    <>
      <div className="food-bg -z-10"></div>
      <div className="about-container">
        <div className="about-backdrop"></div>
        <div className="about-image">
          <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
            <div className="about-heading-container relative">
              <p>Our Services</p>
              <p className="about-heading-quotes absolute -top-8">&quot;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-text max-w-3xl mx-auto my-4 bg-white px-8 py-8 rounded-md shadow-xl text-lg">
        <p className="my-6 font-bold">Industrial Catering</p>
        <p className="my-6">
          We are dedicated to meeting the unique needs of our valued customers
          and clients. Our focus is on delivering seamless operations for staff
          canteens, cafeterias, and more. With expertise in indoor and outdoor
          food catering, we proudly serve the manufacturing and corporate
          sectors across India.
        </p>
        <p className="my-6">
          We have served various customers since inception including Tata
          Companies, TVS Companies, Micromax Group, Minda Group, Britannia,
          Bajaj Motors, PPL Group, and many more.
        </p>
        <p className="my-6 font-bold">Key Highlights</p>
        <p className="my-6">
          <ul style={{ listStyle: "circle" }}>
            <li>Providing good quality food is our primary objective.</li>
            <li>
              Having more than a decade of experience in the field of Industrial
              Canteen.
            </li>
            <li>Professional Staff with best Chefs on board.</li>
            <li>High Volume Catering.</li>
            <li>Food Safety and hygiene – our mandatory parameters.</li>
          </ul>
        </p>
        <p className="my-6 font-bold">Outdoor Event Catering</p>
        <p className="my-6">
          We are just a phone call away from providing you our outdoor catering
          services at a place of your choice in India.
        </p>
        <p className="my-6">
          Our catering services cater to all types of events, including
          birthdays, anniversaries, social gatherings, weddings, kitty parties,
          holidays, and festive occasions.
        </p>
        <p className="my-6">
          We bring the joy of delicious food to your chosen location anywhere in
          India. Every moment you spend with us is transformed into a cherished
          memory. We understand that food plays a crucial role in creating a
          remarkable experience.
        </p>
        <p className="my-6">
          That's why we specialize in making every occasion bright and
          unforgettable. At Purnagiri, we have a fully equipped central kitchen
          that offers a wide range of cuisines to suit every palate. From Indian
          and Punjabi to Chinese, Gujarati, South Indian, and Tandoor
          specialties, we've got you covered.
        </p>
        <p className="my-6">
          Trust us to make your special moments truly remarkable.
        </p>
      </div>
    </>
  );
}
