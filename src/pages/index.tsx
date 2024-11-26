
import React from "react";
import Image from "next/image";
import { Prompt } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { images } from "@/lib/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const kanit = Prompt({
  subsets: ["latin"],
  weight: "400",
});
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="py-1">
      <title>6th Menniversary 💖</title>
      <div className="container">
        <h1 className="text-3xl font-bold py-6">
          6th Menniversary of our relationship💖💗
        </h1>
      </div>
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          loop={true}
          spaceBetween={20}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-96 w-97 rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-2xl flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-100 w-full "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br></br>&nbsp;
      <h1 className="text-center py-7 text-3xl">Note 💌</h1>
      <Card className="w-4/5 mx-auto flex items-center justify-center shadow-3xl">
        <CardBody className="justify-items-center items-stretch">
          <p>
            สุขสันต์วันครบรอบ 6 เดือนนะครับ เค้าไม่มีของอะไรให้เลย
            เค้าเลยตั้งใจทำเว็บนี้ขึ้นมาเป็นของขวัญสำหรับเธอนะ
            เค้าอยากอยู่กับเธอไปนานๆเลยย เค้ารักเธอนะะ💖
          </p>
        </CardBody>
      </Card>
      <div className="container1">
        <iframe
          src="https://open.spotify.com/embed/track/126PlW2V73OM9n1s1zOKW9?utm_source=generator"
          className="iframe"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <footer>
        <nav className="py-10 text-center text-lg">
          <p>
            💖 Made by{" "}
            <a
              className="underline underline-offset-4"
              href="https://jittiphat.site"
            >
              Jittiphat Somsai
            </a>
          </p>
        </nav>
      </footer>
      {/* Description Metadata */}
      <meta
        name="description"
        content="6th Mensiversary of our relationship website💖💗 | Next.JS v15 + Tailwind CSS"
      />
      <meta name="keywords" content="menniversary, nextjs, tailwindcss" />
    </section>
  );
}
