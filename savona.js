this.savona || function (b) {
    b.savona = function () {
    };
    b.savona.client = function (a) {
        var d = this;
        d.version = "2.6.4";
        d.linear = new linear.client(a);
        d.linear.onconnect = function (a) {
            d.hasOwnProperty("onconnect") && "function" === typeof d.onconnect && d.onconnect.call(d, a)
        };
        d.linear.ondisconnect = function (a) {
            d.hasOwnProperty("ondisconnect") && "function" === typeof d.ondisconnect && d.ondisconnect.call(d, a)
        };
        d.linear.onnotify = function (a) {
            d.hasOwnProperty("onnotify") && "function" === typeof d.onnotify && d.onnotify.call(d, a)
        };
        d.linear.onresponse =
            function (a) {
                d.hasOwnProperty("onresponse") && "function" === typeof d.onresponse && d.onresponse.call(d, a)
            };
        d.property = new b.savona.property(d);
        d.capability = new b.savona.capability(d);
        d.process = new b.savona.process(d);
        d.system = new b.savona.system(d);
        d.clip = new b.savona.clip(d);
        d.storage = new b.savona.storage(d);
        d.button = new b.savona.button(d);
        d.notify = new b.savona.notify(d);
        d.p = new b.savona.p(d);
        d.alternate = new b.savona.alternate(d);
        d.network = new b.savona.network(d)
    };
    b.savona.client.prototype.state = function () {
        return this.linear.state()
    };
    b.savona.client.prototype.connect = function (a) {
        return this.linear.connect(a)
    };
    b.savona.client.prototype.disconnect = function () {
        return this.linear.disconnect()
    };
    b.savona.client.prototype.request = function (a, d) {
        var b = this, c = {method: a, params: []},
            j = "Capability.GetValue Clip.UploadFiles Process.Abort Process.Execute.AutomaticAdjustment Process.Execute.Reacquisition Button.SendKeys Notify.Subscribe Notify.Unsubscribe System.GetProperties System.GetCapabilities System.Process.AutoAdjust System.Process.Abort".split(" ");
        if (!d) return -1;
        d.params && j.join().match(a) && "Clip.Upload" != a ? c.params.push(d.params) : d.params && (c.params = c.params.concat(d.params));
        console && "undefined" !== typeof JSON && console.log("method: " + a + ", params: " + JSON.stringify(c.params));
        c.onresponse = function (a) {
            d.onresponse && typeof d.onresponse === "function" && d.onresponse.call(b, a)
        };
        c.timeout = d.timeout || 3E4;
        return b.linear.request(c)
    };
    b.savona.property = function (a) {
        this.client = a
    };
    b.savona.property.prototype.GetStatus = function (a) {
        return this.client.request("Property.GetStatus",
            a)
    };
    b.savona.property.prototype.GetValue = function (a) {
        return this.client.request("Property.GetValue", a)
    };
    b.savona.property.prototype.GetBackupValue = function (a) {
        return this.client.request("Property.GetBackupValue", a)
    };
    b.savona.property.prototype.SetValue = function (a) {
        return this.client.request("Property.SetValue", a)
    };
    b.savona.property.prototype.AddValue = function (a) {
        return this.client.request("Property.AddValue", a)
    };
    b.savona.property.prototype.DeleteValue = function (a) {
        return this.client.request("Property.DeleteValue",
            a)
    };
    b.savona.property.prototype.UpdateValue = function (a) {
        return this.client.request("Property.UpdateValue", a)
    };
    b.savona.property.prototype.GetRequestInterval = function (a) {
        return this.client.request("Property.GetRequestInterval", a)
    };
    b.savona.capability = function (a) {
        this.client = a
    };
    b.savona.capability.prototype.GetValue = function (a) {
        return this.client.request("Capability.GetValue", a)
    };
    b.savona.process = function (a) {
        this.client = a;
        this.execute = new b.savona.process.execute(a)
    };
    b.savona.process.prototype.GetList =
        function (a) {
            return this.client.request("Process.GetList", a)
        };
    b.savona.process.prototype.Abort = function (a) {
        return this.client.request("Process.Abort", a)
    };
    b.savona.process.execute = function (a) {
        this.client = a
    };
    b.savona.process.execute.prototype.AutomaticAdjustment = function (a) {
        return this.client.request("Process.Execute.AutomaticAdjustment", a)
    };
    b.savona.process.execute.prototype.Reacquisition = function (a) {
        return this.client.request("Process.Execute.Reacquisition", a)
    };
    b.savona.system = function (a) {
        this.client =
            a;
        this.firmware = new b.savona.system.firmware(a);
        this.settings = new b.savona.system.settings(a);
        this.logs = new b.savona.system.logs(a);
        this.process = new b.savona.system.process(a)
    };
    b.savona.system.prototype.GetVersion = function (a) {
        "undefined" === typeof a ? a = {timeout: 3E3} : "undefined" === typeof a.timeout && (a.timeout = 3E3);
        return this.client.request("System.GetVersion", a)
    };
    b.savona.system.prototype.Reboot = function (a) {
        return this.client.request("System.Reboot", a)
    };
    b.savona.system.prototype.Shutdown = function (a) {
        return this.client.request("System.Shutdown",
            a)
    };
    b.savona.system.prototype.FactoryReset = function (a) {
        return this.client.request("System.FactoryReset", a)
    };
    b.savona.system.firmware = function (a) {
        this.client = a
    };
    b.savona.system.firmware.prototype.Update = function (a) {
        return this.client.request("System.Firmware.Update", a)
    };
    b.savona.system.settings = function (a) {
        this.client = a
    };
    b.savona.system.settings.prototype.Reset = function (a) {
        return this.client.request("System.Settings.Reset", a)
    };
    b.savona.system.settings.prototype.Save = function (a) {
        return this.client.request("System.Settings.Save",
            a)
    };
    b.savona.system.settings.prototype.Load = function (a) {
        return this.client.request("System.Settings.Load", a)
    };
    b.savona.system.logs = function (a) {
        this.client = a
    };
    b.savona.system.logs.prototype.Save = function (a) {
        return this.client.request("System.Logs.Save", a)
    };
    b.savona.system.prototype.GetProperties = function (a) {
        return this.client.request("System.GetProperties", a)
    };
    b.savona.system.prototype.SetProperties = function (a) {
        return this.client.request("System.SetProperties", a)
    };
    b.savona.system.prototype.IncrementProperties =
        function (a) {
            return this.client.request("System.IncrementProperties", a)
        };
    b.savona.system.prototype.DecrementProperties = function (a) {
        return this.client.request("System.DecrementProperties", a)
    };
    b.savona.system.prototype.GetCapabilities = function (a) {
        return this.client.request("System.GetCapabilities", a)
    };
    b.savona.system.process = function (a) {
        this.client = a
    };
    b.savona.system.process.prototype.GetList = function (a) {
        return this.client.request("System.Process.GetList", a)
    };
    b.savona.system.process.prototype.AutoAdjust =
        function (a) {
            return this.client.request("System.Process.AutoAdjust", a)
        };
    b.savona.system.process.prototype.Abort = function (a) {
        return this.client.request("System.Process.Abort", a)
    };
    b.savona.clip = function (a) {
        this.client = a;
        this.player = new b.savona.clip.player(a);
        this.recorder = new b.savona.clip.recorder(a)
    };
    b.savona.clip.prototype.GetList = function (a) {
        return this.client.request("Clip.GetList", a)
    };
    b.savona.clip.prototype.GetThumbnailUrls = function (a) {
        return this.client.request("Clip.GetThumbnailUrls", a)
    };
    b.savona.clip.prototype.Copy =
        function (a) {
            return this.client.request("Clip.Copy", a)
        };
    b.savona.clip.prototype.Rename = function (a) {
        return this.client.request("Clip.Rename", a)
    };
    b.savona.clip.prototype.Move = function (a) {
        return this.client.request("Clip.Move", a)
    };
    b.savona.clip.prototype.Delete = function (a) {
        return this.client.request("Clip.Delete", a)
    };
    b.savona.clip.prototype.Upload = function (a) {
        return this.client.request("Clip.Upload", a)
    };
    b.savona.clip.prototype.UploadFiles = function (a) {
        return this.client.request("Clip.UploadFiles", a)
    };
    b.savona.clip.prototype.Download = function (a) {
        return this.client.request("Clip.Download", a)
    };
    b.savona.clip.prototype.GetTrimUnit = function (a) {
        return this.client.request("Clip.GetTrimUnit", a)
    };
    b.savona.clip.prototype.GetMediaProfileUrls = function (a) {
        return this.client.request("Clip.GetMediaProfileUrls", a)
    };
    b.savona.clip.player = function (a) {
        this.client = a
    };
    b.savona.clip.player.prototype.Open = function (a) {
        return this.client.request("Clip.Player.Open", a)
    };
    b.savona.clip.player.prototype.GotoClip = function (a) {
        return this.client.request("Clip.Player.GotoClip",
            a)
    };
    b.savona.clip.player.prototype.Close = function (a) {
        return this.client.request("Clip.Player.Close", a)
    };
    b.savona.clip.player.prototype.Start = function (a) {
        return this.client.request("Clip.Player.Start", a)
    };
    b.savona.clip.player.prototype.Stop = function (a) {
        return this.client.request("Clip.Player.Stop", a)
    };
    b.savona.clip.player.prototype.Pause = function (a) {
        return this.client.request("Clip.Player.Pause", a)
    };
    b.savona.clip.player.prototype.FastForward = function (a) {
        return this.client.request("Clip.Player.FastForward",
            a)
    };
    b.savona.clip.player.prototype.Rewind = function (a) {
        return this.client.request("Clip.Player.Rewind", a)
    };
    b.savona.clip.player.prototype.Shuttle = function (a) {
        return this.client.request("Clip.Player.Shuttle", a)
    };
    b.savona.clip.player.prototype.Step = function (a) {
        return this.client.request("Clip.Player.Step", a)
    };
    b.savona.clip.recorder = function (a) {
        this.client = a
    };
    b.savona.clip.recorder.prototype.Open = function (a) {
        return this.client.request("Clip.Recorder.Open", a)
    };
    b.savona.clip.recorder.prototype.Close = function (a) {
        return this.client.request("Clip.Recorder.Close",
            a)
    };
    b.savona.clip.recorder.prototype.Start = function (a) {
        return this.client.request("Clip.Recorder.Start", a)
    };
    b.savona.clip.recorder.prototype.Stop = function (a) {
        return this.client.request("Clip.Recorder.Stop", a)
    };
    b.savona.network = function (a) {
        this.wireless = new b.savona.network.wireless(a)
    };
    b.savona.network.wireless = function (a) {
        this.wps = new b.savona.network.wireless.wps(a)
    };
    b.savona.network.wireless.wps = function (a) {
        this.client = a
    };
    b.savona.network.wireless.wps.prototype.Start = function (a) {
        return this.client.request("Network.Wireless.WPS.Start",
            a)
    };
    b.savona.storage = function (a) {
        this.drive = new b.savona.storage.drive(a)
    };
    b.savona.storage.drive = function (a) {
        this.client = a
    };
    b.savona.storage.drive.prototype.Format = function (a) {
        return this.client.request("Storage.Drive.Format", a)
    };
    b.savona.storage.drive.prototype.Eject = function (a) {
        return this.client.request("Storage.Drive.Eject", a)
    };
    b.savona.storage.drive.prototype.Finalize = function (a) {
        return this.client.request("Storage.Drive.Finalize", a)
    };
    b.savona.button = function (a) {
        this.client = a
    };
    b.savona.button.prototype.SendKeys =
        function (a) {
            return this.client.request("Button.SendKeys", a)
        };
    b.savona.notify = function (a) {
        this.client = a
    };
    b.savona.notify.prototype.Subscribe = function (a) {
        return this.client.request("Notify.Subscribe", a)
    };
    b.savona.notify.prototype.Unsubscribe = function (a) {
        return this.client.request("Notify.Unsubscribe", a)
    };
    b.savona.p = function (a) {
        this.process = new b.savona.p.process(a)
    };
    b.savona.p.process = function (a) {
        this.client = a
    };
    b.savona.p.process.prototype.Execute = function (a) {
        return this.client.request("P.Process.Execute",
            a)
    };
    b.savona.alternate = function (a) {
        this.authentication = new b.savona.alternate.authentication(a)
    };
    b.savona.alternate.authentication = function (a) {
        this.client = a
    };
    b.savona.alternate.authentication.prototype.Basic = function (a) {
        return this.client.request("Alternate.Authentication.Basic", a)
    }
}(this);/*

 The MIT License (MIT)

 Copyright 2015 Sony Corporation

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
this.linear || function (b) {
    b.linear = function () {
    };
    b.linear.version = "2.5.4";
    b.linear.sign = "71ae8a04934de4f61acfd254c76fe12280f7b994";
    b.linear.tofloat = function (a) {
        return new msgpack.tofloat(a)
    };
    b.linear.tobinary = function (a) {
        var d = Object.prototype.toString.call(a);
        if ("[object String]" === d) {
            for (var d = new Uint8Array(a.length), b = 0; b < a.length; b++) d[b] = a.charCodeAt(b);
            return d.buffer
        }
        if ("[object ArrayBuffer]" === d) return a;
        if (a && "[object Object]" !== d && "buffer" in a && "[object ArrayBuffer]" === Object.prototype.toString.call(a.buffer)) return a.buffer;
        throw"can not convert into binary";
    };
    b.linear.base64 = function () {
        var a = function (a) {
            for (var b = {}, c = 0, j = a.length; c < j; ++c) b[a.charAt(c)] = c;
            return b
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
        return {
            encode: function (a) {
                var b = 0;
                if ("string" !== typeof a) throw"INVALID_CHARACTER_ERR";
                for (; a.length % 3;) a += "\x00", b++;
                a = a.replace(/[\x00-\xFF]{3}/g, function (a) {
                    a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>>
                        18) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 12 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a & 63)
                });
                if (!b) return a;
                for (a = a.substr(0, a.length - b); b--;) a += "=";
                return a
            }, decode: function (b) {
                var g = 0;
                if ("string" !== typeof b || b.length % 4 || null !== b.match(/[^A-Za-z0-9\+\/=]/) || -1 !== b.indexOf("=") && b.indexOf("=") < b.length - 2) throw"INVALID_CHARACTER_ERR";
                for (b =
                         b.replace(/[^A-Za-z0-9\+\/]/g, ""); b.length % 4;) b += "A", g++;
                if (2 < g) throw"INVALID_CHARACTER_ERR";
                b = b.replace(/[A-Za-z0-9\+\/]{4}/g, function (b) {
                    b = a[b.charAt(0)] << 18 | a[b.charAt(1)] << 12 | a[b.charAt(2)] << 6 | a[b.charAt(3)];
                    return String.fromCharCode(b >> 16) + String.fromCharCode(b >> 8 & 255) + String.fromCharCode(b & 255)
                });
                1 <= g && (b = b.substring(0, b.length - [0, 1, 2][g]));
                return b
            }
        }
    }();
    b.linear.btoa = function (a) {
        var d = b.btoa || b.linear.base64.encode;
        if ("string" !== typeof a) throw"INVALID_CHARACTER_ERR";
        return d(a)
    };
    b.linear.atob =
        function (a) {
            var d = b.atob || b.linear.base64.decode;
            if ("string" !== typeof a) throw"INVALID_CHARACTER_ERR";
            return d(a)
        };
    b.linear.extend = function (a, b) {
        var g = new a;
        if (!b) return g;
        for (var c in b) g[c] !== b[c] && (g[c] = b[c]);
        return g
    };
    b.linear.codec = function () {
        this.type = void 0
    };
    b.linear.codec.prototype.encode = function (a) {
        return a
    };
    b.linear.codec.prototype.decode = function (a) {
        return a
    };
    b.linear.codec.prototype.refresh = function () {
    };
    b.linear.codec.plain = function () {
        this.type = "plain";
        return b.linear.extend(b.linear.codec,
            this)
    };
    b.linear.codec.msgpack = function () {
        this.type = "msgpack";
        this.unpacker = new msgpack.unpacker;
        return b.linear.extend(b.linear.codec, this)
    };
    b.linear.codec.msgpack.prototype.encode = function (a) {
        return msgpack.pack(a)
    };
    b.linear.codec.msgpack.prototype.decode = function (a) {
        var b = [];
        for (this.unpacker.feed(a); void 0 !== (a = this.unpacker.unpack());) b.push(a);
        return b
    };
    b.linear.codec.msgpack.prototype.refresh = function () {
        this.unpacker.refresh()
    };
    b.linear.protocol = function () {
        this.codec = this.type = void 0
    };
    b.linear.protocol.prototype.request =
        function () {
            throw Error("method is not allowed");
        };
    b.linear.protocol.prototype.response = function () {
        throw Error("method is not allowed");
    };
    b.linear.protocol.prototype.notify = function () {
        throw Error("method is not allowed");
    };
    b.linear.protocol.prototype.onmessage = function (a) {
        return a
    };
    b.linear.protocol.prototype.reset = function () {
    };
    b.linear.protocol.plain = function () {
        this.type = "plain";
        this.codec = new linear.codec.plain;
        return b.linear.extend(b.linear.protocol, this)
    };
    b.linear.protocol.plain.prototype.onmessage =
        function (a) {
            var b = [];
            a && b.push({type: "notify", data: {name: void 0, data: a}});
            return b
        };
    b.linear.protocol.linear = function () {
        this.type = "linear";
        this.msgid = 0;
        this.codec = new b.linear.codec.msgpack;
        this.requests = {};
        return b.linear.extend(b.linear.protocol, this)
    };
    b.linear.protocol.linear.prototype.request = function (a) {
        var b = this, g = {}, c;
        if (a && !("[object Object]" !== Object.prototype.toString.call(a) || !("method" in a) || !("params" in a))) {
            do b.msgid = 4294967295 <= b.msgid ? 0 : b.msgid + 1; while (b.requests[b.msgid]);
            c = b.codec.encode([0,
                b.msgid, a.method, a.params]);
            g.id = b.msgid;
            g.onresponse = a.onresponse;
            g.timeout = setTimeout(function () {
                b.ontimeout(g.id)
            }, 0 < a.timeout ? a.timeout : 3E4);
            b.requests[g.id] = g;
            return {id: g.id, data: c, timeout: 0 < a.timeout ? a.timeout : 3E4}
        }
    };
    b.linear.protocol.linear.prototype.response = function (a) {
        return !a || "[object Object]" !== Object.prototype.toString.call(a) || !("id" in a) ? void 0 : this.codec.encode([1, a.id, a.error, a.result])
    };
    b.linear.protocol.linear.prototype.notify = function (a) {
        return !a || "[object Object]" !== Object.prototype.toString.call(a) ||
        !("name" in a) || !("data" in a) ? void 0 : this.codec.encode([2, a.name, a.data])
    };
    b.linear.protocol.linear.prototype.ontimeout = function (a) {
        this.requests[a] && ("function" === typeof this.requests[a].onresponse && this.requests[a].onresponse.call(this, {
            id: a,
            error: "timeout",
            result: null
        }), delete this.requests[a])
    };
    b.linear.protocol.linear.prototype.onmessage = function (a) {
        var d = Object.prototype.toString.call(a), g, c = [], j, k;
        if ("[object String]" === d) try {
            g = b.linear.atob(a)
        } catch (l) {
            return console && console.log("invalid data"),
                c
        } else if ("[object ArrayBuffer]" === d) {
            g = [];
            j = new Uint8Array(a);
            a = 0;
            for (d = j.length; a < d; a++) g[a] = j[a]
        } else if ("[object Array]" === d || "[object Number]" === d) g = a; else return console && console.log("invalid data"), c;
        g = this.codec.decode(g);
        a = 0;
        for (d = g.length; a < d; ++a) switch (g[a][0]) {
            case 0:
                c.push({type: "request", data: {id: g[a][1], method: g[a][2], params: g[a][3]}});
                break;
            case 1:
                j = g[a][1];
                this.requests[j] && (clearTimeout(this.requests.timer), "function" === typeof this.requests[j].onresponse ? this.requests[j].onresponse.call(this,
                    {id: j, error: g[a][2], result: g[a][3]}) : c.push({
                    type: "response",
                    data: {id: j, error: g[a][2], result: g[a][3]}
                }), delete this.requests[j]);
                break;
            case 2:
                j = g[a][1];
                k = g[a][2];
                c.push({type: "notify", data: {name: j, data: k}});
                break;
            default:
                console && console.log("invalid data")
        }
        return c
    };
    b.linear.protocol.linear.prototype.reset = function () {
        this.codec.refresh()
    };
    b.linear.transport = function () {
        this.state = "disconnected";
        this.sendbuffer = [];
        this.num2bin = [];
        for (var a = 0; 256 > a; ++a) this.num2bin[a] = String.fromCharCode(a)
    };
    b.linear.transport.create =
        function (a) {
            var b, g, c, j, k, l, n, m = {}, e;
            for (e in a) "type" === e.toLowerCase() && (b = a[e]), "channel" === e.toLowerCase() && (j = a[e]), "host" === e.toLowerCase() && (g = a[e]), "port" === e.toLowerCase() && (c = a[e]), "path" === e.toLowerCase() && (k = a[e]), "usessl" === e.toLowerCase() && (n = !!a[e]), "options" === e.toLowerCase() && (l = a[e]);
            "undefined" === typeof n && (n = !!location.protocol.match(/https/));
            b = b || "websocket";
            g = g || location.hostname;
            c = parseInt(c || location.port, 10) || (n ? 443 : 80);
            j = j || "linear";
            j = j.match(/^\//) ? j : "/" + j;
            if ("websocket" ===
                b) a = n ? "wss://" + g + (443 === c ? "" : ":" + c) + j : "ws://" + g + (80 === c ? "" : ":" + c) + j; else if ("polling" === b) k = k || "cgi/linear.fcgi", k = k.match(/^\//) ? k : "/" + k, a = n ? "https://" + g + (443 === c ? "" : ":" + c) + k : "http://" + g + (80 === c ? "" : ":" + c) + k; else {
                console && console.log("transport: " + m.type + " is not implemented.");
                return
            }
            m.type = b;
            m.entry = {};
            m.entry.url = a;
            m.entry.channel = j;
            m.entry.options = l;
            return m
        };
    b.linear.transport.prototype.connect = function (a) {
        function d(a) {
            a && a.currentTarget !== c.try_sock ? (a.currentTarget.onclose = a.currentTarget.onerror =
                null, a.currentTarget.close()) : (c.type = "websocket", c.raw = new b.linear.transport.websocket(c.try_sock), c.raw.onopen = function (a) {
                c._onopen(a)
            }, c.raw.onclose = c.raw.onerror = function (a) {
                c._onclose(a)
            }, c.raw.onmessage = function (a) {
                c._onmessage(a)
            }, c._onopen())
        }

        function g() {
            c.try_sock = void 0;
            c.entry.polling ? (c.type = "polling", c.raw = new b.linear.transport.polling(c.entry.polling.url, c.entry.polling.channel, c.entry.polling.options, function () {
                c._onopen()
            }, function () {
                c._onclose()
            }), c.raw.onopen = function (a) {
                c._onopen(a)
            },
                c.raw.onclose = c.raw.onerror = function (a) {
                    c._onclose(a)
                }, c.raw.onmessage = function (a) {
                c._onmessage(a)
            }) : c._onclose()
        }

        var c = this;
        if (!("connecting" === c.state || "connected" === c.state)) if (c.state = "connecting", a = a && a.timeout ? a.timeout : 3E4, c.entry.websocket) {
            try {
                c.try_sock = new WebSocket(c.entry.websocket.url)
            } catch (j) {
                if (!c.entry.polling) {
                    c._onclose();
                    return
                }
                c.type = "polling";
                c.raw = new b.linear.transport.polling(c.entry.polling.url, c.entry.polling.channel, c.entry.polling.options, function () {
                    c._onopen()
                }, function () {
                    c._onclose()
                });
                c.raw.onopen = function (a) {
                    c._onopen(a)
                };
                c.raw.onclose = c.raw.onerror = function (a) {
                    c._onclose(a)
                };
                c.raw.onmessage = function (a) {
                    c._onmessage(a)
                };
                return
            }
            c.try_sock.onopen = d;
            c.try_sock.onclose = g;
            setTimeout(function () {
                "connecting" === c.state && (c.try_sock.onopen = c.try_sock.onclose = c.try_sock.onerror = null, c.try_sock.close(), g())
            }, a)
        } else c.entry.polling ? (c.type = "polling", c.raw = new b.linear.transport.polling(c.entry.polling.url, c.entry.polling.channel, c.entry.polling.options, function () {
            c._onopen()
        }, function () {
            c._onclose()
        }),
            c.raw.onopen = function (a) {
                c._onopen(a)
            }, c.raw.onclose = c.raw.onerror = function (a) {
            c._onclose(a)
        }, c.raw.onmessage = function (a) {
            c._onmessage(a)
        }, setTimeout(function () {
            "connecting" === c.state && c._onclose()
        }, a)) : c._onclose()
    };
    b.linear.transport.prototype._onopen = function (a) {
        if ("connecting" === this.state) {
            this.state = "connected";
            for (var b = 0, g = this.sendbuffer.length; b < g; ++b) this.send(this.sendbuffer[b]);
            this.sendbuffer = [];
            if ("function" === typeof this.onopen) this.onopen(a)
        }
    };
    b.linear.transport.prototype._onclose =
        function (a) {
            if ("disconnected" !== this.state && (this.state = "disconnected", "function" === typeof this.onclose)) this.onclose(a)
        };
    b.linear.transport.prototype._onmessage = function (a) {
        if ("connected" === this.state && "function" === typeof this.onmessage) this.onmessage(a)
    };
    b.linear.transport.prototype.disconnect = function () {
        "disconnected" !== this.state && (this.state = "disconnecting", this.sendbuffer = [], "function" === typeof this.raw.disconnect && this.raw.disconnect())
    };
    b.linear.transport.prototype.send = function (a) {
        var d,
            g = Object.prototype.toString.call(a);
        if (!("disconnecting" === this.state || "disconnected" === this.state)) if ("connecting" === this.state) this.sendbuffer[this.sendbuffer.length] = a; else {
            if ("[object String]" === g) d = a; else if ("[object Array]" === g || "[object ArrayBuffer]" === g || "[object Uint8Array]" === g) if ("text" === this.raw.type) {
                d = [];
                for (var g = 0, c = a.length; g < c; ++g) d[g] = this.num2bin[a[g]];
                d = b.linear.btoa(d.join(""))
            } else "binary" === this.raw.type && (d = (new Uint8Array(a)).buffer); else return;
            this.raw.send(d)
        }
    };
    b.linear.transport.websocket =
        function (a) {
            var b = this;
            b.socket = a;
            "binaryType" in b.socket ? (b.socket.binaryType = "arraybuffer", b.type = "binary") : b.type = "text";
            b.socket.onopen = function (a) {
                if (typeof b.onopen === "function") b.onopen(a)
            };
            b.socket.onclose = b.socket.onerror = function (a) {
                if (typeof b.onclose === "function") b.onclose(a);
                b.socket = void 0
            };
            b.socket.onmessage = function (a) {
                if (typeof b.onmessage === "function") b.onmessage(a.data)
            }
        };
    b.linear.transport.websocket.prototype.disconnect = function () {
        this.socket.close()
    };
    b.linear.transport.websocket.prototype.send =
        function (a) {
            this.socket.send(a)
        };
    b.linear.jsonp = {
        load: function (a, b, g) {
            var c = document.createElement("iframe");
            c.style.display = "none";
            document.body.appendChild(c);
            var j = c.contentWindow.document, k = !1;
            c[c.readyState ? "onreadystatechange" : "onload"] = function () {
                this.readyState && "complete" != this.readyState || k || (k = !0, j.x ? "function" === typeof b && b.apply(this, j.x) : "function" === typeof g && g(), setTimeout(function () {
                    try {
                        c.parentNode.removeChild(c)
                    } catch (a) {
                    }
                }, 0))
            };
            a = a + (0 > a.indexOf("?") ? "?" : "&") + "f=cb&" + (new Date).getTime();
            j.write('<script>function cb(){document.x=arguments}<\/script><script src="' + a + '"><\/script>');
            j.close();
            return c
        }, abort: function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
    };
    b.linear.transport.polling = function (a, d, g, c, j) {
        this.type = "text";
        this.url = a;
        this.channel = d;
        this.options = g || {};
        this.seq = 0;
        this.sid = void 0;
        var k = this, l = "?c=connect&ch=" + this.channel;
        k.state = "connecting";
        b.linear.jsonp.load(this.url + l, function (a) {
            k.sid = a.sid;
            "connecting" !== k.state ? (l = "?c=disconnect&sid=" + k.sid, b.linear.jsonp.load(k.url +
                l)) : (k.dopoll(), "function" === typeof c && c())
        }, j)
    };
    b.linear.transport.polling.prototype.disconnect = function () {
        var a = "?c=disconnect&sid=" + this.sid;
        if ("disconnecting" !== this.state && (this.state = "disconnecting", this.intervaltimer && clearTimeout(this.intervaltimer), this.seq = this.intervaltimer = 0, void 0 !== this.sid && b.linear.jsonp.load(this.url + a), this.sid = void 0, "function" === typeof this.onclose)) this.onclose()
    };
    b.linear.transport.polling.prototype.send = function (a) {
        function b(a, c) {
            if (c.confirmed) try {
                a.parentNode.removeChild(a),
                    c.parentNode.removeChild(c)
            } catch (g) {
            } else c.confirmed = !0, a.submit(), setTimeout(function () {
                b(a, c)
            }, k)
        }

        var g, c, j, k = this.options.gc || 3E3;
        void 0 === this.sid || "disconnecting" === this.state || (g = document.createElement("form"), g.style.display = "none", g.action = this.url, g.method = "POST", g.target = "ifr" + this.seq, document.body.appendChild(g), c = document.createElement("input"), c.type = "text", c.name = "sid", c.value = this.sid, g.appendChild(c), c = document.createElement("input"), c.type = "text", c.name = "data", c.value = a, g.appendChild(c),
            j = document.createElement("iframe"), j.style.display = "none", j.name = "ifr" + this.seq++, j.src = "about:blank", j.onload = function () {
            b(g, j)
        }, document.all && (j.onreadystatechange = function () {
            "complete" === this.readyState && (j.contentWindow.name = j.name, b(g, j))
        }), document.body.appendChild(j))
    };
    b.linear.transport.polling.prototype.dopoll = function () {
        function a(a) {
            if (a && "function" === typeof g.onmessage) g.onmessage(a);
            g.intervaltimer = setTimeout(function () {
                g.dopoll()
            }, c)
        }

        function d() {
            g.disconnect()
        }

        var g = this, c, j = "?c=poll&sid=" +
            this.sid;
        void 0 === this.sid || "disconnecting" === this.state || (c = g.options ? g.options.interval || 250 : 250, b.linear.jsonp.load(this.url + j, a, d))
    };
    b.linear.client = function (a) {
        var d = this, g, c;
        if ("function" !== typeof d) {
            for (var j in a) "protocol" === j.toLowerCase() && (g = a[j]), "transports" === j.toLowerCase() && (c = a[j]);
            g = g ? g : "linear";
            try {
                d.protocol = new b.linear.protocol[g]
            } catch (k) {
                console && console.log("protocol: " + g + " is not implemented."), d.protocol = new b.linear.protocol.linear
            }
            d.transport = new b.linear.transport;
            d.transport.onopen =
                function (a) {
                    d._onopen(a)
                };
            d.transport.onclose = function (a) {
                d._onclose(a)
            };
            d.transport.onmessage = function (a) {
                d._onmessage(a)
            };
            d.transport.entry = {};
            a = Object.prototype.toString.call(c);
            if ("[object String]" === a) {
                if (a = b.linear.transport.create({type: c})) d.transport.entry[a.type] = a.entry
            } else if ("[object Array]" === a) {
                g = 0;
                for (j = c.length; g < j; g++) if (a = "string" === typeof c[g] ? b.linear.transport.create({type: c[g]}) : b.linear.transport.create(c[g])) d.transport.entry[a.type] = a.entry, a = void 0
            } else if (void 0 !== c &&
                "[object Object]" === a) {
                if (a = b.linear.transport.create(c)) d.transport.entry[a.type] = a.entry
            } else a = b.linear.transport.create({type: "websocket"}), d.transport.entry[a.type] = a.entry, a = b.linear.transport.create({type: "polling"}), d.transport.entry[a.type] = a.entry;
            return d
        }
    };
    b.linear.client.prototype.state = function () {
        return this.transport.state
    };
    b.linear.client.prototype.connect = function (a) {
        "function" === typeof this.transport.connect && this.transport.connect(a)
    };
    b.linear.client.prototype.onconnect = function (a) {
        "function" ===
        typeof a && (this.onconnect = a)
    };
    b.linear.client.prototype.disconnect = function () {
        "function" === typeof this.transport.disconnect && this.transport.disconnect()
    };
    b.linear.client.prototype.ondisconnect = function (a) {
        "function" === typeof a && (this.ondisconnect = a)
    };
    b.linear.client.prototype.request = function (a) {
        var b;
        if ("function" === typeof this.protocol.request) {
            if ("disconnected" === this.transport.state || "disconnecting" === this.transport.state) return -1;
            try {
                b = this.protocol.request(a)
            } catch (g) {
                return -1
            }
            if (!b) return -1;
            this.transport.send(b.data)
        } else return -1;
        return b.id
    };
    b.linear.client.prototype.onresponse = function (a) {
        "function" === typeof a && (this.onresponse = a)
    };
    b.linear.client.prototype.response = function (a) {
        var b;
        if ("function" === typeof this.protocol.response) {
            if ("disconnected" === this.transport.state || "disconnecting" === this.transport.state) return !1;
            try {
                b = this.protocol.response(a)
            } catch (g) {
                return !1
            }
            if (!b) return !1;
            this.transport.send(b)
        } else return !1;
        return !0
    };
    b.linear.client.prototype.notify = function (a) {
        var b;
        if ("function" === typeof this.protocol.notify) {
            if ("disconnected" === this.transport.state || "disconnecting" === this.transport.state) return !1;
            try {
                b = this.protocol.notify(a)
            } catch (g) {
                return !1
            }
            if (!b) return !1;
            this.transport.send(b)
        } else return !1;
        return !0
    };
    b.linear.client.prototype.onnotify = function (a) {
        "function" === typeof a && (this.onnotify = a)
    };
    b.linear.client.prototype._onopen = function () {
        var a;
        this.hasOwnProperty("onconnect") && "function" === typeof this.onconnect && (document ? "createEvent" in document ? (a = document.createEvent("Event"),
            a.initEvent("connected", !0, !0)) : "createEventObject" in document ? (a = document.createEventObject(), a.type = "connected") : a = {type: "connected"} : a = {type: "connected"}, this.onconnect(a))
    };
    b.linear.client.prototype._onclose = function () {
        var a;
        this.protocol.reset();
        this.hasOwnProperty("ondisconnect") && "function" === typeof this.ondisconnect && (document ? "createEvent" in document ? (a = document.createEvent("Event"), a.initEvent("disconnected", !0, !0)) : "createEventObject" in document ? (a = document.createEventObject(), a.type = "disconnected") :
            a = {type: "disconnected"} : a = {type: "disconnected"}, this.ondisconnect(a))
    };
    b.linear.client.prototype._onmessage = function (a) {
        for (var a = this.protocol.onmessage(a), b = 0, g = a.length; b < g; b++) "request" === a[b].type ? this.hasOwnProperty("onrequest") && "function" === typeof this.onrequest && this.onrequest.call(this, a[b].data) : "response" === a[b].type ? this.hasOwnProperty("onresponse") && "function" === typeof this.onresponse && this.onresponse.call(this, a[b].data) : "notify" === a[b].type && this.hasOwnProperty("onnotify") && "function" ===
            typeof this.onnotify && this.onnotify.call(this, a[b].data)
    }
}(this);/*
 !{id:msgpack.codec.js,ver:1.05,license:"MIT",author:"uupaa.js@gmail.com"} */
