## Willkommen im Repo vom MANDAT-O-MAT

Der MANDAT-O-MAT gleicht die Fragen die den Parlamentariern im Bundestag zur abstummung vorgelegt wurden mit den Antworten des Users ab. In der Auswertung wird angezeigt, mit welcher Farktion der User die größte Übereinstimmung hatte.


### Woher kommen die Daten?

Die Daten der Abstimmung stammen von [Abgeordneten Watch](https://www.abgeordnetenwatch.de).

### Wie funktioniert der MANDAT-O-MAT?

Zuerst wird geschaut wieviele Parlamentarier genauso gestimmt haben wie der User. Danach wird das verhältnis innerhalb der Fraktion, für dieses Ergebnis, ermittelt. Am Ende werden die ganzen Ergebnisse addiert.

Ein Beispiel:

Über eine bestimmte Frage wurde folgender Maßen im Bundestag Abgestimmt:

Fraktion A:
Ja:20, Nein: 70, Enthaltung: 10

Franktion B:
Ja: 140, Nein: 40, Enthaltung: 20,

Der User stimmte ab mit JA.

In Bei der Ermittlung des Ergebnisses wird für den User folgende Übereinstimmung ermittelt:

Fraktion A: 20%
Fraktion B: 70%

#### Du hast einen Fehler gefunden?

Dann kannst du:

- ein [Issue](https://github.com/HorstFrank/mandat-o-mat/issues) eröffnen.
- dir das Reposetory Clonen, den Fehler beheben und einen [Pullrequest](https://github.com/HorstFrank/mandat-o-mat/pulls) eröffnen.

### Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Getting Started Development

First, run the development server:

`npm run dev`
`npm run build`
`npm run start`
`npm run storybook`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


