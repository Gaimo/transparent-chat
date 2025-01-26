import { X } from "lucide-react";

export default function Header() {
    return (
        <header className="px-4 pt-4 flex justify-between items-baseline cursor-move" data-tauri-drag-region>
            <h5>TransparentChat</h5>
            <X className="cursor-pointer text-(--pico-color)" />
        </header>
    )
}