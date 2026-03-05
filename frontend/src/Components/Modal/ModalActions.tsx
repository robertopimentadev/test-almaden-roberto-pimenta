interface IModalActions {
  onClose: () => void;
  onSave: () => void;
  onDelete?: () => void;
  showDelete?: boolean;
  disabledSafe?: boolean;
}

export function ModalActions({
  onClose,
  onSave,
  onDelete,
  showDelete,
  disabledSafe = false,
}: IModalActions) {
  return (
    <div className="flex justify-between items-center mt-2">
      {showDelete && onDelete && (
        <button
          onClick={onDelete}
          className="text-sm px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      )}
      <div className="flex gap-2 ml-auto">
        <button onClick={onClose} className="text-sm px-3 py-1 border rounded">
          Cancel
        </button>
        <button
          onClick={onSave}
          className={
            "text-sm px-3 py-1 rounded " +
            (disabledSafe
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700")
          }
          disabled={disabledSafe}
        >
          {" "}
          Save
        </button>
      </div>
    </div>
  );
}
