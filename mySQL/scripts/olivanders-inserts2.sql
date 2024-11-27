-- Inserts for the languages
INSERT INTO `Olivanders`.`languages` (`name`, `iso_code`)
VALUES
('English' , 'en'),
('Español' , 'es'),
('Italiano', 'it');

-- Inserts for wandmaker table, where are the translatable columns for wandmaker relations
INSERT INTO `Olivanders`.`wandmaker_has_language`(`wandmaker_id`, `language_id`, `specialty`)
VALUES
-- Olivander
(1, 1, 'Curious indeed how these things happen. The wand chooses the wizard, remember... I think we must expect great things from you, Mr Potter... After all, He-Who-Must-Not-Be-Named did great things — terrible, yes, but great.'),
(1, 2, 'Es curioso cómo suceden estas cosas. La varita elige al mago, recuerda... Creo que debemos esperar grandes cosas de usted, Sr. Potter... Después de todo, El-Que-No-Debe-Ser-Nombrado hizo grandes cosas... terribles, sí, pero grandes.'),
(1, 3, 'Curioso davvero come queste cose accadano. La bacchetta sceglie il mago, ricorda... Credo che dobbiamo aspettarci grandi cose da lei, signor Potter... Dopo tutto, Colui-Che-Non-Deve-Essere-Nominato ha fatto grandi cose - terribili, sì, ma grandi.'),
-- Salazar slytherin
(2, 1, "We'll teach just those whose ancestry's purest.— Slytherin's opinion regarding the running of Hogwarts"),
(2, 2, 'Nsegneremo solo a coloro la cui ascendenza è più pura. - Opinione dei Serpeverde sulla gestione di Hogwarts'),
(2, 3, 'Enseñaremos sólo a aquellos cuya ascendencia sea más pura - La opición nde Slytherin sobre el funcionamiento de Hogwarts'),
-- The death
(3, 1, '"And Death spoke to them."— Death speaking to the Peverell brothers'),
(3, 2, '"Y la Muerte les habló" . La Muerte hablando a los hermanos Peverell'),
(3, 3, '“E la Morte parlò loro”. - La Morte parla ai fratelli Peverell'),
-- Antioch Peverell
(4, 1, 'So the oldest brother, who was a combative man, asked for a wand more powerful than any in existence: a wand that must always win duels for its owner, a wand worthy of a wizard who had conquered Death!'),
(4, 2, 'Así que el hermano mayor, que era un hombre combativo, pidió una varita más poderosa que ninguna de las existentes: una varita que siempre debía ganar duelos para su dueño, ¡una varita digna de un mago que había vencido a la Muerte!'),
(4, 3, 'Così il fratello maggiore, che era un uomo combattivo, chiese una bacchetta più potente di tutte quelle esistenti: una bacchetta che doveva sempre vincere i duelli per il suo proprietario, una bacchetta degna di un mago che aveva vinto la Morte!.'),
-- Isolt Sayre
(5, 1, 'William nicknamed his daughter ‘Morrigan’ for her affinity for all natural things when she was young'),
(5, 2, 'William apodó a su hija «Morrigan» por su afinidad con todas las cosas naturales cuando era joven.'),
(5, 3, 'William soprannominò sua figlia “Morrigan” per la sua affinità con tutte le cose naturali quando era giovane.'),
-- James steward
(6, 1, 'Isolt and James both lived to be over 100. They had seen the cottage of Ilvermorny become a granite castle, and they died in the knowledge that their school was now so famous that magical families all over North America were clamouring to educate their children there.'),
(6, 2, 'Isolt y James vivieron más de cien años. Habían visto cómo la cabaña de Ilvermorny se convertía en un castillo de granito, y murieron sabiendo que su escuela era ahora tan famosa que familias mágicas de toda Norteamérica clamaban por educar allí a sus hijos.'),
(6, 3, 'Isolt e James vissero entrambi più di 100 anni. Avevano visto il cottage di Ilvermorny diventare un castello di granito e morirono con la consapevolezza che la loro scuola era ormai così famosa che le famiglie magiche di tutto il Nord America chiedevano a gran voce di educare i loro figli lì.'),
-- Arturo cephalopos
(7, 1, 'A 19th-century wandmaker who criticized the idea that silver lime wood was associated with Divination powers. He claimed that this belief was a "falsehood" spread by merchants like Gerbold Ollivander, who he accused of overstocking their workshops with silver lime to sell surplus wands.'),
(7, 2, 'Criticó la idea de que la madera de cal plateada se asociaba con poderes adivinatorios. Afirmaba que esta creencia era una «falsedad» difundida por comerciantes como Gerbold Ollivander, a quien acusaba de abastecer en exceso sus talleres con cal argentífera para vender el excedente de varitas.'),
(7, 3, "Criticò l'idea che il legno di calce argentata fosse associato a poteri divinatori. Sosteneva che questa credenza fosse una “falsità” diffusa da mercanti come Gerbold Ollivander, che accusava di rifornire eccessivamente i propri laboratori di calce argentata per vendere le bacchette in eccesso."),
-- Mykew Gregorovitch
(8, 1, 'I vos one of the last to purchase a Gregorovitch vand. They are the best — although, I know, of course, that you Britons set much store by Ollivander.'),
(8, 2, '«Fui uno de los últimos en comprar una venda Gregorovitch. Son los mejores, aunque sé, por supuesto, que ustedes los británicos le dan mucha importancia a Ollivander».'),
(8, 3, '“Sono stato uno degli ultimi ad acquistare un vand Gregorovitch. Sono i migliori - anche se, naturalmente, so che voi inglesi date molta importanza a Ollivander”.'),
-- Violetta Beauvais
(9, 1, 'Beauvais was a wandmaker from New Orleans who crafted wands using swamp mayhaw wood and rougarou hair as cores. Despite accusations that her wands were linked to Dark magic, many notable wizards, including President Seraphina Picquery, used them in the 1920s.'),
(9, 2, 'Beauvais era una fabricante de varitas mágicas de Nueva Orleans que fabricaba varitas con madera de mayhaw del pantano y pelo de rougarou. A pesar de las acusaciones de que sus varitas estaban relacionadas con la magia negra, muchos magos notables, como la presidenta Seraphina Picquery, las utilizaron en la década de 1920.'),
(9, 3, 'Era un fabbricante di bacchette di New Orleans che realizzava bacchette utilizzando come anima il legno di mayhaw della palude e i peli di rougarou. Nonostante le accuse che le sue bacchette fossero legate alla magia nera, negli anni Venti le usarono molti maghi importanti, tra cui il Presidente Seraphina Picquery.'),
-- Shikoba Wolfe
(10, 1, "Of Choctaw descent, Wolfe was best known for crafting wands that were intricately carved. Wands made by Wolfe contained Thunderbird tail feathers as cores and were generally believed to be extremely powerful, but difficult to master. They were especially sought after by practitioners of Transfiguration. One of these wands included Holly Blackbird's wand, a valuable Shikoba Wolfe original."),
(10, 2, 'Wolfe era conocido sobre todo por fabricar varitas talladas de forma intrincada. Las varitas hechas por Wolfe contenían plumas de cola de ave del trueno como núcleo y se creía que eran extremadamente poderosas, pero difíciles de dominar. Eran especialmente codiciadas por los practicantes de la Transfiguración. Una de estas varitas era la de Holly Blackbird, un valioso «original de Shikoba Wolfe».'),
(10, 3, 'Era noto soprattutto per la produzione di bacchette intricate e intagliate. Le bacchette di Wolfe contenevano al loro interno piume di coda di uccello tonante e si riteneva che fossero estremamente potenti, ma difficili da padroneggiare. Erano particolarmente ambite dai praticanti di Trasfigurazione. Una di queste bacchette era quella di Holly Blackbird, un prezioso “originale di Shikoba Wolfe”');

-- Inserts for the main wandmakers table
INSERT INTO `Olivanders`.`wandmakers`(`wandmaker_id`, `name`, `last_name`)
VALUES
(1, 'Garrick', 'Olivander'),
(2, 'Salazar', 'Slytherin'),
(3, 'Death', ''),
(4, 'Antioch', 'Peverell'),
(5, 'Isolt', 'Sayre'),
(6, 'James', 'Steward'),
(7, 'Arturo', 'Cephalopos'),
(8, 'Mykew', 'Gregorovitch'),
(9, 'Violetta', 'Beauvais'),
(10, 'Shikoba', 'Wolfe');

