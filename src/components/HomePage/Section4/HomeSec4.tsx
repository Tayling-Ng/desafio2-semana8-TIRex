const HomeSec4 = () => {
    return (
        <section className="flex flex-col items-center w-[393px] h-[510px] py-[60px] bg-blue-300">
            <div className="flex flex-col items-center gap-[24px]">
                <h1 className="">Subscribe to Update</h1>
                <p className="">Stay informed with our lates updates</p>
            </div>
            <div>
                <form className="">
                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className=""
                    />
                    <div className="">We promise not to spam</div>
                </form>
                <form className="">
                    <label htmlFor="name" className="">
                        Name
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your name"
                        className=""
                    />
                </form>
                <button className="bg-[#1E293B] text-white" type="submit">
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default HomeSec4;
