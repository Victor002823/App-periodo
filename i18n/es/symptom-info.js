import links from './links'

export const generalInfo = {
  chartNfp: `En la gráfica puedes seguir los signos de fertilidad. Cuando se detectan a la vez un cambio de temperatura válido y un cambio en el moco cervical o en el cuello uterino, se muestra una línea naranja en la gráfica. Indica el fin de la fase periovulatoria y el inicio de la fase postovulatoria.`,
  curiousNfp: `Si tienes curiosidad por saber más sobre el método sintotérmico que se usa para el seguimiento de la fertilidad en la app, visita ${links.wiki.url}.`,
  cycleRelation: `Puede estar influido por tus ciclos menstruales y sus cambios hormonales, o influir en ellos.`,
  excludeExplainer: `Puedes excluir estos valores para que no se tengan en cuenta en ningún cálculo de fertilidad.`,
  nfpTfyReminder: `Cuando - de forma diaria/regular - registras:
  1. tu temperatura corporal basal,
  2. tu moco cervical O tu cuello uterino,
  3. y el sangrado menstrual
la app te ayuda a identificar en qué fase del ciclo menstrual estás.

drip. hace predicciones de periodo por ti y te ayuda a aplicar las reglas NFP de conciencia de fertilidad. Pero recuerda que esta app la hacen personas, y las personas se equivocan. Piensa siempre por ti misma: "¿Esto tiene sentido?" Recuerda: ¡no necesitas una app para entender tu ciclo! Sin embargo, drip. quiere apoyarte y hacer el registro del periodo más fácil, transparente y seguro.

Encuentra más información sobre el método sintotérmico en ${links.wiki.url}.`,
  noNfpSymptom: `La app te permite registrar este síntoma solo como información; no se tiene en cuenta en ningún cálculo. En la gráfica puedes ver con qué frecuencia lo registras.`,
}