-- Inserts for user table.
INSERT INTO `Olivanders`.`users`(`user_id`, `name`, `last_name`, `birth_date`, `email`, `password`) 
VALUES 
(1, 'Albus', 'Dumbledore', '1881-08-30', 'dumbledor@hogwarts.magic', 'voldididntkillme'), 
(2, 'Tom', 'Marvolo Riddle', '1926-12-31', 'He-Who-Must-Not-Be-Named@deatheaters.com', 'harrykilledme'), 
(3, 'Harry', 'Potter', '1980-07-31', 'thechildwholived@hogwarts.com', 'ikilledvoldi'),
(4, 'Hermione', 'Granger', '1979-09-19', 'bookwormwizard@hogwarts.magic', 'ronweasleysbff'),
(5, 'Ron', 'Weasley', '1980-03-01', 'gingermagic@burrow.wizard', 'hermioneislove'),
(6, 'Ginny', 'Weasley', '1981-08-11', 'quidditchqueen@weasleys.com', 'harryspotterswife'),
(7, 'Draco', 'Malfoy', '1980-06-05', 'pure-blood-prince@slytherin.magic', 'fatherknowsbest'),
(8, 'Severus', 'Snape', '1960-01-09', 'always-potions@hogwarts.magic', 'lilysalways'),
(9, 'Sirius', 'Black', '1959-11-03', 'escaped-prisoner@azkaban.com', 'moonypadsfootsprongs'),
(10, 'Remus', 'Lupin', '1960-03-10', 'werewolf-professor@hogwarts.magic', 'fullmoonproblems'),
(11, 'Neville', 'Longbottom', '1980-07-30', 'herbology-hero@gryffindor.com', 'grandmasproud'),
(12, 'Luna', 'Lovegood', '1981-02-13', 'radish-earrings@lovegood.magic', 'believeinnaargles'),
(13, 'Fred', 'Weasley', '1978-04-01', 'pranking-genius1@weasleyswizardwheezes.com', 'georgeismy-twin'),
(14, 'George', 'Weasley', '1978-04-01', 'pranking-genius2@weasleyswizardwheezes.com', 'fredismy-twin'),
(15, 'Bellatrix', 'Lestrange', '1951-12-15', 'crazy-dark-witch@deatheaters.com', 'voldemortsloyalist'),
(16, 'Cedric', 'Diggory', '1977-10-15', 'triwizard-champion@hufflepuff.magic', 'fairplayalways'),
(17, 'Cho', 'Chang', '1979-02-14', 'ravenclaw-seeker@hogwarts.com', 'harrysFirstkiss'),
(18, 'Minerva', 'McGonagall', '1935-10-04', 'strict-transfiguration@hogwarts.magic', 'gryffindorforever'),
(19, 'Rubeus', 'Hagrid', '1928-12-06', 'groundskeeper@hogwarts.magic', 'iwantadragon'),
(20, 'Dobby', 'Elf', '1970-01-01', 'free-elf@malfoymanor.com', 'harrypottersaved-me'),
(21, 'Ernie', 'Macmillan', '1980-06-15', 'hufflepuff-prefect@hogwarts.magic', 'loyalfriend'),
(22, 'Dean', 'Thomas', '1980-08-01', 'gryffindor-artist@hogwarts.com', 'ginnyswboyfriend'),
(23, 'Seamus', 'Finnigan', '1980-02-28', 'explosions-expert@hogwarts.magic', 'wingardiumleviosa'),
(24, 'Padma', 'Patil', '1979-09-15', 'ravenclaw-smarty@hogwarts.com', 'twinningwithparvati'),
(25, 'Parvati', 'Patil', '1979-09-15', 'gryffindor-fashionista@hogwarts.magic', 'padmasister'),
(26, 'Oliver', 'Wood', '1976-11-20', 'quidditch-obsessed@hogwarts.com', 'winnerwithgryffindor'),
(27, 'Angelina', 'Johnson', '1977-10-15', 'quidditch-captain@gryffindor.magic', 'fredweasleyslove'),
(28, 'Hannah', 'Abbott', '1980-05-20', 'hufflepuff-sweetheart@hogwarts.com', 'neville-loves-me'),
(29, 'Susan', 'Bones', '1980-04-10', 'fair-and-just@hufflepuff.magic', 'auntamiasniece'),
(30, 'Marcus', 'Flint', '1975-08-15', 'slytherin-brute@hogwarts.com', 'quidditchisfirst'),
(31, 'Vincent', 'Crabbe', '1980-01-14', 'dracoscrony1@slytherin.magic', 'goyleismybestie'),
(32, 'Gregory', 'Goyle', '1980-02-20', 'dracoscrony2@slytherin.com', 'crabbemybestfriend'),
(33, 'Blaise', 'Zabini', '1980-03-05', 'smooth-slytherin@hogwarts.magic', 'purebloodandproud'),
(34, 'Katie', 'Bell', '1978-09-25', 'quidditch-chaser@gryffindor.com', 'angelinasbestfriend'),
(35, 'Lee', 'Jordan', '1978-11-05', 'quidditch-commentator@hogwarts.magic', 'weasleytwinsbuddy'),
(36, 'Percy', 'Weasley', '1976-08-22', 'ministry-ambitious@weasley.com', 'prefectknowsbest'),
(37, 'Bill', 'Weasley', '1970-11-29', 'curse-breaker@gringotts.magic', 'fleurdelacourwife'),
(38, 'Charlie', 'Weasley', '1972-12-12', 'dragon-tamer@romania.com', 'weasleyfamily-rocks'),
(39, 'Lavender', 'Brown', '1979-10-10', 'ron-is-mine@hogwarts.magic', 'wonwonlover'),
(40, 'Pansy', 'Parkinson', '1979-11-15', 'dracosboyfriend@slytherin.com', 'malfoysfuturewife'),
(41, 'Alicia', 'Spinnet', '1977-09-12', 'quidditch-trio@gryffindor.magic', 'kaatiessister'),
(42, 'Colin', 'Creevey', '1981-08-20', 'harry-potter-fan@hogwarts.com', 'cameraobsessed'),
(43, 'Dennis', 'Creevey', '1982-09-15', 'harrypotter-admirer@hogwarts.magic', 'colinsmartyr'),
(44, 'Fenrir', 'Greyback', '1940-06-10', 'werewolf-terror@deatheaters.com', 'bitingislife'),
(45, 'Peter', 'Pettigrew', '1960-03-15', 'rat-betrayer@marauders.magic', 'voldemortsservant'),
(46, 'Nymphadora', 'Tonks', '1973-02-05', 'metamorphmagus@aurors.com', 'remusluvinme'),
(47, 'Narcissa', 'Malfoy', '1955-01-20', 'blackfamily-royalty@malfoymanor.magic', 'dracosmom'),
(48, 'Lucius', 'Malfoy', '1954-06-25', 'pure-blood-aristocrat@deatheaters.com', 'voldemortsfollow'),
(49, 'Andromeda', 'Tonks', '1953-07-14', 'blacksheep-family@hogwarts.magic', 'tedloveswme'),
(50, 'Ted', 'Tonks', '1952-09-18', 'muggle-born-wizard@hogwarts.com', 'andromedaislove');

-- Inserts for wand_has_core table, where are the non translatable columns for the wand cores table
INSERT INTO `Olivanders`.`wand_has_core`(`core_id`, `discover_date`)
VALUES
(1, '0574/11/14'),
(2, '0103/03/22'),
(3, '0507/06/18'),
(4, '0598/09/05'),
(5, '0301/07/11'),
(6, '0245/12/30'),
(7, '0488/04/07'),
(8, '0600/08/19'),
(9, '0515/02/25'),
(10, '0399/10/03'),
(11, '0522/06/13'),
(12, '0466/11/28'),
(13, '0543/03/06'),
(14, '0218/05/14'),
(15, '0377/09/20'),
(16, '0592/01/17'),
(17, '0556/04/09'),
(18, '0431/08/21'),
(19, '0500/02/12'),
(20, '0029/10/01'),
(21, '0621/07/04');

-- Inserts for core_has_language where the columns that need to be translated are.
INSERT INTO `Olivanders`.`core_has_language`(`core_id`, `language_id`, `name`, `description`)
VALUES
(1, 1, 'Dragon heartstring', 'Dragon heartstring wands excel in powerful magic and loyalty but are prone to accidents and dark arts influence. They bond deeply with owners but may change allegiance.'),
(1, 2, 'Fibra de corazón de dragón' , 'Las varitas con núcleo de fibra de dragón destacan por su magia poderosa y lealtad, pero son propensas a accidentes y a influencias de artes oscuras. Forman un fuerte vínculo con su dueño.'),
(1, 3, 'Corda di cuore di drago' , 'Le bacchette con nucleo di corda di drago eccellono in magia potente e lealtà, ma sono inclini a incidenti e influenze delle arti oscure. Si legano fortemente al loro proprietario.'),

(2, 1, 'Phoenix feather', 'Phoenix feather wands excel in versatile magic and initiative but are picky, hard to tame, and may act independently, which some find challenging.'),
(2, 2, 'Pluma de fénix', 'Las varitas con pluma de fénix destacan por su magia versátil e iniciativa, pero son exigentes, difíciles de dominar y a veces actúan por su cuenta, lo que resulta desafiante para algunos.'),
(2, 3, 'Piuma di fenice', 'Le bacchette con piuma di fenice eccellono in magia versatile e iniziativa, ma sono esigenti, difficili da domare e talvolta agiscono autonomamente, sfidando alcuni proprietari.'),

(3, 1, 'Unicorn tail hair', 'Unicorn hair wands are safe and loyal but less powerful. Resistant to dark arts, they wilt if mistreated.'),
(3, 2, 'Pelo de cola de unicornio', 'Las varitas con crin de unicornio son seguras y leales, pero menos poderosas. Resistentes a las artes oscuras, se marchitan si son maltratadas.'),
(3, 3, 'Crine di unicorno', 'Le bacchette con crine di unicorno sono sicure e leali, ma meno potenti. Resistono alle arti oscure e appassiscono se maltrattate.'),

(4, 1, 'Veela hair', 'Veela hair cores made for "temperamental" wands.'),
(4, 2, 'Pelo de veela', 'Los núcleos de pelo de veela son para varitas "temperamentales".'),
(4, 3, 'Capelli di veela', 'Nuclei di capelli Veela realizzati per bacchette “capricciose”.'),

(5, 1, 'Thestral tail hair', "The Elder Wand's thestral tail hair core is powerful yet unstable, mastered only by those who accept death."),
(5, 2, 'Pelo de cola Thestral', 'El núcleo de pelo de thestral de la Varita de Saúco es poderoso pero inestable, dominado solo por quienes aceptan la muerte.'),
(5, 3, 'Coda di thestral','Il nucleo di coda di thestral della Bacchetta di Sambuco è potente ma instabile, padroneggiato solo da chi accetta la morte.'),

(6, 1, 'Troll whisker', 'Unknown, inferior to the three supreme cores.'),
(6, 2, 'Bigote de troll', 'Desconocido, inferior a los tres núcleos supremos'),
(6, 3, 'Pelo di troll', 'Questo è un nucleo utilizzato raramente ed è molto probabilmente considerato un tipo di nucleo inferiore alla media.'),

(7, 1, 'Coral', 'Unknown'),
(7, 2, 'Coral', 'Desconocido'),
(7, 3, 'Corallo', 'Sconosciuto'),

(8, 1, 'Dittany stalk', 'Unknown, the plant itself was a powerful restorative that could make fresh skin grow over a wound.'),
(8, 2, 'Tallo de díctamo', 'Desconocida, la planta en sí era un poderoso reconstituyente que podía hacer crecer piel fresca sobre una herida.'),
(8, 3, 'Peduncolo di Dittany', 'La pianta stessa, sconosciuta, era un potente ricostituente in grado di far crescere la pelle fresca su una ferita.'),

(9, 1, 'Thunderbird tail feather', 'Thunderbird feather wands are powerful but hard to master, excelling in Transfiguration and sensing danger, even casting curses autonomously.'),
(9, 2, 'Pluma de cola de Thunderbird','Las varitas con pluma de Thunderbird son poderosas pero difíciles de dominar, destacan en Transfiguración y detectan peligros, lanzando maldiciones por sí solas.'),
(9, 3, 'Piume caudali di tuono alato', 'Le bacchette con piuma di Thunderbird sono potenti ma difficili da padroneggiare, eccellono in Trasfigurazione e percepiscono pericoli, lanciando maledizioni autonomamente.'),

(10, 1, 'Wampus cat hair', 'Unknown'),
(10, 2, 'Pelo de gato Wampus', 'Desconocido'),
(10, 3, 'Peli di wampus', 'Sconosciuto'),

(11, 1, 'White River Monster Spine', 'White River Monster spine wands produced spells of force and elegance.'),
(11, 2, 'Espina del monstruo del Río Blanco', 'Las varitas de espina de monstruo del Río Blanco producen hechizos con fuerza y elegancia.'),
(11, 3, 'Aculeo di mostro del White River', 'Questo nucleo della bacchetta è stato usato da Thiago Quintana. Le spine del mostro del White River producono incantesimi di forza ed eleganza.'),

(12, 1, 'Rougarou hair', 'Rougarou hair wands were believed to have an affinity for the Dark Arts, like vampires to blood.'),
(12, 2, 'Pelo de rougarou', 'Se rumorea que este material tiene afinidad para las artes oscuras, a pesar de ir bien con magos y brujas que no siguen a estas artes.'),
(12, 3, 'Capelli di rugaru', 'Si diceva che i capelli di Rugaru avessero un affinità per la magia oscura, come i vampiri con il sangue'),

