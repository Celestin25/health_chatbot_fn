import React from 'react';

const AboutCrafters: React.FC = () => {
  const imageUrl = 'https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg'; 

  return (
    <section className="py-16 px-24 bg-white font-poppins text-xl" id="about-crafters">
      <h2 className="text-3xl font-bold mb-8"> ABOUT <span className='text-secondary'> CRAFTERS </span></h2>
      <div className="container flex gap-20">
        <div className="flex-none w-1/3 mb-8">
          <img src={imageUrl} alt="About Crafters" className="w-full h-80 rounded-lg" />
        </div>
        <div >
          <p className="text-gray-700">Crafters is a team of developers who are passionate about creating online shopping experiences.
             Our goal is to make shopping easy and enjoyable for everyone. <br /><br /> We focus on designing websites that are easy to use and look great. 
             Whether you're buying clothes, electronics, or anything else, we want you to have a smooth and pleasant experience. 
             Sellers can also create accounts on our platform to sell their products to a wide audience.  <br /><br />We're here to help buyers and sellers connect in a 
             friendly and trustworthy environment. Join us and explore a world of seamless online 
             shopping!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCrafters;