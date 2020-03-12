function XmlHttp() {
    var t;
    try {
        t = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (r) {
        try {
            t = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
            t = !1
        }
    }
    return t || "undefined" == typeof XMLHttpRequest || (t = new XMLHttpRequest), t
}

function ajax(t) {
    var r = document.getElementById("hres").value,
        e = '<span class="imgst" style="font-size:15px;color:#444444;">List has ' + r + " entries: </span><br />",
        n = $("#listobj").val(),
        a = JSON.stringify(n);
    if (t = {
            url: "/php/cope.php",
            statbox: "status",
            method: "POST",
            data: {
                myjstr: a,
                hres: document.getElementById("hres").value,
                initnum: document.getElementById("robj").value,
                curr_id: document.getElementById("nobj").value,
                p_c: document.getElementById("selclc").value,
                t_f: document.getElementById("comrep").value
            },
            success: function (t) {
                if ("Please type a number!" == t) $(".notes").show(), document.getElementById("status").innerHTML = t;
                else if ("Error! The result is too large ( >100000 )" == t) $(".notes").show(), document.getElementById("status").innerHTML = t;
                else {
                    var r = $.parseJSON(t),
                        n = [];
                    for (var a in r) {
                        var o = r[a].join(" ");
                        n.push(o)
                    }
                    var s = n.join(", ");
                    $(".notes").show(), document.getElementById("status").innerHTML = e + s
                }
            }
        }, window.XMLHttpRequest && (req = new XmlHttp), method = t.method ? t.method.toUpperCase() : "POST", "GET" == method) send = null, t.url = t.url + "&ajax=true";
    else {
        send = "";
        for (var o in t.data) send += o + "=" + t.data[o] + "&";
        send += "ajax=true"
    }
    req.open(method, t.url, !0), t.statbox && (document.getElementById(t.statbox).innerHTML = '<img src="/i/prload.gif">'), req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), req.send(send), req.onreadystatechange = function () {
        4 == req.readyState && 200 == req.status && t.success && t.success(req.responseText)
    }
}

function Reset() {
    resultBlock.addClass(hiddenClass), document.getElementById("blhide").style.display = "none", document.calculator.reset(), $("#CPnres").html(""), $("#nobj").val(""), $("#robj").val(""), $("#hres").val("")
}

