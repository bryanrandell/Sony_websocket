
"""
Wireshark filter for reverse engineer => data.data contains "Property.Set"
=> websocket and data.data contains "Property.SetValue"
"""
import queue
import websocket
import _thread
import time
import rel
import json
import threading

set_value_nd_hex = "94001fb150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465ab507265736574436c656172b543616d6572612e4e4446696c7465722e56616c756501"

from binary_commands.commands import (DICT_ND_SET_HEX_CMD, DICT_MENU_SYSTEM_HEX_CMD, DICT_BUTTON_HEX_CMD,
                                      DICT_ISO_SET_HEX_CMD)
# from keyboard_event.keyboard_event_class import KeyboardEvent


from pynput import keyboard
import time
import threading
from binary_commands.commands import DICT_ND_SET_HEX_CMD, DICT_MENU_SYSTEM_HEX_CMD, DICT_BUTTON_HEX_CMD, DICT_ISO_SET_HEX_CMD

class KeyboardEvent:
    def __init__(self, function_to_trigger):
        self.function_to_trigger = function_to_trigger
        self.dict_map_nd_keys = {
            "a": "clear",
            "z": "ND3",
            "e": "ND6",
            "r": "ND9",
            "t": "ND12",
            "y": "ND15",
            "u": "ND18",
            "i": "ND21",
            'o': "ND25"
        }

        self.dict_map_iso_keys = {
            "q": "640",
            "s": "1250"
        }
        self.keys_currently_pressed = {}
        self.hex_command = None
        self.listner_thread = threading.Thread(target=self.listner)
        self.listner_thread.start()


    def on_press(self, key):
        # global self.keys_currently_pressed
        # global hex_command
        # Record the key and the time it was pressed only if we don't already have it
        if key not in self.keys_currently_pressed and key != keyboard.Key.esc:
            self.keys_currently_pressed[key] = time.time()
            # todo maybe a better way to do this
            try:
                self.hex_command = DICT_ND_SET_HEX_CMD[self.dict_map_nd_keys[f"{key.char}"]]
                self.function_to_trigger(self.hex_command)
            except KeyError:
                print("this command doesn't exist")
            # print(type(key))
            # print(f"{key}")
            # print(hex_command)
            # hex_command = dict_map_nd_keys[key]

    def on_release(self, key):
        global keys_currently_pressed
        if key in self.keys_currently_pressed:
            animate = False
            duration = time.time() - self.keys_currently_pressed[key]
            print("The key", key, " was pressed for", str(duration)[0:5], "seconds")
            del self.keys_currently_pressed[key]
        if key == keyboard.Key.esc:
            # Stop the listener
            self.listner_thread.join(1)
            return False

    def listner(self):
        with keyboard.Listener(on_press=self.on_press, on_release=self.on_release, suppress=True) as listener:
            listener.join()


