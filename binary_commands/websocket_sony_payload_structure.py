"""
usefull function int.to_bytes(value, bytearray len, order="big") ; int.from_bytes(bytes value, order="big") ; hex(b"") ;
bytes.fromhex(hex_string) or bytearray.from_hex ;
bytes.fromhex(re.findall('..', binary_cmd))
hex_nd ="94 00 CC B1 B1 50 72 6F 70 65 72 74 79 2E 53 65 74 56 61 6C 75 65 91 82 B4 43 61 6D 65 72 61 2E 4E 44 46 69 6C 74 65 72 2E 4D 6F 64 65 A6 50 72 65 73 65 74 B5 43 61 6D 65 72 61 2E 4E 44 46 69 6C 74 65 72 2E 56 61 6C 75 65 02"

hex_to_list = hex_nd.split(" ")

new_int_list = []
for i in hex_to_list:
    new_int_list.append(int(i, 16))

"""


header = b"\x94\x00" # 2 bytes
flag_01_timer = b"\x48\xb1" # 2 or more bytes but always finish with \xb1
command_call_string = b"Property.Set.Value"
flag_02 = b"\x91\x82\xb4" # 3 bytes
value_command_string = b"Camera.NDFilter.Mode"
flag_03 = b"\xa6" # 1 byte
setting_value_mode_string = b"Preset"
flag_04_sup = b"\xb5" # 1 byte
value_set_string = b"Camera.NDFilter.Value"
value = b"\x10" # 1-2 bytes

reconstructed_payload = header

example_hex_nd = "940048b150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465a6507265736574b543616d6572612e4e4446696c7465722e56616c756510"
example_bytes_nd = b'\x94\x00\x48\xb1Property.SetValue\x91\x82\xb4Camera.NDFilter.Mode\xa6Preset\xb5Camera.NDFilter.Value\x10'
example_hex_nd24 = "940052b150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465a6507265736574b543616d6572612e4e4446696c7465722e56616c7565cd0100"
example_bytes_nd24 = b'\x94\x00\x52\xb1Property.SetValue\x91\x82\xb4Camera.NDFilter.Mode\xa6Preset\xb5Camera.NDFilter.Value\xcd\x01\x00'
example_hex_ndclear = "940046b150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465ab507265736574436c656172b543616d6572612e4e4446696c7465722e56616c756501",
example_bytes_ndclear = b'\x94\x00\x46\xb1Property.SetValue\x91\x82\xb4Camera.NDFilter.Mode\xabPresetClear\xb5Camera.NDFilter.Value\x01'


example_hex_wb = "9400cd0197b150726f70657274792e53657456616c75659181bf43616d6572612e4761696e2e4578706f73757265496e6465782e56616c7565a6313235304549"
example_bytes_wb = b'\x94\x00\xcd\x01\x97\xb1Property.SetValue\x91\x81\xbfCamera.Gain.ExposureIndex.Value\xa61250EI'

keep_alive_hex_first = "94001bb150726f70657274792e47657456616c75659181bc4e6574776f726b2e436f6e6e656374696f6e2e4b656570416c69766591a363616d"
keep_alive_bytes_first = b'\x94\x00\x1b\xb1Property.GetValue\x91\x81\xbcNetwork.Connection.KeepAlive\x91\xa3cam'
keep_alive_hex = "94005db150726f70657274792e47657456616c75659181bc4e6574776f726b2e436f6e6e656374696f6e2e4b656570416c69766591a363616d"
keep_alive_bytes = b'\x94\x00\x5b\xb1Property.GetValue\x91\x81\xbcNetwork.Connection.KeepAlive\x91\xa3cam'

bytearray.fromhex(keep_alive_hex)