(13, 1, 'Horned serpent horn', 'Horned Serpent horn wands are powerful, sensitive to Parseltongue, and warn of danger with a musical tone.'),
(13, 2, 'Cuerno de Serpiente Cornuda', 'Las varitas con cuerno de Serpiente Cornuda son poderosas, sensibles al pársel y alertan del peligro con un tono musical.'),
(13, 3, 'Corno di Serpente Cornuto', 'Le bacchette con corno di Serpente Cornuto sono potenti, sensibili al Serpentese e avvertono del pericolo con un tono musicale'),

(14, 1, 'Snallygaster heartstring', 'Unknown'),
(14, 2, 'Fibra de corazón de Snallygaster', 'Desconocido'),
(14, 3, 'Corda di cuore di Snallygaster', 'Sconosciuto'),

(15, 1, 'Jackalope Antler', 'Unknown'),
(15, 2, 'Astas de lebrílope', 'Desconocido'),
(15, 3, 'Corna di lepronte', 'Sconosciuto'),

(16, 1, 'Kneazle whisker', 'Unknown'),
(16, 2, 'Bigote de kneazle', 'Desconocido'),
(16, 3, 'Baffo di kneazle', 'Sconosciuto'),

(17, 1, 'Kelpie hair', 'Unknown, easily obtained and frequently used in the past, but noted to be a substandard and inferior substance to use as a core.'),
(17, 2, 'Pelo de Kelpie', 'Desconocida, fácil de obtener y utilizada con frecuencia en el pasado, pero se ha observado que es una sustancia inferior y de mala calidad para utilizarla como núcleo.'),
(17, 3, 'Crine di kelpie', 'Sconosciuta, facilmente ottenibile e frequentemente usata in passato, ma nota per essere una sostanza inferiore e di scarso valore da usare come nucleo.'),

(18, 1, 'Basilisk horn', 'Unknown, presumably had a strong affinity for the Dark arts.'),
(18, 2, 'Cuerno de basilisco', 'Desconocido, se cree que tiene una fuerte afinidad por las artes oscuras'),
(18, 3, 'Corno di basilisco', 'Si conosce solo una bacchetta con questo nucleo e si tratta di quella appartenuta a Salazar Serpeverde, tramandata poi ai suioi discindenti diretti.'),

(19, 1, 'Curupira hair', 'Curupira hair wands were unstable. They were known to choose as their owners individuals who were talented, but also unpredictable'),
(19, 2, 'Pelo de curupira', 'Las varitas de pelo de curupira son inestables. Eran conocidas por elegir a aquellos individuos talentosos a la par que impredecibles'),
(19, 3, 'Capelli di curupira', 'Erano noti per scegliere come proprietari individui di talento, ma anche imprevedibili.'),

(20, 1, 'African mermad hair', 'African mermaid hair wands possessed a certain magical property, ig anyone other than the rightful owner attempted to pick it u, it would shock them'),
(20, 2, 'Pelo de sirena africana', 'Las varitas de pelo de sirena africana poseían una cierta propiedad mágica, si alguien que no fuera su legítimo propietario intentaba cogerla, le daría una descarga eléctrica.'),
(20, 3, 'Capelli da sirena africani', 'Le bacchette di sirena africane possedevano una certa proprietà magica: se qualcuno, al di fuori del legittimo proprietario, avesse tentato di raccoglierle, sarebbe rimasto scioccato.'),

(21, 1, 'Fairy wing', 'Unknown'),
(21, 2, 'Ala de Hada', 'Desconocido'),
(21, 3, 'Ala di fata', 'Sconosciuto');

-- Inserts for wand_has_wood table, where are the non translatable columns for the wand_has_wood table
INSERT INTO `Olivanders`.`wand_has_wood`(`wood_id`, `discover_date`)
VALUES
(1, '0074/02/28'),
(2, '0103/03/22'),
(3, '0507/06/18'),
(4, '0598/09/05'),
(5, '0301/07/11'),
(6, '0245/12/30'),
(7, '0488/04/07'),
(8, '0600/08/19'),
(9, '0515/02/25'),
(10, '0399/10/03'),
(11, '0522/06/13'),
(12, '0466/11/28'),
(13, '0543/03/06'),
(14, '0218/05/14'),
(15, '0377/09/20'),
(16, '0592/01/17'),
(17, '0556/04/09'),
(18, '0431/08/21'),
(19, '0500/02/12'),
(20, '0584/07/04'),
(21, '0132/11/16'),
(22, '0687/03/09'),
(23, '0267/06/22'),
(24, '0451/09/30'),
(25, '0189/05/07'),
(26, '0623/01/25'),
(27, '0346/08/12'),
(28, '0579/04/03'),
(29, '0412/10/19'),
(30, '0235/02/14'),
(31, '0666/07/08'),
(32, '0293/11/27'),
(33, '0537/01/06'),
(34, '0402/09/15'),
(35, '0176/04/21'),
(36, '0651/12/03'),
(37, '0314/06/29'),
(38, '0485/02/17'),
(39, '0601/10/11'),
(40, '0057/03/24'),
(41, '0529/08/06'),
(42, '0365/01/13'),
(43, '0612/05/22'),
(44, '0247/11/09'),
(45, '0476/03/18'),
(46, '0681/07/16'),
(47, '0159/12/05'),
(48, '0524/04/26'),
(49, '0397/09/02'),
(50, '0671/06/11');

-- Inserts for wood_has_language where the columns that need to be translated are.
INSERT INTO `Olivanders`.`wood_has_language`(`wood_id`, `language_id`, `name`, `description`)
VALUES
(1, 1, 'Acacia', 'A rare wand wood known for its temperamental nature, acacia wands only performed well for gifted witches and wizards, refusing magic for others. Unsuitable for flashy spells, they were prized for subtlety and power but were rarely used due to their demanding match requirements.'),
(1, 2, 'Acacia', 'Una madera de varita muy inusual que crea varitas difíciles que, a menudo, se niegan a producir magia para cualquier persona que no sea su dueño, y también retienen sus mejores efectos de todos menos de los más dotados.'),
(1, 3, 'Acacia', 'Si tratta di un legno da bacchetta piuttosto raro da cui si ricavano bacchette dal carattere difficile che spesso rifiutano di prodursi in incantesimi se non per il loro proprietario, e riservano i migliori risultati solo ai maghi più talentuosi.'),

(2, 1, 'Alder', 'Alder wands, though unyielding, sought owners with contrasting qualities—helpful and considerate. Exceptionally loyal when matched, they excelled in non-verbal spell work, making them ideal for advanced witches and wizards.'),
(2, 2, 'Aliso', 'Las varitas de aliso, aunque rígidas, buscaban dueños con cualidades opuestas, como ser serviciales y considerados. Excepcionalmente leales cuando estaban bien emparejadas, sobresalían en la magia no verbal, ideales para brujas y magos avanzados.'),
(2, 3, 'Ontano', 'Le bacchette di ontano, sebbene inflessibili, cercavano proprietari con qualità opposte, come disponibilità e gentilezza. Eccezionalmente leali quando ben abbinate, eccellevano nella magia non verbale, ideali per streghe e maghi esperti.'),

(3, 1, 'Apple', 'Applewood wands were powerful and ideal for owners with high ideals, unsuited to Dark Arts. Believed to bring love and long life, they often chose charming owners with a talent for speaking to magical beings.'),
(3, 2, 'Manzano', 'Las varitas de manzano eran poderosas y perfectas para dueños con altos ideales, incompatibles con las Artes Oscuras. Se decía que traían amor y larga vida, y solían elegir a personas encantadoras con talento para hablar con seres mágicos.'),
(3, 3, 'Melo', 'Le bacchette di melo erano potenti e ideali per proprietari con grandi ideali, inadatte alle Arti Oscure. Si diceva portassero amore e lunga vita, spesso scegliendo persone carismatiche con talento nel parlare con esseri magici.'),

(4, 1, 'Ash', 'Ash wands suited resolute, courageous owners, but not the arrogant or overconfident. Loyal to their true master, they lost power when passed on, especially with unicorn hair cores.'),
(4, 2, 'Fresno', 'Las varitas de fresno eran ideales para dueños decididos y valientes, pero no para los arrogantes o confiados en exceso. Leales a su verdadero maestro, perdían poder si se transmitían, especialmente con núcleos de crin de unicornio.'),
(4, 3, 'Frassino', 'Le bacchette di frassino erano adatte a proprietari risoluti e coraggiosi, ma non arroganti o troppo sicuri di sé. Fedeli al loro vero padrone, perdevano potere se trasmesse, specialmente con anime di crine di unicorno.'),

(5, 1, 'Aspen', 'Aspen wands suited determined, strong-minded revolutionaries, often skilled or destined for dueling. Ideal for martial magic, they also excelled in charmwork.'),
(5, 2, 'Álamo', 'Las varitas de álamo eran ideales para revolucionarios decididos y de carácter fuerte, a menudo expertos o destinados al duelo. Perfectas para la magia marcial, también sobresalían en encantamientos.'),
(5, 3, 'Pioppo', 'Le bacchette di pioppo erano adatte a rivoluzionari determinati e decisi, spesso abili o destinati al duello. Ideali per la magia marziale, eccellevano anche negli incantesimi.'),

(6, 1, 'Birch', 'Though Garrick Ollivander himself did not use it, his associate in the Hogsmeade branch was known to sell wands made from birch. Its properties as wand wood are unknown.'),
(6, 2, 'Abedul', 'Aunque el propio Garrick Ollivander no lo usó, su asociado en la sucursal de Hogsmeade era conocido por vender varitas hechas de abedul.'),
(6, 3, 'Betulla', 'Sebbene Garrick Ollivander stesso non la usasse, il suo socio nella filiale di Hogsmeade era noto per vendere bacchette fatte di betulla. Le sue proprietà come legno per bacchette sono sconosciute'),

(7, 1, 'Blackthorn', 'These wands seem to need to go through danger or hardship with their owners to become truly bonded. Given this condition, the blackthorn wand will become as loyal and faithful a servant as one could wish for.'),
(7, 2, 'Endrino', 'Estas varitas parecen necesitar pasar por el peligro o las dificultades con sus dueños para llegar a ser verdaderamente unidas. Dada esta condición, la varita de endrino se convertirá en un sirviente tan leal y fiel como uno podría desear.'),
(7, 3, 'Prugnolo', 'Il prugnolo, che è un legno da bacchetta davvero poco comune, ha fama, secondo me ben meritata, di essere perfetto per un guerriero.'),

