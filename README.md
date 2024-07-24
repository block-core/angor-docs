# Angor Docs 📚

Welcome to Angor Docs! This guide will help you add new content to our documentation effortlessly. Follow the steps below to create new guides and references for our documentation.

---

## 📘 How to Add New Guides

To add a new guide to Angor Docs, follow these simple steps:

1. **Create a New Guide File** 📝

   Run the following command in your terminal, replacing `"Guide File Name"` with the name of your new guide:

   ```bash
   pnpm run new-guide "Guide File Name"
   ```

   This command will:
   - Create a new Markdown file in the `src/content/docs/guides` directory.
   - Name the file according to the format of your guide name (e.g., `guide-file-name.md`).
   - Add default content to the file with placeholders for the title and description.

2. **Edit Your Guide** ✏️

   Open the newly created Markdown file in your favorite editor and update the `title` and `description` with your content.

3. **Preview Your Changes** 👀

   Run the following command to preview your documentation locally:

   ```bash
   pnpm run dev
   ```

   Navigate to the `guides` section to see your new guide in action!

---

## 📑 How to Add New References

To add a new reference to Angor Docs, follow these steps:

1. **Create a New Reference File** 📝

   Run the following command in your terminal, replacing `"Reference File Name"` with the name of your new reference:

   ```bash
   pnpm run new-reference "Reference File Name"
   ```

   This command will:
   - Create a new Markdown file in the `src/content/docs/reference` directory.
   - Name the file according to the format of your reference name (e.g., `reference-file-name.md`).
   - Add default content to the file with placeholders for the title and description.

2. **Edit Your Reference** ✏️

   Open the newly created Markdown file in your favorite editor and update the `title` and `description` with your content.

3. **Preview Your Changes** 👀

   Run the following command to preview your documentation locally:

   ```bash
   pnpm run dev
   ```

   Navigate to the `reference` section to see your new reference in action!

---

## 📦 Dependencies and Development

- **Prettier**: For code formatting. Ensure you have it installed by running:

  ```bash
  pnpm install
  ```

  Then format your files with:

  ```bash
  pnpm prettier --write .
  ```

---

## 🛠️ Troubleshooting

If you encounter any issues or need further assistance, feel free to open an issue on our GitHub repository or reach out to the maintainers.