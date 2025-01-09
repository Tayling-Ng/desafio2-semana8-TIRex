// src/components/ImageSection/ImageSection.tsx
import imagem from "../../assets/img-login/Rectangle2.svg";

const ImageSection = () => {
    return (
        <img
            src={imagem}
            alt="Imagem de Exemplo"
            className="absolute top-[80px] left-0 w-full sm:w-[626px] sm:h-[625px] h-auto opacity-100"
        />
    );
};

export default ImageSection;