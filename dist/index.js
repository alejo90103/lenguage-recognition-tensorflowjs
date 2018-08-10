// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

var discurso = `Compatriotas Me encuentro hoy aquí con humildad ante la tarea que enfrentamos agradecido por la confianza que me ha sido otorgada consciente de los sacrificios de nuestros antepasados Agradezco al presidente Bush su servicio a nuestra nación así como la generosidad y cooperación que ha demostrado a lo largo de esta transición Ya son cuarenta y cuatro los norteamericanos que han hecho el juramento presidencial Estas palabras han sido pronunciadas durante mareas de prosperidad y aguas tranquilas de la paz Y sin embargo a veces el juramento se hace en medio de nubarrones y furiosas tormentas En estos momentos Estados Unidos se ha mantenido no sólo por la pericia o visión de los altos cargos sino porque nosotros el pueblo hemos permanecido fieles a los ideales de nuestros antecesores y a nuestros documentos fundacionales Así ha sido Y así debe ser con esta generación de norteamericanos Que estamos en medio de una crisis es algo muy asumido Nuestra nación está en guerra frente a una red de gran alcance de violencia y odio Nuestra economía está gravemente debilitada como consecuencia de la codicia y la ir responsabilidad de algunos pero también por el fracaso colectivo a la hora de elegir opcion es difíciles y de preparar a la nación para una nueva era Se han perdido casas y empleos y se han cerrado empresas Nuestro sistema de salud es caro nuestras escuelas han fallado a demasiados y cada día aporta nuevas pruebas de que la manera en que utilizamos la energía refuerzan a nuestros adversarios y amenazan a nuestro planeta Estos son los indicadores de una crisis según los datos y las estadísticas Menos tangible pero no menos profunda es la pérdida de confianza en nuestro país un temor persistente de que el declive de Estados Unidos es inevitable y de que la próxima generación debe reducir sus expectativas Hoy os digo que los desafíos a los que nos enfrentamos son reales Son graves y son muchos No los enfrentaremos fácilmente o en un corto periodo de tiempo Pero Estados Unidos debe saber que les haremos frente Hoy nos reunimos porque hemos elegido la esperanza sobre el temor la unidad de propósitos sobre el conflicto y la discordia Hoy hemos venido a proclamar el fin de las quejas mezquinas y las falsas promesas de las recriminaciones y los dogmas caducos que durante demasiado tiempo han estrangulado a nuestra política Seguimos siendo una nación joven pero según las palabras de las Escrituras ha llegado el momento de dejar de lado los infantilismos Ha llegado el momento de reafirmar nuestro espíritu de firmeza de elegir nuestra mejor historia de llevar hacia adelante ese valioso don esa noble idea que ha pasado de generación en generación la promesa divina de que todos son iguales todos son libres y todos merecen la oportunidad de alcanzar la felicidad plena Al reafirmar la grandeza de nuestra nación somos conscientes de que la grandeza nunca es un regalo Debe ganarse Nuestro camino nunca ha si do de atajos o de conformarse con menos No ha sido un camino para los pusilánimes para los que prefieren el ocio al trabajo o buscan sólo los placeres de la riqueza y la fama Más bien han sido los que han asumido riesgos los que actúan los que hacen cosas algunos de ellos reconocidos pero más a menudo hombres y mujeres desconocidos en su labor los que nos han llevado hacia adelante por el largo escarpado camino hacia la prosperidad y la libertad Por nosotros se llevaron sus pocas posesiones materiales y viajaron a través de los océanos en busca de una nueva vida Por nosotros trabajaron en condiciones infrahumanas y se establecieron en el oeste soportaron el látigo y araron la dura tierra Por nosotros lucharon y murieron en lugares como Concord y Gettysburg Normandía y Khe Sahn Una y otra vez estos hombres y mujeres lucharon y se sacrificaron y trabajaron hasta tener llagas en las manos para que pudiéramos tener una vida mejor Veían a Estados Unidos más grande que la suma de nuestras ambiciones individuales más grande que todas las diferencias de origen riqueza o facción Este es el viaje que continuamos hoy Seguimos siendo la nación más próspera y poderosa de la Tierra Nuestros trabajadores no son menos productivos que cuando empezó esta crisis Nuestras mentes no son menos inventivas nuestros bienes y servicios no son menos necesarios que la semana pasada el mes pasado o el año pasado Nuestra capacidad no ha disminuido Pero el tiempo del inmovilismo de la protección de intereses limitados y de aplazar las decisiones desagradables ese tiempo se guramente ha pasado A partir de hoy debemos levantarnos sacudirnos el polvo y volver a empezar la tarea de rehacer Estados Unidos Porque allí donde miremos hay trabajo que hacer El estado de la economía requiere una acción audaz y rápida y actuaremos no sólo para crear nuevos empleos sino para levantar nuevos cimientos para el crecimiento Construiremos carreteras y puentes las redes eléctricas y las líneas digitales que alimentan nuestro comercio y nos mantienen unidos Pondremos a la ciencia en el lugar donde se merece y aprovecharemos las maravillas de la tecnología para aumentar la calidad de la sanidad y reducir su coste Utilizaremos el sol el viento y la tierra para alimentar a nuestros automóviles y hacer funcionar nuestras fábricas Y transformaremos nuestras escuelas y universidades para hacer frente a las necesidades de una nueva era Todo esto podemos hacerlo Y todo esto lo haremos Algunos cuestionan la amplitud de nuestras ambiciones y sugieren que nuestro sistema no puede tolerar demasiados grandes planes Sus memorias son cortas Porque han olvidado lo que este país ya ha hecho lo que hombres y mujeres libres pueden lograr cuando la imaginación se une al interés común y la necesidad a la valentía Lo que no entienden los cínicos es que el terreno que pisan ha cambiado y que los argumentos políticos estériles que nos han consumido durante demasiado tiempo ya no sirven La pregunta que nos hacemos hoy no es si nuestro gobierno es demasiado grande o pequeño sino si funciona ya sea para ayudar a las familias a encontrar trabajos con un sueldo decente cuidados que pueden pagar y una jubilación digna Allí donde la respuesta es sí seguiremos avanzando y allí donde la respuesta es no pondremos fin a los programas Y a los que manejamos el dinero público se nos pedirán cuentas para gastar con sabiduría cambiar los malos hábitos y hacer nuestro trabajo a la luz del día porque sólo entonces podremos restablecer la confianza vital entre un pueblo y su gobierno La cuestión para nosotros tampoco es si el mercado es una fuerza del bien o del mal Su poder para generar riqueza y expandir la libertad no tiene rival pero esta crisis nos ha recordado a todos que sin vigilancia el mercado puede descontrolarse y que una nación no puede prosperar durante mucho tiempo si favorece sólo a los ricos El éxito de nuestra economía siempre ha dependido no sólo del tamaño de nuestro Producto Nacional Bruto sino del alcance de nuestra prosperidad de nuestra habilidad de ofrecer oportunidades a todos los que lo deseen no por caridad sino porque es la vía más segura hacia el bien común En cuanto a nuestra defensa común rechazamos como falsa la elección entre nuestra seguridad y nuestros ideales Nuestros padres fundadores enfrentados a peligros que apenas podemos imaginar redactaron una carta para garantizar el imperio de la ley y los derechos humanos una carta que se ha expandido con la sangre de generaciones Esos ideales aún alumbran el mundo y no renunciaremos a ellos por conveniencia Y a los otros pueblos y gobiernos que nos observan hoy desde las grandes capitales al pequeño pueblo donde nació mi padre sabed que América es la amiga de cada nación y cada hombre mujer y niño que persigue un futuro de paz y dignidad y de que estamos listos a asumir el liderazgo una vez más Recordad que generaciones anteriores se enfrentaron al fascismo y al comunismo no sólo con misiles y tanques sino con sólidas alianzas y firmes convicciones Comprendieron que nuestro poder solo no puede protegernos ni nos da derecho a hacer lo que nos place Sabían por contra que nuestro poder crece a través de su uso prudente de que la seguridad emana de la justicia de nuestra causa la fuerza de nuestro ejemplo y las cualidades de la templanza la humildad y la contención Somos los guardianes de este patrimonio Guiados de nuevo por estos principios podemos hacer frente a esas nuevas amenazas que exigen aún mayor esfuerzo  incluso mayor cooperación y entendimiento entre las naciones Comenzaremos a dejar Irak de manera responsable a su pueblo y forjar una paz ganada con dificultad en Afganistán Con viejos amigos y antiguos contrincantes trabajaremos sin descanso para reducir la amenaza nuclear y hacer retroceder el fantasma de un planeta que se calienta No vamos a pedir perdón por nuestro estilo de vida ni vamos a vacilar en su defensa y para aquellos que pretenden lograr su fines mediante el fomento del terror y de las matanzas de inocentes les decimos desde ahora que nuestro espíritu es más fuerte y no se lo puede romper no podéis perdurar más que nosotros y os venceremos Porque sabemos que nuestra herencia multiétnica es una fortaleza no una debilidad Somos una nación de cristianos y musulmanes judíos y e hindúes y de no creyentes Estamos formados por todas las lenguas y culturas procedentes de cada rincón de esta Tierra debido a que hemos probado el mal trago de la guerra civil y la segregación y resurgido más fuertes y más unidos de ese negro capítulo no podemos evitar creer que los viejos odios se desvanecerán algún día que las lineas divisorias entre tribus pronto se disolverán que mientras el mundo se empequeñece nuestra humanidad común se revelará y América tiene que desempeñar su papel en el alumbramiento de una nueva era de paz Al mundo musulmán buscamos un nuevo camino adelante basado en el interés mutuo y el respeto mutuo A aquellos líderes en distintas partes del mundo que pretenden sembrar el conflicto o culpar a Occidente de los males de sus sociedades sepáis que vuestros pueblos os juzgarán por lo que que podesis construir no por lo que destruyais A aquellos que se aferran al poder mediante la corrupción y el engaño y la represión de la disidencia teneis que saber que estáis en el lado equivocado de la Historia pero os tenderemos la mano si estáis dispuestos a abrir el puño A los pueblos de las naciones más pobres nos comprometemos a colaborar con vosotros para que vuestras granjas florezcan y dejar que fluyan aguas limpias dar de comer a los cuerpos desnutridos y alimentar las mentes hambrientas Y a aquellas naciones que como la nuestra gozan de relativa abundancia les decimos que no nos podemos permitir más la indiferencia ante el sufrimiento fuera de nuestras fronteras ni podemos consumir los recursos del mundo sin tomar en cuenta las consecuencias Porque el mundo ha cambiado y nosotros tenemos que cambiar con él Al contemplar la ruta que se despliega ante nosotro s recordamos con humilde agradecimiento aquellos estadounidenses valientes quienes en este mismo momento patrullan desiertos lejanos y montañas distantes Tienen algo que decirnos al igual que los héroes caídos que yacen en (el cementerio nacional de) Arlington susurran desde los tiempos lejanos Les rendimos homenaje no sólo porque son los guardianes de nuestra libertad sino también porque encarnan el espíritu de servicio la voluntad de encontrar sentido en algo más grande que ellos mismos Sin embargo en este momento un momento que definirá una generación es precisamente este espíritu el que tiene que instalarse en todos nosotros Por mucho que el gobierno pueda y deba hacer en última instancia esta nación depende de la fe y la decisión del pueblo estadounidense Es la bondad de acoger a un extraño cuando se rompen los diques la abnegación de los trabajadores que prefieren recortar sus horarios antes que ver a un amigo perder su puesto de trabajo lo que nos hace superar nuestros momentos más oscuros Es la valentía del bombero al subir una escalera llena de humo pero también la voluntad del progenitor de cuidar a un niño lo que al final decide nuestra suerte Nuestros desafíos podrían ser nuevos Las herramientas con que los hacemos frente podrían ser nuevas Pero esos valores sobre los que depende nuestro éxito el trabajo duro y la honestidad la valentía y el juego limpio la tolerancia y la curiosidad la lealtad y el patriotismo esas cosas son viejas Esas cosas son verdaderas Han sido la fuerza silenciosa detrás de nuestro progreso durante toda nuestra historia Lo que se exige por tanto es el regreso a esas verdades Lo que se nos pide ahora es una nueva era de responsabilidad  un reconocimiento por parte de cada estadounidense de que tenemos deberes para con nosotros nuestra nación y el mundo deberes que no admitimos a regañadientes sino que acogemos con alegría firmes en el conocimiento de que no hay nada tan gratificante para el espíritu tan representativo de nuestro carácter que entregarlo todo en una tarea difícil Este es el precio y la promesa de la ciudadanía Esta es la fuente de nuestra confianza el saber que Dios nos llama a dar forma a un destino incierto Este es el significado de nuestra libertad y de nuestro credo por lo que hombres y mujeres y niños de todas las razas y de todas las fes pueden unirse en una celebración a lo largo y ancho de esta magnífica explanada por lo que un hombre cuyo padre hace menos de 60 años no habría sido servido en un restaurante ahora está ante vosotros para prestar el juramento más sagrado Así que señalemos este día haciendo memoria de quiénes somos y de lo largo que ha sido el camino recorrido En el año del nacimiento de América en uno de los más fríos meses una reducida banda de patriotas se juntaba ante las menguantes fogatas en las orillas de un río helado La capital se había abandonado El enemigo avanzaba La nieve estaba manchada de sangre En un momento en que el desenlace de nuestra revolución estaba más en duda el padre de nuestra nación mandó que se leyeran al pueblo estas palabras "Que se cuente al mundo del futuro que en las profundidades del invierno cuando nada salvo la esperanza y la virtud podían sobrevivir la urbe y el país alarmados ante un peligro común salieron a su paso" América Ante nuestros peligros comunes en este invierno de nuestras privaciones recordemos esas palabras eternas Con esperanza y virtud sorteemos nuevamente las corrientes heladas y aguantemos las tormentas que nos caigan encima Que los hijos de nuestros hijos digan que cuando fuimos puestos a prueba nos negamos que permitir que este viaje terminase no dimos la vuelta para retroceder y con la vista puesta en el horizonte y la gracia de Dios encima de nosotros llevamos aquel gran regalo de la libertad y lo entregamos a salvo a las generaciones venideras Gracias que Dios os bendiga que Diós bendiga a América`;

var speech = `My fellow citizens I stand here today humbled by the task before us grateful for the trust you have bestowed mindful of the sacrifices borne by our ancestors I thank President Bush for his service to our nation as well as the generosity and cooperation he has shown throughout this transition Fortyfour Americans have now taken the presidential oath The words have been spoken during rising tides of prosperity and the still waters of peace Yet every so often the oath is taken amidst gathering clouds and raging storms At these moments America has carried on not simply because of the skill or vision of those in high office but because We the People have remained faithful to the ideals of our forebearers and true to our founding documents So it has been So it must be with this generation of Americans That we are in the midst of crisis is now well understood Our nation is at war against a farreaching network of violence and hatred Our economy is badly weakened a consequence of greed and irresponsibility on the part of some but also our collective failure to make hard choices and prepare the nation for a new age Homes have been lost jobs shed businesses shuttered Our health care is too costly our schools fail too many and each day brings further evidence that the ways we use energy strengthen our adversaries and threaten our planet These are the indicators of crisis subject to data and statistics Less measurable but no less profound is a sapping of confidence across our land a nagging fear that America's decline is inevitable and that the next generation must lower its sights Today I say to you that the challenges we face are real They are serious and they are many They will not be met easily or in a short span of time But know this America They will be met On this day we gather because we have chosen hope over fear unity of purpose over conflict and discord On this day we come to proclaim an end to the petty grievances and false promises the recriminations and wornout dogmas that for far too long have strangled our politics We remain a young nation but in the words of Scripture the time has come to set aside childish things The time has come to reaffirm our enduring spirit to choose our better history to carry forward that precious gift that noble idea passed on from generation to generation the Godgiven promise that all are equal all are free and all deserve a chance to pursue their full measure of happiness In reaffirming the greatness of our nation we understand that greatness is never a given It must be earned Our journey has never been one of shortcuts or settling for less It has not been the path for the fainthearted for those who prefer leisure over work or seek only the pleasures of riches and fame Rather it has been the risktakers the doers the makers of things some celebrated but more often men and women obscure in their labor who have carried us up the long rugged path toward prosperity and freedom For us they packed up their few worldly possessions and traveled across oceans in search of a new life For us they toiled in sweatshops and settled the West endured the lash of the whip and plowed the hard earth For us they fought and died in places like Concord and Gettysburg Normandy and Khe Sahn Time and again these men and women struggled and sacrificed and worked till their hands were raw so that we might live a better life They saw America as bigger than the sum of our individual ambitions greater than all the differences of birth or wealth or faction This is the journey we continue today We remain the most prosperous powerful nation on Earth Our workers are no less productive than when this crisis began Our minds are no less inventive our goods and services no less needed than they were last week or last month or last year Our capacity remains undiminished But our time of standing pat of protecting narrow interests and putting off unpleasant decisions that time has surely passed Starting today we must pick ourselves up dust ourselves off and begin again the work of remaking America For everywhere we look there is work to be done The state of the economy calls for action bold and swift and we will act not only to create new jobs but to lay a new foundation for growth We will build the roads and bridges the electric grids and digital lines that feed our commerce and bind us together We will restore science to its rightful place and wield technology's wonders to raise health care's quality and lower its cost We will harness the sun and the winds and the soil to fuel our cars and run our factories And we will transform our schools and colleges and universities to meet the demands of a new age All this we can do And all this we will do Now there are some who question the scale of our ambitions who suggest that our system cannot tolerate too many big plans Their memories are short For they have forgotten what this country has already done what free men and women can achieve when imagination is joined to common purpose and necessity to courage What the cynics fail to understand is that the ground has shifted beneath them that the stale political arguments that have consumed us for so long no longer apply The question we ask today is not whether our government is too big or too small but whether it works whether it helps families find jobs at a decent wage care they can afford a retirement that is dignified Where the answer is yes we intend to move forward Where the answer is no programs will end And those of us who manage the public's dollars will be held to account to spend wisely reform bad habits and do our business in the light of day because only then can we restore the vital trust between a people and their government Nor is the question before us whether the market is a force for good or ill Its power to generate wealth and expand freedom is unmatched but this crisis has reminded us that without a watchful eye the market can spin out of control and that a nation cannot prosper long when it favors only the prosperous The success of our economy has always depended not just on the size of our gross domestic product but on the reach of our prosperity on our ability to extend opportunity to every willing heart not out of charity but because it is the surest route to our common good As for our common defense we reject as false the choice between our safety and our ideals Our Founding Fathers faced with perils we can scarcely imagine drafted a charter to assure the rule of law and the rights of man a charter expanded by the blood of generations Those ideals still light the world and we will not give them up for expedience's sake And so to all other peoples and governments who are watching today from the grandest capitals to the small village where my father was born Know that America is a friend of each nation and every man woman and child who seeks a future of peace and dignity and that we are ready to lead once more Recall that earlier generations faced down fascism and communism not just with missiles and tanks but with sturdy alliances and enduring convictions They understood that our power alone cannot protect us nor does it entitle us to do as we please Instead they knew that our power grows through its prudent use our security emanates from the justness of our cause the force of our example the tempering qualities of humility and restraint We are the keepers of this legacy Guided by these principles once more we can meet those new threats that demand even greater effort even greater cooperation and understanding between nations We will begin to responsibly leave Iraq to its people and forge a hardearned peace in Afghanistan With old friends and former foes we will work tirelessly to lessen the nuclear threat and roll back the specter of a warming planet We will not apologize for our way of life nor will we waver in its defense and for those who seek to advance their aims by inducing terror and slaughtering innocents we say to you now that our spirit is stronger and cannot be broken you cannot outlast us and we will defeat you For we know that our patchwork heritage is a strength not a weakness We are a nation of Christians and Muslims Jews and Hindus and nonbelievers We are shaped by every language and culture drawn from every end of this Earth and because we have tasted the bitter swill of civil war and segregation and emerged from that dark chapter stronger and more united we cannot help but believe that the old hatreds shall someday pass that the lines of tribe shall soon dissolve that as the world grows smaller our common humanity shall reveal itself and that America must play its role in ushering in a new era of peace To the Muslim world we seek a new way forward based on mutual interest and mutual respect To those leaders around the globe who seek to sow conflict or blame their society's ills on the West Know that your people will judge you on what you can build not what you destroy To those who cling to power through corruption and deceit and the silencing of dissent know that you are on the wrong side of history but that we will extend a hand if you are willing to unclench your fist To the people of poor nations we pledge to work alongside you to make your farms flourish and let clean waters flow to nourish starved bodies and feed hungry minds And to those nations like ours that enjoy relative plenty we say we can no longer afford indifference to suffering outside our borders nor can we consume the world's resources without regard to effect For the world has changed and we must change with it As we consider the road that unfolds before us we remember with humble gratitude those brave Americans who at this very hour patrol faroff deserts and distant mountains They have something to tell us today just as the fallen heroes who lie in Arlington whisper through the ages We honor them not only because they are guardians of our liberty but because they embody the spirit of service a willingness to find meaning in something greater than themselves And yet at this moment a moment that will define a generation it is precisely this spirit that must inhabit us all For as much as government can do and must do it is ultimately the faith and determination of the American people upon which this nation relies It is the kindness to take in a stranger when the levees break the selflessness of workers who would rather cut their hours than see a friend lose their job which sees us through our darkest hours It is the firefighter's courage to storm a stairway filled with smoke but also a parent's willingness to nurture a child that finally decides our fate Our challenges may be new The instruments with which we meet them may be new But those values upon which our success depends hard work and honesty courage and fair play tolerance and curiosity loyalty and patriotism these things are old These things are true They have been the quiet force of progress throughout our history What is demanded then is a return to these truths What is required of us now is a new era of responsibility a recognition on the part of every American that we have duties to ourselves our nation and the world duties that we do not grudgingly accept but rather seize gladly firm in the knowledge that there is nothing so satisfying to the spirit so defining of our character than giving our all to a difficult task This is the price and the promise of citizenship This is the source of our confidence the knowledge that God calls on us to shape an uncertain destiny This is the meaning of our liberty and our creed why men and women and children of every race and every faith can join in celebration across this magnificent Mall and why a man whose father less than 60 years ago might not have been served at a local restaurant can now stand before you to take a most sacred oath So let us mark this day with remembrance of who we are and how far we have traveled In the year of America's birth in the coldest of months a small band of patriots huddled by dying campfires on the shores of an icy river The capital was abandoned The enemy was advancing The snow was stained with blood At a moment when the outcome of our revolution was most in doubt the father of our nation ordered these words be read to the people "Let it be told to the future world that in the depth of winter when nothing but hope and virtue could survive that the city and the country alarmed at one common danger came forth to meet [it] America In the face of our common dangers in this winter of our hardship let us remember these timeless words With hope and virtue let us brave once more the icy currents and endure what storms may come Let it be said by our children's children that when we were tested we refused to let this journey end that we did not turn back nor did we falter and with eyes fixed on the horizon and God's grace upon us we carried forth that great gift of freedom and delivered it safely to future generations`;

