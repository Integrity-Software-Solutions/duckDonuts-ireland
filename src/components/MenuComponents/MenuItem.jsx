import React, { useState, useEffect } from "react";

const MenuItem = (props) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  const NewItem = ({ key, item }) => {
    return (
      <li className="p-4">
        <div className="w-full h-56">{item.image}</div>
        <div className="mt-2">{item.description}</div>
      </li>
    );
  };

  let featuredItems = props.data['Featured Items'] ? props.data['Featured Items'] : [];
  let menuItems = props.data['items'] ? props.data['items'] : [];

  console.log(props.data);

  const items = [
    { image: "Image 1", description: "Description 1" },
    { image: "Image 2", description: "Description 2" },
    { image: "Image 3", description: "Description 3" },
    { image: "Image 4", description: "Description 4" },
    { image: "Image 5", description: "Description 5" },
    { image: "Image 6", description: "Description 6" },
    { image: "Image 7", description: "Description 7" },
    { image: "Image 8", description: "Description 8" },
    { image: "Image 9", description: "Description 9" },
  ];

  return (
    <div className="h-full w-full">
      <div className=" bg-fuchsia-900 relative">
        <img
          alt={props.alt}
          src={props.backgroundImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${
              showBackground ? `url(${props.backgroundImage})` : ""
            }`,
          }}
        />
        <div className="uppercase absolute bottom-[5.5rem] left-[19%] text-6xl font-bold text-white">
          {props.title}
        </div>
      </div>
      {/* <div className="py-20 px-[1.15rem]">{props.children}</div> */}
      <div className="flex flex-col justify-self-center h-full w-full bg-red-400 max-w-[60rem] my-24 mx-20">
        <div
          className={`${
            props.centerTitle && "text-center"
          } text-sky-500 text-7xl font-bold py-3`}
          style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
        >
          Title 1
        </div>
        <div className="my-6 text-lg font-bold italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          omnis veniam unde eveniet, repudiandae hic laudantium, veritatis
          recusandae autem iusto tempora tenetur aut eum provident nemo sed sit
          dignissimos cupiditate.
        </div>
        <div className="mt-10 mb-6 font-bold text-2xl uppercase flex justify-between items-center">
          <p>Title 2</p>
          <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
            Button 2
          </button>
        </div>
        <div>
          <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
            {items.map((item, index) => (
              <NewItem key={index} item={item} />
            ))}
          </ul>
        </div>
        {/* <div className="mt-10 mb-6 font-bold text-2xl uppercase flex justify-between items-center">
          <p>Title 3</p>
          <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
            Button 3
          </button>
        </div>
        <div>
          <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
            {items.map((item, index) => (
              <NewItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="mt-10 mb-6 font-bold text-2xl uppercase flex justify-between items-center">
          <p>Title 4</p>
          <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
            Button 4
          </button>
        </div>
        <div>
          <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
            {items.map((item, index) => (
              <NewItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="mt-10 mb-6 font-bold text-2xl uppercase flex justify-between items-center">
          <p>Title 5</p>
          <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
            Button 5
          </button>
        </div>
        <div>
          <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
            {items.map((item, index) => (
              <NewItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="mt-10 mb-6 font-bold text-2xl uppercase flex justify-between items-center">
          <p>Title 6</p>
          <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
            Button 6
          </button>
        </div>
        <div>
          <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
            {items.map((item, index) => (
              <NewItem key={index} item={item} />
            ))}
          </ul>
        </div> */}
      </div>
      
    </div>
  );
};

export default MenuItem;
