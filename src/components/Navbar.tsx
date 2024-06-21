import { useDispatch, useSelector } from "@/app/hooks"
import { Puzzle } from "@/components/Icons"
import "./Navbar.css"
import { setPage } from "@/features/appSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const { page } = useSelector((state) => state.app)

  return (
    <header id="top" className="navbar">
      <div className="navbar-logo">
        <Puzzle />
        <span>Neuro</span>
      </div>
      {page === "quiz" ? (
        <button
          type="button"
          className="leave"
          onClick={() => {
            const modal = document.querySelector(".modal")
            ;(modal as HTMLDialogElement).showModal()
          }}
        >
          Leave Quiz
        </button>
      ) : ["results", "error"].includes(page) ? (
        <button type="button" onClick={() => dispatch(setPage("home"))}>
          Home
        </button>
      ) : null}
    </header>
  )
}

export default Navbar
