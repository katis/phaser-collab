# Phaser collaborative template

Phaser template for use with VSCode remote development by multiple people simultaneously.

## Development

```
npm install
npm run dev
```

Use one of the ready made SceneX.html files, or use them as a base to make your own.

open http://localhost:8080/<SceneX.html> to see it running.

## Browser refresh

If you want to refresh the browser with a keyboard shortcut in VSCode, there are
tasks `refresh-x` in `.vscode/tasks.json`, which you can bind to by adding a keyboard shortcut to your VSCode settings:

```json
{
  "key": "alt+k",
  "command": "workbench.action.tasks.runTask",
  "args": "refresh-x"
}
```

## Build

```
npm run build
```

The build will be in `./build` directory.
