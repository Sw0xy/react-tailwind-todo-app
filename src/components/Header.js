import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import TodoModal from "./TodoModal";
function Header() {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("");

  function closeModal(e) {
    setIsOpen(false);
    const input = document.getElementById("todo-input");
    if (input.value.toString() !== "") {
      dispatch(
        addTodo({
          id: Math.random(),
          title: input.value.toString(),
          completed: false,
          color: color,
        })
      );
    }
    input.value = "";
  }

  function openModal() {
    setIsOpen(true);
  }

  const activeState = (e) => {
    var id = e.target.id;
    setColor(id);
  };

  return (
    <div className="text-center ">
      <h1 className="text-2xl mt-8 font-bold ">Todo App</h1>
      <div className="flex flex-row  mt-8 items-center justify-center">
        <TodoModal
          isOpen={isOpen}
          closeModal={closeModal}
          setColor={setColor}
          activeState={activeState}
        />
        <button
          onClick={openModal}
          className="
            flex flex-shrink-0 items-center bg-green-400 ml-3 p-2
            rounded text-sm font-semibold text-white  
            hover:text-white shadow-sm shadow-green-500
            hover:animate-pulse
         "
        >
          <IoIosAdd className="w-6 h-6" />
          <span>Add Todo</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
