import { useEffect, useState } from "react";
import API from "../api/api";

const MediaGallery = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    API.get("/media").then(res => setMedia(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Media</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item) => (
          <div key={item._id} className="border rounded p-2 shadow">
            <p className="font-semibold mb-2">{item.title}</p>
            {item.type === "photo" ? (
              <img src={item.fileUrl} alt={item.title} className="w-full h-40 object-cover rounded" />
            ) : (
              <video controls src={item.fileUrl} className="w-full h-40 rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
