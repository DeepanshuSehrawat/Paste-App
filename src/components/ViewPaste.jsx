import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const ViewPaste = () => {
  const { id } = useParams()
  const allPaste = useSelector((state) => state.paste.pastes)
  const paste = allPaste.find((p) => p._id === id)

  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content)
    toast.success('Copied to clipboard!')
  }

  if (!paste) {
    return <div className="p-4 text-red-500">Paste not found</div>
  }

  return (
    <div>
      <div className="flex flex-row gap-7 mt-2 place-content-between">
        <input
          placeholder="search paste"
          className="rounded-2xl mt-0 w-[66%] p-4"
          value={paste.title}
          disabled
        />
      </div>

      <div className="relative w-fit mt-4">
        <textarea
          className="min-w-[500px] p-4 rounded-2xl pr-16"
          value={paste.content}
          disabled
          rows={20}
          placeholder="enter texts"
        ></textarea>

        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded"
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default ViewPaste