(8, 1, 'Black Walnut', 'The black walnut wand seeks a master of good instincts and powerful vision. Together with a sincere and self-conscious owner, it becomes one of the most loyal and impressive wands of all, with a particular style in all kinds of charm.'),
(8, 2, 'Nogal negro', 'La varita de nogal negro busca un maestro de buenos instintos y una visión poderosa. Junto con un propietario sincero y consciente de sí mismo, se convierte en una de las varitas más leales e impresionantes de todas, con un estilo particular en todo tipo de encanto.'),
(8, 3, 'Noce nero', 'Meno diffusa della bacchetta di noce tradizionale, quella di noce nero è attratta da un padrone di buoni istinti e potente introspezione. Il noce nero è un legno molto bello, ma non è il più facile da dominare.'),

(9, 1, 'Brazilwood', 'Its properties as wand wood are unknown.'),
(9, 2, 'Palo de brasil', 'Sus propiedades para la creación de varitas es desconocida'),
(9, 3, 'Legno del Brasile', 'Propiietà come legno di bachetta sconosciute'),

(10, 1, 'Cedar', 'Cedar wand embodies rare loyalty and hidden strength. Ollivander noted its bearers possess deep perception, becoming formidable when protecting loved ones, often surprising their challengers.'),
(10, 2, 'Cedro', 'La varita de cedro representa una lealtad extraordinaria y una fuerza oculta. Ollivander observó que sus portadores poseen profunda percepción, volviéndose formidables al proteger a sus seres queridos, sorprendiendo frecuentemente a sus retadores.'),
(10, 3, 'Cedro', 'La bacchetta di cedro rappresenta una lealtà straordinaria e una forza nascosta. Ollivander notò che i suoi portatori possiedono profonda percezione, diventando formidabili quando proteggono i propri cari, spesso sorprendendo i loro sfidanti.'),

(11, 1, 'Cherry', 'Rare, powerful magical tools with lethal potential. Prized by Mahoutokoro students, especially dangerous when paired with dragon heartstring. Requires exceptional self-control from its wielder.'),
(11, 2, 'Cerezo', 'Instrumentos mágicos raros y poderosos con potencial letal. Apreciados por estudiantes de Mahoutokoro, especialmente peligrosos al combinarse con fibra de corazón de dragón. Requiere un autocontrol excepcional de su portador.'),
(11, 3, 'Ciliegio', 'Strumenti magici rari e potenti con potenziale letale. Apprezzati dagli studenti di Mahoutokoro, particolarmente pericolosi se abbinati a cuore di drago. Richiede un autocontrollo eccezionale del suo utilizzatore.'),

(12, 1, 'Chestnut', ' Multi-faceted magical tools, drawn to beast tamers, Herbology experts, and natural fliers. Core determines personality match - dragon heartstring favors luxury seekers, unicorn hair champions justice.'),
(12, 2, 'Castaño', 'Herramientas mágicas multifaces, atraídas por domadores de bestias, expertos en Herbología y voladores naturales. El núcleo determina la personalidad - fibra de corazón de dragón favorece buscadores de lujo, pelo de unicornio defiende la justicia.'),
(12, 3, 'Castagno', 'Strumenti magici sfaccettati, attratti da domatori di creature, esperti di Erbologia e volatori naturali. Il nucleo determina la personalità - cuore di drago favorisce cercatori di lusso, pelo di unicorno difende la giustizia.'),

(13, 1, 'Cypress', 'Cypress wands were associated with nobility and were said to be well-matched to wizards who were willing to die a heroic death. Cypress wands found their soul mates among the brave, the bold and the self-sacrificing: those who were unafraid to confront the shadows in their own and others natures.'),
(13, 2, 'Ciprés', 'Se asociaban con la nobleza y se decía que encajaban bien con los magos dispuestos a una muerte heroica. Las varitas de ciprés encontraban su alma gemela entre los valientes, los audaces y los abnegados: aquellos que no temían enfrentarse a las sombras de su propia naturaleza y la de los demás.'),
(13, 3, 'Cipresso', 'Bacchette di cipresso simboleggiano la nobiltà eroica, attratte da anime coraggiose disposte a confrontare l`oscurità e fare sacrifici supremi. Risuonano con maghi eroici che non temono di sfidare le ombre dentro e fuori di sé.'),

(14, 1, 'Dogwood', 'Playful and quirky magical tools with a mischievous spirit. Demand exciting partners, excel in challenging conditions, and produce dazzling magic. Refuse non-verbal spells and tend to be noisy.'),
(14, 2, 'Cornejo', 'Herramientas mágicas juguetonas y peculiares con espíritu travieso. Exigen compañeros emocionantes, sobresalen en condiciones difíciles y producen magia deslumbrante. Rechazan hechizos no verbales y tienden a ser ruidosas.'),
(14, 3, 'Corniolo', 'Strumenti magici giocosi e bizzarri con spirito dispettoso. Esigono partner emozionanti, eccellono in condizioni difficili e producono magie sfolgoranti. Rifiutano incantesimi non verbali e tendono a essere rumorose.'),

(15, 1, 'Ebony', 'Powerful magical tools for combat and Transfiguration, favoring non-conformist, courageous individuals. Matched to those with unwavering beliefs, resistant to external pressures, and fiercely true to themselves.'),
(15, 2, 'Ébano', 'Herramientas mágicas poderosas para combate y Transfiguración, favorecen a individuos no conformistas y valientes. Emparejadas con aquellos de creencias inquebrantables, resistentes a presiones externas y fieles a sí mismos.'),
(15, 3, 'Ebano', 'Potenti strumenti magici per combattimento e Transfigurazione, favoriscono individui non conformisti e coraggiosi. Abbinate a coloro con convinzioni incrollabili, resistenti alle pressioni esterne e fedeli a se stessi.'),

(16, 1, 'Elder', 'Rarest, most challenging magical tools, imbued with powerful, selective magic. Only exceptional wizards can master them, signaling a potentially extraordinary destiny for their rare, chosen bearers.'),
(16, 2, 'Saúco', 'Herramientas mágicas más raras y desafiantes, imbuidas de magia poderosa y selectiva. Solo magos excepcionales pueden dominarlas, señalando un destino potencialmente extraordinario para sus raros portadores elegidos.'),
(16, 3, 'Sambuco', 'Strumenti magici più rari e impegnativi, dotati di magia potente e selettiva. Solo maghi eccezionali possono padroneggiarle, segnalando un destino potenzialmente straordinario per i loro rari portatori prescelti.'),

(17, 1, 'Elm', 'Sophisticated magical tools favoring dignified, dexterous wielders. Produce fewest accidents, most elegant magic, and excel in advanced spellcasting. Highly prized for their precision and magical refinement.'),
(17, 2, 'Olmo', 'Herramientas mágicas sofisticadas que favorecen a portadores dignos y diestros. Producen menos accidentes, magia más elegante y sobresalen en hechizos avanzados. Altamente apreciadas por su precisión y refinamiento mágico.'),
(17, 3, 'Olmo', 'Strumenti magici sofisticati che favoriscono portatori dignitosi e destri. Producono meno incidenti, magia più elegante ed eccellono in incantesimi avanzati. Altamente apprezzate per la loro precisione e raffinatezza magica.'),

(18, 1, 'English Oak', "Loyal magical companions for strong, courageous wizards. Known for powerful intuition, deep connection with natural magic, and affinity for magical creatures and plants in all life's circumstances."),
(18, 2, 'Roble inglés', 'Compañeros mágicos leales para magos fuertes y valientes. Conocidas por su poderosa intuición, profunda conexión con la magia natural y afinidad con criaturas y plantas mágicas en todas las circunstancias de la vida.'),
(18, 3, 'Quercia inglese', 'Compagni magici leali per maghi forti e coraggiosi. Note per la potente intuizione, profonda connessione con la magia naturale e affinità con creature e piante magiche in ogni circostanza della vita.'),

(19, 1, 'Fir', "Fir wands, known as the survivor's wand, demanded resilience and focus, favoring determined and strong-willed owners. Poor with the indecisive, they excelled in Transfiguration."),
(19, 2, 'Abeto', 'Las varitas conocidas como "la varita del superviviente", requerían resistencia y enfoque, favoreciendo a dueños decididos y fuertes de carácter. Ineficaces para los indecisos, destacaban en la Transfiguración.'),
(19, 3, 'Abete', 'Le bachette di abete, note come "la bacchetta del sopravvissuto", richiedevano resilienza e determinazione, preferendo propietari decisi e forti di mente. Poco efficaci con gli indecisi, eccellevano nella Transfigurazione.'),

(20, 1, 'Hawthorn', 'Hawthorn wands were paradoxical, suiting complex or conflicted owners, often in turmoil. Skilled in both healing magic and curses, they required proven talent, as mishandling could cause dangerous backfires.'),
(20, 2, 'Espino', 'Las varitas de epsino eran paradójicas, ideales para dueños complejos o en conflicto, a menudo en tiempos de agitación. Hábiles en magia curativa y maldiciones, requerían talento probado, ya que un mal uso podía provocar peligrosos contragolpes.'),
(20, 3, 'Biancospino', 'Le bacchette di biancospino erano contraddittorie, adatte a proprietari complessi o in conflitto, spesso in periodi di turbamento. Abili nella magia curativa e nelle maledizioni, richiedevano talento provato, poiché un uso improprio poteva causare pericolosi contraccolpi.'),

(21, 1, 'Hazel', "Hazel wands reflected their owner's emotions, requiring mastery of feelings. Loyal to their master, they excelled in skilled hands but acted unpredictably if their owner was upset. Unique for detecting underground water, they emitted silvery smoke over hidden springs."),
(21, 2, 'Avellano', 'Las varitas de avellano reflejaban las emociones de su dueño, requiriendo control emocional. Leales a su maestro, sobresalían en manos hábiles, pero actuaban de forma impredecible si su dueño estaba alterado. Únicas en detectar agua subterránea, emitían humo plateado sobre manantiales ocultos.'),
(21, 3, 'Nocciolo', 'Le bacchette di nocciolo riflettevano le emozioni del loro proprietario, richiedendo padronanza emotiva. Fedeli al loro padrone, eccellevano in mani esperte ma agivano in modo imprevedibile se il proprietario era turbato. Uniche nel rilevare acqua sotterranea, emettevano fumo argenteo sopra sorgenti nascoste.'),

(22, 1, 'Holly', 'Holly wands, protective by nature, suited those overcoming anger or impulsiveness. They often chose owners on dangerous, spiritual quests and their performance varied greatly with the wand core.'),
(22, 2, 'Acebo', 'Las varitas de acebo, de naturaleza protectora, eran ideales para quienes superaban la ira o la impulsividad. A menudo elegían dueños en peligrosas y espirituales búsquedas, y su rendimiento variaba mucho según el núcleo.'),
(22, 3, 'Agriflogio', 'Le bacchette di agrifoglio, di natura protettiva, erano adatte a chi superava rabbia o impulsività. Spesso sceglievano proprietari impegnati in pericolose e spirituali missioni, con prestazioni che variavano molto a seconda dell’anima.'),

