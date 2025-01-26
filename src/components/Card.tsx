import { Trash2 } from "lucide-react";

interface CardProps {
    url: string;
    onClick: () => void;
    onDelete: () => void;
}

export default function Card({ url, onClick, onDelete }: CardProps) {
    const origin = new URL(url).origin;
    return (
        <article className="flex justify-between items-center cursor-pointer text-(--pico-color-azure-400)">
            <div onClick={onClick} className="flex-1">
                {origin}
            </div>
            <Trash2 
                className="text-(--pico-color-azure-400)" 
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
            />
        </article>
    )
}