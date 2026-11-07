import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./todosReducer";

type ReduxTodoFormProps = {
  title: string;
  editingId: string | null;
  onTitleChange: (title: string) => void;
  onFinishEditing: () => void;
};

export default function ReduxTodoForm({
  title,
  editingId,
  onTitleChange,
  onFinishEditing,
}: ReduxTodoFormProps) {
  const dispatch = useDispatch();

  const saveTodo = () => {
    if (editingId) {
      dispatch(updateTodo({ id: editingId, title }));
      onFinishEditing();
    } else {
      dispatch(addTodo(title));
    }
    onTitleChange("Learn Mongo");
  };

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={saveTodo}
      >
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
}
