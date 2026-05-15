import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/byelaws")({
  head: () => ({
    meta: [
      { title: "Bye-Laws | Aapka Munshi" },
      { name: "description", content: "Complete index of Housing Society Bye-Laws — all 175 bye-laws covering membership, funds, meetings, management, and more." },
    ],
  }),
  component: ByelawsPage,
});

type ByelawItem = { no?: string; sub?: string; subject: string };
type ByelawSection = { title: string; subsections?: { subtitle: string; items: ByelawItem[] }[]; items?: ByelawItem[] };

const byelawsData: ByelawSection[] = [
  {
    title: "I. Preliminary",
    items: [
      { no: "1", sub: "(a)", subject: "Name of the Society" },
      { sub: "(b)", subject: "Procedure of changing the name" },
      { sub: "(c)", subject: "Classification" },
      { no: "2", sub: "(a)", subject: "Address of the Society" },
      { sub: "(b)", subject: "Intimation of change in the address of the Society" },
      { sub: "(c)", subject: "Procedure for changing the address of the Society" },
      { sub: "(d)", subject: "Exhibition of the name Board" },
    ],
  },
  {
    title: "II. Interpretations",
    items: [
      { no: "3", subject: "Interpretations of the words and terms" },
    ],
  },
  {
    title: "III. Area Of Operation",
    items: [
      { no: "4", subject: "Area of operation of the Society" },
    ],
  },
  {
    title: "IV. Objects",
    items: [
      { no: "5", subject: "Objects of the Society" },
    ],
  },
  {
    title: "V. Affiliation",
    items: [
      { no: "6", subject: "Affiliation of the Society to other co-op. Institutions" },
    ],
  },
  {
    title: "VI. Funds, Their Utilisation And Investment",
    subsections: [
      {
        subtitle: "(A) Raising of Funds",
        items: [{ no: "7", subject: "Different modes of raising the funds of the Society" }],
      },
      {
        subtitle: "(B) Share Capital",
        items: [
          { no: "8", subject: "Authorised share capital of the Society" },
          { no: "9", subject: "Issue of share certificates to the members of the Society" },
          { no: "10", subject: "Society's seal and signatures of office-bearers on each share certificate" },
        ],
      },
      {
        subtitle: "(C) Limit of Liabilities",
        items: [{ no: "11", subject: "Restrictions on incurring liabilities of the Society" }],
      },
      {
        subtitle: "(D) Constitution of the Reserve Fund",
        items: [
          { no: "12", sub: "(i)", subject: "How the Reserve Fund shall be constituted" },
          { sub: "(ii)", subject: "Appropriation of the amounts to the Reserve Fund of the Society" },
        ],
      },
      {
        subtitle: "(E) Creation of Other Funds",
        items: [
          { no: "13", sub: "(a)", subject: "Creation of the Repairs and Maintenance Fund by the Society" },
          { sub: "(b)", subject: "Creation of Major Fund by the Society" },
          { sub: "(c)", subject: "Creation of the Sinking Fund by the Society" },
          { sub: "(d)", subject: "Creation of Education and Training Fund" },
        ],
      },
      {
        subtitle: "(F) Utilisation of Funds by the Society",
        items: [
          { no: "14", sub: "(a)", subject: "Utilisation of the Reserve Fund" },
          { sub: "(b)", subject: "Utilisation of the Repairs and Maintenance Fund by the Society" },
          { sub: "(c)", subject: "Utilisation of Sinking Fund" },
          { sub: "(d)", subject: "Utilisation of Education & Training Fund" },
        ],
      },
      {
        subtitle: "(G) Investment of Funds",
        items: [{ no: "15", subject: "Modes of investment of funds of the Society" }],
      },
    ],
  },
  {
    title: "VII. Members, Their Rights, Responsibility And Liabilities",
    subsections: [
      {
        subtitle: "I. Membership — (A) Classes of Members & (B) Eligibility",
        items: [
          { no: "16", subject: "Classes of Members" },
          { no: "17", sub: "(a)", subject: "Eligibility of individuals for membership of the Society" },
          { sub: "(b)", subject: "Eligibility of Minor or a person of unsound mind for membership of the Society" },
          { sub: "(c)", subject: "Admission of person to Society's membership subject to the Collector's approval" },
          { no: "18", subject: "Eligibility of Corporate Bodies for membership of the Society" },
        ],
      },
      {
        subtitle: "(C) Conditions of Membership",
        items: [
          { no: "19", sub: "(a)", subject: "Conditions for Individuals desiring to be members of the Society" },
          { sub: "(b)", subject: "Conditions of associate membership of the Society" },
          { sub: "(c)", subject: "Conditions of membership for bodies corporate desiring to become member of the Society" },
          { no: "20", subject: "Conditions for nominal membership of the Society" },
          { no: "21", subject: "Procedure for disposal of application for membership" },
        ],
      },
      {
        subtitle: "II. Rights And Duties Of Members — (A) Rights of Members",
        items: [
          { no: "22", subject: "Rights of Members" },
          { no: "23", subject: "Rights of inspection of documents and getting copies thereof" },
        ],
      },
      {
        subtitle: "(C) Occupation of Flats",
        items: [
          { no: "24", sub: "(a)", subject: "Rights of Occupation of Flats" },
        ],
      },
      {
        subtitle: "(D) Restrictions on Rights of Associate and Nominal Members",
        items: [
          { no: "25", subject: "No rights of membership to an associate member except that under Section 27(2) of the Act" },
          { no: "26", subject: "No right of membership to a nominal member" },
        ],
      },
      {
        subtitle: "(E) Resignation of Membership",
        items: [
          { no: "27", sub: "(a)", subject: "Notice of resignation of membership of the Society" },
          { sub: "(b)", subject: "Resignation not to be accepted unless charges of the Society are fully paid" },
          { sub: "(c)", subject: "Communication of the amount of charges of the Society outstanding to the member" },
          { sub: "(d)", subject: "Acceptance of resignation where no charges of the Society are outstanding" },
          { sub: "(e)", subject: "Communication of reasons for rejection of resignation" },
          { no: "28", subject: "Resignation by an associate member" },
          { no: "29", subject: "Resignation by a Nominal Member occupying the flat on behalf of a firm, company or any other body corporate" },
          { no: "30", subject: "Resignation by a sub-lettee, Licensee or Caretaker" },
          { no: "31", subject: "Acquisition of shares and interest of the member in the capital / property of the Society" },
        ],
      },
      {
        subtitle: "(F) Nominations by Members",
        items: [
          { no: "32", subject: "Procedure for Nomination by a member and its revocation" },
          { no: "33", subject: "Recording of Nomination or revocation of earlier nomination" },
          { no: "34", subject: "Transfer of shares and interest of the deceased member in the capital / Property of the Society to the nominee" },
          { no: "35", subject: "Transfer of shares and interest of the deceased member in the capital / Property of the Society heir" },
          { no: "36", subject: "Payment of the value of shares and interest of the deceased member, in the capital/property of the Society to the nominee/nominees" },
          { no: "37", subject: "Payment of the value of shares and interest of the deceased member in the capital/property of the Society to the heir/legal representative" },
        ],
      },
      {
        subtitle: "(G) Transfer of Shares and Interest in the Capital/Property of the Society",
        items: [
          { no: "38", sub: "(a)", subject: "Notices of transfer of Shares and interest in the Capital/Property of the Society" },
          { sub: "(b)", subject: "Secretary to place such notice before next Committee Meeting" },
          { sub: "(c)", subject: "Informing ineligibility within 8 days" },
          { sub: "(d)", subject: "No Objection Certificate not required but if required may be issued within 1 month" },
          { sub: "(e)", subject: "Documents to be submitted by the Transferor/Transferee" },
          { no: "39", sub: "(a)", subject: "Disposal of application for transfer of Shares and interest of the member in the capital/property of the Society" },
          { sub: "(b)", subject: "The Committee/General Body not to ordinarily refuse any application for membership or transfer" },
          { sub: "(c)", subject: "When application for transfer shall be deemed to have been rejected" },
          { sub: "(d)", subject: "Unauthorised transfer — null and void" },
          { no: "40", subject: "Rights of membership, since when to be exercised by the transferee" },
        ],
      },
      {
        subtitle: "(H) Exchange of Flats",
        items: [
          { no: "41", subject: "Application for exchange of flats by the members of the Society" },
          { no: "42", subject: "Disposal of application for exchange of flats by the members of the Society" },
        ],
      },
      {
        subtitle: "(I) Sub-letting etc. of Flats",
        items: [
          { no: "43", sub: "(a)", subject: "Sub-letting not permissible except under the Society's permission" },
          { sub: "(b)", subject: "Application for getting permission to sub-let etc. the flat" },
          { no: "44", subject: "Restrictions on assignment of occupancy right in the flat" },
        ],
      },
      {
        subtitle: "(VIII) Responsibility And Liabilities Of Members — (A) Maintenance of Flats",
        items: [
          { no: "45", subject: "Flat to be kept clean" },
          { no: "46", sub: "(a)", subject: "Additions and alterations in a flat to be carried out with the Committee's permission" },
          { sub: "(b)", subject: "Application for permission for additions and alterations in flat" },
          { no: "47", sub: "(a)", subject: "Examinations of flats by Secretary and report about repairs to Flats" },
          { sub: "(b)", subject: "Notice to the member about carrying out repair in his flat, by the Society at its cost" },
          { sub: "(c)", subject: "Notice to the member for carrying out repairs to his flat at his cost" },
          { no: "48", subject: "Restrictions on storing of certain goods" },
          { sub: "(a)", subject: "Not to do anything in a flat causing inconvenience, nuisance or annoyance to other members" },
          { sub: "(b)", subject: "Committee to take action on complaints about violation of the provisions of bye-laws No. 50(a)" },
        ],
      },
      {
        subtitle: "(B) Expulsion of a Member",
        items: [
          { no: "49", subject: "Grounds on which a member can be expelled" },
          { no: "50", sub: "(a)", subject: "Procedure for expulsion of member" },
          { sub: "(b)", subject: "Forfeiture of shares of the expelled member" },
          { no: "51", subject: "Effect of expulsion on membership of the Society" },
          { no: "52", subject: "Handling over vacant possession of the flat by the expelled member" },
          { no: "53", subject: "Acquisition of the shares and interest of the expelled member" },
          { no: "54", subject: "Eligibility of the expelled member for re-admission to membership of the Society" },
        ],
      },
      {
        subtitle: "(C) Cessation of Membership",
        items: [
          { no: "55", subject: "Circumstances under which the person shall cease to be a member of the Society" },
          { no: "56", subject: "Circumstances under which the person shall cease to be associate member" },
          { no: "57", subject: "Circumstances under which the person occupying the flat on behalf of the firm/company ceases to be the nominal Member" },
          { no: "58", subject: "Circumstances under which a Sub-lettee, licensee, caretaker ceases to be the nominal Member" },
          { no: "59", subject: "Action by the Committee in the case of cessation of membership of the Society" },
        ],
      },
      {
        subtitle: "(D) Restrictions on Holding more than one flat",
        items: [{ no: "60", subject: "Holding of flats by member" }],
      },
      {
        subtitle: "(E) Liabilities of a Member and the Past Member",
        items: [
          { no: "61", subject: "Liability limited to paid up shares amount" },
          { no: "62", subject: "Liability of past and deceased member" },
        ],
      },
      {
        subtitle: "(F) Other Matters",
        items: [
          { no: "63", subject: "Disposal of application" },
          { no: "64", subject: "Payment of the value of shares and interest of a member or past member of the Society" },
        ],
      },
    ],
  },
  {
    title: "IX. Levy Of Charges Of The Society",
    items: [
      { no: "65", subject: "Composition of the charges of the Society" },
      { no: "66", subject: "Break-up of the service charges of the Society" },
      { no: "67", subject: "Sharing of the Society's charges by the members" },
      { no: "68", subject: "Repairs and Maintenance to be carried out by the Society" },
      { no: "69", subject: "Payment of the Society's charges" },
      { no: "70", subject: "Review of the cases of defaults in payment of the charges of the Society" },
      { no: "71", subject: "Interest on the defaulted charges" },
    ],
  },
  {
    title: "X. Incorporation Of Duties And Power Of The Society",
    items: [
      { no: "72", subject: "Incorporation" },
      { no: "73", subject: "Common Seal" },
      { no: "74", subject: "Charges and set off in respect of Shares and interest of a member of the Society" },
      { no: "75", sub: "(a)", subject: "Flat purchased is deemed to have been allotted" },
      { sub: "(b)", subject: "Policy of Allotment of Flats" },
      { sub: "(c)", subject: "Cancellation of allotment of Flats" },
      { sub: "(d)", subject: "Handing over possession of Flats" },
      { sub: "(e)", subject: "Change of user not permissible without the sanction of the committee" },
      { no: "76", subject: "Society to carry out Structural Audit" },
      { no: "77", subject: "To obtain certificate of possession from the allottee" },
      { no: "78", sub: "(a)", subject: "Policy of allotment of parking slots" },
      { sub: "(b)", subject: "Restriction on use of parking slots" },
      { no: "79", subject: "Marking of parking spaces of stilts" },
      { no: "80", subject: "Eligibility for allotment of stilts of parking slots" },
      { no: "81", subject: "If more eligible Members and less Parking Slots" },
      { no: "82", subject: "Applications for allotment of parking slots" },
      { no: "83", subject: "Payment of charges for parking of vehicles" },
      { no: "84", subject: "Parking of other vehicles" },
    ],
  },
  {
    title: "XI. General Meetings",
    subsections: [
      {
        subtitle: "(A) First General Meeting",
        items: [
          { no: "85", subject: "Holding of the first General Meeting within the stipulated period" },
          { no: "86", subject: "Calling the first general meeting by the Registering Authority" },
          { no: "87", subject: "Period of notice for the first general meeting" },
          { no: "88", sub: "(a)", subject: "Functions of the first General Meeting" },
          { sub: "(b)", subject: "Nomination of a provisional committee by the Registering Authority" },
          { no: "89", subject: "Recording of minutes at the first General Meeting" },
          { no: "90", subject: "Handing over records by the Chief Promoter of the Society" },
          { no: "91", subject: "Powers of the Provisional Committee" },
          { no: "92", subject: "Period of office of the Provisional Committee" },
          { no: "93", subject: "Handing over charge by the Provisional Committee" },
        ],
      },
      {
        subtitle: "(B) Annual General Body Meetings",
        items: [
          { no: "94", subject: "Period within which annual general body meeting should be held" },
          { no: "95", subject: "Functions of the annual general body meeting of the Society" },
        ],
      },
      {
        subtitle: "(C) Special General Body Meetings",
        items: [
          { no: "96", subject: "When a Special General Meeting should be called" },
          { no: "97", subject: "Fixing date, time and place for a Special General Meeting Requisitioned" },
          { no: "98", subject: "Notice of a General Body Meeting" },
          { no: "99", subject: "Period of notice of a general body meeting" },
          { no: "100", subject: "Quorum for the General Body Meeting" },
          { no: "101", subject: "Holding of the adjourned General Body Meeting" },
          { no: "102", subject: "Postponement of the General Body Meeting which cannot complete the business on the Agenda" },
          { no: "103", subject: "Chairman of the Society to preside over all General Body Meetings" },
          { no: "104", subject: "Restrictions on attending a general body meeting by a proxy" },
          { no: "105", subject: "Voting right of a Member" },
          { no: "106", subject: "One Member One vote" },
          { no: "107", subject: "How decisions shall be taken" },
          { no: "108", subject: "Recording of the minutes of the general body meetings" },
          { no: "109", subject: "Cancellation of the previous resolution of the general body meeting" },
        ],
      },
    ],
  },
  {
    title: "XII. Management Of The Affairs Of The Society",
    items: [
      { no: "110", subject: "General body meeting to be the supreme authority" },
      { no: "111", subject: "Management of the Society to vest in the Committee" },
      { no: "112", subject: "Exercise of powers by the Committee" },
      { no: "113", subject: "Opening of Banking Account" },
      { no: "114", subject: "Strength of the Committee" },
      { no: "115", subject: "Election of the Committee" },
      { no: "116", subject: "Prohibition against being interested in the Society" },
      { no: "117", subject: "Disqualification for being elected on the Committee" },
      { no: "118", subject: "Constitution of the Committee" },
      { no: "119", sub: "(a)", subject: "Cessation of a Member of the Committee" },
      { sub: "(b)", subject: "Intimation of Cessation of Membership of the Committee" },
      { no: "120", subject: "Restrictions on being present at the time of consideration of a matter in which a member of the Committee is interested and voting on such matter" },
      { no: "121", subject: "Period of Office of the elected Committee" },
      { no: "122", sub: "(a)", subject: "First Meeting of new Committee" },
      { sub: "(b)", subject: "Issue of notice of the first meeting of newly elected committee" },
      { no: "123", subject: "Custody of the records of the Society" },
      { no: "124", subject: "Handing over charge by the outgoing committee" },
      { no: "125", subject: "Election of office bearers of the Society" },
      { no: "126", subject: "Quorum must for Committee Meetings" },
      { no: "127", subject: "Number of Committee Meetings to be held in a month" },
      { no: "128", subject: "Casual Vacancies in the committee to be filled in by co-option" },
      { no: "129", subject: "The Period of office of the member co-opted by the committee" },
      { no: "130", subject: "Resignation of Committee Member of the Society" },
      { no: "131", subject: "Resignation of office-bearer of the Committee" },
      { no: "132", subject: "Notice of Meeting of the Committee" },
      { no: "133", subject: "The chairman of the Society to preside over the Meetings of the Committee" },
      { no: "134", subject: "One member One vote — Decision by Majority of the Committee" },
      { no: "135", subject: "A Special meeting of the Committee at the instance of the 1/3rd members of the Committee or by the Chairman" },
      { no: "136", subject: "Attending meetings of the Committee and recording their minutes by the Secretary of the Society" },
      { no: "137", subject: "Joint and several liability of the members of the Committee" },
      { no: "138", subject: "Powers, function and duties of the committee" },
      { no: "139", subject: "Power of the Chairman of the Society" },
      { no: "140", subject: "Function of the Secretary" },
    ],
  },
  {
    title: "XIII. Maintenance Of Books Of Account And Registers",
    items: [
      { no: "141", subject: "Books of accounts, Registers and other Books to be maintained" },
      { no: "142", subject: "Other records to be maintained separately" },
      { no: "143", subject: "Secretary to maintain and keep up to date the Accounts Books etc." },
      { no: "144", subject: "Limit for cash on hand" },
      { no: "145", subject: "Payment beyond certain Limit by Cheques" },
      { no: "146", subject: "Finalization of Accounts" },
      { no: "147", subject: "Security by the Employees" },
    ],
  },
  {
    title: "XIV. Appropriation Of Profits",
    items: [
      { no: "148", sub: "(a)", subject: "Contribution to the Statutory Reserve Fund of the Society" },
      { sub: "(b)", subject: "Distribution of the remaining profit of the Society" },
    ],
  },
  {
    title: "XV. To Write Off Irrecoverable Dues",
    items: [
      { no: "149", subject: "Amounts which could be written off" },
      { no: "150", subject: "Procedure to be followed before writing off any Account" },
    ],
  },
  {
    title: "XVI. Audit Of Accounts Of The Society",
    items: [
      { no: "151", subject: "Appointment of Auditors" },
      { no: "152", subject: "Secretary to produce books, registers, records etc. to Internal/Statutory Auditors" },
      { no: "153", subject: "Preparation of Audit Rectification Report" },
    ],
  },
  {
    title: "XVII. Conveyance Of The Property And Repair To And Maintenance Of The Property",
    items: [
      { no: "154", sub: "(a)", subject: "Necessary steps to Conveyance / Deemed conveyance" },
      { sub: "(b)", subject: "Finalisation of Deed of Conveyance" },
      { sub: "(c)", subject: "Execution of Deed of Conveyance" },
      { no: "155", subject: "Committee's responsibility to maintain the Society's Property" },
      { no: "156", subject: "Inspection of Society's property for repair" },
      { no: "157", subject: "Committee to execute the repairs and maintenance of the property of the Society" },
      { no: "158", subject: "Work on Repairs and Redevelopment" },
      { no: "159", sub: "(a)", subject: "Various items of repairs and maintenance to be carried out by the Society at its cost" },
      { sub: "(b)", subject: "Repairs by the members at their cost" },
      { no: "160", subject: "Building Insurance" },
      { no: "161", subject: "Trees in the compound of the Society" },
    ],
  },
  {
    title: "XVIII. Other Miscellaneous Matters",
    items: [
      { no: "162", subject: "Modes of communication of Notices, Resolutions, Decisions etc." },
      { no: "163", subject: "Accounting Year" },
      { no: "164", subject: "Notice Board" },
      { no: "165", subject: "Penalties for breaches" },
      { no: "166", subject: "Alteration/Amendment of Bye-Laws" },
      { no: "167", subject: "Operation of Lifts, Solar Water Heaters etc." },
      { no: "168", subject: "Restriction on Playing Games" },
      { no: "169", subject: "Prohibition on letting out open/common spaces" },
      { no: "170", subject: "Temporary use of the Terrace/Open Space by any Member" },
      { no: "171", subject: "Fees of supply of copies of the documents" },
    ],
  },
  {
    title: "XIX. Redressal Of Members Complaints",
    items: [
      { no: "172", subject: "Complaint application to be submitted to the Society" },
      { no: "173", subject: "Committee's action on the Complaint Application" },
      { no: "174", subject: "If action is not taken within stipulated period — escalation to Registrar, Co-Operative Court, Civil Court, Municipal Corporation, Police, General Body Meeting, Federation" },
    ],
  },
  {
    title: "XIX. Regarding Redevelopment Of Building Of The Co-Operative Housing Societies",
    items: [
      { no: "175", subject: "Redevelopment of the Property/Building of the Society" },
      { sub: "(a)", subject: "Redevelopment strictly as per Directives dated 3rd January, 2009" },
      { sub: "(b)", subject: "If the Development Agreement is not executed with the developer" },
      { sub: "(c)", subject: "Increasing Authorised Share Capital if members are increased after Redevelopment" },
    ],
  },
];

