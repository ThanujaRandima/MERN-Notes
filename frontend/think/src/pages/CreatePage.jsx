import axios from "axios";
import { ArrowLeftIcon} from "lucide-react";
import { useState } from "react"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

     if(!title.trim() || !content.trim()){
      toast.error("All fields are required");
      return;
    }

    setLoading(true)
    try{
      await api.post("/notes", {title, content})
      toast.success("Note created Successfully");
      navigate("/")
    } catch (error){
      console.log("Error creating note", error);
      
      if(error.response?.status === 429){
        toast.error("Slow down! You are too fast", {
          duration: 4000,
          icon: "⚡",
        });
      } else{
        toast.error("Failed to create note")
      }
    } finally{
      setLoading(false);
    }
  }

  return(
    <div className="min-h-screen bg-[#dcdcdc] text-[#303030]">
      <div className="container px-4 py-8 mx-auto ">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="mb-6 btn btn-ghost hover:bg-[rgba(194,194,194,0.7)] ">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
          </Link>
          
          <div className="card bg-[#efefef] shadow-lg">
            <div className="card-body">
              <h2 className="mb-4 text-2xl card-title">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 form-control">
                  <label className="label">
                    <span className="label-text text-[#303030]">Title</span>
                  </label>
                  <input type="text" placeholder="Note Title" 
                  className="bg-white shadow-lg input placeholder-slate-500"
                  value={title}
                  onChange={(e)=> setTitle(e.target.value)}
                   />
                </div>

                <div className="mb-4 form-control">
                  <label  className="label">
                    <span className="label-text text-[#303030]">Content</span>
                  </label>
                  <textarea 
                  placeholder="Write your note here"
                  className="h-32 bg-white shadow-lg textarea textarea-bordered placeholder-slate-500"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}/>
                </div>

                <div className="justify-end card-actions">
                  <button type="submit" 
                  className={`btn btn-primary text-[#f2f2f2] transition-colors duration-200 ${title.trim() && content.trim() && !loading ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}>
                    {loading ? "Creating.." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage