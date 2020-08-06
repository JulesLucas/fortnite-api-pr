# fortnite-api-pr

fortnite-api-pr is a way to retrieve the power ranking of each player !

## Installation

```bash
npm i fortnite-api-pr
```

## Usage

Create a [Fortnite Tracker API key](https://tracker.gg/developers)

```js
const FortniteTracker = require('fortnite-api-pr')
const Fortnite = new FortniteTracker('API Key Fortnite Tracker')

await Fortnite.getPowerRanking('username', 'platform', 'region')
```

## Parameters

#### Platform: pc, console, mobile
#### Region: global, eu, nae, naw, etc ...

[Docs Fortnite Tracker Power Ranking](https://tracker.gg/developers/docs/titles/fortnitepr)