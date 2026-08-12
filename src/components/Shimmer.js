const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            className="w-[250px] h-[400px] m-2 p-2 rounded-lg bg-gray-200"
            key={index}
          >
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
          </div>
        ))}
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="menu-page menu-shimmer">
      <div className="shimmer-title menu-shimmer-name"></div>
      <div className="shimmer-text menu-shimmer-meta"></div>
      <div className="shimmer-title menu-shimmer-heading"></div>
      <ul>
        {Array(8)
          .fill("")
          .map((_, index) => (
            <li key={index}>
              <div className="shimmer-text"></div>
              <div className="shimmer-text short"></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Shimmer;
