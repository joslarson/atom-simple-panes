# Simple Panes

This package takes a simplified approach to pane management, enabling you to move you active editor tab between existing panes, or into new panes, with a simple set of directional commands.


## Usage

`cmd-k {arrow-key}` moves the active editor tab to the nearest pane in the direction of `{arrow-key}`. If there are no existing panes in the `{arrow-key}` direction, a new pane is created to move the active editor tab to.

Note that you must press `cmd-k` then release all keys before pressing the `arrow-key`. Holding down all three at once is mapped in atom core to switch focus between panes.


### Remove Empty Panes

For this workflow to be effective be sure the `Remove Empty Panes` setting is checked in your core settings (in config.cson that's
`destroyEmptyPanes: true`).
