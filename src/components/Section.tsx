import { ReactNode } from 'react';

type SectionProps = {
    title?: string;
    children: ReactNode;
};

const Section = ({ children, title = 'My Subheading' }: SectionProps) => {
    return (
        <>
            <h2>{title}</h2>
            <p> {children} </p>
        </>
    );
};

export default Section;
