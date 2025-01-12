function WelcomeCard(){
    return (
        <div className="flex flex-col justify-center items-center gap-[15px] bg-black/55 text-white text-base leading-6 w-[353px] h-[285px] rounded-[30px]
        tablet:w-[656px] tablet:h-[258px] tablet:px-[68px] tablet:py-[27px]">
            <h1 className="text-[24px] leading-[48px] font-bold tablet:text-[40px] tablet:whitespace-nowrap tablet:w-[520px] tablet:h-[48px]">Welcome to <span className="text-[24px] leading-[48px] font-bold text-span-light-blue tablet:text-[40px]">Project Manager</span></h1>
            <p className="w-[236px] h-[120px] text-[14px] leading-[24px] text-center tablet:text-[16px] tablet:p-0 tablet:text-left tablet:w-[520px] tablet:h-[72px]">Get your projects and ideas in order, all in one place! Sign up now and discover a smarter way to manage your work with efficiency and teamwork</p>
            <button className="flex justify-center items-center p-[12px] text-[15px] font-bold  w-[118px] h-[36px] rounded-[30px] border tablet:text-[16px] tablet:w-[240px] tablet:h-[48px] tablet:self-start ">Get Started</button>
        </div>
    );
}

export default WelcomeCard