(23, 1, 'Hornbeam', "Hornbeam wands chose owners with a single, pure passion or vision, adapting swiftly to their magic style. Deeply personalized, they resisted use by others and aligned strictly with their master's moral code."),
(23, 2,'Carpe', 'Las varitas de carpe elegían dueños con una pasión o visión pura, adaptándose rápidamente a su estilo de magia. Altamente personalizadas, resistían ser usadas por otros y seguían estrictamente el código moral de su dueño.'),
(23, 3, 'Carpine', 'Le bacchette di carpine sceglievano proprietari con una passione o visione pura, adattandosi rapidamente al loro stile magico. Profondamente personalizzate, resistevano all’uso altrui e aderivano strettamente al codice morale del loro padrone.'),

(24, 1, 'Ivy', 'Though Garrick Ollivander himself did not use it, his associate in the Hogsmeade branch was known to sell wands made from ivy. Aside from that, its properties as wand wood are unknown.'),
(24, 2, 'Hiedra', 'Aunque el propio Garrick Ollivander no la utilizaba, su socio en la sucursal de Hogsmeade era conocido por vender varitas hechas de hiedra. Aparte de eso, se desconocen sus propiedades como madera para varitas.'),
(24, 3, 'Edera', 'Sebbene Garrick Ollivander stesso non la usasse, il suo socio nella filiale di Hogsmeade era noto per vendere bacchette fatte di edera. A parte questo, le sue proprietà come legno per bacchette sono sconosciute.'),

(25, 1, 'Larch', 'Larch wands inspired confidence and courage but were selective about their owners. Known for hidden talents and unexpected effects, they revealed the true potential of their master, forming an exceptional bond.'),
(25, 2, 'Alerce', 'Las varitas de alerce inspiraban confianza y valor, pero eran selectivas con sus dueños. Conocidas por talentos ocultos y efectos inesperados, revelaban el verdadero potencial de su maestro, creando un vínculo excepcional.'),
(25, 3, 'Larice', 'Le bacchette di larice ispiravano fiducia e coraggio, ma erano selettive nei confronti dei proprietari. Note per talenti nascosti ed effetti inattesi, rivelavano il vero potenziale del loro padrone, formando un legame eccezionale.'),

(26, 1, 'Laurel', 'Laurel wands, while incapable of dishonorable acts, could perform powerful and sometimes lethal magic in the pursuit of glory. They had the unique ability to emit a spontaneous lightning strike if another witch or wizard attempted to steal them.'),
(26, 2, 'Laurel', 'Las varitas de laurel, aunque incapaces de realizar actos deshonrosos, podían realizar magia poderosa y a veces letal en busca de la gloria. Tenían la habilidad única de emitir un rayo espontáneo si otro mago o bruja intentaba robarlas.'),
(26, 3, 'Lauro', "Le bacchette di lauro, sebbene incapaci di compiere atti disonorevoli, potevano eseguire magie potenti e talvolta letali alla ricerca della gloria. Avevano l'unica capacità di emettere un fulmine spontaneo se un altro mago o strega avesse tentato di rubarle."),

(27, 1, 'Mahogany', 'Not much is known about this wood, however, the wand that belonged to James Potter was made of mahogany. It was described by Ollivander as "pliable and excellent for transfiguration", also that it had "a little more power" than the wand that belonged to his wife, Lily.'),
(27, 2, 'Caoba', 'Las varitas de caoba son relativamente raras, aunque la varita de James Potter estaba hecha de esta madera. Ollivander la describió como "flexible y excelente para la Transfiguración", y señaló que tenía "un poco más de poder" que la varita de Lily Potter.'),
(27, 3, 'Mogano', "Le bacchette di mogano sono relativamente rare, sebbene la bacchetta di James Potter fosse fatta di questo legno. Ollivander la descrisse come flessibile ed eccellente per la Trasfigurazione, e notò che possedeva un po' più di potere della bacchetta di Lily Potter."),

(28, 1, 'Beech', 'Beech wands matched the wise or experienced, failing with the narrow-minded. When properly paired, they displayed unmatched subtlety and artistry, earning a brilliant reputation.'),
(28, 2, 'Haya', 'Las varitas de haya eran perfectas para los sabios o experimentados, pero ineficaces para los de mente cerrada. Bien emparejadas, mostraban una sutileza y arte incomparables, ganándose una brillante reputación.'),
(28, 3, 'Faggio', 'Le bacchette di faggio erano adatte ai saggi o esperti, ma inefficaci per i mentalmente chiusi. Quando ben abbinate, dimostravano una sottigliezza e un’arte ineguagliabili, conquistando una brillante reputazione.'),

(29, 1, 'Maple', 'Maple wands often selected owners who were adventurous and exploratory. These wands thrived on change and ambition, becoming dull and heavy when their owners lacked these qualities. They flourished with new challenges and experiences, growing in power and prestige alongside their owners.'),
(29, 2, 'Arce', 'Las varitas de arce eligen magos aventureros y ambiciosos. Prosperan con desafíos y cambios, brillando literalmente mientras su dueño crece. Sin retos, su magia se vuelve pesada y sin brillo.'),
(29, 3, 'Acero', 'Le bacchette di acero scelgono maghi avventurosi e ambiziosi. Prosperano con nuove sfide, letteralmente brillando mentre il proprietario cresce. Senza stimoli, la loro magia diventa pesante e opaca.'),

(30, 1, 'Olive', 'Unknown'),
(30, 2, 'Olivo', 'Desconocido'),
(30, 3, 'Ulivo', 'Sconosciuto'),

(31, 1, 'Pear', 'Pear wands possess splendid magical powers, favoring warm-hearted, generous, and wise wizards. They are highly respected, never associated with dark magic, and remarkably resilient, maintaining their pristine appearance even after years of use.'),
(31, 2, 'Peral', 'Las varitas de peral tienen poderes mágicos excepcionales. Favorecen a magos bondadosos y sabios, siempre respetados. Nunca se asocian con magia oscura y mantienen su apariencia impecable incluso después de años de uso.'),
(31, 3, 'Pero', 'Le bacchette di pero hanno poteri magici straordinari. Prediligono maghi generosi e saggi, sempre rispettati. Mai associate a magia oscura, mantengono un aspetto immacolato anche dopo anni di utilizzo.'),

(32, 1, 'Pine', 'Pine wands choose independent, mysterious masters. They adapt creatively to new methods, perform best for long-lived owners, and are highly sensitive to non-verbal magic. Pine wands embrace uniqueness and individual magical potential.'),
(32, 2, 'Pino', 'Las varitas de pino eligen maestros independientes y misteriosos. Se adaptan creativamente, rinden mejor con dueños de larga vida y son muy sensibles a la magia no verbal. Abrazan la singularidad y el potencial mágico individual'),
(32, 3, 'Pino', "Le bacchette di pino scelgono maestri indipendenti e misteriosi. Si adattano creativamente, prediligono proprietari longevi e sono sensibili alla magia non verbale. Abbracciano l'unicità e il potenziale magico individuale."),

(33, 1, 'Poplar', 'Poplar wands represent consistency, strength, and uniform power. They choose witches and wizards of high integrity and clear moral vision. Despite a joke among wandmakers, poplar wands have been wielded by accomplished Ministry of Magic Ministers.'),
(33, 2, 'Älamo', 'Las varitas de álamo representan consistencia, fuerza y poder uniforme. Eligen magos de gran integridad y visión moral clara. Contrario a una broma entre fabricantes, han sido empuñadas por ministros destacados del Ministerio de Magia.'),
(33, 3, 'Pioppo', 'Le bacchette di pioppo rappresentano consistenza, forza e potere uniforme. Scelgono streghe e maghi di grande integrità e visione morale chiara. Contrariamente a uno scherzo tra costruttori di bacchette, sono state impugnate da ministri di spicco del Ministero della Magia.'),

(34, 1, 'Prickly ash', 'Not much is known about the wandlore of prickly ash, but it was used by the first and only known non-magic person ever to practice wand making, American No-Maj James Steward.'),
(34, 2, 'Fresno espinoso', 'No se sabe mucho sobre la tradición de las varitas mágicas de fresno espinoso, pero fue utilizada por la primera y única persona no mágica conocida que practicó la fabricación de varitas, el muggle estadounidense James Steward.'),
(34, 3, 'Frassino spinoso', "Non si sa molto della tradizione delle bacchette di frassino spinoso, ma è stata usata dalla prima e unica persona non magica conosciuta che ha praticato la creazione di bacchette, l'americano No-Maj James Steward."),

(35, 1, 'Red Oak', 'Red oak wands are not signs of hot temper, but of quick reflexes and adaptability. Ideal for dueling, these wands choose masters with fast reactions, distinctive spell creation skills, and reliability in combat. Ollivander considered them among the most attractive wands.'),
(35, 2, 'Roble rojo', 'Las varitas de roble rojo no indican mal genio, sino rapidez y adaptabilidad. Ideales para duelos, eligen magos con reflejos veloces, habilidad para crear hechizos distintivos y confiabilidad en combate. Ollivander las consideraba entre las más atractivas.'),
(35, 3, 'Rovere rosso', 'Le bacchette di rovere rosso non indicano un carattere irascibile, ma rapidità e adattabilità. Ideali per i duelli, scelgono maestri con riflessi veloci, capacità di creare incantesimi distintivi e affidabilità in combattimento. Ollivander le considerava tra le più belle.'),

(36, 1, 'Redwood', 'Redwood wands choose resilient wizards with an innate ability to recover from setbacks and make wise decisions. Believed to bring good fortune, they are highly sought after. Contrary to popular belief, their magic relates more to personal resilience than luck.'),
(36, 2, 'Secuoya', 'Las varitas de secuoya eligen magos resilientes con habilidad innata para recuperarse de contratiempos y tomar decisiones sabias. Consideradas portadoras de buena suerte, son muy codiciadas. Contrario a la creencia popular, su magia se relaciona más con la resiliencia personal que con la suerte.'),
(36, 3, 'Sequoia', 'Le bacchette di sequoia scelgono maghi resilienti con capacità innata di riprendersi dai rovesci e prendere decisioni sagge. Ritenute portatrici di buona fortuna, sono molto ambite. Contrariamente alla credenza popolare, la loro magia riguarda più la resilienza personale che la fortuna.'),

(37, 1, 'Reed', "Reed wands choose bold, eloquent wizards who are deeply loyal and protective friends. When paired with a dragon heartstring core, they amplify the owner's commitment and friendship, earning admiration from those close to them."),
(37, 2, 'Caña', 'Las varitas de caña eligen magos audaces y elocuentes que son amigos leales y protectores. Combinadas con núcleo de nervio de corazón de dragón, amplifican el compromiso y la amistad de su dueño, ganando la admiración de quienes están cerca.'),
(37, 3, 'Canna', "Le bacchette di canna scelgono maghi audaci ed eloquenti che sono amici leali e protettivi. Abbinate a un nucleo di corda di cuore di drago, amplificano l'impegno e l'amicizia del proprietario, guadagnando l'ammirazione di chi gli sta vicino."),

