export default function NerContainer({WITNESS,
OTHER_PERSON,
STATUTE,
CASE_NUMBER,
GPE,
ORG,
DATE,
JUDGE,
PROVISION,
PETITIONER,
RESPONDENT,
COURT,
PRECEDENT}) {
    return (
        <div className="flex flex-col bg-bg-font text-white font-semibold p-3 space-y-2 h-1/2 w-1/4 rounded-lg">
            <div>{WITNESS}</div>
            <div>{OTHER_PERSON}</div>
            <div>{STATUTE}</div>
            <div>{CASE_NUMBER}</div>
            <div>{GPE}</div>
            <div>{ORG}</div>
            <div>{DATE}</div>
            <div>{JUDGE}</div>
            <div>{PROVISION}</div>
            <div>{PETITIONER}</div>
            <div>{RESPONDENT}</div>
            <div>{COURT}</div>
            <div>{PRECEDENT}</div>
        </div>

    )
}