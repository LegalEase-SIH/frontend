export default function PrevSession({ sessionname }) {
  return (
    <div>
      <h1 className="flex justify-center items-center text-lg font-semibold text-white h-10 pl-24 pr-24 border border-slate-500 rounded-lg mb-5 p-2">
        {sessionname}
      </h1>
    </div>
  );
}
