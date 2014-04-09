#
# Обработка запросов клиентов
#

from flask import render_template, redirect, url_for, request, abort
from flask.ext.login import login_user, logout_user, current_user, login_required

# Импорт других файлов проекта
from app import app
from forms import BuilderForm


# --- КОНСТРУКТОР КОНФИГА -----------------------
@app.route('/', methods=['GET', 'POST'])
def builder():
    form = BuilderForm()
    radio_wan = list(form.radio_wan)

    if request.method == 'POST':
        # Если IPSec не включен, то поле TUNNEL_DEST не активно,
        # но оно всё равно нужно для ACL
        tunnel_dest = form.tunnel_dest.data or 'any'

        return(render_template('config.html',
            hostname = form.hostname.data,
            lan_iface = form.lan_iface.data,
            lan_ip = form.lan_ip.data,
            lan_mask = form.lan_mask.data,
            wan_iface = form.wan_iface.data,
            wan_ip = form.wan_ip.data,
            wan_mask = form.wan_mask.data,
            wan_gw = form.wan_gw.data,
            dialer_iface = form.dialer_iface.data,
            pppoe_login = form.pppoe_login.data,
            pppoe_pass = form.pppoe_pass.data,
            tunnel_iface = form.tunnel_iface.data,
            tunnel_pass = form.tunnel_pass.data,
            tunnel_ip = form.tunnel_ip.data,
            tunnel_mask = form.tunnel_mask.data,
            tunnel_dest = tunnel_dest,
            chk_lan = form.chk_lan.data,
            chk_ipsec = form.chk_ipsec.data,
            chk_eigrp = form.chk_eigrp.data,
            chk_logs = form.chk_logs.data,
            chk_create_acl = form.chk_create_acl.data,
            chk_aaa = form.chk_aaa.data,
            chk_tacacs = form.chk_tacacs.data,
            chk_snmp = form.chk_snmp.data,
            chk_proc = form.chk_proc.data,
            chk_apply_acl = form.chk_apply_acl.data))

    # Вернуть страницу
    return(render_template('builder.html',
        form=form,
        radio_wan=radio_wan))