import { Link } from "react-router"
import {Paperclip, PlusIcon} from "lucide-react"

const Navbar = () => {
  return (
    <header className="border-b bg-[#DCDCDC] border-base-content/10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl px-4 py-4 mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-2 font-sans text-3xl font-bold tracking-tight text-[#292929]">PaperPin<Paperclip className="w-6 h-6" /></h1>
                <div className="flex items-center gap-4">
                    <Link to={"/create"} className="btn bg-[#292929] rounded-lg shadow-lg">
                    <PlusIcon className="size-5" />
                    <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar