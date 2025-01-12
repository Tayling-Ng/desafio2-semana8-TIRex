function WelcomeCard(){
    return (
        <div className="flex flex-col justify-center items-center gap-[15px] bg-black/55 text-white text-base leading-6 w-[353px] h-[285px] rounded-[30px]
        sm:w-[656px] sm:h-[258px] sm:px-[68px] sm:py-[27px]">
            <h1 className="text-[24px] leading-[48px] font-bold sm:text-[40px] sm:whitespace-nowrap sm:w-[520px] sm:h-[48px]">Welcome to <span className="text-[24px] leading-[48px] font-bold text-span-light-blue sm:text-[40px]">Project Manager</span></h1>
            <p className="w-[236px] h-[120px] text-[14px] leading-[24px] text-center sm:text-[16px] sm:p-0 sm:text-left sm:w-[520px] sm:h-[72px]">Get your projects and ideas in order, all in one place! Sign up now and discover a smarter way to manage your work with efficiency and teamwork</p>
            <button className="flex justify-center items-center p-[12px] text-[15px] font-bold  w-[118px] h-[36px] rounded-[30px] border sm:text-[16px] sm:w-[240px] sm:h-[48px] sm:self-start ">Get Started</button>
        </div>
    );
}

export default WelcomeCard