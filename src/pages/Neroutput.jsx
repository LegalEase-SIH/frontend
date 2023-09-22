import NerContainer from "../components/NerContainer";

export default function Neroutput() {
  return (
    <div className="pl-24 pr-24">
      <h1 className="text-3xl font-bold text-bg-font underline ">
        Named entity recognition Result
      </h1>
      <div className="flex  justify-between mt-5 mb-5">
        <NerContainer
          WITNESS="w"
          OTHER_PERSON="o"
          STATUTE="s"
          CASE_NUMBER="c"
          GPE="g"
          ORG="o"
          DATE="d"
          JUDGE="j"
          PROVISION="pv"
          PETITIONER="pt"
          RESPONDENT="r"
          COURT="c"
          PRECEDENT="pr"
        />
        <NerContainer
          WITNESS="w"
          OTHER_PERSON="o"
          STATUTE="s"
          CASE_NUMBER="c"
          GPE="g"
          ORG="o"
          DATE="d"
          JUDGE="j"
          PROVISION="pv"
          PETITIONER="pt"
          RESPONDENT="r"
          COURT="c"
          PRECEDENT="pr"
        />
        <NerContainer
          WITNESS="w"
          OTHER_PERSON="o"
          STATUTE="s"
          CASE_NUMBER="c"
          GPE="g"
          ORG="o"
          DATE="d"
          JUDGE="j"
          PROVISION="pv"
          PETITIONER="pt"
          RESPONDENT="r"
          COURT="c"
          PRECEDENT="pr"
        />
      </div>
    </div>
  );
}