function ByelawsPage() {
  return (
    <main className="min-h-screen bg-white font-poppins text-munshi-text">
      {/* Header */}
      <div className="munshi-hero-gradient text-white">
        <div className="mx-auto max-w-[1140px] px-5 py-12 lg:px-0">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M19 12H5 M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mt-6 text-[34px] font-bold leading-tight md:text-[48px]">
            Housing Society Bye-Laws
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-[1.75] text-white/85">
            Complete index of all 175 bye-laws governing Co-operative Housing Societies under the Maharashtra Co-operative Societies Act.
          </p>
          <div className="mt-6 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
            175 Bye-Laws across 19 Chapters
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1140px] px-5 py-14 lg:px-0">
        <div className="space-y-10">
          {byelawsData.map((section) => (
            <section key={section.title} className="rounded-2xl border border-munshi-border bg-white shadow-munshi-card overflow-hidden">
              {/* Section heading */}
              <div className="border-b border-munshi-border bg-munshi-primary px-6 py-4">
                <h2 className="text-base font-semibold text-white md:text-lg">{section.title}</h2>
              </div>

              <div className="divide-y divide-munshi-border">
                {/* Flat items (no subsections) */}
                {section.items && (
                  <table className="w-full text-sm">
                    <tbody>
                      {section.items.map((item, i) => (
                        <tr key={i} className="hover:bg-munshi-surface transition-colors">
                          <td className="w-12 px-5 py-3 text-center font-semibold text-munshi-primary">{item.no ?? ""}</td>
                          <td className="w-10 px-2 py-3 text-center text-munshi-secondary">{item.sub ?? ""}</td>
                          <td className="px-4 py-3 leading-[1.6] text-munshi-text">{item.subject}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {/* Subsections */}
                {section.subsections?.map((sub) => (
                  <div key={sub.subtitle}>
                    <div className="bg-munshi-surface px-6 py-2.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-munshi-accent">{sub.subtitle}</p>
                    </div>
                    <table className="w-full text-sm">
                      <tbody>
                        {sub.items.map((item, i) => (
                          <tr key={i} className="hover:bg-munshi-surface transition-colors">
                            <td className="w-12 px-5 py-3 text-center font-semibold text-munshi-primary">{item.no ?? ""}</td>
                            <td className="w-10 px-2 py-3 text-center text-munshi-secondary">{item.sub ?? ""}</td>
                            <td className="px-4 py-3 leading-[1.6] text-munshi-text">{item.subject}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-sm text-munshi-secondary">
          For assistance with any of the above bye-laws, contact{" "}
          <Link to="/" className="font-semibold text-munshi-primary hover:underline">
            Aapka Munshi LLP
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
