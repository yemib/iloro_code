/* IloroHistory.jsx */
import React from 'react';
import './ipustyle.css';

const attendees = [
  { name: 'Mr. Michael Adaran', compound: 'Isalu' },
  { name: 'Mr. Bamisaye Segun', compound: 'Isalu' },
  { name: 'Mr. Idowu Babatunde', compound: 'Ijemu' },
  { name: 'Mr. Aina Tope', compound: 'Oke Bola' },
  { name: 'Mr. Sunday Akomolafe', compound: 'Isalu' },
  { name: 'Mr. Sunday Adaralegbe', compound: 'Oke Owa' },
  { name: 'Mr. Femi Ogundare', compound: 'Ijemu' },
  { name: 'Mr. Taiwo Asorona', compound: 'Ijemu' },
  { name: 'Mr. Tope Adaraniwon', compound: 'Ijemu' },
  { name: 'Aladeokin Olamide', compound: 'Isalu' },
  { name: 'Mr. Tope Fakiye', compound: 'Idofin' },
  { name: 'Mr. Odunsanmi Adewa', compound: 'Ijemu' },
  { name: 'Mr. Akinsola Dele', compound: 'Isalu' },
  { name: 'Mr. Seun Fakiyesi', compound: 'Idofin' },
  { name: 'Mr. Tomiwa Asorona', compound: 'Ijemu' },
  { name: 'Mr. Jimoh Ajoloko', compound: 'Oke Owa' },
  { name: 'Mr. Adaralegbe Ifeoluwa', compound: 'Idofin' }
];

export default function IpuHistory() {
  return (
    <section className="iloro-history">
      <header className="ih-banner">
        <div className="ih-banner-overlay">
            <br/>
            <br/>
            <br/>
          <h1  style={{ color:"white"}}>History of IPU Zone 1, Ado-Ekiti</h1>
          <p   className="subtitle">Iloro Progressive Union — IPU Zone 1 (Adehun/Adebayo)</p>
        </div>
      </header>
      <br/>
      <br/>

      <div className="ih-container">
        <article className="ih-card ih-intro">
          <h2>About the Zone</h2>
          <p>
            The Iloro Progressive Union (IPU) in Ado-Ekiti has experienced significant
            growth due to the rapid urbanisation of Ado-Ekiti. As the city expanded,
            Iloro indigenes spread across developing areas — building and renting homes
            across the metropolis. This growth created new challenges around accessibility,
            participation and sustained development for the union.
          </p>
        </article>

        <article className="ih-card ih-reason">
          <h2>Why the Subdivision?</h2>
          <p>
            Under the leadership of Mr. Adeyiola Ibitoye, the central leadership
            observed declining meeting attendance across the existing structure. Long
            travel distances discouraged participation. To bring the union closer to
            members and strengthen unity, elders proposed subdividing IPU Ado-Ekiti into
            four zones, with the Adebayo–Adehun axis selected as the location for
            Zone 1 due to its high concentration of youths and families.
          </p>
        </article>

        <article   className="ih-card ih-inauguration">
          <h2>Inauguration</h2>
          <p>
            IPU Zone 1 was officially inaugurated on <strong>10 March 2024</strong> as
            IPU Adehun/Adebayo Zone, Ado-Ekiti. The ceremony took place at Mr. Asorona
            Furniture in Adehun and was presided over by Mr. Taiwo Asorona, who became
            the Pioneer Chairman. The meeting venue was later moved to Delink Motel,
            Adehun. After a visit from the IPU Ado Central Chairman, Mr. Adeyiola
            Ibitoye, the body was harmonised and approved as <strong>IPU Zone 1, Ado-Ekiti</strong>.
          </p>
        </article>


        <aside className="ih-card ih-quote">
          <h3>IPU Zone 1 — A symbol of unity</h3>
          <p>
            IPU Zone 1 stands as a symbol of unity, strategic thinking and adaptive
            progress within the Iloro community. Its establishment has strengthened
            participation, encouraged community bonding and empowered indigenes to
            contribute more effectively to the development of IPU in Ado-Ekiti.
          </p>
        </aside>

        
        <article className="ih-card ih-attendees">
          <h2>Attendance at the Inaugural Meeting</h2>
          <p>
            The inaugural meeting was attended by committed and distinguished members from
            across various compounds in Iloro-Ekiti. These pioneer members laid the
            foundation for a vibrant and forward-moving zone within the Iloro Progressive Union.
          </p>

          <ul className="attendee-grid">
            {attendees.map((a, idx) => (
              <li key={idx} className="attendee">
                <span className="attendee-name">{a.name}</span>
                <span className="attendee-compound">{a.compound}</span>
              </li>
            ))}
          </ul>

          <p className="signature">By: <strong>Adaralegbe Ifeoluwa</strong></p>
        </article>
      </div>
    </section>
  );
}


/* IloroHistory.css */
/* Place this file in the same folder as IloroHistory.jsx and import it above */

