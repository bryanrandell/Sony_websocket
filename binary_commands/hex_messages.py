
hex_nd ="94 00 CC B1 B1 50 72 6F 70 65 72 74 79 2E 53 65 74 56 61 6C 75 65 91 82 B4 43 61 6D 65 72 61 2E 4E 44 46 69 6C 74 65 72 2E 4D 6F 64 65 A6 50 72 65 73 65 74 B5 43 61 6D 65 72 61 2E 4E 44 46 69 6C 74 65 72 2E 56 61 6C 75 65 02"

hex_to_list = hex_nd.split(" ")

new_int_list = []
for i in hex_to_list:
    new_int_list.append(int(i, 16))

"""
94 00 CC B1 B1 Property.SetValue 91 82 B4 Camera.NDFilter.Mode A6 Preset B5 Camera.NDFilter.Value 02
"""
#75 bit lenght

"""
94 00 CD 02 C5 B1 Property.SetValue 91 81 B9 Camera.Iris.ValueFraction 81 A3 cam 82 A9 numerator CD xP AB denominator CD 27
"""
#85 bit lenght

header = "94 00 CC B1 B1"
# maybe useful to use the sep parameter ??
property_set_value = "Property.SetValue".encode().hex(sep=" ")
camera_ndfilter = "Camera.NDFilter.Mode".encode().hex(sep=' ')
preset = "Preset".encode().hex(sep=' ')
nd_filter_value = "Camera.NDFilter.Value".encode().hex(sep=' ')

"""
send a handshake with websocket create_connection
"""
# from websocket import create_connection
# import json
# import asyncio

import websocket
import _thread
import time

def on_message(ws, message):
    print(message)

def on_error(ws, error):
    print(error)

def on_close(ws, close_status_code, close_msg):
    print("### closed ###")

def on_open(ws):
    def run(*args):
        for i in range(3):
            time.sleep(1)
            ws.send(byte_data, websocket.ABNF.OPCODE_BINARY)
        time.sleep(1)
        ws.close()
        print("thread terminating...")
    _thread.start_new_thread(run, ())

def main():
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://echo.websocket.org/",
                              on_open=on_open,
                              on_message=on_message,
                              on_error=on_error,
                              on_close=on_close)

    ws.run_forever()