export default {
  bleeding: {
    title: `Registro del sangrado menstrual`,
    text: `Registrar el sangrado menstrual te permite conocer el inicio y el fin de un ciclo menstrual.

Después de registrar al menos 3 ciclos menstruales, drip. te dará un resumen de
· cuánto duran tus ciclos en promedio (en "estadísticas"),
· si la duración de tus ciclos varió de forma significativa (en "estadísticas" y en las predicciones de sangrado)
· y predecirá tus próximos 3 ciclos con un rango de 3 o 5 días (en la pantalla de inicio y en el "calendario").

La app te permite registrar distintas intensidades de sangrado. En la gráfica y en el calendario, los valores de sangrado se colorean en distintos tonos de rojo. Mientras más oscuro, más intenso el sangrado. Todo valor de sangrado que no esté excluido se tiene en cuenta para el cálculo de fertilidad y para la predicción del inicio de los próximos ciclos.

Excluir valores de sangrado sirve para registrar sangrado que no marca el inicio de un nuevo ciclo ni la continuación del sangrado menstrual de los días anteriores, por ejemplo el sangrado causado por la ovulación o por un aborto espontáneo.

${generalInfo.nfpTfyReminder}`,
  },
  cervix: {
    title: `Registro del cuello uterino`,
    text: `El cuello uterino está dentro del cuerpo, al final del canal vaginal, entre la vagina y el útero.

Registrar qué tan abierto o cerrado y qué tan firme o blando se siente el cuello uterino puede ayudar a determinar en qué fase del ciclo menstrual estás.

Por defecto, el síntoma secundario que la app usa para la evaluación NFP es el moco cervical, pero puedes cambiarlo al cuello uterino en "Ajustes" -> "Ajustes NFP".

· ¿Cómo identificar un cuello uterino fértil?
Un cuello uterino fértil está abierto y se siente blando, como el lóbulo de la oreja. En cambio, un cuello uterino infértil se siente cerrado y duro, como la punta de la nariz. Si el cuello uterino se siente de cualquier otra forma que no sea cerrado y duro, drip. lo toma como señal de fertilidad. En la gráfica, el cuello uterino fértil se colorea en amarillo oscuro y el infértil en amarillo claro.

${generalInfo.chartNfp}

${generalInfo.excludeExplainer}

${generalInfo.nfpTfyReminder}`,
  },
  desire: {
    title: 'Registro del deseo sexual',
    text: `La app te permite registrar el deseo sexual de forma independiente de la actividad sexual.

${generalInfo.cycleRelation}

${generalInfo.noNfpSymptom}

${generalInfo.curiousNfp}`,
  },
  mood: {
    title: 'Registro del estado de ánimo',
    text: `La app te permite registrar tu estado de ánimo.

${generalInfo.cycleRelation}

${generalInfo.noNfpSymptom}

${generalInfo.curiousNfp}`,
  },
  mucus: {
    title: 'Registro del moco cervical',
    text: `El moco cervical puede ayudar a determinar en qué fase del ciclo menstrual estás.

Por defecto, el síntoma secundario que la app usa para la evaluación NFP es el moco cervical.

· ¿Cómo identificar el moco cervical fértil?
Registrar a diario la sensación y la textura de tu moco cervical te ayuda a identificar cambios en su calidad. Los valores que ingresas para la sensación y la textura se combinan en drip. en uno de cinco valores conformes a NFP. De menor a mejor calidad:
· t = (sensación seca + sin textura),
· ∅ = (sin sensación + sin textura),
· f = (sensación húmeda + sin textura),
· S = (sin sensación O sensación húmeda + textura cremosa),
· S+ = (cualquier sensación + textura de clara de huevo) O (sensación resbalosa + cualquier textura).

En la gráfica, el moco cervical se colorea en azul: mientras más oscuro el azul, mejor la calidad de tu moco cervical.

Ten en cuenta que drip. aún no admite los "valores entre paréntesis": según las reglas NFP, puedes calificar un valor de moco cervical poniéndolo entre paréntesis para indicar que no cumple del todo los descriptores de una de las cinco categorías y está en un punto intermedio. Esta función se admitirá en el futuro.

${generalInfo.chartNfp}

${generalInfo.excludeExplainer}

${generalInfo.nfpTfyReminder}`,
  },
  note: {
    title: 'Notas',
    text: `La nota te permite registrar cualquier información extra que quieras guardar. Es la única categoría que puede guardar información para una fecha futura. Esto puede servir para recordarte una cita.

${generalInfo.noNfpSymptom}

${generalInfo.curiousNfp}`,
  },
  pain: {
    title: 'Registro del dolor',
    text: `La app te permite registrar los distintos tipos de dolor que experimentas.

${generalInfo.cycleRelation}

${generalInfo.noNfpSymptom}

${generalInfo.curiousNfp}`,
  },
  sex: {
    title: 'Registro de sexo y anticonceptivos',
    text: `La app te permite registrar el sexo de forma independiente del deseo sexual. Puedes diferenciar entre masturbación y sexo con pareja/parejas. Aquí también puedes registrar tu(s) método(s) anticonceptivo(s). Solo la actividad sexual se muestra en la sección "gráfica": el morado más claro indica sexo en solitario y el más oscuro, sexo con pareja. ¿Sabías que tener un orgasmo puede ayudar a aliviar los cólicos?

${generalInfo.noNfpSymptom}

${generalInfo.curiousNfp}`,
  },
  temperature: {
    title: 'Registro de la temperatura corporal basal',
    text: `Uno de los signos corporales que necesitas registrar para conocer tu estado de fertilidad es la temperatura corporal basal. La temperatura corporal cambia a lo largo del ciclo menstrual y sube después de la ovulación.

Por defecto, el síntoma secundario es el moco cervical, pero puedes cambiarlo al cuello uterino en "Ajustes" -> "Ajustes NFP".

· ¿Qué es la temperatura corporal basal?
Es tu temperatura después de estar en reposo al menos 6 horas. Para muchas personas es al despertar por la mañana, tras dormir al menos 6 horas y antes de levantarse.

· ¿Qué termómetro usar?
El termómetro debe indicar 2 decimales.

· ¿Cómo medir?
Puedes medir por vía rectal, vaginal u oral. Si eliges la medición rectal o vaginal, debes medir al menos 3 minutos. Si eliges la medición oral, debes medir al menos 5 minutos. Elige una forma y mantenla.

${generalInfo.chartNfp}

${generalInfo.excludeExplainer}

${generalInfo.nfpTfyReminder}`,
  },
}
