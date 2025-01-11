const Section4 = () => {
    return (
        <section className="flex flex-col justify-center items-center w-[393px] h-[510px] py-[60px] bg-white gap-[60px]">
            <div className="flex flex-col items-center gap-[24px]">
                <h1 className="text-[25px] leading-[48px] text-[#160A60] font-bold">
                    Subscribe to Update
                </h1>
                <p className="text-[14px] leading-[24px] text-[#160A60]">
                    Stay informed with our lates updates
                </p>
            </div>
            <div className="flex flex-col w-[353px] h-[256px] gap-10">
                <form className="">
                    <label htmlFor="email" className="text-[#160A60] font-bold">
                        Email
                    </label>
                    <input
                        className="w-[353px] h-[36px] rounded-[6px] border border-black border-opacity-50 px-3"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                    <div className=" text-black opacity-50">
                        We promise not to spam
                    </div>
                </form>
                <form className="">
                    <label htmlFor="name" className="text-[#160A60] font-bold">
                        Name
                    </label>
                    <input
                        className="w-[353px] h-[36px] rounded-[6px] border border-black border-opacity-50 px-3"
                        type="password"
                        id="password"
                        placeholder="Enter your name"
                    />
                </form>
                <button
                    className="flex justify-center items-center w-[148px] h-[36px] p-[12px] font-medium text-[15px] leading-[24px] rounded-[8px] bg-[#1E293B] text-white self-center"
                    type="submit"
                >
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default Section4;
