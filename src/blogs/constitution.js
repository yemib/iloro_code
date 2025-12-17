import React, { useState, useEffect, useRef } from "react";

/**
 * Iloro-Ekiti Progressive Union Constitution Page
 * Fully redesigned — beautiful, clean, modern, responsive.
 * Uses pure CSS inside a <style> tag.
 */

export default function ConstitutionPage() {
  const [query, setQuery] = useState("");
  const sections = [
    {
      id: "the_constitution",
      section: ``,
      title: "THE CONSTITUTION",
      content:
        `WE, THE ENTIRE INDIGENES OF ILORO-EKITI in Ijero Local Government Area of Ekiti State; 
HAVING firmly and solemnly resolved;
TO LIVE in unity and harmony as one indivisible Community under God, dedicated to the promotion of Members’ welfare, our Community development and peaceful and harmonious inter-communal relations with our neighbouring communities.
AND TO PROVIDE for a Constitution for the purpose of promoting the good administration and welfare of all persons in our Community, particularly our indigenes both at home and in the diasporas on the principles of freedom, equality and justice and for the purpose of consolidating the unity of our people and the progress of the Community.
DO HEREBY MAKE, ENACT AND GIVE TO OURSELVES the following Constitution:
`,
    },
    {
      id: "section_one_general_provision",
      section: `SECTION ONE `,
      title: `GENERAL PROVISIONS`,
      subtitle: `SUPREMACY OF CLAUSE`,
      content:
        `This Constitution is supreme and its provisions shall have binding 
        force on all authorities, social and cultural organizations and persons 
        indigenous to our Community – ILORO-EKITI.  If any law is inconsistent
         with the provision of this Constitution, this Constitution shall prevail and
         that other law shall, to the extent of the inconsistency, be void.`,
    },
    {
      id: "section_two",
      section: `SECTION TWO`,
      title: `NAME OF THE ASSOCIATION`,
      subtitle: ``,
      content: `1.	The name of the Association shall be known as ILORO-EKITI PROGRESSIVE UNION (IPU), ILORO-EKITI.<br/>

2.	The Iloro-Ekiti Progressive Union (IPU) shall be a trusted institution and a medium through which all Sons and
 Daughters of Iloro-Ekiti shall be connected and communicated for the purpose of moving the Community forward. 
  It shall be the highest socio-cultural institution, bigger and greater than any individual or institution in the Town. <br/>

3.	The Union shall be duly registered with the appropriate authorities to give it legal backing and authority 
as an entity and it shall have its Branches in all towns where indigenes of Iloro-Ekiti reside in the whole world.
`,
    },
    {
      id: "aim_and_objectives",
      section: `SECTION THREE`,
      title: `AIMS AND OBJECTIVES OF THE UNION:`,
      subtitle: ``,
      content: `a.	To provide a forum for the regular meetings and interactions of members and the Branches of the Union.<br/>

b.	To foster unity, peace, progress, friendliness  and closer relationship among Sons and Daughters of Iloro-Ekiti.<br/>

c.	To promote the economic, educational, social, cultural and industrial development of Iloro-Ekiti.<br/>

d.	To enhance unity among Clubs and other charitable organizations in the Town and to work with such groups having similar aims and objectives with the Union.<br/>

e.	To enhance good neighbourliness with other towns in the locality and to work with such towns for the common aim of improving the standard of living of our people.<br/>

f.	To protect, preserve and promote the Town’s cultural values and interests that will enhance human dignity.<br/>
`,
    },
    {
      id: "membership",
      section: `SECTION FOUR`,
      title: `MEMBERSHIP`,
      subtitle: ``,
      content: `a.	The Union is a non-political Organization comprising all Sons and Daughters of Iloro-Ekiti at home and in various other towns and cities all over the World.<br/>

b.	Register of Members:   There shall be a Register containing the names and addresses of all members grouped according to their respective Branches.  
The register shall be kept by the Secretary-General.<br/>

c.	All functioning Branches of the Union shall be made to register with the Secretary-General.  <br/>

d.	All Branches of the Union shall submit an up-to-date list of their members to the Secretary-General yearly, for update and record purposes.  <br/>
`,
    },
    {
      id: "structure",
      section: `SECTION FIVE`,
      title: `STRUCTURE`,
      subtitle: ``,
      content: `The organizational structure of the Union shall be in the following categories:<br/><br/>
A.	THE NATIONAL EXECUTIVE COMMITTEE (NEC):<br/>
i. 	This shall consist of all Officers of the Union and other members so appointed by the General Meeting of the Union to serve on the Committee.<br/>
ii.	The Committee shall be responsible for the planning and execution of all the policies and activities of the Union.<br/>
iii.	The Executive Committee shall meet as often as it considers necessary and no member may be absent without prior notice to the Secretary-General.<br/>
iv.	The Executive Committee may co-opt any member to attend its meeting if and when the need arises.<br/>
v.	The quorum at every meeting of the Committee shall be a simple majority of the members.<br/>
vi.	The Committee shall constitute a disciplinary arm of the Union.<br/><br/>


B.	EXISTENCE OF CARETAKER COMMITTEE:<br/>
i.	In the absence of a validly and democratically elected National Executive Committee (NEC), a Caretaker Committee must be put in place
 by only a constituted General Meeting of the Union.<br/>
ii.	The Caretaker Committee shall hold forth for only a twelve calendar month, during which a proper election must be conducted to usher 
in a democratically elected National Executive Committee of the Union.<br/><br/>


C.	THE NATIONAL PLANNING COMMITTEE/
STAKEHOLDERS’ FORUM:<br/>
i.	The Committee/Forum shall comprise two functional members from each Branch of the Union and notable indigenes of the Town.<br/>

ii.	Members of the Committee/Forum shall meet regularly or as at when due to discuss issues pertaining to the progress of 
Iloro-Ekiti and make recommendations to the National Executive Committee.<br/>

iii.	Unless otherwise stated, the Committee/Forum shall handle the organization of all launchings in respect of development projects for the Town.<br/>

iv.	Each member of the Committee/Forum shall constitute the information link between his Branch and the National Planning Committee while 
the Chairman and Secretary of the National Planning Committee who shall be co-opted members of the National Executive Committee shall
 serve as the information link between the National Planning Committee and the National Executive Committee. <br/><br/>


D.	THE ILORO-EKITI DEVELOPMENT COMMITTEE (IDC):<br/>
i. 	The Committee shall consist of members selected by the General Meeting from all the Streets and Quarters of the Town on the recommendation of the Community (Elebijebi) Leaders.<br/>
ii.	The Committee shall comprise representatives from the Oluloro-in-Council who shall brief the Committee on chieftaincy and 
traditional matters and serve as link between the Committee and His Royal Majesty, the Oluloro of Iloro-Ekiti.<br/>
Iii	The Committee shall also comprise representatives of all political parties in the Town who shall brief the Committee on matters affecting the Community politically.<br/>
iv.	The Committee shall comprise representatives of all Religious Organizations in the Town who shall brief the Committee on matters affecting the Community on religion matters.<br/>
v.	The IDC shall be regarded as the home-based Branch of the IPU and shall see to the general welfare of the Community and meet regularly to discuss on matters affecting 
the various Streets and Quarters in the Town.<br/>
vi	The Committee shall take control of all duties which may be referred to it from time to time by the NEC.<br/>
vii.	The Chairman of Iloro Development Committee shall be an Ex-Officio Member of the NEC and shall brief the NEC of the day-to-day activities of the Development Committee.<br/><br/>


E.	THE SOCIAL CLUBS’ CONGRESS: <br/>
i.	The Congress shall be composed of two members from each of the Registered Social Clubs and Organizations in the Town. 
The Public Relations Officer of the NEC shall co-ordinate the Congress.<br/>
ii.	The Congress’ duties shall include harmonization of Clubs and Organizations in the Town.<br/>
iii.	It shall also include co-ordination of the activities of the various Clubs and Organizations towards the best interest of the Community.<br/>
vi.	The Congress shall handle all assignments delegated to it by the National Executive Committee (NEC).<br/>
v.	The National Public Relations Officer of the Union shall serve as the information link between the NEC and the Congress.<br/>
vi.	The Congress shall have its own set of officers, chosen among the members.<br/><br/>



F.	AD-HOC COMMITTEES<br/>
Ad-hoc Committees for special purposes shall be set up as and when required by the
National Executive Committee.<br/><br/>


G.	ELIGIBILITY FOR ELECTION INTO ANY POSITION:<br/>

All Iloro-Ekiti Sons and Daughters of repute, who have contributed in no 
small measures to the development of Iloro-Ekiti, shall be qualified for
 election and appointment into any of the positions in Section 5(A-F) above. 
  Such person should be of good antecedents, free from any litigation or encumbrances, 
  with unquestionable characters and of good 
  conduct and reputation in all spheres of life.  He/she must be an active Member 
of the IPU both at home and in any of the Branches.<br/>










`,
    },
    {
      id: "section_six",
      section: `SECTION SIX`,
      title: `DURATION OF OFFICE`,
      subtitle: ``,
      content: `a.	The National Executive Committee (NEC) shall hold office for at least a term of three years and spend not more than two consecutive terms. 
       However, members shall be eligible for re-election at subsequent elections.<br/>
 b.	Each Branch of the Union shall have the privilege to change its representative on the National Planning Committee/Stakeholders’ 
 Forum as and when deemed fit.  Notice of any change must be communicated in writing by the recognized Chairman and/or Secretary of the
  Branch to the National President or Secretary-General of the National Union.<br/>
c.	Similarly, each Street or Quarter in the Town shall reserve the right to change its representative on the Development Committee.  
Notice of such change must be communicated in good time to the Chairman or Secretary of the Committee or the Secretary General of the National Union.<br/>
d.	Each Club shall reserve the privilege to change its representatives on the Social Clubs’ Congress as and when required by a written 
notice to the NEC within a reasonable period of time.<br/>
e.	Ad-hoc Committees shall stand dissolved at the end of their special duties.<br/>
f.	The National Executive Committee (NEC) shall reserve the right to dissolve all Committees as and when necessary.<br/>
`,
    },
    {
      id: "section_seven",
      section: `SECTION SEVEN`,
      title: `APPOINTMENT OF SPECIAL ADVISERS, 
PATRONS/PATRONESSES
`,
      subtitle: ``,
      content: `a.	His Royal Majesty, the Oluloro of Iloro-Ekiti shall be the permanent Grand-Patron of the Union.<br/>

b.	The NEC shall appoint, on the recommendation of the National Planning Committee, as Special Advisers, Patrons
 and Patronesses, eminent dignitaries who, from their past activities and disposition towards the progress of the Town, stand out as distinguished elder-statesmen.<br/><br/>

Functions:<br/>
i.	The Grand-Patron shall always be briefed and carried along on the activities of the Union by the NEC and his advice, 
support and approval may be sought on issues bothering on the development of the Town.<br/>

ii.	The Special Advisers, Patrons and Patronesses shall be informed of all the Union’s activities from time to
 time and shall be called upon for necessary advice, moral and financial supports as and when required.<br/>
`,
    },
    {
      id: "section_eight",
      section: `SECTION EIGHT`,
      title: `APPOINTMENT OF BOARD OF TRUSTEES OF THE UNION`,
      subtitle: ``,
      content: `

The following personalities shall be appointed as Members of the Board of Trustees towards proper incorporation of the Union, and as body corporate with all requisite legal personality.<br/><br/>
a.	The IPU National President<br/>
b.	The IDC Chairman<br/>
c.	All former National Presidents<br/>
d.	All Patrons and Matrons of the Union<br/>
e.	A representative of the Oluloro-in-Council.<br/><br/>

Functions:<br/>
i.	The Board of Trustees shall meet occasionally on issues bothering on the development of the Town.<br/>
ii.	The NEC shall always refer knotty issues to the Board for possible advice and solution.<br/>
iii.	The Board shall reserve the right to suggest to NEC on issues bothering on development of the Town.<br/>
iv.	The Representatives of the Oluloro-in-Council on the Board shall serve as link between the Union and His 
Royal Majesty the Oluloro in respect of briefings on chieftaincy matters and development plans.<br/>
`,
    },
    {
      id: "section_nine",
      section: `SECTION   NINE`,
      title: `PRESIDENTIAL APPOINTMENTS`,
      subtitle: ``,
      content: `1.	Power to appoint persons to hold or act in the offices to which this section applies and to remove persons so appointed from 
      any such office shall be vested in the National President of the Union, subject to ratification by the NEC.<br/>
2.	The offices to which this Section applies are:<br/><br/>
(a)	Chairman, Iloro Development Council (IDC).<br/>
(b)  	Secretary, Iloro Development Council (IDC).<br/>
(c)	Chairmen to Ad-hoc Committees.<br/>
	(d)	Secretaries to Ad-hoc Committees<br/>
(e)	Patrons and Patronesses.<br/>
(f)	Special Advisers.<br/>
`,
    },
    {
      id: "",
      section: `SECTION TEN`,
      title: `REGISTRATION OF CLUBS AND CHARITABLE ORGANISATIONS`,
      subtitle: ``,
      content: `1.	All Clubs and Charitable organizations wishing to operate within the town’s 
      jurisdiction must file an application for registration with the National Union.  Such application must be accompanied by the stipulated registration fee.<br/>

2.	A Register of Clubs containing the Names of all the Clubs, official address, compositions and aims of such Clubs shall be kept by 
the Secretary-General of the National Union for record purposes.  A Certificate of Registration shall be issued to Clubs on registration.<br/>

3.	In exercise of this power, the Union shall stand the chance to maintain peace and unity among the Clubs and Charitable
 Organizations and at the same time co-ordinate their activities on the recommendation of the Social Clubs’ Congress.<br/>

4.	Every registered Club shall appoint two members to represent it on the Social Clubs’ Congress.




`,
    },
    {
      id: "section_eleven",
      section: `SECTION  ELEVEN`,
      title: `OFFICERS OF THE UNION`,
      subtitle: `OFFICERS OF THE UNION`,
      content: `I.	The Officers of the Iloro-Ekiti Progressive Union shall comprise: <br/><br/>
	a.	National President  <br/>
	b.	1st National Vice President<br/>
	c.	2nd National Vice President<br/>
	d.	Secretary-General/National Secretary<br/>
	e.	Assistant Secretary-General/National Secretary<br/>
	f.	Financial Secretary	<br/>
	g.	Treasurer <br/>
	h.	Public Relations Officer I <br/>
	i.	Public Relations Officer II<br/> 
	j.	Legal Adviser <br/>

  k	Auditor  I<br/>
	l.	Auditor II<br/>
	m.	Ex-Officio Members<br/><br/>

II.	Vacancies arising from time to time shall be filled by the NEC for ratification at the subsequent General Meeting of the Union.<br/>

III.	The Officers’ duties, unless otherwise stated, shall be as detailed in Appendix I  to this Constitution.<br/>

`,
    },

    {
      id: "section_twelve",
      section: `SECTION TWELVE`,
      title: `RESIGNATION OF APPOINTMENT AS AN OFFICER`,
      subtitle: ``,
      content: `1.	Any person who is appointed, elected, or otherwise selected to
       any office established by this Constitution may resign from that office by writing
        under his hand addressed, giving a notice of two months, to the National President or Secretary-General, stating his/her reasons. 
        Upon receipt of such resignation letter, the Secretary-General in consultation with the National President must convey a meeting of 
        the NEC within six weeks to consider the merit and demerit of the letter.
        If accepted, a substitute shall be appointed, if need be.<br/>
        
        2.	The resignation of any person from any office established by this Constitution shall take effect from when
         the writing signifying the resignation is received, debated upon and accepted. <br/>
        `,
    },

    {
      id: "section_thirteen",
      section: `SECTION THIRTEEN`,
      title: `MEETINGS`,
      subtitle: ``,
      content: `1.	There shall be an Annual General Meeting of the Union at which Annual Reports shall be rendered by the NEC to hold on the last Saturday of every Year.<br/>

2.	Bi-Annual General Meeting of the Union shall always be held during Easter Period of every Year.<br/>

3.	Emergency General Meetings may be held as may be considered necessary by the NEC or on a written notice
 signed by accredited representatives of not less than three Branches of the Union.<br/>
`,
    },

    {
      id: "section_fourteen",
      section: `SECTION FOURTEEN`,
      title: `PROCEDURE AT MEETINGS`,
      subtitle: ``,
      content: `I.	The Secretary-General shall convene all meetings in consultation 
      with the National President.<br/>

II.	The National President shall preside over all meetings.  In his absence, any of the two National Vice-Presidents shall hold forth,
 and in the absence of the National Vice-Presidents, an acting President shall be nominated to preside.<br/>

III.	At any of the meetings, no member shall rise to speak without the permission of the National President,
 except on a point of order.  The National President of the Union shall have the power to rule a speaker out of order and to order a speaker to resume his seat.<br/>
`,
    },

    {
      id: "section_fifteen",
      section: `SECTION FIFTEEN`,
      title: `RESOLUTIONS`,
      subtitle: ``,
      content: `1.	A simple majority of members present and voting at every meeting shall always determine all resolutions and questions put to vote. 
       Each member shall be entitled to one vote and the National President a casting vote where there is a tie.  <br/>

2.	Voting shall always be by show of hands or as may be otherwise decided or directed by the chosen Presiding Officer.<br/>
`,
    },

    {
      id: "section_sixteen",
      section: `SECTION SIXTEEN`,
      title: `FINANCE`,
      subtitle: ``,
      content: `The Income for the Union shall be expected from the following heads:<br/><br/>
A.	Annual development contributions by each Branch, Club and Charitable Organisations.<br/>
B.	Proceeds from Launchings and other public outings.<br/>
C.	Clubs’ Registration Fees.<br/>
D.	Donations.<br/>
E.	Fines.<br/>
F.	Proceeds from sales of publications.<br/>

G.	Special levies and contributions as and when necessary.<br/>
H.	Any other legitimate means.<br/><br/>

Development Levy:  <br/>
An Annual Development Levy of a minimum of N25,000.00 shall be paid by all IPU Branches, according to their strength;
while Clubs and charitable Organisations are expected to pay a minimum of N10,000.00 per annum according to their strength.  However, this will be subject to review as appropriate.<br/>

Adequate and accurate records shall be kept of all the Union’s financial transactions in the most appropriate manner and according to the dictates of the Financial Regulations.<br/>

`,
    },

    {
      id: "section_seventeen",
      section: `SECTION SEVENTEEN`,
      title: `BANKING`,
      subtitle: ``,
      content: `(i)	All monies collected on behalf of the Union shall be paid into a Bank nominated by the NEC on the next bank working day.<br/>

(ii)	The National President, Treasurer and the Secretary-General shall be the accredited signatories for the Union in the operation of the
 bank account; the President and one of the other two signing jointly.<br/>

(iii)	Notice of change in the accredited signatories shall be communicated to the Banker by the Secretary-General of the Union as at when the need arises.<br/>


`,
    },

    {
      id: "section_eighteen",
      section: `SECTION EIGHTEEN`,
      title: `DISCIPLINE`,
      subtitle: ``,
      content: `(A)	The National Executive Committee shall constitute the disciplinary arm of the Union and shall reserve the right to discipline any member,
       Branch or Club guilty of gross misconduct.  The NEC will, on the gravity of offence, which may include embezzlement, etc, determine the type of disciplinary 
       action to be instituted against offenders.<br/>

(B)	In exercise of this duty, the NEC may set up a Panel to investigate the allegations of misconduct leveled against any member, Branch or Club and make recommendations to the NEC.<br/>

(C)	Any registered Branch of the Union whose dues are in arrears of three years or more shall cease to exercise its rights at General Meetings and shall be designated ‘Non-Financial Branch’.<br/>

(D)	No member may be disciplined unless he has been given an opportunity to defend his stand personally at a meeting of the NEC of which he must be given at least seven days’ notice. 
 Such a member shall not be allowed legal representation but shall be entitled to call witnesses in support of his stand.<br/>

(E)	Impeachment of Officers:   Any officer may be removed from his/her post if he/she has been proved guilty by a Probe Panel 
of gross misconduct.  A vote of no confidence may also be passed on any officer found to be negligent in the performance of his/her duties.  The resolution to impeach such an officer must be passed by at least two-thirds majority of members of the National Executive Committee.  The Officer who automatically loses his/her membership of the NEC shall be prevented from holding any elective office of the Union for a period of five years, 
but shall be made to remain as active member of the Union.<br/>


(F)	A member who is dissatisfied with the decision of the NEC against him/her on any issue may appeal to the Board of Trustees where he/she shall
 be given another fair hearing.  The decision of the Board of Trustees shall be final.<br/>

`,
    },

    {
      id: "SECTION_NINETEEN",
      section: `SECTION NINETEEN`,
      title: `AMENDMENT TO THE CONSTITUTION`,
      subtitle: ``,
      content: `(I)	A special resolution requiring at least the votes of two-thirds majority of members present and voting at a General Meeting shall be needed to
       effect a motion to alter, amend, revise, modify or cancel any section or sub-section of this Constitution. <br/>

(II)	Except for any amendment proposed by the Executive Committee, at least twenty-one days’ notice must be given to the Secretary-General in writing by at 
least two members proposing the amendment.<br/>

(III)	The Executive Committee of the Union shall reserve the right to evaluate the proposed amendment and make recommendations to the General Meeting.<br/>
`,
    },

    {
      id: "SECTION_TWENTY",
      section: `SECTION TWENTY`,
      title: `DUTIES OF THE CITIZENS`,
      subtitle: ``,
      content: `It shall be the duty of all Sons and Daughters of Iloro-Ekiti as well as residents of the Community to:<br/><br/>

(a)	Abide by the provisions of this Constitution; respect its ideals and its institutions.<br/>

(b)	Help to enhance the power, prestige and good name/image of Iloro-Ekiti, defend the Town and render such community service as may be required.<br/>

(c)	Make positive and useful contributions to the development, progress and well-being of the Community.<br/>

(d)	Render assistance to appropriate and lawful Agencies in the maintenance of law and order within and outside the Community.<br/>


`,
    },

    {
      id: "SECTION_TWENTY-ONE",
      section: `SECTION TWENTY-ONE`,
      title: `INTERPRETATION, CITATION AND COMMENCEMENT`,
      subtitle: ``,
      content: `1.	INTERPRETATION:
In this Constitution, unless it is otherwise expressly provided or the context otherwise requires; the meanings and interpretations listed hereunder 
shall apply to the following words and expressions in this document, wherever and in whatever context they are used.<br/>

(i)	THE UNION means ILORO-EKITI PROGRESSIVE UNION, ILORO-EKITI.<br/>

(ii)	EXECUTIVE COMMITTEE means THE NATIONAL 
EXECUTIVE COMMITTEE (otherwise known as NEC) of the Union which shall comprise the National Officers and any other person(s) so nominated.<br/>

	(iii)	PERSON means a natural person of Iloro-Ekiti origin.<br/>

(iv)	THE TOWN means ILORO-EKITI Township in Ijero 
Local Government Area of Ekiti State, Nigeria.<br/>



(v)		THE COMMUNITY means ILORO-EKITI Township in 
Ijero Local Government Area of Ekiti State, Nigeria.<br/>

(vi)	A FINANCIAL BRANCH OF THE UNION shall be a Branch that is not more than three years in arrears of all dues, especially the Annual Development Fund.<br/>
(vii)	EX-OFFICIO MEMBER shall be construed as a reference to a person who is a member by virtue of his holding or performing the functions of an office within the Community. <br/><br/>

2.	CITATION:<br/>
The Constitution may be cited as the Constitution of the Iloro-Ekiti Progressive Union 2003.<br/>

3.	COMMENCEMENT:<br/>
The provisions of the Constitution shall come into force on the 1st Day of January, 2003


`,
    },

    {
      id: "APPENDICES",
      section: `  `,
      title: `APPENDICES`,
      subtitle: ``,
      content: `1.	Schedule of duties of Officers<br/>
2.	Schedule of duties of Standing Committees<br/>
3.	General Accounting Procedure<br/>
4.	List of Accounting Records and Documents<br/>
5.	Oath of Office by elected NEC at inauguration<br/><br/>


1.	SCHEDULE OF DUTIES OF OFFICERS:<br/><br/>
NATIONAL PRESIDENT<br/>
He shall preside over all General and NEC Meetings of the Union and shall exercise such powers that may, from time to time, 
be vested in him by the Union.  He shall co-ordinate the activities of all Working Committees, keep official records and
 liaise with Working Committees, individuals and Branches of the Union.<br/><br/>
	
	NATIONAL VICE-PRESIDENTS<br/>
They shall assist the National President in the effective performance of his duties and to exercise such powers as may be vested 
in them by the President and the Union from time to time.  They shall act for the President whenever the latter is not available.<br/><br/>

	SECRETARY-GENERAL <br/>
He shall maintain the Union’s records, receive, draft and issue Union’s letters, summon all meetings, take charge of roll calls at every meeting, 
keep a replica of the financial records, keep an imprest account of an amount authorized by the Union for stationery and publicity and supervise the records of the
 proceedings of every meeting of the Union.<br/><br/>


ASST. SECRETARY-GENERAL <br/>
To assist the Secretary-General in the effective performance of his duties.  He shall send notice of meetings at 
the instance of the Secretary-General and the President; arrange for meeting venues and accommodations, take minutes of meetings, develop and circulate minutes of 
meetings as approved by the Secretary-General. He shall liaise with different Working Committees, individuals and Branches of the Union, and take charge of further
 duties that may, from time to time, be entrusted to him by the Secretary-General.<br/><br/>

FINANCIAL SECRETARY<br/>
He shall receive all monies due to the Union and pass them to the Treasurer intact, for banking after recording.  
He shall keep a file of Payment Vouchers and Receipts.  He shall prepare quarterly reconciliation statement of the Union’s Bank Account 
and submit on request to the Auditors for checking.  At the end of the year, he shall prepare an Income and Expenditure Account and a 
Balance Sheet and upon request, submit to the Auditors for checking. <br/><br/>

TREASURER <br/>

He shall operate the Union’s Bank Account, i.e. cashing cheques and lodgments, obtaining bank statements and statements of balance. 
 He shall maintain a record of Petty Cash Expenses and submit a report to the Auditors for checking when there is need for reimbursement. 
  He shall be an alternate signatory to the Secretary-General in the operation of the Union’s Bank Account. <br/><br/>

PUBLIC RELATIONS OFFICER <br/>
He shall liaise with the Patrons and the general public to promote the image and the best interests of the Union.
  He shall handle the organization of all the social functions of the Union and shall be responsible for directing the activities of the various Social Clubs towards a common goal.<br/><br/>


AUDITORS <br/>
They shall check the quarterly Bank Reconciliation Statements.  They shall receive all Petty Cash and Imprest Reports,
 check and pass them to the Financial Secretary for reimbursement. They shall examine the financial transactions of all Committees appointed by the Union. 
  They shall also audit the Income and Expenditure Accounts and Balance Sheet submitted at the Annual General Meeting and submit a report. <br/><br/>

2.	SCHEDULE OF DUTIES OF THE STANDING COMMITTEES:<br/>
The schedule of duties of the various Standing Committees shall be as contained in Section Five of the Constitution, 
and shall include any other duties that may be delegated to them by the national Executive Committee and/or the General meeting from time to time. <br/><br/>

3.	GENERAL ACCOUNTING PROCEDURE <br/><br/>
a.	Payments: <br/>  The Financial Secretary will raise a Payment Voucher supported with adequate document and authorization by 
the National President.  The voucher is passed to the Treasurer who writes out the cheque, gives to President and Secretary-General for signature. 
The Financial Secretary must record the expenditure in his Receipts and Payments Record on signing the cheque and must file the Payment Voucher in a safe 
place for future reference.  All vouchers must be filled in numerical sequence.  The cheque, duly signed is passed to the Treasurer for cashing or handing over to the payee. 
 All vouchers for an amount of N100,000.00 and above must be checked by the Auditors before the cheque is signed. 
	
For cash payment, the Treasurer shall raise a Petty Cash Voucher, gets it approved by the
President or Vice President, pays out cash, records it in his record of Petty Cash Expenses (The Petty Cash Book) and files
 away the Petty Cash Voucher for future reference. Periodically, when he needs reimbursement, he submits a report of Petty Cash Receipts and Payments to the Auditors for checking.<br/>

b.	Receipts:<br/>
	Any money received must be passed to the Treasurer who issues a receipt.  All receipts must be deposited in the Bank as soon as possible but any part
   of it required for Petty Cash or immediate payment must be duly recorded first as a receipt (income) and then the expenditure also recorded. 
   The Financial Secretary must obtain details of all receipts from the Treasurer for recording in his Receipts and Payments Records.  Additionally, 
   the Treasurer must maintain a Receipts Register in which he will record any money – cash or cheques received immediately with the receipt number as 
   he issues the receipts.  He can pass this register to the Financial Secretary for recording in his own record.

	During launching or fund raising activities, money collected may be so several that individual issuance of receipts will be difficult. 
   Here, it will suffice for the Treasurer to receive the donations and 
  the Financial Secretary to record the names of donors.  At the end of the ceremony, the total cash collected by
   the Treasurer must agree with the total on the Financial Secretary’s list.  This will be checked by the Auditor. 
    The Financial Secretary records the total in Receipts and Payments Record and the income is banked and the teller filed.<br/><br/>

4.	LIST OF ACCOUNTING RECORDS AND DOCUMENTS:<br/>
	i.	Receipts and Payments Record (Cash Book)<br/>
	ii.	Petty Cash book<br/>
	iii.	Payment Vouchers<br/>
	iv.	Receipts <br/>
	v.	Petty Cash Vouchers<br/><br/>


5.	OATHS OF ALLEGIANCE AND OATHS OF OFFICE BY ELECTED NEC AT INAUGURATION<br/><br/>

OATHS OF ALLEGIANCE<br/>

	I, ……………………………………………………………… do solemnly swear/affirm that I will be faithful and bear true allegiance to the Iloro-Ekiti Community and that I will

  preserve, protect and defend the Constitution of the Iloro-Ekiti Progressive Union.
		So help me God. <br/><br/>


OATHS OF OFFICE <br/>

	I, ……………………………………………………………….. do solemnly swear/affirm that I will be faithful and bear true allegiance to the Iloro-Ekiti Community; that as …………………………….. of Iloro-Ekiti Progressive Union, I will discharge my duties to the best of my ability, faithfully and in accordance with the Constitution of the Union, and always in the interest of the sovereignty, integrity, solidarity, well-being and prosperity of Iloro-Ekiti Community; that I will strive to preserve the Fundamental aims and objectives of the Union as contained in the Constitution of the Union; that I will not allow my personal interest to influence my official conduct or my official decisions; that I will, to the best of my ability preserve, protect and defend the Constitution of Iloro-Ekiti Progressive Union; that I will abide by the code of conduct as laid down by the Union; that in all circumstances, I will do 
  right to all manner of people, according to law, without fear or favour, affection or ill-will; that I will not directly or indirectly communicate or reveal to any unauthorized  
  person any matter which shall be brought under my consideration or shall become known to me as …………………………........... of the Union, except as may be required for the due discharge of my
   duties as …………………………………..; and that I will devote myself to the service and well-being of the people of Iloro-Ekiti.
		So help me God.





`,
    },



    




  ];

  const filtered = sections.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.content.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ marginTop: 100 }} className="constitution-container">
      {/* CSS STYLES */}
      <style>{`
        .constitution-container {
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          gap: 20px;
          padding: 20px;
          background: #f6f7fb;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .sidebar {
          width: 270px;
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          position: sticky;
          top: 20px;
          height: fit-content;
        }
        .sidebar h2 {
          margin-bottom: 15px;
          font-size: 20px;
          color: #333;
        }
        .toc-item {
          padding: 10px 12px;
          margin-bottom: 8px;
          background: #f0f1f5;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
          font-size: 14px;
        }
        .toc-item:hover {
          background: #dfe3ee;
        }

        /* MAIN CONTENT */
        .content {
          flex: 1;
          background: white;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .section {
          margin-bottom: 45px;
        }
        .section h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #1a1a1a;
        }
        .section p {
          font-size: 16px;
          line-height: 1.6;
          color: #444;
        }

        /* SEARCH BAR */
        .search-box {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 15px;
        }

        /* RESPONSIVENESS */
        @media (max-width: 900px) {
          .constitution-container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            position: relative;
            top: 0;
          }
        }
      `}</style>

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Table of Contents</h2>
        {sections.map((s) => (
          <div key={s.id} className="toc-item" onClick={() => scrollTo(s.id)}>
          <span style={{fontSize: 10}}> {s.section} </span><br/>  {s.title}
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        <input
          type="text"
          className="search-box"
          placeholder="Search constitution..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {filtered.map((s) => (
          <div key={s.id} id={s.id} className="section">
               <h5 align="center">{s.section}</h5>
            <h3>{s.title}</h3>

            {/* Render HTML inside s.content */}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: s.content }}
            ></div>
          </div>
        ))}


        {filtered.length === 0 && (
          <p>No matching section found.</p>
        )}
      </div>
    </div>
  );
}