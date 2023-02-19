import { useEffect } from "react";
import { useStore } from "../../store/useStore";
import "./shop.scss";
const x = [
    {
        "_id": "63e5fe9b93959007702d66ed",
        "name": "Monaliza",
        "shortDescription": "Verl Light Blend Of Coffee",
        "description": "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin!",
        "price": 60,
        "discountedPrice": 55,
        "img": "shop5",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e5fe9b93959007702d66ea",
        "name": "Pinky",
        "shortDescription": "Light Blend Of Coffee",
        "description": "Our signature blend, which is a blend of our Nicaraguan and Peruvian beans. Our Nicaraguan beans are directly from an awesome family-run farm.",
        "price": 60,
        "discountedPrice": 55,
        "img": "shop2",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e5fe9b93959007702d66e9",
        "name": "The General",
        "shortDescription": "Strong Blend Of Coffee",
        "description": "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin!",
        "price": 70,
        "discountedPrice": 65,
        "img": "shop1",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e5fe9b93959007702d66ee",
        "name": "Actionz",
        "shortDescription": "Double The Caffine!",
        "description": "Our signature blend, which is a blend of our Nicaraguan and Peruvian beans. Our Nicaraguan beans are directly from an awesome family-run farm.",
        "price": 60,
        "discountedPrice": 55,
        "img": "shop6",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e5fe9b93959007702d66ef",
        "name": "Monroe",
        "shortDescription": "Decafinated Coffee",
        "description": "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin!",
        "price": 80,
        "discountedPrice": 75,
        "img": "shop7",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e5fe9b93959007702d66eb",
        "name": "Rock Star",
        "shortDescription": "Brazilian Blend Of Coffee",
        "description": "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin!",
        "price": 55,
        "discountedPrice": 50,
        "img": "shop3",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e5fe9b93959007702d66ec",
        "name": "The Lady",
        "shortDescription": "Bali Blend Of Coffee",
        "description": "Our signature blend, which is a blend of our Nicaraguan and Peruvian beans. Our Nicaraguan beans are directly from an awesome family-run farm.",
        "price": 75,
        "discountedPrice": 70,
        "img": "shop4",
        "alt": "shop coffee item",
        "__v": 0
    },
    {
        "_id": "63e917fd8ac266b9243ac6a8",
        "name": "test66778",
        "price": 10,
        "discountedPrice": 10,
        "shortDescription": "Ghg",
        "description": "Fghg",
        "img": "shop4",
        "alt": "Hg",
        "__v": 0
    }
]
export default function Shop() {
  const addItemToCart = useStore((state) => state.addItemToCart);
  const products = useStore((state) => state.products);

  return (
    <>
      <main className="shop--container">
        <div className="shop--header">
          <h2>Grab your goods!</h2>
          <svg
            className="rainbow"
            width="137"
            height="67"
            viewBox="0 0 137 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stripe"
              d="M61.9415 5.61922C43.9811 5.61922 28.3203 16.062 20.314 31.3955H14.251C22.6921 12.841 40.8677 0 61.9415 0C91.0574 0 114.66 24.5076 114.66 54.7398H109.26C109.26 27.659 88.0315 5.61922 61.9415 5.61922Z"
              fill="#E19BE9"
            ></path>
            <path
              className="stripe"
              d="M61.9415 11.2273C47.0966 11.2273 34.0404 19.2964 26.5899 31.4H20.314C28.3293 16.0553 43.981 5.62378 61.9415 5.62378C88.0315 5.62378 109.26 27.6636 109.26 54.7555H103.858C103.858 30.7522 85.0549 11.2273 61.9415 11.2273Z"
              fill="#FFC91D"
            ></path>
            <path
              className="stripe"
              d="M61.9414 16.833C50.286 16.833 39.8859 22.5441 33.1953 31.4022H26.5898C34.0403 19.2829 47.0965 11.2295 61.9414 11.2295C85.0548 11.2295 103.856 30.7544 103.856 54.7532H98.4562C98.4585 33.8431 82.076 16.833 61.9414 16.833Z"
              fill="#46DE90"
            ></path>
            <path
              className="stripe"
              d="M61.9414 16.833C82.076 16.833 98.4585 33.8431 98.4585 54.751H93.0589C93.0589 36.9362 79.0994 22.441 61.9414 22.441C53.6168 22.441 46.0498 25.8592 40.462 31.4067H33.1953C39.8859 22.5441 50.2794 16.833 61.9414 16.833Z"
              fill="#48A3FF"
            ></path>
            <path
              d="M81.8545 61.4954C81.8545 57.3308 88.3411 57.416 90.1343 56.8803C92.5438 56.1608 92.7298 54.4327 93.5076 52.2316C94.9354 48.1971 99.259 46.9083 103.354 47.1593C106.104 47.3297 106.248 47.6233 107.512 44.6938C109.164 40.8632 111.724 39.1575 115.068 39.1575C120.257 39.1575 123.361 46.4196 124.464 48.1478C125.809 50.248 127.602 49.8893 129.722 50.2637C133.92 51.0033 136.24 54.2086 136.24 57.1538C136.24 63.8108 125.537 64.8844 122.299 64.8844C114.359 64.8844 102.682 65.1848 94.7785 65.3484C90.3136 65.4403 81.8545 65.6577 81.8545 61.4954Z"
              fill="white"
              stroke="black"
              strokeWidth="1.30096"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
            <path
              d="M110.807 50.2099C110.562 50.2547 110.325 50.4699 110.152 50.9115C109.998 51.3082 110.228 51.6668 110.506 51.9201C110.82 52.2092 111.233 52.3684 111.578 52.021C111.718 51.8936 111.812 51.7236 111.846 51.5373C111.88 51.351 111.852 51.1586 111.766 50.9899C111.549 50.4587 111.168 50.1426 110.807 50.2099Z"
              fill="black"
            ></path>
            <path
              d="M114.146 50.2233C113.922 50.5729 113.844 51.0257 113.994 51.3193C114.346 52.0074 115.352 52.0926 115.733 51.3933C116.033 50.8419 115.713 50.0193 115.135 49.7683C114.747 49.5979 114.375 49.8534 114.146 50.2233Z"
              fill="black"
            ></path>
            <path
              d="M108.411 54.1771C108.371 55.4861 109.267 56.9677 110.056 57.9673C111.213 59.4332 113.194 60.5315 114.987 59.5139C116.406 58.7025 117.186 57.0035 117.48 55.4547C117.565 55.0116 117.607 54.5611 117.603 54.1099"
              stroke="black"
              strokeWidth="1.30096"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
            <path
              d="M48.3207 34.1233C48.1638 31.3395 43.8177 30.4608 41.9327 29.9722C39.8952 29.4455 39.0704 24.4539 35.8383 24.4539C32.6061 24.4539 32.3932 27.4663 29.4749 27.3923C24.7007 27.2691 24.0955 19.6819 16.7459 19.6819C11.4539 19.6819 10.1629 27.0942 7.4351 28.6206C4.3823 30.3286 1 32.1755 1 34.9795C1 37.909 5.11972 37.909 9.66082 37.909C12.6195 37.909 38.0393 37.6849 42.2039 37.6849C46.9781 37.6759 48.4372 36.1563 48.3207 34.1233Z"
              fill="white"
              stroke="black"
              strokeWidth="1.30096"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>

        <div className="shopItems--container">
          {products &&
            products.map((item) => {
              return (
                <div className="carouselItem" key={item._id}>
                  <div className="carouselItem--img">
                    <img
                      src={require("../../assets/images/" + item.img + ".webp")}
                      alt={item.alt}
                    />
                    <div className="carouselItem--img-price">{item.price}$</div>
                    <h5>{item.name}</h5>
                  </div>

                  <div className="carouselItem--details">
                    <div className="carouselItem--details-description">
                      <p>{item.shortDescription}</p>
                    </div>
                  </div>
                  <button onClick={() => addItemToCart(item)}>
                    Add To Cart <span>{item.discountedPrice}$</span>
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
