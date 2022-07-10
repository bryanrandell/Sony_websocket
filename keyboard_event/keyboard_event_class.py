from pynput import keyboard
import time
import threading
from binary_commands.commands import DICT_ND_SET_HEX_CMD, DICT_MENU_SYSTEM_HEX_CMD, DICT_BUTTON_HEX_CMD, DICT_ISO_SET_HEX_CMD

class KeyboardEvent:
    def __init__(self):
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
