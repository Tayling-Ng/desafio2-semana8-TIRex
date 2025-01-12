import { useState } from 'react';
import { validateEmail, validateName } from './Validation';
import ModalSubscription from './ModalSubscription';

function Section4() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;

        if (!email || !validateEmail(email)) {
            setEmailError('Please enter a valid email');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!name || !validateName(name)) {
            setNameError('Please enter your name');
            valid = false;
        } else {
            setNameError('');
        }

        if (valid) {
            setShowModal(true);
            setName('');
            setEmail('');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="flex flex-col justify-center items-center min-w-[393px] h-[510px] py-[60px] bg-white gap-[60px] tablet:min-w-[744px] tablet:h-[549px] desktop:flex-row desktop:justify-center desktop:w-full desktop:gap-[60px]">
            <div className="flex flex-col items-center gap-[24px] tablet:w-[404px] tablet:h-[96px] desktop:text-left desktop:w-[520px] desktop:items-start">
                <h1 className="text-[25px] leading-[48px] text-[#160A60] font-bold tablet:text-[40px]">
                    Subscribe to Update
                </h1>
                <p className="text-[14px] leading-[24px] text-[#160A60] tablet:text-[16px]">
                    Stay informed with our latest updates
                </p>
            </div>
            <div className="flex flex-col w-[353px] h-[256px] gap-10 tablet:w-[404px] tablet:h-[268px]">
                <form className="flex flex-col relative" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-[#160A60] font-bold">
                        Email
                    </label>
                    <input
                        className="w-[353px] h-[36px] rounded-[6px] border border-black border-opacity-50 px-3 tablet:w-[380px]"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />                    
                    <div className=" text-black opacity-50 mb-10">
                        We promise not to spam
                    </div>
                    {emailError && <div className="absolute text-red-500 text-sm top-[calc(100%-178px)] left-0 desktop:top-[calc(100%-185px)]">{emailError}</div>}

                    <label htmlFor="name" className="text-[#160A60] font-bold">
                        Name
                    </label>
                    <input
                        className="w-[353px] h-[36px] rounded-[6px] border border-black border-opacity-50 px-3 tablet:w-[380px]"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    {nameError && <div className="absolute text-red-500 text-sm top-[calc(100%-72px)] left-0 desktop:top-[calc(100%-77px)]">{nameError}</div>}

                    <button
                        className="flex justify-center items-center w-[148px] h-[36px] p-[12px] font-medium text-[15px] leading-[24px] rounded-[8px] bg-[#1E293B] text-white self-center tablet:w-[240px] tablet:h-[48px] tablet:text-[16px] desktop:self-start mt-10"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {showModal && (
                <ModalSubscription message="Your subscription has been completed successfully." onClose={handleCloseModal} />
            )}
        </section>
    );
};

export default Section4;
