function WelcomeCard(){
    return (
        <div className="flex flex-col justify-center items-center gap-[15px] bg-black/55 text-white text-base leading-6 w-[353px] h-[285px] rounded-[30px]">
            <h1 className="text-[24px] leading-[48px] font-bold">Welcome to <span className="text-[24px] leading-[48px] font-bold text-span-light-blue">Project Manager</span></h1>
            <p className="px-[58px] text-[14px] text-center">Get your projects and ideas in order, all in one place! Sign up now and discover a smarter way to manage your work with efficiency and teamwork</p>
            <button className="flex justify-center items-center p-[12px] text-[15px] font-bold  w-[118px] h-[36px] rounded-[30px] border">Get Started</button>
        </div>
    );
}

export default WelcomeCard