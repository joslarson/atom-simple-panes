const ATOM_VERSION = Number(atom.appVersion.split('.').slice(0, 2).join('.'));

function moveItemToPane(direction) {
    // use to dispatch commands at the pane scope
    const activePane = atom.workspace.getActivePane();
    const activePaneElement = activePane.getElement();

    let nearestPaneInDirection;
    if (ATOM_VERSION >= 1.19) {
        const workspaceElement = atom.workspace.getElement();
        nearestPaneInDirection = workspaceElement
            .nearestVisiblePaneInDirection(direction, activePane);
        const isEditor = nearestPaneInDirection &&
            nearestPaneInDirection.querySelector('atom-text-editor');
        nearestPaneInDirection = isEditor ? nearestPaneInDirection : null;
    } else {
        const paneContainerElement = activePane.container.getElement();
        nearestPaneInDirection = paneContainerElement.nearestPaneInDirection(direction);
    }

    if (nearestPaneInDirection) {
        // if a pane in the given direction exist move the active tab to it
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
        const command = `pane:split-${optionsMap[direction]}-and-move-active-item`;
        atom.commands.dispatch(activePaneElement, command);
    }
}

atom.commands.add('atom-pane', 'simple-panes:move-item-above-pane', () => {
    moveItemToPane('above');
});

atom.commands.add('atom-pane', 'simple-panes:move-item-right-of-pane', () => {
    moveItemToPane('right');
});

atom.commands.add('atom-pane', 'simple-panes:move-item-below-pane', () => {
    moveItemToPane('below');
});

atom.commands.add('atom-pane', 'simple-panes:move-item-left-of-pane', () => {
    moveItemToPane('left');
});
