(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "Åtkomst"
 ],
 "Account Expiration": [
  null,
  "Utgång av konto"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Kontot är inte tillgängligt eller kan inte redigeras."
 ],
 "Accounts": [
  null,
  "Konton"
 ],
 "Add key": [
  null,
  "Lägg till nyckel"
 ],
 "Add public key": [
  null,
  "Lägg till publik nyckel"
 ],
 "Adding key": [
  null,
  "Lägger till nyckel"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Auktoriserade publika SSH-nycklar"
 ],
 "Back to Accounts": [
  null,
  "Tilllbaka till konton"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Change": [
  null,
  "Ändra"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Confirm": [
  null,
  "Bekräfta"
 ],
 "Confirm New Password": [
  null,
  "Bekräfta nytt lösenord"
 ],
 "Container Administrator": [
  null,
  "Behållaradministratör"
 ],
 "Create": [
  null,
  "Skapa"
 ],
 "Create New Account": [
  null,
  "Skapa ett nytt konto"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Delete $0": [
  null,
  "Ta bort $0"
 ],
 "Delete Files": [
  null,
  "Ta bort filer"
 ],
 "Error": [
  null,
  "Fel"
 ],
 "Error saving authorized keys: ": [
  null,
  "Fel när auktoriserade nycklar sparades: "
 ],
 "Excellent password": [
  null,
  "Utmärkt lösenord"
 ],
 "Failed to change password": [
  null,
  "Misslyckades att ändra lösenord"
 ],
 "Failed to load authorized keys.": [
  null,
  "Misslyckades att läsa in auktoriserade nycklar."
 ],
 "Force Change": [
  null,
  "Framtvinga ändring"
 ],
 "Force password change": [
  null,
  "Framtvinga lösenordsändring"
 ],
 "Full Name": [
  null,
  "Fullständigt namn"
 ],
 "Image Builder": [
  null,
  "Avbildsbyggare"
 ],
 "Invalid expiration date": [
  null,
  "Felaktigt utgångsdatum"
 ],
 "Invalid key": [
  null,
  "Felaktig nyckel"
 ],
 "Invalid number of days": [
  null,
  "Felaktigt antal dagar"
 ],
 "Last Login": [
  null,
  "Senaste inloggning"
 ],
 "Local Accounts": [
  null,
  "Lokala konton"
 ],
 "Lock Account": [
  null,
  "Lås kontot"
 ],
 "Lock account on $0": [
  null,
  "Lås kontot på $0"
 ],
 "Logged In": [
  null,
  "Inloggad"
 ],
 "Never": [
  null,
  "Aldrig"
 ],
 "Never expire password": [
  null,
  "Låt aldrig lösenord gå ut"
 ],
 "Never lock account": [
  null,
  "Lås aldrig konton"
 ],
 "New Password": [
  null,
  "Nytt lösenord"
 ],
 "New password was not accepted": [
  null,
  "Det nya lösenordet godtogs inte"
 ],
 "No real name specified": [
  null,
  "Inget verkligt namn angivet"
 ],
 "No user name specified": [
  null,
  "Inget användarnamn angivet."
 ],
 "Old Password": [
  null,
  "Gammalt lösenord"
 ],
 "Old password not accepted": [
  null,
  "Det gamla lösenordet accepterades inte"
 ],
 "Password": [
  null,
  "Lösenord"
 ],
 "Password Expiration": [
  null,
  "Utgång av lösenord"
 ],
 "Password is not acceptable": [
  null,
  "Lösenordet är inte godtagbart"
 ],
 "Password is too weak": [
  null,
  "Lösenordet är för svagt"
 ],
 "Password must be changed": [
  null,
  "Lösenordet måste ändras"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Klistra in innehållet i din publika SSH-nyckelfil här"
 ],
 "Please specify an expiration date": [
  null,
  "Ange ett utgångsdatum"
 ],
 "Prompting via passwd timed out": [
  null,
  "Tidsgränsen överskreds vid fråga via passwd"
 ],
 "Require password change every $0 days": [
  null,
  "Begär en lösenordsändring var $0:e dag"
 ],
 "Require password change on $0": [
  null,
  "Begär lösenordsändring den $0"
 ],
 "Reset": [
  null,
  "Återställ"
 ],
 "Roles": [
  null,
  "Roller"
 ],
 "Server Administrator": [
  null,
  "Serveradministratör"
 ],
 "Set": [
  null,
  "Sätt"
 ],
 "Set Password": [
  null,
  "Sätt lösenord"
 ],
 "Terminate Session": [
  null,
  "Avsluta sessionen"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Kontot ”$0” kommer att tvingas ändra sitt lösenord vid nästa inloggning"
 ],
 "The key you provided was not valid.": [
  null,
  "Nyckeln du angav var inte giltig."
 ],
 "The passwords do not match": [
  null,
  "Lösenorden stämmer inte överens"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Användaren <b>$0</b> har inte rättighet att ändra konton"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Användarnamnet får endast bestå av bokstäver från a-z, siffror, punkter, bindestreck och understrykningstecken."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Det finns inga auktoriserade publika nycklar för detta konto."
 ],
 "This user name already exists": [
  null,
  "Detta användarnamn finns redan"
 ],
 "Unable to delete root account": [
  null,
  "Det går inte att ta bort root-kontot"
 ],
 "Unable to rename root account": [
  null,
  "Kan inte byta namn på root-kontot"
 ],
 "Unexpected error": [
  null,
  "Oväntat fel"
 ],
 "Unnamed": [
  null,
  "Namnlös"
 ],
 "User Name": [
  null,
  "Användarnamn"
 ],
 "Validating key": [
  null,
  "Validerar nyckeln"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Du har inte rättigheter att se de auktoriserade publika nycklarna för detta konto."
 ],
 "You must wait longer to change your password": [
  null,
  "Du måste vänta längre på att ändra ditt lösenord"
 ],
 "translatable": [
  null,
  "översättningsbar"
 ],
 "page-title\u0004Accounts": [
  null,
  "Konton"
 ]
}));