function Calc_CPnr() {
    var t = "";
    document.getElementById("CPnres").innerHTML = "";
    var r = 1 * $("#selclc").val(),
        e = 1 * $("#comrep").val(),
        n = $("#robj").val(),
        a = $("#nobj").val(),
        o = Math.abs(parseInt($("#robj").val())),
        s = Math.abs(parseInt($("#nobj").val()));
    if (!a) return void alert("Error! Enter n");
    if (!n) return void alert("Error! Enter r");
    if (o > s) return void alert("Error! r needs to be smaller than n");
    document.getElementById("blhide").style.display = "block";
    var d = "<table class='GoodResults' width='100%' align='center'>";
    if (d += "<tr><td><h3 style='margin-left:0;margin-top:0;font-weight:bold'>Solution:</h3></td></tr>", d += "<tr><td colspan='2'> We have n = " + s + " and r = " + o + "</td></tr>", "1" == r && 0 == e ? (d += "<tr><td colspan='2'> <b>Permutation Formula (no repetition is allowed)</b></td> </tr>", d += "<tr><td>P(n, r) = n! / (n - r)!</td> <td>&nbsp;</td></tr>", t = "The number of permutations (without repetition) is ") : "1" == r && 1 == e && (d += "<tr><td colspan='2'> <b>Permutation Formula (repetition is allowed)</b></td> </tr>", d += "<tr><td><span style='text-decoration:overline'>P</span>(n, r) = n<sup>r</sup></td> <td>&nbsp;</td></tr>", t = "The number of permutations (with repetition) is "), "0" == r && 0 == e ? (d += "<tr><td colspan='2'> <b>Combination Formula (no repetition is allowed)</b></td> </tr>", d += "<tr><td>C(n, r) = n! / (r! * (n - r)!)</td><td>&nbsp;</td></tr>", t = "The number of combinations (without repetition) is ") : "0" == r && 1 == e && (d += "<tr><td colspan='2'> <b>Combination Formula (repetition is allowed)</b></td> </tr>", d += "<tr><td><span style='text-decoration:overline'>C</span>(n, r) = (r + n - 1)! / (r! * (n - 1)!)</td><td>&nbsp;</td></tr>", t = "The number of combinations (with repetition) is "), "1" == r && 1 == e) {
        var l = "";
        l = s + "<sup>" + o + "</sup>";
        var i = Math.pow(s, o);
        d += "<tr><td colspan='2'><b>Find n<sup>r</sup></b></td> </tr>", d += "<tr><td colspan='1'>" + l + " = " + i + "</td></tr>"
    }
    if ("0" == r && 1 == e) {
        var c = o + s - 1,
            p = "";
        p = c + "! = ";
        for (var u = 1; c >= u; u++) p += c > u ? u + "&times;" : u;
        var m = nfactorial(c);
        d += "<tr><td colspan='2'><b>Find (r + n - 1)!</b></td> </tr>", d += "<tr><td colspan='2'>(r + n - 1)! = (" + o + " + " + s + " - 1)! = " + (o + s - 1) + "!</td></tr>", d += "<tr><td colspan='2'>" + p + "</td></tr>", d += "<tr><td colspan='2'> = " + m + "</td></tr>"
    }
    if ("1" == r && 0 == e || "0" == r && 0 == e) {
        var v = "";
        v = s + "! = ";
        for (var b = 1; s >= b; b++) v += s > b ? b + "&times;" : b;
        var f = nfactorial(s);
        if (d += "<tr><td colspan='2'><b>Find n!</b></td> </tr>", d += "<tr><td colspan='1'>" + v + "</td></tr>", d += "<tr><td colspan='2'> = " + f + "</td></tr>", "0" == r && 0 == e) {
            var h = "";
            h = o + "! = ";
            for (var y = 1; o >= y; y++) h += o > y ? y + "&times;" : y;
            var w = nfactorial(o);
            d += "<tr><td colspan='2'> <b>Find r!</b> </td> </tr>", d += "<tr><td colspan='2'>" + h + "</td></tr>", d += "<tr><td colspan='2'> = " + w + "</td></tr>"
        }
        var c = s - o,
            p = "";
        p = c + "! = ";
        for (var u = 1; c >= u; u++) p += c > u ? u + "&times;" : u;
        var g = nfactorial(c);
        d += "<tr><td colspan='2'><b>Find (n - r)!</b></td> </tr>", d += "<tr><td colspan='2'>(n - r)! = (" + s + " - " + o + ")! = " + (s - o) + "!</td></tr>", d += "<tr><td colspan='2'>" + p + "</td></tr>", d += "<tr><td colspan='2'> = " + g + "</td></tr>"
    }
    for (var E = 1, C = s; C >= 1; C--) E *= C;
    for (var I = 1, M = o; M >= 1; M--) I *= M;
    for (var T = s - o, x = 1, B = T; B >= 1; B--) x *= B;
    var P = E / x;
    if ("1" == r && 0 == e) {
        var j = fnrnd(P, 3);
        d += "<tr><td colspan='2'><b>Result</b></td></tr>", d += "<tr><td colspan='2'>P(n, r) = n! / (n - r)!</td></tr>", d += "<tr><td colspan='2'>P(" + s + ", " + o + ") = " + f + "/" + g + "</td></tr>", d += "<tr><td colspan='2'><span style='color:red; font-weight:bold'>P(" + s + ", " + o + ") = " + j + "</span></td></tr>", $("#hres").val(j)
    } else if ("1" == r && 1 == e) {
        var j = fnrnd(P, 3);
        d += "<tr><td colspan='2'><b>Result</b></td></tr>", d += "<tr><td colspan='2'><span style='text-decoration:overline'>P</span>(n, r) = n<sup>r</sup></td></tr>", d += "<tr><td colspan='2'><span style='text-decoration:overline'>P</span>(" + s + ", " + o + ") = " + l + " </td></tr>", d += "<tr><td colspan='2'><span style='color:red; font-weight:bold'><span style='text-decoration:overline'>P</span>(" + s + ", " + o + ") = " + i + "</span></td></tr>", $("#hres").val(i)
    }
    if ("0" == r && 1 == e) {
        var h = "";
        h = o + "! = ";
        for (var y = 1; o >= y; y++) h += o > y ? y + "&times;" : y;
        var w = nfactorial(o);
        d += "<tr><td colspan='2'> <b>Find r!</b> </td> </tr>", d += "<tr><td colspan='2'>" + h + "</td></tr>", d += "<tr><td colspan='2'> = " + w + "</td></tr>";
        var v = "";
        v = "" + (s - 1) + "! = ";
        for (var b = 1; s - 1 >= b; b++) v += s - 1 > b ? b + "&times;" : b;
        var H = nfactorial(s - 1);
        d += "<tr><td colspan='2'><b>Find (n - 1)!</b></td> </tr>", d += "<tr><td colspan='2'>(n - 1)! = (" + s + " - 1)! = " + (s - 1) + "!</td></tr>", d += "<tr><td colspan='1'>" + v + "</td></tr>", d += "<tr><td colspan='2'> = " + H + "</td></tr>";
        var q = 1 * m / (w * H),
            L = fnrnd(q, 3);
        d += "<tr><td colspan='2'><b>Result</b></td></tr>", d += "<tr><td colspan='2'><span style='text-decoration:overline'>C</span>(n, r) = (r + n - 1)! / (r! * (n - 1)!)</td></tr>", d += "<tr><td colspan='2'><span style='text-decoration:overline'>C</span>(" + s + ", " + o + ") = " + m + " / (" + w + " * " + H + ")</td></tr>", d += "<tr><td colspan='2'><span style='color:red; font-weight:bold'><span style='text-decoration:overline'>C</span>(" + s + ", " + o + ") = " + L + "</span></td></tr>", $("#hres").val(L)
    }
    if ("0" == r && 0 == e) {
        var F = P / I,
            R = fnrnd(F, 3);
        d += "<tr><td colspan='2'><b>Result</b></td></tr>", d += "<tr><td colspan='2'>C(n, r) = n! / (r! * (n - r)!)</td></tr>", d += "<tr><td colspan='2'>C(" + s + ", " + o + ") = " + f + " / (" + w + " * " + g + ")</td></tr>", d += "<tr><td colspan='2'><span style='color:red; font-weight:bold'>C(" + s + ", " + o + ") = " + R + "</span></td></tr>", $("#hres").val(R)
    }
    d += "</table>", resultBlock.removeClass(hiddenClass);
    var X = document.getElementById("CPnres");
    X.innerHTML = d;
    var O = document.getElementById("hres").value;
    $("#clmres").html(t + O), ajax()
}

function nfactorial(t) {
    if (0 == t) return 1;
    if (0 > t) return alert("Enter an Integer number >0");
    if (t != Math.floor(t)) return alert("Enter an Integer number");
    for (i = 1, w = 1; i < t; i += 1, w *= i);
    return w
}
var hiddenClass = "hidden",
    resultBlock = $(".resultBlock"),
    fnrnd = function (t, r) {
        if (!parseInt(r)) var r = 0;
        return 0 != r ? Math.round(Math.pow(10, r) * t) / Math.pow(10, r) : r
    };