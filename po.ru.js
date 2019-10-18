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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "Доступ"
 ],
 "Account Expiration": [
  null,
  "Срок действия учётной записи"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Учётная запись недоступна или не может быть изменена."
 ],
 "Accounts": [
  null,
  "Учётные записи"
 ],
 "Add key": [
  null,
  "Добавить ключ"
 ],
 "Add public key": [
  null,
  "Добавить открытый ключ"
 ],
 "Adding key": [
  null,
  "Добавление ключа"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Авторизованные открытые SSH-ключи"
 ],
 "Back to Accounts": [
  null,
  "Вернуться к учётным записям"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Change": [
  null,
  "Изменить"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Confirm": [
  null,
  "Подтверждение"
 ],
 "Confirm New Password": [
  null,
  "Подтвердите новый пароль"
 ],
 "Container Administrator": [
  null,
  "Администратор контейнера"
 ],
 "Create": [
  null,
  "Создать"
 ],
 "Create New Account": [
  null,
  "Создать учётную запись"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete $0": [
  null,
  "Удалить $0"
 ],
 "Delete Files": [
  null,
  "Удалить файлы"
 ],
 "Error": [
  null,
  "Ошибка"
 ],
 "Error saving authorized keys: ": [
  null,
  "Ошибка при сохранении авторизованных ключей: "
 ],
 "Excellent password": [
  null,
  "Отличный пароль"
 ],
 "Failed to change password": [
  null,
  "Не удалось изменить пароль"
 ],
 "Failed to load authorized keys.": [
  null,
  "Не удалось загрузить авторизованные ключи."
 ],
 "Force Change": [
  null,
  "Принудительно изменить"
 ],
 "Force password change": [
  null,
  "Принудительно изменить пароль"
 ],
 "Full Name": [
  null,
  "Полное имя"
 ],
 "Image Builder": [
  null,
  "Image Builder"
 ],
 "Invalid expiration date": [
  null,
  "Неверная дата окончания срока действия"
 ],
 "Invalid key": [
  null,
  "Недопустимый ключ"
 ],
 "Invalid number of days": [
  null,
  "Недопустимое количество дней"
 ],
 "Last Login": [
  null,
  "Последний вход"
 ],
 "Local Accounts": [
  null,
  "Локальные учётные записи"
 ],
 "Lock Account": [
  null,
  "Заблокировать учётную запись"
 ],
 "Lock account on $0": [
  null,
  "Дата блокировки учётной записи: $0"
 ],
 "Logged In": [
  null,
  "Вход выполнен"
 ],
 "Never": [
  null,
  "Никогда"
 ],
 "Never expire password": [
  null,
  "Пароль с неограниченным сроком действия"
 ],
 "Never lock account": [
  null,
  "Учётная запись без срока действия"
 ],
 "New Password": [
  null,
  "Новый пароль"
 ],
 "New password was not accepted": [
  null,
  "Новый пароль не был принят"
 ],
 "No real name specified": [
  null,
  "Не указано настоящее имя"
 ],
 "No user name specified": [
  null,
  "Не указано имя пользователя"
 ],
 "Old Password": [
  null,
  "Старый пароль"
 ],
 "Old password not accepted": [
  null,
  "Старый пароль не был принят"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Password Expiration": [
  null,
  "Срок действия пароля"
 ],
 "Password is not acceptable": [
  null,
  "Недопустимый пароль"
 ],
 "Password is too weak": [
  null,
  "Пароль недостаточно надёжен"
 ],
 "Password must be changed": [
  null,
  "Необходимо изменить пароль"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Вставьте сюда содержимое вашего файла открытого SSH-ключа."
 ],
 "Please specify an expiration date": [
  null,
  "Укажите дату окончания срока действия"
 ],
 "Prompting via passwd timed out": [
  null,
  "Превышено время ожидания запроса по passwd"
 ],
 "Require password change every $0 days": [
  null,
  "Требовать изменения пароля каждые $0 дней"
 ],
 "Require password change on $0": [
  null,
  "Потребовать смену пароля $0"
 ],
 "Reset": [
  null,
  "Сброс"
 ],
 "Roles": [
  null,
  "Роли"
 ],
 "Server Administrator": [
  null,
  "Администратор сервера"
 ],
 "Set": [
  null,
  "Настроить"
 ],
 "Set Password": [
  null,
  "Задать пароль"
 ],
 "Terminate Session": [
  null,
  "Завершить сеанс"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Для учётной записи «$0» будет запрошено принудительное изменение пароля при следующем входе в систему"
 ],
 "The key you provided was not valid.": [
  null,
  "Предоставленный ключ недействителен."
 ],
 "The passwords do not match": [
  null,
  "Пароли не совпадают"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Пользователю <b>$0</b> запрещено изменять учётные записи"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Имя пользователя может содержать только латинские буквы a-z, цифры, точки, тире и символы подчёркивания."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Для этой учётной записи нет авторизованных открытых ключей."
 ],
 "This user name already exists": [
  null,
  "Такое имя пользователя уже существует"
 ],
 "Unable to delete root account": [
  null,
  "Невозможно удалить учётную запись суперпользователя"
 ],
 "Unable to rename root account": [
  null,
  "Невозможно переименовать учётную запись суперпользователя"
 ],
 "Unexpected error": [
  null,
  "Непредвиденная ошибка"
 ],
 "Unnamed": [
  null,
  "Без названия"
 ],
 "User Name": [
  null,
  "Имя пользователя"
 ],
 "Validating key": [
  null,
  "Проверка ключа"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Отсутствует разрешение на просмотр авторизованных открытых ключей для этой учётной записи."
 ],
 "You must wait longer to change your password": [
  null,
  "Для изменения пароля необходимо подождать"
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Учётные записи"
 ]
}));
