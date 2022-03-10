import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  editTodo,
  deleteTodo,
  toggleTodo,
} from "../redux/todosSlice";
import TodoModal from "./TodoModal";
function Item({ item }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todos);

  console.log(loading);
  const [color, setColor] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    title: "",
    color: "",
  });
  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 400);
  }, [dispatch]);
  const handleEdit = () => {
    const input = document.getElementById(`todo-input`);
    setEdit({
      id: item.id,
      title: input.value.toString(),
      color: color,
    });

    dispatch(
      editTodo({
        id: item.id,
        title: input.value.toString(),
        color: color,
        completed: item.completed,
      })
    );

    setShowComponent(false);
  };
  const handleComplete = () => {
    dispatch(
      toggleTodo({
        id: item.id,
        completed: !item.completed,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const activeState = (e) => {
    e.preventDefault();
    var id = e.target.id;
    setColor(id);
  };

  return loading ? (
    <div>
      <button
        type="button"
        className="text-white mt-5 bg-green-600 flex p-4 font-semibold rounded-md"
        disabled
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </button>
    </div>
  ) : (
    <div
      className={`${item.color} w-full mt-2 rounded p-3  border-2 border-gray-200 `}
    >
      <TodoModal
        isOpen={showComponent}
        activeState={activeState}
        closeModal={() => {
          setShowComponent(false);
          handleEdit();
        }}
        todoInput={item.title}
      ></TodoModal>

      <div className="flex flex-row justify-around text-base font-normal">
        <div className="flex items-center">
          {item.completed ? (
            <div></div>
          ) : (
            <div className="relative mr-4">
              <span className="flex h-3 w-3 top-0 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                <span className=" relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          )}
          <input
            name="isCompleted"
            onClick={handleComplete}
            id="isCompleted"
            type="checkbox"
            className="w-4 h-4 mr-3 rounded-full shadow  "
          />
        </div>
        <h3
          className={`${
            item.color === "bg-white" ? "text-white" : "text-black"
          } 
          w-24 lg:w-96 mr-2 text-left break-words text-sm sm:text-base lg:text-lg `}
        >
          {item.title}
        </h3>

        <div className="flex flex-col p-1 items-center border-l-2 border-gray-600   justify-center sm:flex-row">
          <button className="mx-2">
            <FiEdit
              onClick={() => {
                setShowComponent(true);
              }}
              className="text-black w-6 h-6"
            />
          </button>
          <button className="">
            <MdDelete
              onClick={() => handleDelete(item.id)}
              className="text-red-500 w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
