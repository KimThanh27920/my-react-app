import axios from "axios";
import React, { useEffect, useState } from "react";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Photos = () => {
  // Use useEffect
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((images) => {
      const newPhotos = [...randomPhotos, ...images];
      setRandomPhotos(newPhotos);
      setNextPage(nextPage + 1);
    });
  };

  //Use useEffect
  useEffect(() => {
    handleLoadMorePhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-6">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={`${item.download_url}${index}`}
              className="p-3 bg-white shadow-md  rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg "
              ></img>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
