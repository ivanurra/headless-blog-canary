const Card = () => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-1/3 md:rounded-none md:rounded-l-lg"
          src="image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3 ml-4">
          <h5 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem Ipsum
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300 md:w-2/3">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum.
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
