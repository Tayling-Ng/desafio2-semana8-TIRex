// src/components/ImageSection/ImageSection1.tsx
import imagem from "../../assets/img-login/Rectangle1.svg";

const ImageSection = () => {
    return (
        <img
            src={imagem}
            alt="Imagem de Exemplo"
            className="absolute top-[80px] right-0 w-full sm:w-[626px] sm:h-[720px] h-auto opacity-100"
        />
    );
};

export default ImageSection;
