
---

# 📝 Paste App

A modern and minimal **Paste App** built using **React**, **Redux**, and **Tailwind CSS**. This app allows users to create, save, view, and share text/code snippets with a sleek and responsive UI.

---

## 🚀 Features

* ✍️ **Create Paste**: Add text or code snippets with a custom title.
* 💾 **State Management with Redux**: Store and manage pastes globally using Redux Toolkit.
* 🧠 **Persistence with Local Storage**: Snippets remain saved even after refreshing or reopening the browser.
* 🔍 **Search Pastes**: Filter pastes based on keywords.
* 🔗 **Shareable Links**: Generate unique links for each paste using route parameters.
* 📋 **Copy to Clipboard**: Quickly copy your content or code with one click.
* 🌓 **Dark Mode Ready** *(optional)*.
* 🎨 **Responsive UI**: Tailwind CSS ensures a clean and adaptive layout on all screen sizes.

---

## 🛠 Tech Stack

* **React.js** – UI Library
* **Redux Toolkit** – State Management
* **React Router DOM** – Client-side Routing
* **Tailwind CSS** – Styling Framework
* **React Hot Toast** – Toast Notifications (Optional)

---

## 📁 Folder Structure

```bash
src/
│
├── components/         # Reusable components (e.g., PasteCard, CopyButton)
├── pages/              # Route components like Home, ViewPaste
├── redux/
│   └── pasteSlice.js   # Redux slice for paste management
├── App.js              # Main component with routes
├── index.js            # Entry point with Redux Provider
└── index.css           # Tailwind CSS and global styles
```

---

## 🧪 Installation & Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/paste-app.git
cd paste-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---



## 📌 Usage Tips

* 🔘 **Creating a Paste**: Enter a title and your content, then hit save.
* 🔗 **Sharing**: Click "View" to get a unique URL and share it.
* 📋 **Copy Feature**: Use the copy icon/button to quickly copy content.
* 🧼 **Prevent Duplicates**: App checks for duplicate titles before saving.

---

## 🧹 Possible Improvements

* Backend integration with MongoDB or Firebase
* User authentication and private pastes
* Syntax highlighting for code
* Expiry timer for pastes

---



## 🙏 Acknowledgements

* [React](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)

---

