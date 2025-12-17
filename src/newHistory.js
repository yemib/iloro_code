import React, { useState } from "react";
import './history_style.css';

export default function IloroHistoryPage() {
    const [open, setOpen] = useState({});

    const toggle = (key) => {
        setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>

        

            <section style={styles.hero}>
                <div style={styles.overlay}></div>
                <div style={styles.heroContent}>
                    <br/>
                    <br/>
                     <br/>
                    <h1 style={styles.heroTitle}>History of Iloro-Ekiti</h1>
                    <p style={styles.heroSubtitle}>
                        A land of tradition, courage, unity, and timeless heritage.
                    </p>
                </div>
            </section>
            <div className="container">
                {/* HEADER */}


                <div className="layout">
                    {/* SIDEBAR */}
                    <div className="hero-card">
                        <img
                            src="/gallery/Aerial view of Iloro roundabout.jpg"
                            alt="Iloro-Ekiti"
                            className="hero-image"
                        />

                        <div className="hero-info">
                            <p>
                                Iloro-Ekiti is a major town in the Ijero Local Government Area of
                                Ekiti State, known for its rich culture, fertile land and peaceful
                                people.
                            </p>

                            <div className="quick-stats">
                                <div>
                                    <span>Population:</span> <strong>17,000+</strong>
                                </div>
                                <div>
                                    <span>Location:</span> <strong>Ijero LGA</strong>
                                </div>
                                <div>
                                    <span>Major Occupation:</span> <strong>Farming</strong>
                                </div>
                            </div>

                            {/* <div className="hero-buttons" style={{ display: "flex", gap: "10px" }}>
                                <button className="primary">Explore</button>
                                <button className="outline">Share</button>
                            </div> */}
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="content">
                        {/* SECTION 1 */}
                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("intro")}>
                                Introduction
                                <span>{open["intro"] ? "−" : "+"}</span>
                            </h3>
                            {open["intro"] && (
                                <div className="section-box">
                                    <p>
                                        Iloro-Ekiti is one of the major towns in the Ijero Local
                                        Government Area of Ekiti State.  It is situated on a table land and bounded
                                        by five towns, viz Ayetoro Ekiti a distance of about two kilometres to the East,
                                        Ijurin Ekiti a distance of less than one kilometre to the South and Ipoti Ekiti
                                        distance of about four kilometres to the South. Ofale is a distance of about
                                        eight Kilometres to the West and Osun Ekiti is a distance of about five
                                        kilometres to the North. The town is also a distance of about twelve
                                        kilometres to the Local Government Headquarter - Ijero Ekiti while the
                                        State Headquarter (Ado Ekiti ) is a distance of about forty-seven Kilometres
                                        away The town also shares boundaries with Otun Ekiti to the North, Odo-Owa to
                                        the South-West. llogbo Ekiti and Usi Ekiti to the South-East lloro-Ekiti is
                                        blessed with abundant land on which about 95% of the inhabitants earn their
                                        living through arable farming. The land being fertile, produces enough food
                                        to feed the teeming population of about 17,000 people
                                        (according to 1991 Census figure)
                                        and to export to big cities like Ibadan, Lagos, Kano, etc
                                    </p>
                                    <p>
                                        The town is inhabited by the indigenes as well as sojourners.
                                        The people are noted for their generous hospitality and peaceful co-existence, which made people from various parts of Yoruba-land and other tribes to settle down comfortably among the natives.
                                        The main language of the people is Yoruba with predominantly Ekiti dialect
                                    </p>
                                    <p>

                                        The country as a whole presents generally two distinct features,
                                        the hills and the plain. The town falls within the former.
                                        In Yoruba-land, there are a few high mountains in the North and
                                        West but in the East the prevailing aspect are high ranges of
                                        mountains from which this part of the country derived its name,
                                        'EKITI - a mound-being covered as it were, with nature's mound.
                                        Iloro-Ekiti happens to fall in this group. The soil is particularly
                                        rich as earlier mentioned and most suitable
                                        for agriculture, in which majority of the populace are engaged.


                                    </p>
                                    <p>

                                        The forest teems with economic and medicinal plants of tropical varieties
                                        as well as timber, of which mahogany, cedar, iroko, obeshe, etc. are the
                                        principal trees. Although a large variety of fruits can be grown, yet
                                        the people do not take seriously to horticulture, albeit, attention is
                                        paid to the planting of pawpaw, pineapples and orange Some other
                                        fruit-trees have also been introduced, e.g alligator pepper, pear,
                                        guava, mango, etc. but these are not widely cultivated Vegetables of which
                                        there are several kinds are largely cultivated. Yam, cocoyam,cassava and
                                        sweet potato are principal root crops used as diet. Beans, rice, groundnuts,
                                        and maize are also largely grown for food. Prominent cash crops are cocoa,
                                        palm produce, rubber, etc. though some of them are not grown on a large scale.
                                        The town undoubtedly
                                        leads in the production of Yam in Ijero Local Government area.


                                    </p>

                                    <p>
                                        Domestic animals such as goats, dogs, sheep, etc, and
                                        poultry are widely reared. Wild animals are not prevalent in
                                        the area except in ancient days when big games like lions, elephants,
                                        deer, alligators, etc abounded. The common ones nowadays are those easily
                                        got as prey by the hunters. In the family of birds, we have the wild and
                                        tame parrots, pigeons,
                                        and fowls of various categories and other birds of the tropical feathered type.
                                    </p>

                                    <p>

                                        The Yorubas, notably the Ekitis,
                                        the sub-tribe to which lloro-Ekiti belongs, are noted for their special characteristics.
                                        Iloro-Ekiti people possess marvelous amount of physical strength which they exercise on their farms,
                                        boisterous gaits, simplicity in manner and love of home. They are imbued with a deep religious spirit
                                        and ingrained politeness, showing deference to superiors and respect to age. They could however be very stubborn,
                                        almost to a fault, and this gave them the reverence of their fellow Yorubas and indeed other tribes.
                                        They are also dogged fighters for just causes and this makes them valiant and fearless warriors in battle.
                                        For example, our people have fought in global wars the first and the second world wars which concerned our nation
                                        only as a colony of Britain and more recently in the Nigerian Civil War (1967-1970) where our sons fought gallantly
                                        in defence of Nigerian unity. The Kiriji war, the Ekitiparapo war, and other local wars fought in defence of
                                        their territories and domains were no exceptions, as our people took very active parts and were successful in many of these wars.
                                        Such is the town and, the people  whose history, religion, social, polity, manners and customs are briefly given in following chapters



                                    </p>
                                </div>
                            )}
                        </div>

                        {/* SECTION 2 */}
                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("geography")}>
                                THE CRADLE
                                <span>{open["geography"] ? "−" : "+"}</span>
                            </h3>
                            {open["geography"] && (
                                <div className="section-box">
                                    <p>
                                        Every living thing in this world has an origin and no recital of the history of
                                        Iloro-Ekiti can be complete without a brief recap of the origin of the Yoruba
                                        race to which the town belongs. It is on record that the Yorubas sprang up from
                                        Lamurudu (Father of the Yorubas) who hailed from Upper Egypt,
                                        a Phoenician of origin. He came to settle there for a time after a war
                                        in Arabia where he was one time a King in Mecca Among his offspring was Oduduwa
                                        who became the direct ancestor of the Yorubas Oduduwa was said to have been
                                        expelled from Mecca in the company of other Lamurudu's sons after their father
                                        had been slain during a War between the Moslems and the Pagans.  Oduduwa with
                                        his children and two idols traveled ninety days from Mecca eastwards and after
                                        wandering about for a period, they finally settled down at
                                        Ile-Ife where they met with Agbon-niregun the Founder of the Ifa Worship.
                                    </p>
                                    <p>
                                        Oduduwa and his children swore mortal hatred of the Moslems of their country and
                                        were determined to avenge themselves of them, but the former died at lle-Ife before
                                        he was powerful enough to march against the opponents. His eldest son Okanbi, also died there,
                                        leaving behind him seven princes and princesses who afterwards became renowned. From them sprang the
                                        various tribes of the Yoruba nation. The last and seventh born Oranyan was the progenitor of the Yoruba
                                        proper After the death of their father, Oduduwa, the deceased's properties were shared among the children,
                                        leaving just the landed property for Oranyan-the youngest son. The latter, not considering the cheating,
                                        contented himself with hit share and proceeded forthwith to turn to good account with the utmost skill,
                                        the landed property He held his brothers as tenants on the land and received runs from them.
                                        He went to the extent of receiving rents on the space occupied by the properties of his brothers i.e
                                        the women, cattle, beads, garments, crown, etc. This, in fact, made him more prosperous than his brothers
                                        because he made Judicious use of what he had. He was again lucky to have been the only son born to the father
                                        after the father had become King. This incidentally qualified him to succeed the father as king in the direct
                                        line of succession according to custom.
                                    </p>

                                    <p>

                                        Under Oranyan, Ile-Ife became prosperous and populous.
                                        Trade and professions flourished, religions and customs blossomed,
                                        while beliefs and superstitions proliferated. For any of a myriad of reasons,
                                        individuals and groups left lle-Ife to sojourn in places - East and West, North and South.
                                        As the years rolled by and inhabitants got settled, these sojourns soon became towns and villages,
                                        all of which have lle-Ife as cradle. One of these towns is "ORO' later christened ILORO-EKITI


                                    </p>


                                </div>
                            )}
                        </div>

                        {/* SECTION 3 */}
                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("farming")}>
                                THE MARCH FROM ILE-IFE
                                <span>{open["farming"] ? "−" : "+"}</span>
                            </h3>
                            {open["farming"] && (
                                <div className="section-box">
                                    <p>
                                        Very long ago, before the advent of Christianity and modern civilisation,
                                        it was the belief of the Yoruba Race that the birth of Twins was
                                        a bad omen and an indication of the anger of the gods.
                                        To appease these gods therefore,
                                        the twins had to be killed as sacrifice and their parent's properties
                                        confiscated and named "Oluo meaning, wretched people.
                                        This custom persisted in the Yoruba Race and indeed in some other
                                        races until the abolition during the successful crusade against it led
                                        by Mary Slessor in the nineteenth century.
                                    </p>
                                    <p>
                                        It happened then that one of the wives of a valiant warrior, Ifa Priest and powerful warrior called ASAGIDIGBI
                                        a native of Ifewara who sojourned in Ile Ife in the ancient period gave birth to a set of twins and in accordance with the tradition, the twins would have to be sacrificed.
                                        Because of the special love and pity the then Ooni had for the great warrior and his wife who was a Princess in lle-Ife, the Ooni decided to spare the lives of the twins by
                                        sending them and their parents away from Ile-Ife to save their lives.
                                    </p>

                                    <p>

                                        Before their departure, the King gave them what amounted to the Princess inheritance –
                                        gifts such as beaded crown, swords, clothing, bead-necklaces (akun). cow-tails, beaded royal
                                        staff and other valuable and useful materials. He also gave them three groups of men to escort and
                                        minister to them on their way to exile Asagidigbi, his wife, the twins and some of their relations
                                        including Asalu then left for their 'Ifewara home case.


                                    </p>

                                    <p>

                                        Sensing danger again for the twins at 'Ifewara' because of its
                                        nearness to Ile-lfe, the entire party thereupon set about their journey,
                                        going from place to place as directed by the Ifa oracle.
                                        The migrating party was confronted with problems of various kinds in
                                        their search for a suitable abode. These problems range from open hostility
                                        often accompanied by confrontation from the original settlers, to pestilence
                                        and natural disasters. There were also invasions by the local bandits who
                                        raided their homes and drove them out of their settlement. At each of the
                                        places the party sojourned in before reaching their final destination,
                                        some of them stayed behind while some of the original settlers joined
                                        the group in their forward march. Some of these places probably include
                                        Ila-Orangun, Aramoko, Ilogbo, Efon Alaaye, etc as titles like
                                        "Eye-Rangun”,  “Eve-Lara” ,   "Obalogbo”,  “Alaaye” , etc
                                        prominently feature in the list of chieftaincy titles in
                                        lloro Ekiti up till today History and even the Ifa Oracle revealed that
                                        the founder of lloro-Ekiti was a cousin to
                                        the first Orangun of Ila, thus confirming the two towns’ common origin.


                                    </p>

                                    <p>

                                        When the migrating party headed by Asalu (much larger now because of those they picked up en-route) got
                                        to a more comfortable site, they decided to settle down and name the place "Oke-Ore after consulting the Ifa Oracle.
                                        The relies this first settlement can still be located at the site today.  From there, while hunting expedition and in
                                        search of greener pasture, they met with other leaders their own settlements which were then simply referred to as
                                        "Ipole and implored them to join the group to provide a stronger and more formidable opposition to invaders.
                                        Based on this consensus, they moved to the present site and decided  name the place after the circumstance that drove
                                        them out of lle-Ife. The settlement thus became known as "ORO-IBEJI" (the taboo of twins) and free there as simply "ORO”

                                        The name "Oro was later changed to "ILORO" in line with civilisation.
                                    </p>





                                </div>
                            )}
                        </div>

                        {/* SECTION 4 */}
                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("people")}>
                                THE SETTLEMENT
                                <span>{open["people"] ? "−" : "+"}</span>
                            </h3>
                            {open["people"] && (
                                <div className="section-box">
                                    <p>
                                        The settlement, Oro, later known as ILORO soon increased in size and population.
                                        However, it is worthy of note that all immigrants from various places to the
                                        old Oro-Ekiti did not come from the same direction or at the same time They
                                        came from various places for various purposes, all looking for an economic,
                                        comfortable and safe sojourn. The principal characters in the founding of
                                        the town are Asagidigbi, the father of the twins and his relations from
                                        Ifewara - Asalu and Ayaopa-bi-okun. Ayaopa later
                                        left the group to found 'lyapa' now called Ayetoro-Ekiti.
                                    </p>
                                    <p>

                                        ASAGIDIGBI, was a prominent farmer and palm-wine tapper who had his depot
                                        by a river. He was also a medicine man who cured the people of their ailments,
                                        cured infertility and barrenness and performed many other notable feats.
                                        He was so much loved by all and useful to the community that after his death,
                                        the river where he had his depot and near which the people settled,
                                        was named “Asagidi” after him. Up till today, many inhabitants of the
                                        town still believe that whatever your problems, if you call the name of
                                        this river or wash in it, your sufferings will disappear.
                                        The river is also believed to be a great protector of the people from
                                        road and river accidents. Consequently, the fishes in the river taken to
                                        be children of the man' are not killed for food, and if inadvertently killed,
                                        it is believed that they can never be cooked to satisfaction.
                                    </p>

                                    <p>

                                        ASALU was reputed for his mature sense of leadership and management
                                        He is believed to be the principal founder of the town, hence the usual
                                        song by his descendants 'la ni mo l'Oro (meaning, we are the owners of lloro).
                                        Asalu was very accommodating, hospitable and humble. He surrendered his right to
                                        be the Oba, being the Chief Founder of the town and accepted to be made only a
                                        high chief who, together with the Oba, co-ordinated the activities of the town.
                                        Today, a Quarter is named after him Isalu quarters, and the title of 'Asalu'
                                        a high-ranking Chief, still subsists.



                                    </p>
                                    <p>
                                        Among the other groups that joined the original settlers were  Ajana,
                                        Odofin and Ejemu .  Ajana is believed to have come from Okela and settled at
                                        the site  now called Igbosanyin ,  together with his brother who
                                        came to visit him and was  persuaded to stay with him there.



                                    </p>

                                    <p>

                                        In the same vein. Odofin had his origin from Olodooye in Ijero-Ekiti.
                                        That is why Olodooye is deified in 'Odofin family today. Also,
                                        Ejemu had blood relations with the people from Osun-Ekiti in the
                                        present Moba Local Government. They both deify the ‘elefon’ and 'osanyin’
                                        History revealed
                                        that the Iyagba Warriors made them to run away from Ijumu in Kogi State. Today the
                                        wooden artifacts similar to the elefon masquerades still exist in Ijumu.


                                    </p>

                                    <p>
                                        These various groups who were in their different ‘ipoles’ decided together
                                        to come for  the purpose of forming a formidable team. As a result of this
                                        the group became powerful and was able to resist
                                        the raids of the pirates-the Ipetu and other invading groups.

                                    </p>

                                    <p>

                                        The leaders of the various groups that later came together to form this formidable
                                        team were referred to as 'IWARES i.e friends, while other immigrants who joined
                                        later were called "URO" and "ERINSE". These were the front men and
                                        from them were chosen the leading chiefs of the town. Some other
                                        people from far and near, driven out of their own settlements by
                                        invading bandits came to Iloro to seek refuge and due to the
                                        good-naturedness and hospitality of her people, the town accommodated
                                        them and gave them land to till and settle. These also included itinerant hunters,
                                        medicine-men and men of great valour and  fortitude.
                                        As the town grew in population, strength and popularity, more people came
                                        from far and near to settle there, and were always warmly received. For example,
                                        there were people from 'Oyo-Alaafin who settled at
                                        Ogbon Oyo (0yo Street), now part of  ‘Aafin’  Quarters.
                                    </p>
                                    <p>
                                        There was also a man said to be from "Obo" (in the present Kwara State)
                                        He fought but lost a battle to win the title of his ancestor as the ruler
                                        of his people and therefore migrated in protest from their town to lloro.
                                        On teaching Iloro-Ekiti  he was arraigned before the Oba (as a stranger)
                                        for identification and screening. During the exchange of ideas, the Oba
                                        noticed some good traits in him and gave a piece of land to farm.
                                        That piece of land was named "Oko-Oba (the King Farm) He got settled and
                                        his relations from 'Obo' soon learnt of his whereabout and paid him visits.
                                        During these visits, he entertained them with ayo game and it was for this
                                        purpose that a number of holes
                                        which are still visible up till now were dug on a rock near their home.

                                    </p>
                                    <p>

                                        There was another group of people, who came from "lla-Orangun", called
                                        the ‘Ibamukans’ , Chief Ajana met them at the place now called Eniju'
                                        near the shrine of 'Osanyin" (Igbosanyin). Considering their number
                                        and strength. Chief Ajana persuaded them to stay with him for the purpose of
                                        defence and companionship, but this was not without certain conditions that
                                        the leader of the group should be made a High Chief close to the Oba - the
                                        position he was at lla-Orangun an “Obanla”  (next to Orangun) The then Chief
                                        Ajana conceded to surrender his right to the post of Eesaro (next to the Oba) to
                                        meet this condition Today, the groups are already fused and now
                                        fondly referred to as "Atejioye”.  This indicates that any of their male
                                        descendants
                                        can be conferred with the chieftaincy title of ‘Ajana' or 'Eesaro’.


                                    </p>
                                </div>
                            )}
                        </div>


                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("delimit")}>
                                DELIMITATION OF BOUNDARIES
                                <span>{open["delimit"] ? "−" : "+"}</span>
                            </h3>
                            {open["delimit"] && (
                                <div className="section-box">
                                    <p>

                                        As some other groups began to settle at different places in the neighbourhood,
                                        it became necessary to delimit boundaries in order to prevent the town's
                                        territory from encroachment. This was accomplished by instructing messengers
                                        to carry specially prepared medicine (a prescription of the Ifa Oracle) as
                                        far as they could get to the East, West, North and South of the town.
                                        Such places were marked by planting "porogun” (life plant) trees at the spots.
                                        The problem in this, which acted as a constraint, was confrontation with
                                        "Ipatas” the native police of other settlers who would not let the Royal
                                        Messengers travel too far, as they would have liked. History had it that
                                        Iloro-Ekiti was one of the first groups of settlers in the entire present
                                        neighbourhood. That was why the town able to occupy a plain and central land
                                        surrounded by towns and villages with less advantageous geographical locations.
                                        lloro Ekiti also became the landlord of the whole areas and it became her
                                        inalienable right to appropriate land to subsequent settlers considered fit.
                                        For example, history revealed that Iloro and Ikoro were originally bounded at
                                        "Oju-Oja' at the heart of the present Ipoti-Ekiti. When the Ipotis came,
                                        the then Olukoro and Oluloro jointly agreed to give them a place
                                        at their present site. Similar accommodation was apportioned to other
                                        groups which resulted in Iloro-Ekiti, being on a central plain,
                                        surrounded by other towns. As the saying goes,

                                        "he who comes last sits at the edge".

                                    </p>

                                </div>
                            )}
                        </div>


                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("settlementproblem")}>
                                SETTLEMENT PROBLEMS
                                <span>{open["settlementproblem"] ? "−" : "+"}</span>
                            </h3>
                            {open["settlementproblem"] && (
                                <div className="section-box">
                                    <p>
                                        No person or institution, legal or natural succeeds without handicaps and
                                        setbacks in the process of the development of a community, many problems  are
                                        encountered and no attempt at a town's history can be complete without a mention
                                        of the wars fought and the disasters, natural or otherwise that have had to be
                                        faced in the struggle for survival and development.
                                        The case of Iloro-Ekiti is no exception

                                    </p>

                                </div>
                            )}
                        </div>



                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("wars")}>
                                WARS
                                <span>{open["wars"] ? "−" : "+"}</span>
                            </h3>
                            {open["wars"] && (
                                <div className="section-box">
                                    <p>
                                        Our ancestors, in the struggle for survival and freedom fought many  wars .
                                        The very early ones had to do with repelling invading armies of other powerful
                                        settlements and kingdoms in search of new subjects and territories. Other wars
                                        were those caused by land disputes and boundary quarrels with the neighbouring
                                        towns. There were many of these and some notable ones that happened  ever within
                                        living memory are the boundary disputes with Ipoti in 1919, Osun in 1942 and Odo
                                        Owa in the more recent past. More important wars were fought by our men in far
                                        away places in concert with the forces of towns in alliance whether in  defence
                                        of certain rights
                                        or to avenge a certain insult. Notable among these are the Ekitiparapo/Kiriji War,
                                        the Okemesi War, and others fought some years ago.

                                    </p>

                                    <p>

                                        In all these wars, our warriors distinguished themselves at valiant fearless soldiers who
                                        brought slaves as rewards for their victories, Weapons used in the earliest wars were hunter's dane guns,
                                        special machetes, bows and arrows as well as charms. For the town's defence, a trench (yara), the trace of which
                                        can still be found today, was dug round the town to fence away the invading armies other external aggression.
                                        Many famous ancestors of llore-Ekiti got their fame from the wars they fought . People like 'Asalu, Okotorojo, Iroko-Ereyi, Osoda, Arowolo I and others
                                        noted for their valiancy, became institutions today
                                        because of the respect they commanded in their days by distinguishing themselves at the war front. For example, Osoolo was believed to have led his team to a war
                                        he almost  lost all of his warriors. On his way back home, he was ashamed of entering the town without  his men , hence  he burst into tears and later turned into a stream
                                        now called "Osoolo”.  Today, the people in that street are fondly greeted as  Omo Osoolo nsokun asun-igbe”.


                                    </p>

                                </div>
                            )}
                        </div>



                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("disasters")}>
                                Natural Disasters
                                <span>{open["disasters"] ? "−" : "+"}</span>
                            </h3>
                            {open["disasters"] && (
                                <div className="section-box">
                                    <p>
                                        There was a widespread fire outbreak in the town about February,
                                        1926 when fire gutted almost three-quarters of the buildings
                                        in the town, As at that time, all private and public buildings were
                                        of thatched roof, thus facilitating the spread of the inferno.
                                        The first iron-roofed building (built by Oba S.A. Aje - Aminrinjoye)
                                        was to come later. There were also reports of tornadoes and
                                        rainstorms easily blowing off many thatched-roofed houses and
                                        rendering the inhabitants homeless.

                                    </p>

                                </div>
                            )}
                        </div>


                        <div className="section">
                            <h3 className="section-title" onClick={() => toggle("famine")}>
                                FAMINE
                                <span>{open["famine"] ? "−" : "+"}</span>
                            </h3>
                            {open["famine"] && (
                                <div className="section-box">
                                    <p>

                                        Several incidents of famine were encountered and these were caused by
                                        either drought or invasion of pests. Such names as 'lyan Ebi-njagun",
                                        "Iyan Odoko" . Tyan Foworemi", "Iyan Menumo"  scarcity of salt in 1942,
                                        etc refer to such incidents
                                        with regard to their respective surrounding circumstances.

                                    </p>
                                    <p>


                                    </p>
                                </div>
                            )}
                        </div>









                        {/* ACTION BOX */}
                   {/*      <div className="action-box">
                            <button className="action-primary">Download PDF</button>
                            <a href="#" className="action-outline">Read More</a>
                        </div> */}


                    </div>
                </div>
            </div>

        </>
    );
}

/* STYLES */
const styles = {
    page: {
        width: "100%",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: 1.6,
    },

    hero: {
        height: "50vh",
        width: "100%",
        backgroundImage:
            "url('/gallery/Asagidi.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    overlay: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
    },

    heroContent: {
        position: "relative",
        textAlign: "center",
        color: "#fff",
        width: "85%",
    },

    heroTitle: {
        fontSize: "60px",
        fontWeight: "800",
        marginBottom: "15px",
        color: "#fff",
    },

    heroSubtitle: {
        fontSize: "22px",
        maxWidth: "600px",
        margin: "0 auto",
        opacity: 0.9,
    },

    section: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 6%",
        gap: "50px",
        flexWrap: "wrap",
    },

    imageBox: {
        flex: 1,
        minWidth: "300px",
    },

    image: {
        width: "100%",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    },

    textBox: {
        flex: 1,
        minWidth: "300px",
    },

    sectionTitle: {
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "20px",
    },

    sectionText: {
        fontSize: "18px",
        opacity: 0.9,
        lineHeight: 1.8,
    },

    footer: {
        textAlign: "center",
        padding: "20px",
        background: "#111",
        color: "#fff",
        marginTop: "40px",
    },
};
