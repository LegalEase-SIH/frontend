import Petitiontemplate from "../components/Petitiontemplate";

export default function PreviousPetitions() {
  return (
    <div className="pl-56 pr-24 space-y-8 bg-bg-light h-3/4">
      <h1 className="text-3xl font-bold text-bg-font underline ">
        Previous Petitions
      </h1>
      <Petitiontemplate petition_id={1234} percentage={78}/>
    </div>
  );
}
