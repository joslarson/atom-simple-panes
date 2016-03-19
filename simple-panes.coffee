window.simplePanesMoveItem = (direction) ->
    # use to dispatch commands at the editor scope
    activePaneElement = atom.views.getView atom.workspace.getActivePane()

    # PaneContainerElement is not exposed in the api, so we have to get it manually
    paneContainerElement = activePaneElement.closest('atom-pane-container')
    # Use paneContainerElement method to get the nearest pane in a given direction
    nearestPaneInDirection = paneContainerElement
        .nearestPaneInDirection(direction)?.getModel()

    # if a pane is returned add the current tab
    if nearestPaneInDirection
        if ['above', 'below'].indexOf(direction) > -1
            command = 'window:move-active-item-to-pane-' + direction
        else
            command = 'window:move-active-item-to-pane-on-' + direction
        atom.commands.dispatch activePaneElement, command
    else
        # pane:split-{}-and-move-active-item uses up/down instead of above/below
        splitMoveDirection = {above: 'up', below: 'down', left: 'left', right: 'right'}[direction]
        command = 'pane:split-' + splitMoveDirection + '-and-move-active-item'
        atom.commands.dispatch activePaneElement, command

atom.commands.add 'atom-pane', 'simple-panes:move-item-above-pane': () ->
    simplePanesMoveItem 'above'

atom.commands.add 'atom-pane', 'simple-panes:move-item-right-of-pane': () ->
    simplePanesMoveItem 'right'

atom.commands.add 'atom-pane', 'simple-panes:move-item-below-pane': () ->
    simplePanesMoveItem 'below'

atom.commands.add 'atom-pane', 'simple-panes:move-item-left-of-pane': () ->
    simplePanesMoveItem 'left'
