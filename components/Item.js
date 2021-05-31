function Item({ src, name }) {
  return (
    <div>
      <div
        style={{ width: "455px", height: "480px" }}
        className="relative bg-gray-600 overflow-hidden"
      >
        <img src={src} />
        <div className="absolute top-0 w-full h-full bg-gradient-to-tr from-yellow-600 to-transparent" />
        <div className="absolute bottom-12  text-4xl font-inter font-black text-white px-20">
          {name}
        </div>
      </div>
    </div>
  );
}

export default Item;
