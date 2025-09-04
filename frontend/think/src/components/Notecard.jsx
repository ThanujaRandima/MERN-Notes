import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import { formatDate } from "../lib/util"
import api from "../lib/axios.js"
import toast from "react-hot-toast"

export const Notecard = ({note, setNotes}) => {

    const handleDelete = async (e, id) => {
        e.preventDefault(); //stopping the navigation behaviour

        if(!window.confirm("Are u sure to delete this note ? ")) return;

        try{
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter(note => note._id !== id))//get ridf of deleted one
            toast.success("Note deleted successfully")
        } catch(error){
            toast.error("Failed to delete the note")
        }
    }

  return (
    <Link to={`/note/${note._id}`} 
    className="card bg-[#EFEFEF] shadow-lg hover:shadow-xl transition-all duration-200 border-t-4 border-solid border-[#2c6e49]">
        <div className="card-body">
            <h3 className="card-title text-[21px] text-[#303030]">{note.title}</h3>
            <p className="text-[#616161]  line-clamp-3">{note.content}</p>
            <div className="items-center justify-between mt-4 card-actions">
                <span className="text-sm text-[#616161]">{formatDate(new Date(note.createdAt))}</span>

                <div className="flex items-center gap-1">
                    <PenSquareIcon className="size-4 text-[#000]" />
                    <button className="btn btn-ghost btn-xs text-error"onClick={(e) => handleDelete(e, note._id)} >
                        <Trash2Icon className="size-4" />
                    </button>
                </div>

            </div>
        </div>
    </Link>
  )
}

export default Notecard