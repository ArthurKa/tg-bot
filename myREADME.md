## tsconfig.json
```ts
{
  "include": [
    "node_modules/<pkg.name>/build/modules.d.ts",
  ],
  "exclude": [
    // no "node_modules",
  ],
}
```

## .env
```
TG_BOT_API_KEY = <TG_BOT_API_KEY>
```

## Usage

```ts
import { bot } from '<pkg.name>';

bot.on('message', (...params) => {
  console.log(params);
});
```
