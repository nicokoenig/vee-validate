!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("date-fns")):"function"==typeof define&&define.amd?define(["date-fns"],n):(e.__vee_validate_locale__ro=e.__vee_validate_locale__ro||{},e.__vee_validate_locale__ro.js=n(e.dateFns))}(this,function(e){"use strict";var n=function(e){var n=["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"],i=0===(e=1024*Number(e))?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,i)).toFixed(2)+" "+n[i]},i=function(e,n){var i=n;return e.split(".").every(function(e){return!!Object.prototype.hasOwnProperty.call(i,e)&&(i=i[e],!0)})},t={name:"ro",messages:{after:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]+"."},alpha_dash:function(e){return"Câmpul "+e+' poate conține caracter alfanumerice, cât și caracterele "-" sau "_".'},alpha_num:function(e){return"Câmpul "+e+" poate conține doar caracter alfanumerice."},alpha_spaces:function(e){return"Câmpul "+e+" poate conține literele alfabetului cât și spații."},alpha:function(e){return"Câmpul "+e+" poate conține doar literele alfabetului."},before:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]+"."},between:function(e,n){return"Câmpul "+e+" trebuie să fie între "+n[0]+" și "+n[1]+"."},confirmed:function(e){return"Câmpul "+e+" nu coincide."},credit_card:function(e){return"Câmpul "+e+" este invalid."},date_between:function(e,n){return"Câmpul "+e+" trebuie să fie între "+n[0]+" și "+n[1]+"."},date_format:function(e,n){return"Câmpul "+e+" trebuie să fie în următorul format "+n[0]+"."},decimal:function(e,n){return void 0===n&&(n=["*"]),"Câmpul "+e+" trebuie să fie numberic și poate conține "+("*"===n[0]?"":decimale)+" zecimale."},digits:function(e,n){return"Câmpul "+e+" trebuie să fie numeric și să conțină exact "+n[0]+" caractere."},dimensions:function(e,n){return"Câmpul "+e+" trebuie să fie "+n[0]+" pixeli lungime și "+n[1]+" pixeli înălțime."},email:function(e){return"Câmpul "+e+" trebuie să conțină un email valid."},ext:function(e){return"Câmpul "+e+" trebuie să fie un nume de fișier valid."},image:function(e){return"Câmpul "+e+" trebuie să fie o imagine."},in:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă."},ip:function(e){return"Câmpul "+e+" trebuie să conțină o adresa IP vaidă."},max:function(e,n){return"Câmpul "+e+" nu poate fi mai mare de "+n[0]+" caractere."},max_value:function(e,n){return"Câmpul "+e+" trebuie să fie maxim "+n[0]+"."},mimes:function(e){return"Câmpul "+e+" trebuie să conțină un fișier cu extensie validă."},min:function(e,n){return"Câmpul "+e+" trebuie să fie cel puțin "+n[0]+" caractere."},min_value:function(e,n){return"Câmpul "+e+"trebuie să fie cel puțin "+n[0]+"."},not_in:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă."},numeric:function(e){return"Câmpul "+e+" poate conține doar valori numerice."},regex:function(e){return"Formatul câmpului "+e+" este invalid."},required:function(e){return"Câmpul "+e+" este necesar."},size:function(e,i){var t=i[0];return"Câmpul "+e+" nu trebuie să depășească "+n(t)+"."},url:function(e){return"Câmpul "+e+" nu este un URL valid."}},attributes:{}};return function(e){var n=null;return"undefined"!=typeof window&&(n=window),"undefined"!=typeof global&&(n=global),!(!n||!i(e,n))}("VeeValidate.Validator")&&VeeValidate.Validator.addLocale(t),t});