(38, 1, 'Rosewood', 'In the wizarding world, rosewood served as an uncommon wand wood. It has a strong sweet smell, which persists over the years, explaining the name. Aside from that, its properties as wand wood are unknown.'),
(38, 2, 'Palisandro', '	En el mundo de los magos, el palisandro era una madera poco común para las varitas. Tiene un fuerte olor dulce, que persiste a lo largo de los años, lo que explica su nombre. Aparte de eso, se desconocen sus propiedades como madera de varita.'),
(38, 3, 'Legni di rosa', 'Nel mondo dei maghi, il legno di rosa serviva come legno di bacchetta non comune. Ha un forte odore dolce che persiste negli anni, il che spiega il nome. A parte questo, le sue proprietà come legno per bacchette sono sconosciute.'),

(39, 1, 'Rowan', 'Rowan wands excel in defensive magic, creating powerful, unbreakable protective charms. Prized for their association with pure intentions and clear-mindedness, they are strongly opposed to Dark Arts. Despite their virtuous reputation, they are formidable in duels.'),
(39, 2, 'Serbal', 'Las varitas de serbal producen potentes hechizos defensivos difíciles de romper. Apreciadas por su asociación con intenciones puras y claridad mental, se oponen firmemente a las Artes Oscuras. A pesar de su reputación virtuosa, son formidables en duelos.'),
(39, 3, 'Sorbo', "Le bacchette di sorbo producono incantesimi difensivi potenti e difficili da spezzare. Apprezzate per l'associazione con intenzioni pure e chiarezza mentale, si oppongono fermamente alle Arti Oscure. Nonostante la loro reputazione virtuosa, sono formidabili nei duelli."),

(40, 1, 'Silver lime', 'Silver lime wands uniquely suit Seers and Legilimency experts, granting their owners high social status. Highly sought after in the 19th century, their demand exceeded supply, leading some wandmakers to fraudulently dye other woods to imitate silver lime.'),
(40, 2, 'Tilo plateado', 'Las varitas de tilo plateado son ideales para Videntes y expertos en Legeremancia, otorgando a sus dueños un alto estatus social. Muy solicitadas en el siglo XIX, su demanda superó la oferta, llevando a algunos fabricantes a teñir otras maderas para falsificarlas.'),
(40, 3, 'Tiglio argentato', "Le bacchette di tiglio argentato sono ideali per Veggenti ed esperti di Legilimens, conferendo ai loro proprietari un elevato status sociale. Molto richieste nel XIX secolo, la domanda superò l'offerta, spingendo alcuni costruttori a tingere altri legni per falsificarle."),

(41, 1, 'Snakewood', 'Some magical snakewood trees resisted attempts to prune or kill them, and their leaves had powerful healing properties. Aside from that, its properties as wand wood are unknown.'),
(41, 2, 'Madera de serpiente', 'Algunos árboles mágicos de madera de serpiente resistían los intentos de podarlos o matarlos, y sus hojas tenían poderosas propiedades curativas. Aparte de eso, se desconocen sus propiedades como madera de varita mágica.'),
(41, 3, 'Legno di serpente', 'Alcuni alberi magici di legno di serpente hanno resistito ai tentativi di potarli o ucciderli e le loro foglie avevano potenti proprietà curative. A parte questo, le sue proprietà come legno per bacchette sono sconosciute.'),

(42, 1, 'Spruce', 'Spruce wands demand skilled, bold wizards with a good sense of humor. Challenging for unskilled users, they can be dangerous if mishandled. When perfectly matched, they become intensely loyal, producing flamboyant and dramatic magical effects with their confident owners.'),
(42, 2, 'Picea', 'Las varitas de picea exigen magos hábiles y audaces con buen sentido del humor. Desafiantes para usuarios inexpertos, pueden ser peligrosas si se manejan torpemente. Cuando encuentran al mago perfecto, se vuelven intensamente leales, produciendo efectos mágicos llamativos y dramáticos.'),
(42, 3, 'Abete rosso', "Le bacchette di abete rosso richiedono maghi abili e audaci con senso dell'umorismo. Difficili per utenti inesperti, possono essere pericolose se mal gestite. Quando trovano il mago perfetto, diventano intensamente fedeli, producendo effetti magici sgargianti e drammatici."),

(43, 1, 'Sugar maple', 'Its properties as a wand wood are unknown. Its wood was known for wand-making in the United States.'),
(43, 2, 'Arce azucarado', 'Se desconocen sus propiedades como madera de varita mágica. Su madera era conocida para fabricar varitas en Estados Unidos.'),
(43, 3, 'Zucchero di canna', 'Le sue proprietà come legno per bacchette sono sconosciute. Il suo legno era conosciuto negli Stati Uniti per la fabbricazione di bacchette.'),

(44, 1, 'Swamp mayhaw', 'Its properties as a wand wood are unknown. Violetta Beauvais, a wandmaker from New Orleans, used this wood for all of her wands.[4]'),
(44, 2, 'Espino de los pantanos', 'Según Pottermore, Violetta Beauvais, una fabricante de varitas de Nueva Orleans, usó la madera para todas sus varitas.'),
(44, 3, 'Biancospino di palude', 'Le sue proprietà come legno per bacchette sono sconosciute. Violetta Beauvais, una fabbricante di bacchette di New Orleans, usava questo legno per tutte le sue bacchette.'),

(45, 1, 'Sycamore', 'Curious and adventurous, thrived in dynamic, vital environments. They lost their brilliance in mundane tasks and could even combust if bored. Ideal for curious, active witches or wizards, they showed remarkable adaptability and learning, making them highly prized when matched with the right owner.'),
(45, 2, 'Sicomoro', 'Curiosas y aventureras, prosperaban en entornos dinámicos y vitales. Perdían su brillantez en tareas mundanas e incluso podían arder si se aburrían. Ideales para brujas o magos curiosos y activos, mostraban una adaptabilidad y capacidad de aprendizaje que las hacía muy valoradas.'),
(45, 3, 'Sicomoro:', 'Curiose e avventurose, prosperavano in ambienti dinamici e vitali. Perdevano brillantezza in compiti mondani e potevano addirittura incendiarsi se si annoiavano. Ideali per maghi o streghe curiosi e attivi, mostrano una straordinaria capacità di adattarsi, rendendole molto ricercate.'),

(46, 1, 'Tamarack', 'Its properties as a wand wood are unknown. Its wood was known for wand making in the United States.'),
(46, 2, 'Tamarack', 'Sus propiedades como varita son desconocidas. Se utilizaba para la creación de varitas en los Estados Unidos'),
(46, 3, 'Tamarack', 'Le sue proprietà come legno per bacchette sono sconosciute. Il suo legno era conosciuto negli Stati Uniti per la fabbricazione di bacchette.'),

(47, 1, 'Vine', 'Rare and drawn to deep personalities, are ideal for witches or wizards seeking a higher purpose and who surprised others with their vision. Sensitive to potential matches, they emitted magic when their perfect owner entered a room.'),
(47, 2, 'Vid', 'Raras y atraídas por personalidades profundas, eran ideales para brujas o magos en busca de un propósito más alto, que sorprendían a los demás con su visión. Sensibles a las coincidencias perfectas, emitían magia al entrar su dueño ideal. '),
(47, 3, 'Vite', 'Rare e attratte da personalità profonde, erano ideali per maghi o streghe alla ricerca di uno scopo più alto, che sorprendevano gli altri con la loro visione. Sensibili alle corrispondenze perfette, emettevano magia quando il loro padrone ideale entrava nella stanza.'),

(48, 1, 'Walnut', 'Walnut wands, favored by magical innovators, were versatile and adaptable, ideal for intelligent witches or wizards. Once mastered, they could perform any task, but in the hands of a brilliant yet unethical owner, they became a dangerous weapon, feeding off each other in a harmful way.'),
(48, 2, 'Nogal', 'Favoritas de los innovadores mágicos, eran versátiles y adaptables, ideales para brujas o magos inteligentes. Una vez dominadas, podían realizar cualquier tarea, pero en manos de un dueño brillante pero sin ética, se convertían en un arma peligrosa, alimentándose mutuamente de manera perjudicial.'),
(48, 3, 'Noce', "Preferite dagli innovatori magici, erano, ideali per maghi o streghe intelligenti. Una volta dominate, potevano svolgere qualsiasi compito, ma nelle mani di un proprietario brillante ma privo di scrupoli, diventavano un'arma pericolosa, nutrendosi l'una dell'altra in modo dannoso."),

(49, 1, 'Willow', 'With healing powers, suited owners with hidden insecurities, despite their outward confidence. Known for aiding advanced, non-verbal magic, they favored those with great potential, not those who thought they had nothing more to learn.'),
(49, 2, 'Sauce', 'Raras y con poderes curativos, eran ideales para dueños con inseguridades ocultas, a pesar de su confianza exterior. Conocidas por facilitar la magia avanzada y no verbal, favorecían a aquellos con gran potencial, no a los que pensaban no tener nada más que aprender. '),
(49, 3, 'Salice', 'Rare e con poteri curativi, erano ideali per proprietari con insicurezze nascoste, nonostante la loro fiducia esteriore. Conosciute per facilitare la magia avanzata e non verbale, preferivano coloro con grande potenziale, non quelli che pensavano di non avere più nulla da imparare.'),

(50, 1, 'Yew', 'Yew wands, rare and dark in reputation, were linked to life and death powers. Though often associated with curses, they favored bold witches or wizards, not necessarily drawn to the Dark Arts. Yew wands never chose the mediocre or timid, often found with both heroes and villains.'),
(50, 2, 'Tejo', 'Las varitas de tejo, raras y de oscura reputación, estaban relacionadas con poderes de vida y muerte. Aunque asociadas con maldiciones, favorecían a brujas y magos valientes, no necesariamente atraídos por las Artes Oscuras. Las varitas de tejo nunca elegían a los mediocres o tímidos.'),
(50, 3, 'Tasso', 'Le bacchette di tasso, rare e di reputazione oscura, erano legate ai poteri della vita e della morte. Sebbene associate a maledizioni, preferivano maghi o streghe coraggiosi, non necessariamente attratti dalle Arti Oscure. Le bacchette di tasso non sceglievano mai i mediocri o timidi.');

-- Inserts for the wand_has_language table where are the translatable columns for the wand relationship.
INSERT INTO `Olivanders`.`wand_has_language`(`language_id`, `wand_id`, `flexibility`, `name`, `description`)
VALUES
(1, 1, 'Very flexible', 'The Chosen Wand', 'A legendary wand wielded by Harry Potter, made of holly and phoenix feather.'),
(2, 1, 'Muy flexible', 'La Varita Elegida', 'Una varita legendaria empuñada por Harry Potter, hecha de acebo y pluma de fénix.'),
(3, 1, 'Molto flessibile', 'La Bacchetta Scelta', 'Una bacchetta leggendaria impugnata da Harry Potter, realizzata in agrifoglio e piuma di fenice.'),

