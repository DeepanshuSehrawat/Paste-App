import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
    ,
  },
  reducers: {
    addToPastes: (state,action) => {
     const paste= action.payload;

     //check if paste with same title exist
     const isDuplicate = state.pastes.some(p => p.title === paste.title);
      if (isDuplicate) {
        toast.error("A paste with this title already exists");
        return;
      }

     state.pastes.push(paste);
     localStorage.setItem("pastes",JSON.stringify(state.pastes));
     toast.success("paste created successfully")

   },
    updateToPastes: (state,action) => {
      const paste= action.payload;
      let index = state.pastes.findIndex(p=>p._id===paste._id);
      if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("paste updated successfully")
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    removeFromPastes:(state,action)=>{
      let pasteId=action.payload;
      let index=state.pastes.findIndex((p)=>p._id===pasteId);
      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("paste deleted successfully");
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer