import MainSection from '../../components/HomePage/MainSection/MainSection';
import Section2 from '../../components/HomePage/Section2/Section2';
import Section3 from '../../components/HomePage/Section3/Section3';
import Section4 from '../../components/HomePage/Section4/Section4 ';

export const HomePage = () => {
    return (
        <div className="w-full flex flex-col">
            <MainSection />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
};