(1, 2, 'Unyielding', 'The Dark Heir', 'Infamous as Voldemort’s wand, yew wood with a phoenix feather core.'),
(2, 2, 'Inflexible', 'El Heredero Oscuro', 'Infame como la varita de Voldemort, hecha de madera de tejo con núcleo de pluma de fénix.'),
(3, 2, 'Inflessibile', 'L’Erede Oscuro', 'Infame come la bacchetta di Voldemort, legno di tasso con nucleo di piuma di fenice.'),

(1, 3, 'Quite flexible', 'The Thinker’s Ally', 'Hermione Granger’s wand, known for its precision and intellect.'),
(2, 3, 'Bastante flexible', 'La Aliada del Pensador', 'La varita de Hermione Granger, conocida por su precisión e intelecto.'),
(3, 3, 'Abbastanza flessibile', 'L’Alleata del Pensatore', 'La bacchetta di Hermione Granger, conosciuta per la sua precisione e intelligenza.'),

(1, 4, 'Reasonably pliant', 'The Steadfast Ash', 'Reliable and loyal, often chosen by steady individuals.'),
(2, 4, 'Razonablemente flexible', 'El Fresno Fiel', 'Confiable y leal, a menudo elegida por individuos constantes.'),
(3, 4, 'Ragionevolmente elastico', 'L’Olmo Fedele', 'Affidabile e leale, spesso scelto da individui costanti.'),

(1, 5, 'Brittle', 'The Inferno Branch', 'A fiery and unpredictable wand, ideal for strong-willed wizards.'),
(2, 5, 'Frágil', 'La Rama Infernal', 'Una varita ardiente e impredecible, ideal para magos de carácter fuerte.'),
(3, 5, 'Fragile', 'Il Rametto Infernale', 'Una bacchetta ardente e imprevedibile, ideale per maghi determinati.'),

(1, 6, 'Swishy', 'The Healing Willow', 'Renowned for healing magic and gentle spells.'),
(2, 6, 'Flexible', 'El Sauce Sanador', 'Renombrada por la magia curativa y los hechizos suaves.'),
(3, 6, 'Flessibile', 'Il Salice Curativo', 'Rinomata per la magia curativa e gli incantesimi gentili.'),

(1, 7, 'Stiff', 'The Shadow Fang', 'A mysterious wand known for its combative nature.'),
(2, 7, 'Rígida', 'El Colmillo Sombrío', 'Una varita misteriosa conocida por su naturaleza combativa.'),
(3, 7, 'Rigida', 'Il Dente dell’Ombra', 'Una bacchetta misteriosa conosciuta per la sua natura combattiva.'),

(1, 8, 'Very supple', 'The Flamecaster', 'A wand adept at transformation and battle magic.'),
(2, 8, 'Muy flexible', 'El Lanzador de Llamas', 'Una varita experta en transformación y magia de batalla.'),
(3, 8, 'Molto flessibile', 'Il Lanciatore di Fiamme', 'Una bacchetta esperta in trasformazioni e magia di battaglia.'),

(1, 9, 'Rigid', 'The Warrior’s Thorn', 'Suited for duelists and fighters, this wand radiates power.'),
(2, 9, 'Rígida', 'La Espina del Guerrero', 'Adecuada para duelistas y luchadores, esta varita irradia poder.'),
(3, 9, 'Rigida', 'La Spina del Guerriero', 'Adatta per duellanti e combattenti, questa bacchetta irradia potere.'),

(1, 10, 'Springy', 'The Scholar’s Edge', 'Known for its aptitude in protective and knowledge-based spells.'),
(2, 10, 'Elástica', 'El Filo del Erudito', 'Conocida por su aptitud en hechizos protectores y basados en el conocimiento.'),
(3, 10, 'Elastica', 'Il Filo dello Studioso', 'Conosciuta per la sua attitudine agli incantesimi protettivi e basati sulla conoscenza.'),

(1, 11, 'Solid', 'The Grovekeeper', 'A wand for nature-loving wizards, promoting harmony and wisdom.'),
(2, 11, 'Sólida', 'El Guardián del Bosque', 'Una varita para magos amantes de la naturaleza, que promueve la armonía y la sabiduría.'),
(3, 11, 'Solida', 'Il Custode del Bosco', 'Una bacchetta per maghi amanti della natura, che promuove l’armonia e la saggezza.'),

(1, 12, 'Unyielding', 'The Serpent’s Grasp', 'Feared for its precision and connection to dark magic.'),
(2, 12, 'Inflexible', 'El Agarre de la Serpiente', 'Temida por su precisión y conexión con la magia oscura.'),
(3, 12, 'Inflessibile', 'La Presa del Serpente', 'Temuta per la sua precisione e connessione con la magia oscura.'),

(1, 13, 'Quite flexible', 'The Guardian Flame', 'A wand chosen by brave protectors, rich with phoenix energy.'),
(2, 13, 'Bastante flexible', 'La Llama Guardiana', 'Una varita elegida por protectores valientes, rica en energía de fénix.'),
(3, 13, 'Abbastanza flessibile', 'La Fiamma Guardiana', 'Una bacchetta scelta da coraggiosi protettori, ricca di energia di fenice.'),

(1, 14, 'Brittle', 'The Ember Spire', 'A rare wand that requires strength and determination.'),
(2, 14, 'Frágil', 'La Aguja Incandescente', 'Una varita rara que requiere fuerza y determinación.'),
(3, 14, 'Fragile', 'La Spina Incandescente', 'Una bacchetta rara che richiede forza e determinazione.'),

(1, 15, 'Pliant', 'The Dream Weaver', 'Known for its versatility and creativity in spellwork.'),
(2, 15, 'Flexible', 'La Tejedora de Sueños', 'Conocida por su versatilidad y creatividad en la hechicería.'),
(3, 15, 'Flessibile', 'Il Tessitore di Sogni', 'Conosciuta per la sua versatilità e creatività nella magia.'),

(1, 16, 'Slightly yielding', 'The Elder Wand', 'The most powerful wand of all, crafted from elder wood and thestral hair.'),
(2, 16, 'Ligeramente flexible', 'La Varita de Saúco', 'La varita más poderosa de todas, hecha de madera de saúco y pelo de thestral.'),
(3, 16, 'Ligermente elastico', 'La Bacchetta di Sambuco', 'La bacchetta più potente di tutte, realizzata in legno di sambuco e peli di thestral.'),

(1, 17, 'Swishy', 'The Duelist’s Laurel', 'Favored by expert duelists for its strength in combat magic.'),
(2, 17, 'Flexible', 'El Laurel del Duelista', 'Preferida por duelistas expertos por su fuerza en la magia de combate.'),
(3, 17, 'Flessibile', 'Il Lauro del Duellante', 'Preferita da duellanti esperti per la sua forza nella magia di combattimento.'),

(1, 18, 'Quite flexible', 'The Pathfinder', 'A wand for adventurers and seekers of knowledge.'),
(2, 18, 'Bastante flexible', 'El Explorador', 'Una varita para aventureros y buscadores de conocimiento.'),
(3, 18, 'Abbastanza flessibile', 'Il Cercatore', 'Una bacchetta per avventurieri e cercatori di conoscenza.'),

(1, 19, 'Hard', 'The Crimson Branch', 'Embodying boldness and ambition, thriving with driven users.'),
(2, 19, 'Dura', 'La Rama Carmesí', 'Simboliza audacia y ambición, prospera con usuarios decididos.'),
(3, 19, 'Dura', 'Il Rametto Cremisi', 'Incarna audacia e ambizione, prospera con utenti determinati.'),

(1, 20, 'Surprisingly swishy', 'The White Thorn', 'Defensive and strong, radiating purity.'),
(2, 20, 'Sorprendentemente flexible', 'La Espina Blanca', 'Defensiva y fuerte, que irradia pureza.'),
(3, 20, 'Sorprendentemente flessibile', 'La Spina Bianca', 'Difensiva e forte, irradia purezza.'),

(1, 21, 'Rigid', 'The Obsidian Bolt', 'Favored by wizards with a commanding presence.'),
(2, 21, 'Rígida', 'El Rayo de Obsidiana', 'Preferida por magos con una presencia imponente.'),
(3, 21, 'Rigida', 'Il Fulmine di Obsidiana', 'Preferita da maghi con una presenza imponente.'),

(1, 22, 'Bendy', 'The Celestial Touch', 'Resonating with intuitive and sensitive users.'),
(2, 22, 'Flexible', 'El Toque Celestial', 'Resuena con usuarios intuitivos y sensibles.'),
(3, 22, 'Flessibile', 'Il Tocco Celestiale', 'Risona con utenti intuitivi e sensibili.'),

(1, 23, 'Flexible', 'The Starbright Wand', 'A wand for dreamers and those attuned to the magical unknown.'),
(2, 23, 'Flexible', 'La Varita Luminosa', 'Una varita para soñadores y aquellos sintonizados con lo desconocido mágico.'),
(3, 23, 'Flessibile', 'La Bacchetta Luminescente', 'Una bacchetta per sognatori e quelli in sintonia con l’ignoto magico.'),

(1, 24, 'Quite flexible', 'The Beast Whisperer', 'Ideal for wizards specializing in magical creatures.'),
(2, 24, 'Bastante flexible', 'El Susurrador de Bestias', 'Ideal para magos especializados en criaturas mágicas.'),
(3, 24, 'Abbastanza flessibile', 'Il Sussurratore di Bestie', 'Ideale per maghi specializzati in creature magiche.'),

(1, 25, 'Solid', 'The Mystic Pine', 'Perfect for mysterious and independent wizards.'),
(2, 25, 'Sólida', 'El Pino Místico', 'Perfecta para magos misteriosos e independientes.'),
(3, 25, 'Solida', 'Il Pino Mistico', 'Perfetta per maghi misteriosi e indipendenti.'),

(1, 26, 'Stiff', 'The Red Fang', 'Bold and fierce, this wand excels in dueling magic.'),
(2, 26, 'Rígida', 'El Colmillo Rojo', 'Audaz y feroz, esta varita sobresale en la magia de duelos.'),
(3, 26, 'Rigida', 'Il Dente Rosso', 'Audace e feroce, questa bacchetta eccelle nella magia dei duelli.'),

(1, 27, 'Springy', 'The Trickster’s Branch', 'A playful yet sharp wand for mischief-makers.'),
(2, 27, 'Elástica', 'La Rama del Embaucador', 'Una varita juguetona pero aguda para creadores de travesuras.'),
(3, 27, 'Elastica', 'Il Rametto dell’Ingannatore', 'Una bacchetta giocosa ma affilata per i creatori di dispetti.'),

(1, 28, 'Reasonably pliant', 'The Noble Ash', 'A steadfast wand for leaders and visionaries.'),
(2, 28, 'Razonablemente flexible', 'El Fresno Noble', 'Una varita firme para líderes y visionarios.'),
(3, 28, 'Ragionevolmente elastico', 'L’Olmo Nobile', 'Una bacchetta ferma per leader e visionari.'),