var spanishWords = discurso.split(' ');
var englishWords = speech.split(' ');

function convertToBinaryArray(word) {
  var tempInBinary = "";
  for (var i = 0; i < word.length; i++) {
    tempInBinary += word[i].charCodeAt(0).toString(2);
  }
  // If it less than 7 digits long, add zeroes.
  // while(tempInBinary.length < 161) {
  while (tempInBinary.length < 161) {
    tempInBinary = "0" + tempInBinary;
  }
  // Convert string to array
  return tempInBinary.split("").map(function (i) {
    return parseInt(i);
  });
}

function createTrainingData() {
  var trainingData = [];
  var output = [1, 0];
  for (var i = 0; i < spanishWords.length; i++) {
    var input = convertToBinaryArray(spanishWords[i]); // Input layer
    trainingData.push({
      input: input,
      output: output
    });
  }
  var output = [0, 1];
  for (var i = 0; i < englishWords.length; i++) {
    var input = convertToBinaryArray(englishWords[i]); // Input layer
    trainingData.push({
      input: input,
      output: output
    });
  }
  return trainingData;
}

var trainingDataAll = createTrainingData();

const trainingDataInput = tf.tensor(trainingDataAll.map(item => item.input));

const trainingDataOutput = tf.tensor(trainingDataAll.map(item => item.output));

console.log(trainingDataInput);
console.log(trainingDataOutput);

// build neural network
const model = tf.sequential();

// input layer
model.add(tf.layers.dense({
  inputShape: [161],
  activation: 'sigmoid',
  units: 3
}));

// hidden layer
model.add(tf.layers.dense({
  inputShape: [3],
  activation: 'sigmoid',
  units: 2
}));

// output layer
model.add(tf.layers.dense({
  activation: 'sigmoid',
  units: 2
}));

model.compile({
  loss: 'meanSquaredError',
  optimizer: tf.train.adam(.06)
});

var arrayToTesting = ['hola'];

const testingData = tf.tensor(arrayToTesting.map(item => convertToBinaryArray(item)));
console.log(testingData);

// train/fit our network
const startTime = Date.now();
model.fit(trainingDataInput, trainingDataOutput, { epochs: 100 }).then(history => {
  console.log(history);
  model.predict(testingData).print();
});
},{}]},{},["index.js"], null)
//# sourceMappingURL=/index.map