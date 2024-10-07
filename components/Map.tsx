import React from "react";

const MapSection: React.FC = () => {
  return (
    <div className="relative bg-black text-white">
      {/* Map Section */}

      <div className="relative w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6834892458633!2d2.9147054999999997!3d36.133827800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f3b8d9fb45493%3A0x1e7b6ac24f63dfb0!2sclinique%20smile%20dentaire%20bouzid!5e1!3m2!1sen!2sdz!4v1726516867718!5m2!1sen!2sdz"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
