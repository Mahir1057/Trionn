import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Example client images (replace with real ones in assets)
import client1 from "../assets/Walter_2008.webp";
import client2 from "../assets/tony.jpg";
import client3 from "../assets/elon-musk.jpg";
import client4 from "../assets/sundar.jpg";
import client5 from "../assets/mark.jpg";
import client6 from "../assets/mukesh.webp";
import client7 from "../assets/adani.webp";

export default function PartnerLoveReviews() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-7xl md:text-9xl font-extrabold leading-tight tracking-wide text-cyan-100 mb-6"
      >
        PARTNER. <br /> LOVE
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-gray-300 text-lg md:text-xl mb-12"
      >
        Take heed, as the lion's roar in our client reviews resounds.
      </motion.p>

      {/* Client Reviews Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {/* Card 1 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center hover:border-cyan-300 transition">
            <img
              src={client1}
              alt="Zoltan Csonka"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Zoltan Csonka</h3>
            <p className="text-gray-400 text-sm mb-6">
              Founder & CEO of Ventigence
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition">
              Watch now!
            </button>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center hover:border-cyan-300 transition">
            <p className="text-lg text-gray-200 italic mb-6">
              “We had a fantastic experience partnering with Trionn for our
              website. The communication and collaboration were excellent,
              resulting in a top-notch design and functionality.”
            </p>
            <img
              src={client2}
              alt="Albert Mizuno"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Albert Mizuno</h3>
            <p className="text-gray-400 text-sm">Founder of The Mizuno</p>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-300 transition">
            <img
              src={client3}
              alt="Sophie Williams"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Sophie Williams</h3>
            <p className="text-gray-400 text-sm mb-6">
              Marketing Head, BrightEdge
            </p>
            <p className="text-gray-300 italic">
              “Their design vision is unmatched — they brought our brand alive
              online.”
            </p>
          </div>
        </SwiperSlide>

        {/* Card 4 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-300 transition">
            <img
              src={client4}
              alt="Arjun Patel"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Arjun Patel</h3>
            <p className="text-gray-400 text-sm mb-6">
              CTO, NexaSoft Technologies
            </p>
            <p className="text-gray-300 italic">
              “The team delivered beyond expectations — tech and design in
              harmony.”
            </p>
          </div>
        </SwiperSlide>

        {/* Card 5 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-300 transition">
            <img
              src={client5}
              alt="Emily Chen"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Emily Chen</h3>
            <p className="text-gray-400 text-sm mb-6">
              Creative Director, Lume Studios
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition">
              Watch now!
            </button>
          </div>
        </SwiperSlide>

        {/* Card 6 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-300 transition">
            <img
              src={client6}
              alt="David Johnson"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">David Johnson</h3>
            <p className="text-gray-400 text-sm mb-6">CEO, Arcadia Ventures</p>
            <p className="text-gray-300 italic">
              “Trionn helped us scale digitally with creativity and precision.”
            </p>
          </div>
        </SwiperSlide>

        {/* Card 7 */}
        <SwiperSlide>
          <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-300 transition">
            <img
              src={client7}
              alt="Hiroshi Tanaka"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Hiroshi Tanaka</h3>
            <p className="text-gray-400 text-sm mb-6">
              Founder, Tokyo Digital Lab
            </p>
            <p className="text-gray-300 italic">
              “They truly understand the balance of design and functionality —
              a rare gem.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
