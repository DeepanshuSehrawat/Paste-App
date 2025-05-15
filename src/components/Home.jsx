import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
const Home = () => {
  let [title,setTitle ] = useState("");
  let [value,setValue]=useState();
  //url parameter is checked (either it is new paste or existing one)
  let [searchParams,setSearchParams]=useSearchParams();
  let pasteId=searchParams.get("pasteId")
  
  const dispatch=useDispatch()

  let allPastes=useSelector((state)=>state.paste.pastes)
  useEffect(()=>{

    if(pasteId){
      let paste=allPastes.find((p)=>p._id===pasteId)
      setTitle(paste?.title);
      setValue(paste?.content);
    }
  },[pasteId,allPastes])
  
  function createPaste(){
    const paste={
      title:title,
      content:value,
      _id:pasteId ||
          Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }
    if(pasteId){
      dispatch(updateToPastes(paste))
    }
    else{
      dispatch(addToPastes(paste))
    }
    //after creation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  return (
    <div>
    <div className="flex flex-row gap-7 mt-2 place-content-between ">
      <input
        placeholder="search paste"
        className="rounded-2xl mt-0 w-[66%] p-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button className="ml-2 " onClick={createPaste}>
        { pasteId ? "Update Paste": "Create Paste"}</button>
    </div>
    <div>
      <textarea className="min-w-[500px] mt-4 p-4 rounded-2xl" value={value} onChange={(e)=>setValue(e.target.value)} rows={20} placeholder="enter texts"></textarea>
    </div>
    </div>
  );
};

export default Home;
