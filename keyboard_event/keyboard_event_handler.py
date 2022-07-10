# I'm trying to make a kind of text-based game in Python 3. For the game I will need to listen for keyboard input, in particular measuring how long a key is held down, while printing things to the screen. I'm trying to start by making a working minimal example.
#
# First, the following code, using pynput, appears to successfully measures the length time for which the user holds down a key:

from pynput import keyboard
import time
import threading
from binary_commands.commands import DICT_ND_SET_HEX_CMD, DICT_MENU_SYSTEM_HEX_CMD, DICT_BUTTON_HEX_CMD, DICT_ISO_SET_HEX_CMD

# todo find the command to ask camera parameters and get all current ND, ISO, WB...

print("Press and hold any key to measure duration of keypress. Esc ends program")

# A dictionary of keys pressed down right now and the time each was pressed down at
keys_currently_pressed = {}

# mapping keyboard to command dictionaries
dict_map_nd_keys = {
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

dict_map_iso_keys = {
    "q": "640",
    "s": "1250"
}

def on_press(key):
    global keys_currently_pressed
    global hex_command
    # Record the key and the time it was pressed only if we don't already have it
    if key not in keys_currently_pressed:
        keys_currently_pressed[key] = time.time()
        # todo maybe a better way to do this
        hex_command = DICT_ND_SET_HEX_CMD[dict_map_nd_keys[f"{key.char}"]]
        # print(type(key))
        # print(f"{key}")
        # print(hex_command)
        # hex_command = dict_map_nd_keys[key]

def on_release(key):
    global keys_currently_pressed
    if key in keys_currently_pressed:
        animate = False
        duration = time.time() - keys_currently_pressed[key]
        print("The key",key," was pressed for",str(duration)[0:5],"seconds")
        del keys_currently_pressed[key]
    if key == keyboard.Key.esc:
        # Stop the listener
        return False

def listner():
    with keyboard.Listener(on_press = on_press, on_release=on_release, suppress=True) as listener:
        listener.join()

if __name__ == "__main__":
    listner_thread = threading.Thread(target=listner)
    listner_thread.start()

    int.from_bytes()
