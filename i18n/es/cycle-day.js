export const mucusNFP = ['t', 'Ø', 'f', 'S', 'S+']
export const intensity = ['baja', 'media', 'alta']

export const bleeding = {
  labels: ['manchado', 'ligero', 'medio', 'abundante'],
  heaviness: {
    header: 'Intensidad',
    explainer: '¿Qué tan abundante es el sangrado?',
  },
  exclude: {
    header: 'Excluir',
    explainer: 'Puedes excluir este valor si no es sangrado menstrual',
  },
}

export const cervix = {
  subcategories: {
    opening: 'apertura',
    firmness: 'firmeza',
    position: 'posición',
  },
  opening: {
    categories: ['cerrado', 'medio', 'abierto'],
    explainer: '¿Tu cuello uterino está abierto o cerrado?',
  },
  firmness: {
    categories: ['duro', 'blando'],
    explainer: 'Cuando está duro, se siente como la punta de la nariz',
  },
  position: {
    categories: ['bajo', 'medio', 'alto'],
    explainer: '¿Qué tan arriba en la vagina está el cuello uterino?',
  },
  excludeExplainer:
    'Puedes excluir este valor si no quieres usarlo para la detección de fertilidad.',
  actionHint: 'Elige valores al menos para "Apertura" y "Firmeza" para guardar.',
}

export const mucus = {
  subcategories: {
    feeling: 'sensación',
    texture: 'textura',
  },
  feeling: {
    categories: ['seca', 'nada', 'húmeda', 'resbalosa'],
    explainer: '¿Cómo sientes la entrada de tu vagina?',
  },
  texture: {
    categories: ['nada', 'cremosa', 'clara de huevo'],
    explainer:
      'Al mirar y tocar tu moco cervical, ¿cuál lo describe mejor?',
  },
  excludeExplainer:
    'Puedes excluir este valor si no quieres usarlo para la detección de fertilidad',
  actionHint: 'Elige valores para "Sensación" y "Textura" para guardar.',
}

export const desire = {
  header: 'Intensidad',
  explainer: '¿Cómo calificarías tu deseo sexual?',
}

export const sex = {
  categories: {
    solo: 'en solitario',
    partner: 'con pareja',
  },
  header: 'Actividad',
  explainer: '¿Tuviste actividad sexual hoy?',
}

export const contraceptives = {
  categories: {
    condom: 'condón',
    pill: 'píldora',
    iud: 'DIU',
    patch: 'parche',
    ring: 'anillo',
    implant: 'implante',
    diaphragm: 'diafragma',
    none: 'ninguno',
    other: 'otro',
  },
  header: 'Anticonceptivos',
  explainer: '¿Usaste anticonceptivos?',
}

export const pain = {
  categories: {
    cramps: 'cólicos',
    ovulationPain: 'dolor de ovulación',
    headache: 'dolor de cabeza',
    backache: 'dolor de espalda',
    nausea: 'náuseas',
    tenderBreasts: 'senos sensibles',
    migraine: 'migraña',
    other: 'otro',
  },
  explainer: '¿Cómo se sintió tu cuerpo hoy?',
}

export const mood = {
  categories: {
    happy: 'feliz',
    sad: 'triste',
    stressed: 'estresada',
    balanced: 'equilibrada',
    fine: 'bien',
    anxious: 'ansiosa',
    energetic: 'enérgica',
    fatigue: 'fatiga',
    angry: 'enojada',
    other: 'otro',
  },
  explainer: '¿Cómo te sentiste hoy?',
}

export const temperature = {
  // disabled temporarily, TODO https://gitlab.com/bloodyhealth/drip/-/issues/545
  // outOfRangeWarning: 'Este valor de temperatura está fuera del rango actual de la gráfica de temperatura. Puedes cambiar el rango en los ajustes.',
  outOfRangeWarning:
    'Este valor de temperatura es demasiado alto o bajo para mostrarse en la gráfica de temperatura.',
  outOfAbsoluteRangeWarning:
    'Este valor de temperatura es demasiado alto o bajo para mostrarse en la gráfica de temperatura.',
  saveAnyway: 'Guardar de todos modos',
  temperature: {
    header: 'Temperatura',
    explainer:
      'Toma tu temperatura justo al despertar, antes de levantarte de la cama',
  },
  time: 'Hora',
  note: {
    header: 'Nota',
    explainer:
      '¿Hay algo que pudo haber influido en este valor, como dormir mal o consumir alcohol?',
  },
  exclude: {
    header: 'Excluir',
    explainer:
      'Puedes excluir este valor si no quieres usarlo para la detección de fertilidad',
  },
}

export const noteExplainer = '¿Quieres agregar algo sobre el día?'

export const general = {
  cycleDayNumber: 'Día del ciclo ',
  today: 'Hoy',
}

export const sharedDialogs = {
  cancel: 'Cancelar',
  areYouSureTitle: '¿Estás segura?',
  areYouSureToDelete: '¿Estás segura de que quieres eliminar este registro?',
  reallyDeleteData: 'Sí, estoy segura',
  save: 'Guardar',
  delete: 'Eliminar',
  disabledInfo: 'Faltan algunos datos',
}
