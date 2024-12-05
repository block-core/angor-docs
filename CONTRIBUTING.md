# Contributing to Angor Docs 📚

Welcome to the **Angor Docs** repository! Your contributions help make our documentation more comprehensive and user-friendly. Whether you're reporting issues, adding new guides, or refining existing content, this guide will help you get started.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following tools installed before contributing:

- **Node.js**: Required for managing dependencies.
- **pnpm**: Used for project scripts and dependency management.

Run the following commands to install the dependencies and set up your environment:

```bash
pnpm install
```

### Cloning the Repository

To start contributing, fork the repository and clone it to your local machine:

```bash
git clone https://github.com/block-core/angor-docs.git
cd angor-docs
```

---

## 💡 How to Contribute

### 1. Reporting Issues

If you encounter a bug, typo, or broken link, open an issue in the [issue tracker](https://github.com/block-core/angor-docs/issues). Include the following details:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Screenshots or logs, if applicable.

### 2. Suggesting Improvements

Have ideas to improve the documentation? Open an issue describing:

- The enhancement you propose.
- The benefits it provides to users.
- Any potential challenges or limitations.

### 3. Adding or Updating Content

#### Adding a New Guide

To create a new guide:

1. Run the following command, replacing `"Guide File Name"` with the name of your guide:

   ```bash
   pnpm run new-guide "Guide File Name"
   ```

2. This will create a new file in the `src/content/docs/guides` directory with placeholder content.
3. Edit the file to include your content.
4. Preview the changes locally by running:

   ```bash
   pnpm run dev
   ```

5. Open a pull request with your changes.

#### Updating Existing Content

Navigate to the file you want to update in the `src/content/docs` directory. Make your changes, preview them locally, and submit a pull request.

---

## 🔍 Style Guidelines

### Commit Messages

- Use clear and descriptive commit messages.
- Follow this format:
  - **feat**: For new features.
  - **fix**: For bug fixes.
  - **docs**: For documentation updates.

Example:

```bash
git commit -m "docs: add new guide for setup instructions"
```

### Code Formatting

- Use **Prettier** for consistent formatting.
- Run the following command before committing your changes:

  ```bash
  pnpm prettier --write .
  ```

---

## 👀 Previewing Changes

To preview the documentation locally:

1. Start the development server:

   ```bash
   pnpm run dev
   ```

2. Open your browser and navigate to `http://localhost:4321`.

---

## 📦 Dependencies and Scripts

### Key Scripts

- **`pnpm run dev`**: Start the local development server.
- **`pnpm run build`**: Build the documentation for production.
- **`pnpm run lint`**: Lint the codebase.

---

## 🤝 Community and Support

Join our community on [Discord](https://discord.gg/eQaVFqfesn) for discussions, questions, and support.

If you need assistance or want to suggest new features, feel free to contact the maintainers or open an issue.

---

## 📄 License

This repository is licensed under the MIT License. See the [LICENSE](https://github.com/block-core/angor-docs/blob/main/LICENSE) file for details.

---

Thank you for contributing to Angor Docs! 🎉 Your efforts help make this project better for everyone.
