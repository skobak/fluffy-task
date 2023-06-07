# Furry-fe-assignment
Solution to a Front End assignment: https://github.com/budbee/frontend-assignment

Design prototype(Figma)
[Figma](https://www.figma.com/file/fGxk6D5nNuOadh1lBhEd2O/FurryFirendsFE?type=design&node-id=1%3A3346&t=R1E99VqUuKJZa3Ju-1)
[Demo](https://skobak.github.io/fluffy-task/)

## Known Limitations
- The backend is simulated with local storage, and there is no check on file size during the upload. Please keep the files small to ensure they fit within local storage limits.
- There is no routing implemented for this assignment to speed up the development process.
- Pagination has not been implemented for the same reason.
- Currently, only the English version is available.

## Getting Started

**NB!** We use **node 18**

### Install

Create the project.

```bash
git clone git@github.com:skobak/fluffy-task.git
```

Access the project directory.

```bash
cd fluffy-task
```

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

### Lint

```bash
pnpm run lint
```

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

End-to-end tests

```bash
pnpm run e2e
```

End-to-end tests via UI

```bash
pnpm run e2e:ui
```

Storybook

```bash
pnpm run storybook
```


## License

This project is licensed under the MIT License.
