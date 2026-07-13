import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1616895727759-dd84a2690433?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1718146018918-5d776dbaf4f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1522010675502-c7b3888985f6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800",
  },
  {
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}

          <div className="text-center mb-16">
            <p
              className="text-2xl md:text-3xl text-[#026fc5]"
              style={{ fontFamily: "cursive" }}
            >
              Make Your Tour More Pleasure
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-[#026fc5] leading-tight">
              Recent Gallery
            </h2>
          </div>

          {/* Gallery */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">

            {/* Left */}

            <div className="lg:mt-20">
              <GalleryImage
                src={galleryImages[0].src}
                height="h-[250px]"
                onClick={setSelectedImage}
              />
            </div>

            {/* Column 2 */}

            <div className="space-y-6">
              <GalleryImage
                src={galleryImages[1].src}
                height="h-[200px]"
                onClick={setSelectedImage}
              />

              <GalleryImage
                src={galleryImages[2].src}
                height="h-[200px]"
                onClick={setSelectedImage}
              />
            </div>

            {/* Center */}

            <div>
              <GalleryImage
                src={galleryImages[3].src}
                height="h-[430px]"
                onClick={setSelectedImage}
              />
            </div>

            {/* Column 4 */}

            <div className="space-y-6">
              <GalleryImage
                src={galleryImages[4].src}
                height="h-[200px]"
                onClick={setSelectedImage}
              />

              <GalleryImage
                src={galleryImages[5].src}
                height="h-[200px]"
                onClick={setSelectedImage}
              />
            </div>

            {/* Right */}

            <div className="lg:mt-20">
              <GalleryImage
                src={galleryImages[6].src}
                height="h-[250px]"
                onClick={setSelectedImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}

      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt=""
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

type GalleryImageProps = {
  src: string;
  height: string;
  onClick: (src: string) => void;
};

function GalleryImage({
  src,
  height,
  onClick,
}: GalleryImageProps) {
  return (
    <div
      onClick={() => onClick(src)}
      className={`overflow-hidden rounded-[32px] cursor-pointer shadow-lg group ${height}`}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
      />
    </div>
  );
}