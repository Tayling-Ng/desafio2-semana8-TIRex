// src/components/ImageSection/ImageSection.tsx
import imagem from "../../assets/img-login/Rectangle2.svg";

const ImageSection = () => {
    return (
        <img
            src={imagem}
            alt="Imagem de Exemplo"
            className="w-full sm:w-[626px] sm:h-[720px] opacity-100 object-cover"
        />
    );
};

export default ImageSection;
