function ScrollableImage({ src, onClick }) {
  return (
    <div
      style={{
        backgroundImage: `url("${src}")`,
      }}
      className="project-box h-full cursor-zoom-in rounded-md"
      onClick={onClick}
    ></div>
  );
}

export default ScrollableImage;
