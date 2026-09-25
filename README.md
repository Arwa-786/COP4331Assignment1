# COLORS Web Application (LAMP Stack)

A lightweight CRUD demonstration application built on the **LAMP** (Linux, Apache, MySQL, PHP) stack for **COP 4331**. The project demonstrates user authentication, state management, and real-time color entry searching.

---

## Repository Architecture

```text
colors-lamp/
|-- api/
|   |-- AddColor.php
|   |-- Login.php
|   |-- SearchColors.php
|-- public/
|   |-- index.html
|   |-- color.html
|   |-- css/
|   |   |-- styles.css
|   |-- js/
|   |   |-- code.js
|   |   |-- md5.js
|   |-- images/
|-- README.md
|-- LICENSE.md
|-- .gitignore
```

---

## Technologies Used

| Layer | Technology |
|---|---|
| Operating System | Ubuntu 22.04 LTS (DigitalOcean Droplet) |
| Web Server | Apache HTTP Server |
| Database Engine | MySQL Server |
| Backend Runtime | PHP 8.x |
| Frontend | Vanilla HTML5, CSS3, JavaScript (AJAX / Fetch) |

---

## High-Level Setup Instructions

1. Configure Apache to serve web assets from the `/var/www/html` document root.
2. Ensure PHP and the `php-mysql` extension are installed and active.
3. Import the required database tables (`Users` and `Colors`) into the MySQL server.
4. Copy the frontend assets from `public/` into `/var/www/html/`.
5. Copy the backend scripts from `api/` into `/var/www/html/LAMPAPI/`.
6. Ensure Apache has read permissions on all deployed files.

---

## How to Run and Access

1. Open a browser and navigate to the application URL: **[http://arwacop4331.com](http://arwacop4331.com)**
2. Log in using your credentials (e.g., `AYadavally` / `COP4331`).
3. Add a new color to save it to the MySQL database.
4. Use the search input to query stored colors.

---

## Assumptions, Limitations, and Disclosures

- The backend connects locally to MySQL on the default port `3306`.
- The client application assumes `code.js` targets the relative path `/LAMPAPI` to avoid CORS conflicts.
- **AI Usage:** Conversational AI was utilized to assist with troubleshooting Apache/CORS configuration and structuring repository documentation according to the assignment requirements.
