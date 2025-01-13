// src/components/ImageSection/ImageSection1.tsx
import imagem from "../../assets/img-login/Rectangle1.svg";

const ImageSection = () => {
    return (
        <img
            src={imagem}
            alt="Imagem de Exemplo"
            className="w-[626px] h-[720px] opacity-100 object-cover"
        />
    );
};

export default ImageSection;
