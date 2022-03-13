import React from "react";

const Card = (props) => {
  return (
    <a href={props.link} className={`${props.link && "cursor-pointer"}`}>
      <div className="hover:bg-blue-700 p-4 text-white bg-blue-500 shadow-xl flex flex-col rounded-xl">
        <h1 className="md:text-2xl text-xl">{props.title}</h1>
        <div className="flex flex-col space-y-8">
          <div className="md:text-lg text-xs mt-5">{props.children}</div>
          <div className="flex justify-center">
            <img
              className="rounded-2xl shadow-xl "
              src={props.image}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
