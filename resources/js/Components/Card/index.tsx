import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContainer = ({ children, className }: CardProps) => {
    return <div className={`shadow rounded ${className}`}>{children}</div>;
};

export const Card = ({ children, className }: CardProps) => {
    return <div className={`md:m-4 animate__animated animate__fadeIn ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }: CardProps) => {
    return (
        <div className="flex items-center justify-between bg-white p-2 rounded-t-md">
            {children}
        </div>
    );
};

export const CardHeaderContent = ({ children, className }: CardProps) => {
    return <div className={`${className}`}>{children}</div>;
};

export const CardBody = ({ children, className }: CardProps) => {
    return <div className={`bg-white ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className }: CardProps) => {
    return <div className={`bg-white rounded-b-md p-2 ${className}`}>{children}</div>;
};