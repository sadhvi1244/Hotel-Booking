import { useState } from "react";
import { Dialog, DialogContent } from "../ui/Dialog";
import { FaPlay } from "react-icons/fa";

const VideoBanner = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative h-[500px] ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600435335786-d74d2bb6de37?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <button
          onClick={() => setVideoOpen(true)}
          className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Play Video"
        >
          <FaPlay />
        </button>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="400"
            // Fixed embed link
            src="https://www.youtube.com/embed/UJEUwEJ6gH4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoBanner;
