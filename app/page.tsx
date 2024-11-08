import Image from "next/image"
import CustomButton from "./_component/CustomButton"

export default function Home() {
  return (
    <>
      <div className="p-4 pt-12 h-screen">
        <main className="px-4 flex flex-col justify-evenly items-center md:flex-row md:justify-center bg-black-100 md:h-5/6 ">
          <section className=" md:max-w-md  lg:max-w-lg ">
            <h1 className="text-[max(4vw,24px)] font-extrabold tracking-wide font-mono leading-snug">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-limedSpruce-500 via-bismark-600 to-jetStream-400 bg-clip-text text-transparent">
                DigitalStock
              </span>
            </h1>
            <p className="mt-8 tracking-tight">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate sit illum quisquam. Quia nostrum neque quod praesentium
              numquam magnam rem aliquid laboriosam vero libero? Quo commodi
              debitis quia? Hic, eius.
            </p>
          </section>

          <div className="md:max-w-xl p-4 ">
            <Image
              src={"/electronic-device-collection.jpg"}
              alt={"Electronic Device Image"}
              width={700}
              height={500}
              className=""
            />
            <section className="flex justify-evenly mt-8">
              <CustomButton href={"/store"} text={"Shop"} />
              <CustomButton href={"/about"} text={"About us"} />
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
