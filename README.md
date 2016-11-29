# Simple Panes

This package takes a simplified approach to pane management, enabling you to move you active editor tab between existing panes, or into new panes, with a simple set of directional commands.

This replaces Atom's default behavior, which in contrast opens new views into the same tab in an existing pane, resulting in the same file being opened multiple times, and requiring you to first create a pain before duplicating the active tab into it.

Simple Panes takes the position that this behavior, while useful, should not be the default, and that when a pane does not exist in a desired direction, a new pane should be created for the active tab to be moved into.

Atoms default behavior can still be accessed from the command pallet, or reassigned through a custom keymap.


## Installation

1. In Atom, open Preferences (Settings on Windows)
2. Go to the install section
3. Search for simple-panes and click install.

### Or...

```bash
apm install simple-panes
# then restart Atom
```


## Usage

<kbd>cmd/ctrl</kbd> + <kbd>k</kbd> , &nbsp;<kbd>arrow-key</kbd>&nbsp; moves the active editor tab to the nearest pane in the direction of <kbd>arrow-key</kbd>. If there are no existing panes in the <kbd>arrow-key</kbd> direction, a new pane is created to move the active editor tab to.

**Note:** you must press <kbd>cmd/ctrl</kbd> + <kbd>k</kbd> then release all keys before pressing the <kbd>arrow-key</kbd>. Holding down all three at once is mapped in atom core to switch focus between panes.


### Remove Empty Panes

For this workflow to be effective be sure the `Remove Empty Panes` setting is checked in your core settings (in config.cson that's
`destroyEmptyPanes: true`).


## Default Keybindings

You can change these in Preferences > Keybindings.

Command | Mac OS | Linux/Windows
------- | ------ | -------------
Move Active Tab Right | <kbd>cmd</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&rarr;</kbd> | <kbd>ctrl</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&rarr;</kbd>
Move Active Tab Left | <kbd>cmd</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&larr;</kbd> | <kbd>ctrl</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&larr;</kbd>
Move Active Tab Up | <kbd>cmd</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&uarr;</kbd> | <kbd>ctrl</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&uarr;</kbd>
Move Active Tab Down | <kbd>cmd</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&darr;</kbd> | <kbd>ctrl</kbd> + <kbd>k</kbd> , &nbsp;<kbd>&darr;</kbd>
