interface ModalProps {
    message: string;
    onClose: () => void;
}

const ModalSubscription: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center border z-[15]">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#44406e]">
                <h2 className="text-[40px] mb-4 font-bold text-[#5C5A79]">Subscription Successful!</h2>
                <p className="font-bold text-[20px] mb-[120px]">{message}</p>
                <button
                    className="mt-4 p-2 bg-[#5C5A79] text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalSubscription;