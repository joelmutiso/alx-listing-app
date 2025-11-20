// Define the rules for what a Card must have
export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

// Define the rules for what a Button must have
export interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary'; // Optional styling choice
}