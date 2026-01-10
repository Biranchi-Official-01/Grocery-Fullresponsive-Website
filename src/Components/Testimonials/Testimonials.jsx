import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto md:py-20 mb-10">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end md:py-5 py-8 gap-x-3">
          <button className="custom-prev flex text-zinc-800 text-2xl rounded-lg w-11 h-11 bg-zinc-100 justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next flex text-zinc-800 text-2xl rounded-lg w-11 h-11 bg-zinc-100 justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl p-8 ">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-4">
                    <img className="rounded-full h-full w-full object-cen " src={item.image}/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold ">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex mt-1 text-yellow-500 text-lg">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[16vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Joshson",
    profession: "Food Blogger",
    rating: 5,
    para: "I always get fresh produce and fast delivery. The packaging is clean and the fruits are top quality. Highly recommend for daily groceries, the service is consistent and prices are reasonable.",
    image: Customer1,
  },
  {
    id: 2,
    name: "Devid Smith",
    profession: "Chef",
    rating: 4,
    para: "Love the variety available! Everything from vegetables to snacks is always in stock. Ordering is easy, delivery is reliable, and customer support responds quickly. A great experience every time I shop here.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alay Zahra",
    profession: "Model",
    rating: 5,
    para: "Quality is the best factor here. Vegetables are crisp and fresh, dairy products are always cold and well-packed. Saves me time weekly and offers good deals. Truly hassle-free grocery shopping.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "Service is excellent and products are always fresh. I appreciate the attention to food safety and clean packaging. Delivery arrives on time and the pricing is better than many offline stores.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "This platform makes grocery shopping convenient. The checkout process is smooth, the app is user-friendly, and the items delivered match exactly what I ordered. Great value and trustworthy every single order.",
    image: Customer5,
  },
];
