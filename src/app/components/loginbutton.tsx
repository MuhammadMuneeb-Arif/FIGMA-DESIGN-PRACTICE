const LoginButton = (props: any) => {
  return (
    <div className="relative inline-block">
      <button
        className=" bg-blue-russian-gradient hover:shadow-custom-large  relative transition-transform duration-800 hover:scale-[1.045]   p-[2px] text-white  rounded-full shadow-custom-purple  "
      >
        <div className=" bg-[#140930] h-full  w-full px-6 py-2 rounded-full">
        {props.text2}
        </div>
      </button>
    </div>
  );
};

export default LoginButton;
