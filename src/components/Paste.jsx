import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  function handleCopy(paste) {
    navigator.clipboard.writeText(paste?.content);
    toast.success("paste copied to clipboard");
  }
  function handleShare(paste) {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: window.location.href, // optional, can be dynamic if you have detail view
        })
        .then(() => toast.success("Paste shared successfully"))
        .catch((err) => toast.error("Error sharing paste"));
    } else {
      toast.error("Web Share API not supported in this browser");
    }
  }

  return (
    <div>
      <input
        className="p-4 rounded-2xl mt-2 min-w-[600px]"
        type="search"
        placeholder="search paste"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-4 mt-4 ">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border rounded-2xl mt-4" key={paste?._id}>
                <div className="text-xl">{paste.title}</div>
                <div className="text-gray-600">
                  {paste.content.slice(0, 150)}...
                </div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button onClick={() => handleCopy(paste)}>Copy</button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                  <button onClick={() => handleShare(paste)}>Share</button>
                </div>
                <div>{new Date(paste.createdAt).toLocaleString()}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
