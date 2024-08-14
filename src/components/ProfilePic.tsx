function ProfilePic() {
  return (
    <div className="fixed mt-[90px]">
      <img
        src="main-img.jpg"
        className="h-screen object-cover relative"
        alt="main image"
      />
      <div className="w-20 h-20 bg-yellow-300 p-4 absolute bottom-80 left-0 rounded-full"><img src="figma.png" alt="figma icon" /></div>
      <div className="w-20 h-20 bg-yellow-300 p-4 absolute top-80 right-44 rounded-full"><img src="react.png" alt="figma icon" /></div>
      <div className="w-20 h-20 bg-yellow-300 p-4 absolute top-52 left-16 rounded-full"><img src="js.png" alt="figma icon"/></div>
    </div>
  );
}

export default ProfilePic;