(1, 29, 'Unbending', 'The Heartwood Oak', 'A wand that embodies loyalty and strength.'),
(2, 29, 'Inflexible', 'El Roble del Corazón', 'Una varita que encarna lealtad y fuerza.'),
(3, 29, 'Inflessibile', 'Il Quercia del Cuore', 'Una bacchetta che incarna lealtà e forza.'),

(1, 30, 'Swishy', 'The Viper’s Stalk', 'A wand that favors cunning and skilled duelists.'),
(2, 30, 'Flexible', 'El Tallo de la Víbora', 'Una varita que favorece a los astutos y hábiles duelistas.'),
(3, 30, 'Flessibile', 'Il Fusto della Viper', 'Una bacchetta che favorisce i furbi e abili duelanti.'),

(1, 31, 'Sturdy', 'The Purebolt', 'Known for its precision and preference for pure-blood wizards.'),
(2, 31, 'Sólida', 'El Rayo Puro', 'Conocida por su precisión y preferencia por magos de sangre pura.'),
(3, 31, 'Solida', 'Il Fulmine Puro', 'Conosciuta per la sua precisione e preferenza per i maghi di sangue puro.'),

(1, 32, 'Brittle', 'The Forgotten Vine', 'A unique wand that holds unexpected potential.'),
(2, 32, 'Frágil', 'La Vid Olvidada', 'Una varita única que contiene un potencial inesperado.'),
(3, 32, 'Fragile', 'La Vite Dimenticata', 'Una bacchetta unica che contiene un potenziale inaspettato.'),

(1, 33, 'Surprisingly flexible', 'The Dawnflare', 'Associated with bravery and untapped potential.'),
(2, 33, 'Sorprendentemente flexible', 'La Llama del Amanecer', 'Asociada con valentía y potencial no explotado.'),
(3, 33, 'Sorprendentemente flessibile', 'La Fiamma dell’Alba', 'Associata a coraggio e potenziale inespresso.'),

(1, 34, 'Reasonably pliant', 'The Earthbound Hazel', 'Sensitive to its owner’s emotions and nature.'),
(2, 34, 'Razonablemente flexible', 'La Avellana Terrenal', 'Sensible a las emociones y la naturaleza de su dueño.'),
(3, 34, 'Ragionevolmente elastico', 'La Nocciola Terrestre', 'Sensibile alle emozioni e alla natura del suo proprietario.'),

(1, 35, 'Slightly yielding', 'The Truthseeker', 'Seeking honest and noble-hearted users.'),
(2, 35, 'Ligeramente flexible', 'El Buscador de la Verdad', 'Busca usuarios honestos y de corazón noble.'),
(3, 35, 'Ligermente elastico', 'Il Cercatore di Verità', 'Cerca utenti onesti e di cuore nobile.'),

(1, 36, 'Solid', 'The Ironbranch', 'Favored by those with unyielding determination.'),
(2, 36, 'Sólida', 'La Rama de Hierro', 'Preferida por aquellos con una determinación inquebrantable.'),
(3, 36, 'Solida', 'La Rama di Ferro', 'Preferita da coloro con una determinazione inflessibile.'),

(1, 37, 'Quite rigid', 'The Sentinel Alder', 'Best for protective magic and considerate users.'),
(2, 37, 'Bastante rígida', 'El Aliso Centinela', 'Ideal para magia protectora y usuarios considerados.'),
(3, 37, 'Abbastanza rigida', 'L’Ontano Sentinella', 'Ideale per la magia protettiva e utenti premurosi.'),

(1, 38, 'Unyielding', 'The Loyal Ash', 'Bound to a single master with unwavering loyalty.'),
(2, 38, 'Inflexible', 'El Fresno Leal', 'Ligada a un único maestro con lealtad inquebrantable.'),
(3, 38, 'Inflessibile', 'Il Fresno Leale', 'Legata a un unico padrone con lealtà incrollabile.'),

(1, 39, 'Swishy', 'The Phoenix Wing', 'Inspired by emotional strength and healing magic.'),
(2, 39, 'Flexible', 'El Ala del Fénix', 'Inspirada en la fortaleza emocional y la magia curativa.'),
(3, 39, 'Flessibile', 'L’Ala del Fenice', 'Ispirata alla forza emotiva e alla magia curativa.'),

(1, 40, 'Flexible', 'The Hidden Gem', 'Perfect for ambitious wizards with untapped talent.'),
(2, 40, 'Flexible', 'La Gema Oculta', 'Perfecta para magos ambiciosos con talento no explotado.'),
(3, 40, 'Flessibile', 'Il Gemma Nascosta', 'Perfetta per maghi ambiziosi con talento inespresso.'),

(1, 41, 'Pliant', 'The Spellweaver', 'Ideal for intricate and advanced spellwork.'),
(2, 41, 'Flexible', 'El Tejedor de Hechizos', 'Ideal para hechizos intrincados y avanzados.'),
(3, 41, 'Flessibile', 'Il Tessitore di Incantesimi', 'Ideale per incantesimi intricati e avanzati.'),

(1, 42, 'Slightly yielding', 'The Eclipse Wand', 'Dark and mysterious, excelling in shadowy arts.'),
(2, 42, 'Ligeramente flexible', 'La Varita del Eclipse', 'Oscura y misteriosa, sobresaliente en artes sombrías.'),
(3, 42, 'Ligermente elastico', 'La Bacchetta dell’Eclissi', 'Oscura e misteriosa, eccelle nelle arti oscure.'),

(1, 43, 'Quite flexible', 'The Woodland Keeper', 'Chosen by those who bond with magical creatures.'),
(2, 43, 'Bastante flexible', 'El Guardián del Bosque', 'Elegida por quienes se vinculan con criaturas mágicas.'),
(3, 43, 'Abbastanza flessibile', 'Il Custode del Bosco', 'Scelta da coloro che si legano a creature magiche.'),

(1, 44, 'Bendy', 'The Lightbringer', 'A wand for those with pure hearts and exceptional talent.'),
(2, 44, 'Flexible', 'El Portador de Luz', 'Una varita para quienes tienen corazones puros y talento excepcional.'),
(3, 44, 'Flessibile', 'Il Portatore di Luce', 'Una bacchetta per coloro con cuori puri e talento eccezionale.'),

(1, 45, 'Hard', 'The Thornbreaker', 'Known for its strong defense against dark forces.'),
(2, 45, 'Dura', 'El Rompedor de Espinas', 'Conocida por su fuerte defensa contra fuerzas oscuras.'),
(3, 45, 'Dura', 'Il Rompispine', 'Conosciuta per la sua forte difesa contro le forze oscure.'),

(1, 46, 'Springy', 'The Stalwart Oak', 'Reliable and unwavering, for resilient individuals.'),
(2, 46, 'Elástica', 'El Roble Firme', 'Confiable e inquebrantable, para individuos resilientes.'),
(3, 46, 'Elastica', 'Il Rovere Fermo', 'Affidabile e inamovibile, per individui resilienti.'),

(1, 47, 'Unbending', 'The Redwood Aegis', 'A wand that brings luck and rewards persistence.'),
(2, 47, 'Inflexible', 'El Escudo de Secuoya', 'Una varita que trae suerte y recompensa la perseverancia.'),
(3, 47, 'Inflessibile', 'L’Aegis di Sequoia', 'Una bacchetta che porta fortuna e premia la perseveranza.'),

(1, 48, 'Slightly yielding', 'The Chosen Flame', 'A rare wand suited for extraordinary individuals.'),
(2, 48, 'Ligeramente flexible', 'La Llama Elegida', 'Una varita rara adecuada para individuos extraordinarios.'),
(3, 48, 'Ligermente elastico', 'La Fiamma Scelta', 'Una bacchetta rara adatta per individui straordinari.'),

(1, 49, 'Reasonably pliant', 'The Duelmaster', 'Favored by master duelists for its precision and power.'),
(2, 49, 'Razonablemente flexible', 'El Maestro de Duelos', 'Preferida por duelistas maestros por su precisión y poder.'),
(3, 49, 'Ragionevolmente elastico', 'Il Maestro dei Duelli', 'Preferita dai maestri duellanti per la sua precisione e potenza.'),

(1, 50, 'Very supple', 'The Sovereign Branch', 'Commanding respect, this wand shines in skilled hands.'),
(2, 50, 'Muy flexible', 'La Rama Soberana', 'Imponente y respetada, esta varita brilla en manos hábiles.'),
(3, 50, 'Molto flessibile', 'Il Rametto Sovrano', 'Imponente e rispettata, questa bacchetta brilla in mani abili.');



-- Inserts for the wands table where are the non translatable columns
INSERT INTO `Olivanders`.`wands`(`wand_id`, `wandmaker_id`, `wood_id`, `core_id`, `length`)
VALUES
(1, 1, 22, 2, 11), -- Harry potters
(2, 1, 50, 2, 13), -- voldemort
(3, 1, 47, 1, 10), -- Hermione
(4, 2, 20, 2, 14),
(5, 2, 2, 1, 11),
(6, 2, 1, 3, 10),
(7, 4, 49, 8, 9),
(8, 4, 50, 9, 12),
(9, 5, 1, 3, 11),
(10, 5, 3, 6, 09),
(11, 4, 23, 4, 11),
(12, 1, 20, 2, 16),
(13, 2, 17, 1, 12),
(14, 3, 12, 9, 11),
(15, 4, 9, 9, 11),
(16, 3, 16, 5, 15), -- The elder wand
(17, 2, 36, 2, 9),
(18, 5, 4, 1, 12),
(19, 1, 23, 6, 11),
(20, 7, 6, 7, 15),
(21, 3, 1, 4, 12),
(22, 5, 6, 3, 19),
(23, 1, 3, 2, 14),
(24, 3, 12, 9 , 12),
(25, 5, 26, 10, 16),
(26, 6, 47, 20, 11),
(27, 3, 34, 19, 10),
(28, 1, 31, 16, 14),
(29, 1, 29, 11, 16),
(30, 7, 39, 14, 12),
(31, 8, 32, 17, 15),
(32, 8, 41, 15, 12),
(33, 9, 29, 16, 9),
(34, 7, 9, 12, 8),
(35, 6, 5, 15, 12),
(36, 9 , 10, 17, 10),
(37, 1, 12, 12, 11),
(38, 10, 5, 12, 9),
(39, 7, 19, 18, 8),
(40, 8 , 33, 12, 10),
(41, 9 , 36, 21, 14),
(42, 10, 17, 12, 13),
(43, 6, 12, 11, 11),
(44, 8, 1, 4, 12),
(45, 10, 2, 1, 10),
(46, 1, 3, 7, 12),
(47, 7, 4, 13, 10),
(48, 4, 5, 10, 11),
(49, 2, 6, 9, 12),
(50, 9, 7, 1, 14);
 