this.msgpack || function (b) {
    function a(a) {
        this._n = a
    }

    function d(a) {
        m = "string" === typeof a ? k(a) : a;
        e = -1;
        return c()
    }

    function g(b, i, c) {
        var h, f, e;
        if (null == i) b.push(192); else if (!1 === i) b.push(194); else if (!0 === i) b.push(195); else switch (typeof i) {
            case "number":
                i !== i ? b.push(203, 255, 255, 255, 255, 255, 255, 255, 255) : Infinity === i ? b.push(203, 127, 240, 0, 0, 0, 0, 0, 0) : Math.floor(i) === i ? 0 > i ? -32 <= i ? b.push(224 + i + 32) : -128 < i ? b.push(208, i + 256) : -32768 < i ? (i += 65536, b.push(209, i >> 8, i & 255)) : -2147483648 < i ? (i += 4294967296, b.push(210, i >>>
                    24, i >> 16 & 255, i >> 8 & 255, i & 255)) : (f = Math.floor(i / 4294967296), i &= 4294967295, b.push(211, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255)) : 128 > i ? b.push(i) : 256 > i ? b.push(204, i) : 65536 > i ? b.push(205, i >> 8, i & 255) : 4294967296 > i ? b.push(206, i >>> 24, i >> 16 & 255, i >> 8 & 255, i & 255) : (f = Math.floor(i / 4294967296), i &= 4294967295, b.push(207, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255)) : ((f = 0 > i) && (i *= -1), e = Math.log(i) / 0.6931471805599453 + 1023 | 0, h = i * Math.pow(2, 1075 - e), i = h & 4294967295, f &&
                (e |= 2048), f = h / 4294967296 & 1048575 | e << 20, b.push(203, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255));
                break;
            case "string":
                c = i.length;
                e = b.length;
                b.push(0);
                for (f = 0; f < c; ++f) h = i.charCodeAt(f), 128 > h ? b.push(h & 127) : 2048 > h ? b.push(h >>> 6 & 31 | 192, h & 63 | 128) : 55296 > h || 57343 < h ? b.push(h >>> 12 & 15 | 224, h >>> 6 & 63 | 128, h & 63 | 128) : (h = (h - 55296 << 10 | i.charCodeAt(++f) - 56320) + 65536, b.push(h >>> 18 | 240, h >>> 12 & 63 | 128, h >>> 6 & 63 | 128, h & 63 | 128));
                h = b.length - e - 1;
                32 > h ? b[e] = 160 + h : 65536 > h ? b.splice(e, 1, 218, h >> 8, h & 255) : 4294967296 >
                    h && b.splice(e, 1, 219, h >>> 24, h >> 16 & 255, h >> 8 & 255, h & 255);
                break;
            default:
                if (++c >= r) return p = 1, [];
                if (s(i)) {
                    h = i.length;
                    16 > h ? b.push(144 + h) : 65536 > h ? b.push(220, h >> 8, h & 255) : 4294967296 > h && b.push(221, h >>> 24, h >> 16 & 255, h >> 8 & 255, h & 255);
                    for (f = 0; f < h; ++f) g(b, i[f], c)
                } else if (i instanceof a) h = i.valueOf(), (f = 0 > h) && (h *= -1), e = Math.log(h) / 0.6931471805599453 + 1023 | 0, h *= Math.pow(2, 1075 - e), i = h & 4294967295, f && (e |= 2048), f = h / 4294967296 & 1048575 | e << 20, b.push(203, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255);
                else if (q(i) || i && "[object Object]" !== Object.prototype.toString.call(i) && "buffer" in i && "[object ArrayBuffer]" === Object.prototype.toString.call(i.buffer)) {
                    i = q(i) ? new Uint8Array(i) : new Uint8Array(i.buffer);
                    h = i.byteLength;
                    256 > h ? b.push(196, h & 255) : 65536 > h ? b.push(196, h >> 8, h & 255) : 4294967296 > h && b.push(198, h >>> 24, h >> 16 & 255, h >> 8 & 255, h & 255);
                    for (f = 0; f < h; f++) b.push(i[f]);
                    delete i
                } else {
                    e = b.length;
                    b.push(0);
                    h = 0;
                    for (f in i) ++h, g(b, f, c), g(b, i[f], c);
                    16 > h ? b[e] = 128 + h : 65536 > h ? b.splice(e, 1, 222, h >> 8, h & 255) : 4294967296 > h &&
                        b.splice(e, 1, 223, h >>> 24, h >> 16 & 255, h >> 8 & 255, h & 255)
                }
        }
        return b
    }

    function c() {
        var a, b, d;
        b = 0;
        var h, f;
        f = m;
        d = f[++e];
        a = f.length;
        if (224 <= d) return d - 256;
        if (192 > d) {
            if (128 > d) return d;
            144 > d ? (b = d - 128, d = 128) : 160 > d ? (b = d - 144, d = 144) : (b = d - 160, d = 160)
        }
        switch (d) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 202:
                if (a < e + 4 + 1) break;
                b = 16777216 * f[++e] + (f[++e] << 16) + (f[++e] << 8) + f[++e];
                a = b >> 23 & 255;
                h = b & 8388607;
                return !b || 2147483648 === b ? 0 : 255 === a ? h ? NaN : Infinity : (b & 2147483648 ? -1 : 1) * (h | 8388608) * Math.pow(2, a - 127 - 23);
            case 203:
                if (a <
                    e + 8 + 1) break;
                b = 16777216 * f[++e] + (f[++e] << 16) + (f[++e] << 8) + f[++e];
                d = b & 2147483648;
                a = b >> 20 & 2047;
                h = b & 1048575;
                if (!b || 2147483648 === b) return e += 4, 0;
                if (2047 === a) return e += 4, h ? NaN : Infinity;
                b = 16777216 * f[++e] + (f[++e] << 16) + (f[++e] << 8) + f[++e];
                return (d ? -1 : 1) * ((h | 1048576) * Math.pow(2, a - 1023 - 20) + b * Math.pow(2, a - 1023 - 52));
            case 207:
                if (a < e + 8 + 1) break;
                b = 16777216 * f[++e] + (f[++e] << 16) + (f[++e] << 8) + f[++e];
                return 4294967296 * b + 16777216 * f[++e] + (f[++e] << 16) + (f[++e] << 8) + f[++e];
            case 206:
                if (a < e + 4 + 1) break;
                b += 16777216 * f[++e] + (f[++e] << 16);
            case 205:
                if (a < e + 2 + 1) break;
                b += f[++e] << 8;
            case 204:
                if (a < e + 1 + 1) break;
                return b + f[++e];
            case 211:
                if (a < e + 8 + 1) break;
                b = f[++e];
                return b & 128 ? -1 * (72057594037927936 * (b ^ 255) + 281474976710656 * (f[++e] ^ 255) + 1099511627776 * (f[++e] ^ 255) + 4294967296 * (f[++e] ^ 255) + 16777216 * (f[++e] ^ 255) + 65536 * (f[++e] ^ 255) + 256 * (f[++e] ^ 255) + (f[++e] ^ 255) + 1) : 72057594037927936 * b + 281474976710656 * f[++e] + 1099511627776 * f[++e] + 4294967296 * f[++e] + 16777216 * f[++e] + 65536 * f[++e] + 256 * f[++e] + f[++e];
            case 210:
                if (a < e + 4 + 1) break;
                b = 16777216 * f[++e] + (f[++e] << 16) + (f[++e] <<
                    8) + f[++e];
                return 2147483648 > b ? b : b - 4294967296;
            case 209:
                if (a < e + 2 + 1) break;
                b = (f[++e] << 8) + f[++e];
                return 32768 > b ? b : b - 65536;
            case 208:
                if (a < e + 1 + 1) break;
                b = f[++e];
                return 128 > b ? b : b - 256;
            case 219:
                if (a < e + 4 + 1) break;
                b += 16777216 * f[++e] + (f[++e] << 16);
            case 218:
                if (a < e + 2 + 1) break;
                b += f[++e] << 8;
            case 217:
                if (a < e + 1) break;
                b += f[++e];
            case 160:
                if (a < e + b + 1) break;
                h = [];
                a = e;
                for (b = a + b; a < b;) d = f[++a], 240 <= d ? (d = ((d & 3) << 18 | (f[++a] & 63) << 12 | (f[++a] & 63) << 6 | f[++a] & 63) - 65536, h.push(55296 + (d >> 10)), h.push(56320 + (d & 1023))) : h.push(128 > d ? d : 224 > d ? (d &
                    31) << 6 | f[++a] & 63 : (d & 15) << 12 | (f[++a] & 63) << 6 | f[++a] & 63);
                e = a;
                return 10240 > h.length ? o.apply(null, h) : j(h);
            case 198:
                if (a < e + 4 + 1) break;
                b += 16777216 * f[++e] + (f[++e] << 16);
            case 197:
                if (a < e + 2 + 1) break;
                b += f[++e] << 8;
            case 196:
                if (a < e + 1) break;
                b += f[++e];
                if (a < e + b + 1) break;
                h = [];
                a = e;
                for (b = a + b; a < b;) d = f[++a], h.push(d);
                e = a;
                return 10240 > h.length ? o.apply(null, h) : j(h);
            case 223:
                if (a < e + 4 + 1) break;
                b += 16777216 * f[++e] + (f[++e] << 16);
            case 222:
                if (a < e + 2 + 1) break;
                b += (f[++e] << 8) + f[++e];
            case 128:
                for (f = {}; b--;) {
                    if (a < e + 1 + 1) return;
                    d = c();
                    if (void 0 ===
                        d) return;
                    h = d;
                    d = c();
                    if (void 0 === d) return;
                    f[h] = d
                }
                return f;
            case 221:
                if (a < e + 4 + 1) break;
                b += 16777216 * f[++e] + (f[++e] << 16);
            case 220:
                if (a < e + 2 + 1) break;
                b += (f[++e] << 8) + f[++e];
            case 144:
                for (h = []; b--;) {
                    d = c();
                    if (void 0 === d) return;
                    h.push(d)
                }
                return h
        }
    }

    function j(a) {
        try {
            var b = o.apply(this, a);
            if (a.length != b.length) throw"toString failed";
            return b
        } catch (c) {
        }
        for (var b = [], d = 0, e = a.length, g = n; d < e; ++d) b[d] = g[a[d]];
        return b.join("")
    }

    function k(a) {
        var b = [], c = l, d = a.split(""), e = -1, g;
        g = d.length;
        for (a = g % 8; a--;) ++e, b[e] = c[d[e]];
        for (a =
                 g >> 3; a--;) b.push(c[d[++e]], c[d[++e]], c[d[++e]], c[d[++e]], c[d[++e]], c[d[++e]], c[d[++e]], c[d[++e]]);
        return b
    }

    b.msgpack = {
        tofloat: a, unpacker: function () {
            var a = {
                _chunk: [], _cidx: 0, feed: function (b) {
                    b = "string" === typeof b ? k(b) : b;
                    a._chunk = a._chunk.concat(b)
                }, unpack: function () {
                    var b = d(a._chunk);
                    if (void 0 !== b) return a._cidx = e + 1, a._chunk = a._chunk.slice(a._cidx), b
                }, refresh: function () {
                    a._chunk = [];
                    a._cidx = 0
                }
            };
            return a
        }, pack: function (a, b) {
            p = 0;
            var c = g([], a, 0);
            return p ? !1 : b ? j(c) : c
        }, unpack: d
    };
    var l = {}, n = {}, m = [], e = 0, p =
        0, s = Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }, q = function (a) {
        return "[object ArrayBuffer]" === Object.prototype.toString.call(a)
    }, o = String.fromCharCode, r = 512;
    a.prototype = new Number;
    a.prototype.valueOf = function () {
        return this._n
    };
    a.prototype.toString = function () {
        return this._n.toString()
    };
    (function () {
        for (var a = 0, b; 256 > a; ++a) b = o(a), l[b] = a, n[a] = b;
        for (a = 128; 256 > a; ++a) l[o(63232 + a)] = a
    })()
}(this);
