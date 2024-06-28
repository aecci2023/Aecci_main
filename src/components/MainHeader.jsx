const MainHeader = ({ heading, text, imgUrl }) => {
  return (
    <>
      <div
        className="flex justify-center text-white"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-[72vw]"
          style={{ marginBottom: "5rem", marginTop: "5rem" }}
        >
          <h1 className="font1 text-2xl">{heading}</h1>
          <div>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
