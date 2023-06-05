import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groupCategory } from "@/sanity/groupCategory";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import Footer from "../componants/Footer";
import NavBar from "../componants/NavBar";

// export default function Products() {
//   return (
//     <>
//       <NavBar />
//       <div>
//         <ul className="mt-10 ml-14 mr-16 space-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           <li className="mt-10">
//             <Link href="/brushed-raglan-sweatshirt">
//               <img
//                 src="1-brushed-raglan-sweatshirt.png"
//                 alt="brushed-raglan-sweatshirt"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Brushed Raglan Sweatshirt</p>
//             <p className="Allproduct-tags">Sweater</p>
//             <p className="Allproduct-price">$195</p>
//           </li>
//           <li>
//             <Link href="/cameryn-sash-tie-dress">
//               <img
//                 src="2-cameryn-sash-tie-dress.png"
//                 alt="cameryn-sash-tie-dress"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Cameryn Sash Tie Dress</p>
//             <p className="Allproduct-tags">Dress</p>
//             <p className="Allproduct-price">$545</p>
//           </li>
//           <li>
//             <Link href="/flex-sweatshirt">
//               <img
//                 src="3-flex-sweatshirt.png"
//                 alt="flex-sweatshirt"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Flex Sweatshirt</p>
//             <p className="Allproduct-tags">Sweater</p>
//             <p className="Allproduct-price">$175</p>
//           </li>
//           <li>
//             <Link href="/flex-sweatpants">
//               <img
//                 src="4-flex-sweatpants.png"
//                 alt="flex-sweatpants"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Flex Sweatpants</p>
//             <p className="Allproduct-tags">Pants</p>
//             <p className="Allproduct-price">$175</p>
//           </li>
//           <li>
//             <Link href="/pink-fleece-sweatpants">
//               <img
//                 src="5-pink-fleece-sweatpants.png"
//                 alt="pink-fleece-sweatpants"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Pink Fleece Sweatpants</p>
//             <p className="Allproduct-tags">Pants</p>
//             <p className="Allproduct-price">$195</p>
//           </li>
//           <li>
//             <Link href="/lite-sweatpants">
//               <img
//                 src="6-lite-sweatpants.png"
//                 alt="lite-sweatpants"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Lite Sweatpants</p>
//             <p className="Allproduct-tags">Pants</p>
//             <p className="Allproduct-price">$150</p>
//           </li>
//           <li>
//             <Link href="/imperial-alpaca-hoodie">
//               <img
//                 src="7-imperial-alpaca-hoodie.png"
//                 alt="imperial-alpaca-hoodie"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Imperial Alpaca Hoodie</p>
//             <p className="Allproduct-tags">Jackets</p>
//             <p className="Allproduct-price">$525</p>
//           </li>
//           <li>
//             <Link href="/flex-push-button-bomber">
//               <img
//                 src="8-flex-push-button-bomber.png"
//                 alt="flex-push-button-bomber"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Flex Push Button Bomber</p>
//             <p className="Allproduct-tags">Jackets</p>
//             <p className="Allproduct-price">$225</p>
//           </li>
//           <li>
//             <Link href="/muscle-tank">
//               <img
//                 src="9-muscle-tank.png"
//                 alt="muscle-tank"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Muscle Tank</p>
//             <p className="Allproduct-tags">T Shirts</p>
//             <p className="Allproduct-price">$75</p>
//           </li>
//           <li>
//             <Link href="/brushed-bomber">
//               <img
//                 src="10-brushed-bomber.png"
//                 alt="brushed-bomber"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Brushed Bomber</p>
//             <p className="Allproduct-tags">Jackets</p>
//             <p className="Allproduct-price">$225</p>
//           </li>
//           <li>
//             <Link href="/raglan-sweatshirt">
//               <img
//                 src="11-raglan-sweatshirt.png"
//                 alt="raglan-sweatshirt"
//                 width={250}
//                 height={270}
//               />
//             </Link>
//             <p className="Allproduct-name">Raglan Sweatshirt</p>
//             <p className="Allproduct-tags">Sweater</p>
//             <p className="Allproduct-price">$195</p>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="product"]{
    title,
    itemCategory,
    price,
    image,
    groupCategory -> {name}
    }`
  );
  // console.log(res);
  return res;
};

interface IProduct {
  price: number;
  title: string;
  image: IImage;
  itemCategory: string;
  groupCategory: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  // console.log(data);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="cols-1 grid md:grid-cols-2 lg:grid-cols-[auto,auto,auto,auto]">
        {data.map((item) => (
          <div>
            <Image
              width={250}
              height={270}
              className="max-h-[270px] object-cover object-top"
              src={urlForImage(item.image).url()}
              alt="product"
            />{" "}
            <h1>{item.title}</h1>
            <h2>{item.itemCategory}</h2>
            <h4>${item.price}</h4>
            <button className="rounded border bg-blue-600 px-6 py-2 text-white">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
