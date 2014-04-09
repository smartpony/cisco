#
# Описание форм для ввода данных
#

from flask_wtf import Form
from wtforms import TextField, BooleanField, RadioField

class BuilderForm(Form):
    hostname = TextField()
    lan_iface = TextField()
    lan_ip = TextField()
    lan_mask = TextField()
    wan_iface = TextField()
    wan_ip = TextField()
    wan_mask = TextField()
    wan_gw = TextField()
    dialer_iface = TextField()
    pppoe_login = TextField()
    pppoe_pass = TextField()
    tunnel_iface = TextField()
    tunnel_pass = TextField()
    tunnel_ip = TextField()
    tunnel_mask = TextField()
    tunnel_dest = TextField()

    chk_lan = BooleanField()
    chk_ipsec = BooleanField()
    chk_eigrp = BooleanField()
    chk_logs = BooleanField()
    chk_create_acl = BooleanField()
    chk_aaa = BooleanField()
    chk_tacacs = BooleanField()
    chk_snmp = BooleanField()
    chk_proc = BooleanField()
    chk_apply_acl = BooleanField()

    # Формат: (value, label)
    radio_wan = RadioField(choices=(('static', 'Static WAN'), ('pppoe', 'PPPoE WAN')))