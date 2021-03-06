mess_hex = "940006b34361706162696c6974792e47657456616c75659191da0022502e53797374656d2e4d656e752e4c335f53595354454d5f4652414d455f52415445"
mess_base64 = "lAAGs0NhcGFiaWxpdHkuR2V0VmFsdWWRkdoAIlAuU3lzdGVtLk1lbnUuTDNfU1lTVEVNX0ZSQU1FX1JBVEU="
# mess_utf8 = '� �Capability.GetValue��� "P.System.Menu.L3_SYSTEM_FRAME_RATE'

nd_mess_base64 = "lADMsLFQcm9wZXJ0eS5TZXRWYWx1ZZGCtENhbWVyYS5OREZpbHRlci5Nb2RlplByZXNldLVDYW1lcmEuTkRGaWx0ZXIuVmFsdWUg"
nd_mess_hex = "9400ccb0b150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465a6507265736574b543616d6572612e4e4446696c7465722e56616c756520"
# nd_mess_utf8 = '� ̰�Property.SetValue���Camera.NDFilter.Mode�Preset�Camera.NDFilter.Value '


codecs = [
    "ascii", "big5", "big5hkscs", "cp037", "cp273", "cp424", "cp437", "cp500", "cp720",
    "cp737", "cp775", "cp850", "cp852", "cp855", "cp856", "cp857", "cp858", "cp860",
    "cp861", "cp862", "cp863", "cp864", "cp865", "cp866", "cp869", "cp874", "cp875",
    "cp932", "cp949", "cp950", "cp1006", "cp1026", "cp1125", "cp1140", "cp1250",
    "cp1251", "cp1252", "cp1253", "cp1254", "cp1255", "cp1256", "cp1257",
    "cp1258", "cp65001", "euc_jp", "euc_jis_2004", "euc_jisx0213", "euc_kr", "gb2312",
    "gbk", "gb18030", "hz", "iso2022_jp", "iso2022_jp_1", "iso2022_jp_2",
    "iso2022_jp_2004", "iso2022_jp_3", "iso2022_jp_ext", "iso2022_kr", "latin_1",
    "iso8859_2", "iso8859_3", "iso8859_4", "iso8859_5", "iso8859_6", "iso8859_7",
    "iso8859_8", "iso8859_9", "iso8859_10", "iso8859_11", "iso8859_13", "iso8859_14",
    "iso8859_15", "iso8859_16", "johab", "koi8_r", "koi8_t", "koi8_u", "kz1048",
    "mac_cyrillic", "mac_greek", "mac_iceland", "mac_latin2", "mac_roman",
    "mac_turkish", "ptcp154", "shift_jis", "shift_jis_2004", "shift_jisx0213",
    "utf_32", "utf_32_be", "utf_32_le", "utf_16", "utf_16_be", "utf_16_le", "utf_7",
    "utf_8", "utf_8_sig",
]
payload_authentification = "940001be416c7465726e6174652e41757468656e7469636174696f6e2e42617369639182a8757365726e616d65da004038633639373665356235343130343135626465393038626434646565313564666231363761396338373366633462623861383166366632616234343861393138a870617373776f7264da004066666433336635373736363037393338303963373037306564333530396364636166316462363833393936663139666231306239366361333332363861356362"

# data = b"\x95\xc3\x8a\xb0\x8ds\x86\x89\x94\x82\x8a\xba"
username = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
# data = b'\x94\x01\xcc\xb0\x92\xcd\x01\x91\xacUnauthorized\xc0'
data = bytes.fromhex(username)
for codec in codecs:
    try:
        print(f"{codec}, {data.decode(codec)}")
    except UnicodeDecodeError:
        continue