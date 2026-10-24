import labels from './settings'
const settingsTitles = labels.menuItems

export const home = {
  unknown: '?',
  phase: (n) => `${['1.ª', '2.ª', '3.ª'][n - 1]} fase del ciclo`,
}

export const chart = {
  tutorial: 'Desliza la gráfica para ver más fechas.',
}

export const shared = {
  cancel: 'Cancelar',
  save: 'Guardar',
  dataSaved: 'Los datos del síntoma se guardaron',
  dataDeleted: 'Los datos del síntoma se eliminaron',
  errorTitle: 'Error',
  successTitle: 'Éxito',
  warning: 'Advertencia',
  incorrectPassword: 'Contraseña incorrecta',
  incorrectPasswordMessage: 'Esa contraseña es incorrecta.',
  tryAgain: 'Intentar de nuevo',
  ok: 'OK',
  confirmToProceed: 'Confirma para continuar',
  date: 'Fecha',
  loading: 'Cargando ...',
  noDataWarning: 'Aún no has ingresado datos.',
  noTemperatureWarning: 'Aún no has ingresado datos de temperatura.',
  noDataButtonText: 'Empezar a ingresar datos',
  enter: 'Ingresar',
  remove: 'Quitar',
  learnMore: 'Saber más',
}

export const headerTitles = {
  Home: 'Inicio',
  Calendar: 'Calendario',
  Chart: 'Gráfica',
  Stats: 'Estadísticas',
  SettingsMenu: 'Ajustes',
  Reminders: settingsTitles.reminders.name,
  NfpSettings: settingsTitles.nfpSettings.name,
  DataManagement: settingsTitles.dataManagement.name,
  Password: settingsTitles.password.name,
  About: 'Acerca de',
  License: 'Licencia',
  PrivacyPolicy: 'Política de privacidad',
  bleeding: 'Sangrado',
  temperature: 'Temperatura',
  mucus: 'Moco cervical',
  cervix: 'Cuello uterino',
  note: 'Nota',
  desire: 'Deseo',
  sex: 'Sexo',
  pain: 'Dolor',
  mood: 'Estado de ánimo',
}

export const stats = {
  cycleLengthExplainer: 'Estadísticas básicas sobre la duración de tus ciclos.',
  emptyStats: 'Se necesita al menos un ciclo completo para mostrar estadísticas.',
  daysLabel: 'días',
  basisOfStatsEnd: 'ciclos\ncompletos',
  averageLabel: 'Ciclo promedio',
  minLabel: `Más corto`,
  maxLabel: `Más largo`,
  stdLabel: `Desviación\nestándar`,
}

export const bleedingPrediction = {
  predictionInFuture: (startDays, endDays) =>
    `Es probable que tu próximo periodo empiece en ${startDays} a ${endDays} días.`,
  predictionStartedXDaysLeft: (numberOfDays) =>
    `Es probable que tu periodo empiece hoy o en los próximos ${numberOfDays} días.`,
  predictionStarted1DayLeft: 'Es probable que tu periodo empiece hoy o mañana.',
  predictionStartedNoDaysLeft: 'Es probable que tu periodo empiece hoy.',
  predictionInPast: (startDate, endDate) =>
    `Según tus datos registrados, era probable que tu periodo empezara entre el ${startDate} y el ${endDate}.`,
}

export const passwordPrompt = {
  title: 'Desbloquear app',
  enterPassword: 'Escribe tu contraseña aquí',
  deleteDatabaseExplainer:
    'Si olvidaste tu contraseña, lamentablemente no podemos recuperar tus datos, porque están cifrados con una contraseña que solo tú conoces. Sin embargo, puedes borrar todos tus datos cifrados y empezar de nuevo. Una vez borrados, si quieres puedes definir una nueva contraseña en los ajustes.',
  forgotPassword: '¿Olvidaste tu contraseña?',
  deleteDatabaseTitle: '¿Olvidaste tu contraseña?',
  deleteData: 'Sí, borrar todos mis datos',
  areYouSureTitle: '¿Estás segura?',
  areYouSure:
    '¿Estás completamente segura de que quieres borrar permanentemente todos tus datos?',
  reallyDeleteData: 'Sí, estoy segura',
}

export const fertilityStatus = {
  fertile: 'fértil',
  infertile: 'infértil',
  fertileUntilEvening: 'La fase fértil termina por la tarde',
  unknown:
    'No podemos mostrar información del ciclo porque no se han agregado datos del periodo.',
  preOvuText:
    'Con las reglas NFP, puedes asumir 5 días de infertilidad al inicio de tu ciclo, siempre que no observes moco cervical fértil ni valores fértiles del cuello uterino.',
  periOvuText:
    'No pudimos detectar a la vez un cambio de temperatura y un cambio en el moco cervical o en el cuello uterino.',
  periOvuUntilEveningText: (tempRule) => {
    return (
      'Detectamos un cambio de temperatura (' +
      ['regla de temperatura regular', 'regla de temperatura 1.ª excepción', 'regla de temperatura 2.ª excepción'][tempRule] +
      '), así como un cambio en el moco cervical/cuello uterino según las reglas NFP. Hoy por la tarde puedes asumir infertilidad, pero ' +
      'recuerda siempre verificarlo por ti misma. Asegúrate de que los datos tengan sentido para ti.'
    )
  },
  postOvuText: (tempRule) => {
    return (
      'Detectamos un cambio de temperatura (' +
      ['regla de temperatura regular', 'regla de temperatura 1.ª excepción', 'regla de temperatura 2.ª excepción'][tempRule] +
      '), así como un cambio en el moco cervical/cuello uterino según las reglas NFP. Puedes asumir infertilidad, pero recuerda siempre ' +
      'verificarlo por ti misma. Asegúrate de que los datos tengan sentido para ti.'
    )
  },
}
