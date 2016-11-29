function simplePanesMoveItem(direction) {
    // use to dispatch commands at the editor scope
    const activePaneElement = atom.views.getView(atom.workspace.getActivePane());
    // PaneContainerElement is not exposed in the api, so we have to get it manually
    const paneContainerElement = activePaneElement.closest('atom-pane-container');
    // Use paneContainerElement method to get the nearest pane in a given direction
    const nearestPaneInDirection = paneContainerElement.nearestPaneInDirection(direction);

    if (nearestPaneInDirection) {
        // if a pane in the given direction exist add the current tab to it
        let command;
        if (['above', 'below'].indexOf(direction) > -1) {
            command = `window:move-active-item-to-pane-${direction}`;
        } else {
            command = `window:move-active-item-to-pane-on-${direction}`;
        }
        atom.commands.dispatch(activePaneElement, command);
    } else {
        // otherwise create a new pane in the given direction and move the active tab to it
        const optionsMap = { above: 'up', below: 'down', left: 'left', right: 'right' };
        const splitMoveDirection = optionsMap[direction];
        const command = `pane:split-${splitMoveDirection}-and-move-active-item`;
        atom.commands.dispatch(activePaneElement, command);
    }
}

atom.commands.add('atom-pane', 'simple-panes:move-item-above-pane', () => {
    simplePanesMoveItem('above');
});

atom.commands.add('atom-pane', 'simple-panes:move-item-right-of-pane', () => {
    simplePanesMoveItem('right');
});

atom.commands.add('atom-pane', 'simple-panes:move-item-below-pane', () => {
    simplePanesMoveItem('below');
});

atom.commands.add('atom-pane', 'simple-panes:move-item-left-of-pane', () => {
    simplePanesMoveItem('left');
});
