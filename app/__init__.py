#
# Инициализация приложения
#

# Основной объект приложения Flask
from flask import Flask

# Создать экземпляр класса, который будет WSGI-приложением,
# аргумент помогает определить роль (место вызова) - либо это
# модуль, либо standalone-приложение
app = Flask(__name__)

# Отключение CSRF для WTF-Forms
app.config['CSRF_ENABLED'] = True
app.config['SECRET_KEY'] = 'just qwerty'

# Импорт обработчиков запросов клиентов
from app import views