!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("date-fns")):"function"==typeof define&&define.amd?define(["date-fns"],n):(e.__vee_validate_locale__hu=e.__vee_validate_locale__hu||{},e.__vee_validate_locale__hu.js=n(e.dateFns))}(this,function(e){"use strict";var n=function(e,n){var t=n;return e.split(".").every(function(e){return!!Object.prototype.hasOwnProperty.call(t,e)&&(t=t[e],!0)})},t={name:"hu",messages:{after:function(e,n){return"A(z) "+e+" legalább "+n[0]+" utáni dátum kell, hogy legyen."},alpha_dash:function(e){return"A(z) "+e+" kizárólag betűket, számokat, kötőjeleket és alulvonásokat tartalmazhat."},alpha_num:function(e){return"A(z) "+e+" kizárólag betűket és számokat tartalmazhat."},alpha_spaces:function(e){return"A(z) "+e+" kizárólag betűket és szóközöket tartalmazhat."},alpha:function(e){return"A(z) "+e+" kizárólag betűket tartalmazhat."},before:function(e,n){return"A(z) "+e+" legalább "+n[0]+" előtti dátum kell, hogy legyen."},between:function(e,n){return"A(z) "+e+" "+n[0]+" és "+n[1]+" között kell, hogy legyen."},confirmed:function(e){return"A(z) "+e+" nem egyezik a megerősítéssel."},credit_card:function(e){return"A(z) "+e+" nem érvényes."},date_between:function(e,n){return"A(z) "+e+" "+n[0]+" és "+n[1]+" közötti dátum kell, hogy legyen."},date_format:function(e,n){return"A(z) "+e+" nem egyezik az alábbi dátum formátummal "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=["*"]);var t=n[0];return"The "+e+" must be numeric and may contain "+("*"===t?"":t)+" decimal points."},digits:function(e,n){return"A(z) "+e+" "+n[0]+" számjegyű kell, hogy legyen."},dimensions:function(e,n){return"A(z) "+e+" felbontása "+n[0]+" és "+n[1]+" pixel között kell, hogy legyen."},email:function(e){return"A(z) "+e+" nem érvényes email formátum."},ext:function(e){return"A(z) "+e+" nem érvényes fájl."},image:function(e){return"A(z) "+e+" képfálj kell, hogy legyen."},in:function(e){return"A kiválaszott "+e+" érvénytelen."},ip:function(e){return"A(z) "+e+" érvényes IP cím kell, hogy legyen."},max:function(e,n){return"A(z) "+e+" értéke nem lehet nagyobb mint "+n[0]+"."},max_value:function(e,n){return"A(z) "+e+" értéke "+n[0]+" vagy kevesebb lehet."},mimes:function(e){return"A(z) "+e+" kizárólag érvényes fájlformátumok egyike lehet."},min:function(e,n){return"A(z) "+e+" értéke nem lehet kisebb mint "+n[0]+"."},min_value:function(e,n){return"A(z) "+e+" értéke "+n[0]+" vagy több lehet."},not_in:function(e){return"A(z) "+e+" értéke érvénytelen."},numeric:function(e){return"A(z) "+e+" értéke szám kell, hogy legyen."},regex:function(e){return"A(z) "+e+" formátuma érvénytelen."},required:function(e){return"A(z) "+e+" megadása kötelező."},size:function(e,n){return"A(z) "+e+" méretének "+n[0]+" kilobájtnál kisebbnek kell lennie."},url:function(e){return"A(z) "+e+" érvénytelen link."}},attributes:{}};return function(e){var t=null;return"undefined"!=typeof window&&(t=window),"undefined"!=typeof global&&(t=global),!(!t||!n(e,t))}("VeeValidate.Validator")&&VeeValidate.Validator.addLocale(t),t});