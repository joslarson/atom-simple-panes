window.moveItem = (placement) ->
    direction = {above: 'up', below: 'down', left: 'left', right: 'right'}[placement]
    editorElement = atom.views.getView atom.workspace.getActiveTextEditor()

    paneContainerElement = atom.views.getView atom.workspace.getActivePane()
        .closest('atom-pane-container')
    nearestPaneInDirection = paneContainerElement
        .nearestPaneInDirection(placement)?.getModel()

    if nearestPaneInDirection
        if ['above', 'below'].indexOf(placement) > -1
            command = 'window:move-active-item-to-pane-' + placement
        else
            command = 'window:move-active-item-to-pane-on-' + placement
        atom.commands.dispatch editorElement, command
    else
        atom.commands.dispatch(
            editorElement, 'pane:split-' + direction + '-and-move-active-item')

atom.commands.add 'atom-text-editor', 'simple-panes:move-item-above-pane': () ->
    moveItem 'above'

atom.commands.add 'atom-text-editor', 'simple-panes:move-item-right-of-pane': () ->
    moveItem 'right'

atom.commands.add 'atom-text-editor', 'simple-panes:move-item-below-pane': () ->
    moveItem 'below'

atom.commands.add 'atom-text-editor', 'simple-panes:move-item-left-of-pane': () ->
    moveItem 'left'