class Client:
    def __init__(self):

        self.CL_ID = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
        self.CL_SECRET = 'ffd33f577660793809c7070ed3509cdcaf1db683996f19fb10b96ca33268a5cb'
        self.username = "admin"
        self.password = "admin111"
        self.REQ_URL = '192.168.1.1/linear'
        self.SEC_WEBSOCKET_KEY = "4/E2c5Y5dIEjb1K1XavcGg=="
        self.uri = "/linear"
        self.url = f"ws://{self.username}:{self.password}@{self.REQ_URL}"
        self.alternative_url = f"ws://{self.REQ_URL}"
        self.header_dict = json.dumps({"Digest username": "admin", "realm": "Please enter your ID and password.",
                                  "nonce": "0296:19db2f5d945b84fe4f8d03746de4709e", "uri": "/linear",
                                  "algorithm": "MD5",
                                  "response": "fcd8122e533e79a1268d6ab56c9b3801", "qop": "auth", "nc": "0000024c",
                                  "cnonce": "b25078455ef7e392"})
        # initialize keyboard listner class
        keyboard_listner = KeyboardEvent(self.send_payload)
        # self.hex_command = keyboard_listner.hex_command


        websocket.enableTrace(True)
        self.ws = websocket.WebSocketApp(self.url,
                    on_message = self.on_message,
                    on_error   = self.on_error,
                    on_close   = self.on_close,
                    on_open    = self.on_open,
                    on_data    = self.on_data)


    # def when_hex_command_value_changed(self, value):
    #     next = self.queue.dequeue()
    #     next.callback_test(value)

    # def __setattr__(self, key, value):
    #     # self.key = valuea
    #     super(Client, self).__setattr__(key, value)
    #     if key == "hex_command":
    #         print(f"value = {value}")
    #     # else:
    #     #     setattr(self, key, value)
    #     # self.when_hex_command_value_changed(value)
    #     # print(f"{self.key = }")

    # def callback_test(self, hex_value):
    #     print(f"callback = {hex_value}")

    def on_message(self, ws, message):
        # print(message.decode())
        # with open('json/message_recorded.txt', 'w') as j_file:
        #     j_file.write(message + "\n")
        msg = json.loads(message)
        print(f"MESSAGE => {msg}")
        # set_value_nd_clear_hex = "94001fb150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465ab507265736574436c656172b543616d6572612e4e4446696c7465722e56616c756501"
        # set_value_nd_clear_hex = DICT_ND_SET_HEX_CMD["ND3"]
        # set_nd_clear_mess_bytes = bytes.fromhex(set_value_nd_clear_hex)
        # self.ws.send(set_nd_clear_mess_bytes, websocket.ABNF.OPCODE_BINARY)

    def on_error(self, ws, error):
        print(error)

    def on_close(self, ws, close_status_code, close_msg):
        print("### closed ###")

    def on_data(self, ws, data):
        print(f"DATA => {data}")

    def on_open(self, ws):
        print("Opened connection")
        payload_authentification = "940001be416c7465726e6174652e41757468656e7469636174696f6e2e42617369639182a8757365726e616d65da004038633639373665356235343130343135626465393038626434646565313564666231363761396338373366633462623861383166366632616234343861393138a870617373776f7264da004066666433336635373736363037393338303963373037306564333530396364636166316462363833393936663139666231306239366361333332363861356362"

        # nd_mess_hex = "9400ccb0b150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465a6507265736574b543616d6572612e4e4446696c7465722e56616c756520"
        authentification_mess_bytes = bytes.fromhex(payload_authentification)
        # def run(*args):
            # for i in range(100):
            #     time.sleep(1)
        self.ws.send(authentification_mess_bytes, websocket.ABNF.OPCODE_BINARY)
            # time.sleep(1)
            # set_value_nd_clear_hex = "94001fb150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465ab507265736574436c656172b543616d6572612e4e4446696c7465722e56616c756501"
            # set_nd_clear_mess_bytes = bytes.fromhex(set_value_nd_clear_hex)
            # ws.send(set_nd_clear_mess_bytes, websocket.ABNF.OPCODE_BINARY)


        # nd_mess_hex = "9400ccb0b150726f70657274792e53657456616c75659182b443616d6572612e4e4446696c7465722e4d6f6465a6507265736574b543616d6572612e4e4446696c7465722e56616c756520"
        # nd_mess_bytes = bytes.fromhex(nd_mess_hex)
        # ws.send(nd_mess_bytes, opcode=10)

    def run_forever(self):
        self.ws_thread = threading.Thread(target=self.ws.run_forever)
        # self.ws.run_forever(dispatcher=rel)  # Set dispatcher to automatic reconnection
        self.ws_thread.daemon = True
        self.ws_thread.start()

        # rel.signal(2, rel.abort)  # Keyboard Interrupt
        # rel.dispatch()

    def close(self):
        self.ws.close()
        self.ws_thread.join(2)

        print("thread terminating...")



    def send_payload(self, hex_payload):
        # set_value_nd_clear_hex = DICT_ND_SET_HEX_CMD["ND3"]
        set_nd_clear_mess_bytes = bytes.fromhex(hex_payload)
        self.ws.send(set_nd_clear_mess_bytes, websocket.ABNF.OPCODE_BINARY)

        print('payload send')



if __name__ == "__main__":
    client = Client()
    client.run_forever()






