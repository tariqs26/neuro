import { useEffect, useRef } from "react"
import { useDispatch } from "@/app/hooks"
import { setPage } from "@/features/appSlice"
import "./Modal.css"

const Modal = () => {
  const dispatch = useDispatch()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeModal = () => {
    if (!dialogRef.current) return

    const modal = dialogRef.current

    modal.setAttribute("closing", "")

    modal.addEventListener(
      "animationend",
      () => {
        modal.removeAttribute("closing")
        modal.close()
      },
      { once: true }
    )
  }

  return (
    <dialog ref={dialogRef} className="modal">
      <h1 className="modal-title">Leave quiz?</h1>
      <p>
        Leaving the quiz will reset your progress. Are you sure you want to?
      </p>
      <div className="modal-footer">
        <button type="button" className="cancel" onClick={closeModal}>
          Cancel
        </button>
        <button
          type="button"
          className="confirm"
          onClick={() => dispatch(setPage("home"))}
        >
          Confirm
        </button>
      </div>
    </dialog>
  )
}

export default Modal
