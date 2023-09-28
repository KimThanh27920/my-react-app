const CardTaiwind = (props) => {
  const elementClasses = {
    FIRE: "text-lg font-bold text-transparent bg-clip-text bg-fire-gradient",
    WATER: "text-lg font-bold text-transparent bg-clip-text bg-water-gradient",
    AIR: "text-lg font-bold text-transparent bg-clip-text bg-air-gradient",
    EARTH: "text-lg font-bold text-transparent bg-clip-text bg-earth-gradient",
    PRIMARY:
      "text-lg font-bold text-transparent bg-clip-text bg-primary-gradient",
  };

  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src={props.image || ""}
          alt=""
          className="block w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="absolute left-2/4 -translate-x-2/4 translate-y-24 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              src={props.avatar || ""}
              alt=""
            />

            <span className="font-light text-base text-[#333]">
              {props.username || ""}
            </span>
          </div>

          <div>256</div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-medium mt-[20px]">
            {props.title || ""}
          </span>
          <span className={elementClasses[props.elementType]}>
            {props.elementType || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTaiwind;
