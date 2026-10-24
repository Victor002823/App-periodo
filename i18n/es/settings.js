import links from './links'

export default {
  title: 'Ajustes',
  menuItems: {
    reminders: {
      name: 'Recordatorios',
      text: 'activar/desactivar recordatorios',
    },
    nfpSettings: {
      name: 'Ajustes NFP',
      text: 'define cómo quieres usar NFP',
    },
    dataManagement: {
      name: 'Datos',
      text: 'importar, exportar o borrar tus datos',
    },
    password: {
      name: 'Contraseña',
      text: '',
    },
    about: 'Acerca de',
    license: 'Licencia',
    settings: 'Ajustes',
    privacyPolicy: 'Política de privacidad',
  },
  export: {
    errors: {
      noData: 'No hay datos para exportar',
      couldNotConvert: 'No se pudieron convertir los datos a CSV',
      problemSharing: 'Hubo un problema al compartir el archivo de exportación',
    },
    title: 'Exportación de mis datos de drip.',
    subject: 'Exportación de mis datos de drip.',
    button: 'Exportar datos',
    segmentExplainer:
      'Exporta los datos en formato CSV como respaldo o para usarlos en otro lugar',
  },
  import: {
    button: 'Importar datos',
    title: '¿Conservar los datos existentes?',
    message: `Hay dos opciones para la importación:
1. Conservar los días de ciclo existentes y reemplazar solo los del archivo importado.
2. Borrar todos los días de ciclo existentes e importar los días de ciclo del archivo.`,
    replaceOption: 'Importar y reemplazar',
    deleteOption: 'Importar y borrar lo existente',
    errors: {
      couldNotOpenFile: 'No se pudo abrir el archivo',
      postFix: 'No se importó ni se cambió ningún dato',
      futureEdit: 'Las fechas futuras solo pueden contener una nota, ningún otro síntoma',
    },
    success: {
      message: 'Datos importados correctamente',
    },
    segmentExplainer: 'Importa datos en formato CSV',
  },
  deleteSegment: {
    title: 'Borrar datos de la app',
    explainer: 'Borra los datos de la app de este teléfono',
    question: '¿Quieres borrar los datos de la app de este teléfono?',
    message:
      'Ten en cuenta que borrar los datos de la app es permanente e irreversible. Recomendamos exportar los datos existentes antes de borrarlos.',
    confirmation: 'Borrar datos de la app permanentemente',
    errors: {
      couldNotDeleteFile: 'No se pudieron borrar los datos',
      postFix: 'No se borró ni se cambió ningún dato',
      noData: 'No hay datos para borrar',
    },
    success: {
      message: 'Datos de la app borrados correctamente',
    },
  },
  tempScale: {
    segmentTitle: 'Escala de temperatura',
    segmentExplainer:
      'Cambia el valor mínimo y máximo de la gráfica de temperatura',
    min: 'Mín',
    max: 'Máx',
    loadError: 'No se pudo cargar la escala de temperatura guardada',
    saveError: 'No se pudo guardar la escala de temperatura',
  },
  tempReminder: {
    title: 'Recordatorio de temperatura',
    noTimeSet: 'Define una hora para un recordatorio diario de tomar tu temperatura',
    timeSet: (time) => `Recordatorio diario configurado a las ${time}`,
    notification: 'Registra tu temperatura de la mañana',
  },
  periodReminder: {
    title: 'Recordatorio del próximo periodo',
    reminderText:
      'Recibe una notificación 3 días antes de que probablemente empiece tu próximo periodo.',
    notification: (daysToEndOfPrediction) =>
      `Es probable que tu próximo periodo empiece en 3 a ${daysToEndOfPrediction} días.`,
  },
  useCervix: {
    title: 'Síntoma secundario',
    cervixModeOn:
      'Se están usando los valores del cuello uterino para la detección sintotérmica de fertilidad. Aquí puedes cambiar para usar los valores del moco cervical.',
    cervixModeOff:
      'Por defecto se usan los valores del moco cervical para la detección sintotérmica de fertilidad. Aquí puedes cambiar para usar los valores del cuello uterino.',
  },
  passwordSettings: {
    title: 'Contraseña de la app',
    explainerDisabled:
      'Cifra la base de datos de la app con una contraseña. Tendrás que introducirla cada vez que se abra la app.',
    explainerEnabled:
      'La protección con contraseña y el cifrado de la base de datos están activados',
    setPassword: 'Definir contraseña',
    savePassword: 'Guardar contraseña',
    changePassword: 'Cambiar contraseña',
    deletePassword: 'Borrar contraseña',
    enterCurrent: 'Introduce tu contraseña actual',
    enterNew: 'Introduce una contraseña nueva',
    confirmPassword: 'Confirma tu contraseña',
    passwordsDontMatch: 'La contraseña y la confirmación no coinciden',
    backupReminder: {
      title: 'Lee esto antes de cambiar tu contraseña',
      message: `
Por seguridad, respalda tus datos con la función de exportar antes de hacer cambios en tu contraseña.\n
¡Mientras más larga, mejor! Considera usar una frase de contraseña.\n
Asegúrate también de no perder tu contraseña. Si la pierdes, no hay forma de recuperar tus datos.\n
Cambiar tu contraseña mantendrá tus datos como estaban antes.\n`,
    },
    deleteBackupReminder: {
      title: 'Lee esto antes de borrar tu contraseña',
      message: `
Borrar tu contraseña significa que tus datos dejarán de estar cifrados.\n
Por seguridad, respalda tus datos con la función de exportar antes de borrar tu contraseña.\n
Cambiar tu contraseña mantendrá tus datos como estaban antes y reiniciará la app.\n
    `,
    },
    backupReminderAppendix: {
      android:
        'Después de actualizar la contraseña, la app se reiniciará automáticamente.',
      ios: 'Después de actualizar la contraseña, la app se cerrará automáticamente. Ábrela de nuevo manualmente.',
    },
  },
  aboutSection: {
    title: 'Acerca de',
    text: `Ten en cuenta que tus datos se guardan localmente en tu teléfono y no en un servidor. Esto significa que nadie más puede leer tus datos a menos que tenga acceso a tu teléfono. Queremos asegurarnos de que mantengas el control de tus datos. Si planeas cambiar o restablecer tu teléfono, recuerda exportar tus datos antes. Después puedes reinstalar la app e importar tus datos.\n\nSi tienes algún problema técnico, no dudes en contactarnos por correo. También puedes contribuir al código en Gitlab y visitar nuestro sitio web.`,
  },
  philosophy: {
    title: 'Filosofía',
    text: `drip. hace predicciones de periodo por ti y te ayuda a aplicar las reglas NFP de conciencia de fertilidad. Pero recuerda que esta app la hacen personas, y las personas se equivocan. Piensa siempre por ti misma: "¿Esto tiene sentido?" Recuerda: ¡no necesitas una app para entender tu ciclo! Sin embargo, drip. quiere apoyarte y hacer el registro del periodo más fácil, transparente y seguro.`,
  },
  version: {
    title: 'Versión',
  },
  website: {
    title: 'Sitio web',
  },
  preOvu: {
    title: 'Días infértiles al inicio del ciclo',
    note: `drip. aplica las reglas NFP para calcular los días infértiles al inicio del ciclo (consulta ${links.wiki.url} para más información). Sin embargo, drip. actualmente no aplica la llamada regla de los 20 días, que determina los días infértiles al inicio del ciclo a partir de la duración de ciclos anteriores cuando no hay información sintotérmica previa.`,
  },
  credits: {
    title: 'Créditos',
    note: `Queremos al equipo de drip. Gracias y mucho <3 a todos nuestros condriputores. Gracias a Paula Härtel por los iconos de seguimiento de síntomas. Todos los demás iconos son de ${links.smashicons.url}, ${links.pause08.url}, ${links.kazachek.url} y ${links.freepik.url} en ${links.flaticon.url}.`,
  },
  donate: {
    title: 'Apóyanos',
    note: `Los drips desarrollamos esta app de forma voluntaria. Siempre agradecemos el apoyo: contribuir al código, dar opiniones, sugerir mejoras o funciones, probar la app o donar. Nos ayuda y motiva a mantener la app y desarrollar nuevas funciones. ¡Gracias por tu apoyo!`,
  },
}
