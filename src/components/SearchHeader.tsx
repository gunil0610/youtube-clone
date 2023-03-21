import { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="flex w-full justify-between items-center px-6 py-4 border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center relative">
        <div className="absolute w-5 h-4 top-2 left-2 bg-white" />
        <BsYoutube className="text-brand text-4xl z-10" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>

      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 pl-6 outline-none bg-black text-gray-50 rounded-l-full"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="bg-zinc-600 px-6 py-4 rounded-r-full">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
