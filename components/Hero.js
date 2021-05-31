function Hero() {
  return (
    <video
      autoPlay
      loop
      muted
      className="w-auto min-w-full min-h-full max-w-none filter"
    >
      <source src="videos/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Hero;
