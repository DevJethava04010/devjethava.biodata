import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// import gallery1 from "@/assets/gallery-1.png";
// import gallery2 from "@/assets/gallery-2.png";
import gallery2 from "@/assets/20251022_180730.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.png";

const photos = [
    // { src: gallery1, alt: "Family Photo" },
    { src: gallery2, alt: "Casual" },
    { src: gallery3, alt: "Traditional" },
    { src: gallery4, alt: "Travel" },
];

const PhotoGallery = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {photos.map((photo, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className="group relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-gold-light/40 hover:border-gold transition-all duration-300"
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                    </button>
                ))}
            </div>

            <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
                <DialogContent className="max-w-2xl border-gold/30 bg-card p-2">
                    {selected !== null && (
                        <img
                            src={photos[selected].src}
                            alt={photos[selected].alt}
                            className="w-full rounded-md object-contain max-h-[80vh]"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PhotoGallery;
