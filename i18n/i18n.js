import moment from 'moment'
import { LocaleConfig } from 'react-native-calendars'
import 'moment/locale/es'
moment.locale('es')
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// translation files
import en from './en.json';
import es from './es.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

LocaleConfig.locales['es'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
}
LocaleConfig.defaultLocale = 'es'

export default i18n;
