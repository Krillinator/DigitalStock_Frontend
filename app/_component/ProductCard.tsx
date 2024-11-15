import Image from "next/image"
import { IProduct } from "../_types/IProduct"
import CustomButton from "./ui-elements/CustomButton"

// Where does Destructuring happen?
export default function ProductCard({ product }: { product: IProduct }) {
  const { id, title, description, price, image } = product // Destructuring

  return (
    <>
      <div className="shadow-md border-2 border-whiteLilac-100 rounded-lg max-w-sm overflow-hidden">
        <Image
          width={250}
          height={250}
          src={"/stock-photo/camera.jpeg"}
          alt={"Product Image"}
          className=" w-full aspect-video "
        />
        <section className="p-4">
          <header className="text-limedSpruce-600 text-2xl font-bold mb-4">
            {title}
          </header>

          <div className="tracking-wide mb-8">{description}</div>
          <footer className="flex justify-between items-center">
            <section className="text-limedSpruce-600 text-5xl font-bold">
              ${price}
            </section>

            <section>
              <CustomButton href={""} text={"Add to cart"} />
            </section>
          </footer>
        </section>
      </div>
    </>
  )
}
