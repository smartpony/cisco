// Сделать неактивными поля ввода при снятии галочки.
// Входные параметры - чекбокс, передавший событие и поля, которые надо отключить.
// Также здесь снимается красное выделение, добавленное при неправильном заполнении.
function DisableInput(chkbox, inputs) {
    for(var id in inputs)
        if(chkbox.checked) {
            document.getElementById(inputs[id]).value = "";
            document.getElementById(inputs[id]).disabled = false;
        }
        else {
            document.getElementById(inputs[id]).disabled = true;
            document.getElementById(inputs[id]).style.border = "1px solid #cccccc";
            document.getElementById(inputs[id]).style.boxShadow = "";
        }
}

// Сделать неактивными поля при смене радиобаттона - PPPoE/WAN.
// Вынесено в отдельную функцию, чтобы не добавлять кучу проверок в предыдущую.
// Также здесь снимается красное выделение, добавленное при неправильном заполнении.
function DisableInputWAN(x1, x2) {
    document.getElementById("wan_mask").value = "";
    document.getElementById("wan_mask").disabled = x1;
    document.getElementById("wan_mask").style.border = "1px solid #cccccc";
    document.getElementById("wan_mask").style.boxShadow = "";

    document.getElementById("wan_gw").value = "";
    document.getElementById("wan_gw").disabled = x1;
    document.getElementById("wan_gw").style.border = "1px solid #cccccc";
    document.getElementById("wan_gw").style.boxShadow = "";

    document.getElementById("dialer_iface").value = "";
    document.getElementById("dialer_iface").disabled = x2;
    document.getElementById("dialer_iface").style.border = "1px solid #cccccc";
    document.getElementById("dialer_iface").style.boxShadow = "";

    document.getElementById("pppoe_login").value = "";
    document.getElementById("pppoe_login").disabled = x2;
    document.getElementById("pppoe_login").style.border = "1px solid #cccccc";
    document.getElementById("pppoe_login").style.boxShadow = "";

    document.getElementById("pppoe_pass").value = "";
    document.getElementById("pppoe_pass").disabled = x2;
    document.getElementById("pppoe_pass").style.border = "1px solid #cccccc";
    document.getElementById("pppoe_pass").style.boxShadow = "";
}

// Сделать неактивным чекбокс "Применить ACL", если снимается "Создать ACL".
function DisableChk(chkbox) {
    if(chkbox.id == "chk_create_acl")
        if(chkbox.checked) {
            document.getElementById("chk_apply_acl").disabled = false;
            document.getElementById("chk_apply_acl").checked = true;
        }
        else {
            document.getElementById("chk_apply_acl").disabled = true;
            document.getElementById("chk_apply_acl").checked = false;
        }

    if(chkbox.name == "chk_ipsec")
        if(chkbox.checked) {
            document.getElementById("chk_eigrp").disabled = false;
            document.getElementById("chk_eigrp").checked = true;
        }
        else {
            document.getElementById("chk_eigrp").disabled = true;
            document.getElementById("chk_eigrp").checked = false;
        }
}

// При вводе данных снимать красное выделение.
function ValidateInput(object) {
    if(!object.value) {
        object.style.border = "1px solid #cccccc";
        object.style.boxShadow = "";
    }
}

// Обработка сабмита формы. Если найдены пустые поля - выделить их красным и вернуть false.
function ValidateForm() {
    var res = true;
    var all_inputs = document.getElementsByTagName("input");
    for(var element in all_inputs)
        if(all_inputs[element].type == "text" && !all_inputs[element].disabled && !all_inputs[element].value) {
            all_inputs[element].style.border = "1px solid #f06565";
            all_inputs[element].style.boxShadow = "0 0 1px 1px #f5b3b3";
            res = false;
        }
    if(!res) {
        document.getElementById("tip").style.color = "#f06565";
        document.getElementById("tip").style.fontWeight = "bold";
    }
    return res;
}