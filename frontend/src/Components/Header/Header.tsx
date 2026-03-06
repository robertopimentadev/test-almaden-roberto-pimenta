interface IHeader {
  search: string;
  setSearch: (value: string) => void;
  onAddCard: () => void;
}

export default function Header({ search, setSearch, onAddCard }: IHeader) {
  return (
    <header className="w-full bg-white border-b shadow-sm fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-lg font-semibold">Password Manager</h1>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-56 border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={onAddCard}
            className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700"
          >
            + New
          </button>
        </div>
      </div>
    </header>
  );
}
