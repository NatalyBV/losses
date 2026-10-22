# Losses statistics in Russia-Ukraine war

**Description**

The product allows to check losses statistics in Russia-Ukraine war including possibility to filter equipment by type, model, and the state of equipment (damaged, destroyed, abandoned).

_Losses data is taken from a Twitter account of Jakub Janovsky: https://x.com/Rebel44CZ_


# Losses Statistics in Russia-Ukraine War

An interactive, data-driven web application designed to track, filter, and visualize military equipment losses during the Russia-Ukraine war. The dashboard provides analytics by categorizing assets by equipment type, precise models, and state of equipment.

🔗 **Live Demo:** [natalybv.github.io/losses](https://github.io)

---

## Features & Functionality
**Advanced Equipment Filtering:** Filter losses dynamically by equipment type, manufacturer, or model.
**Status Tracking:** Breakdown of equipment disposition categories: Damaged, Destroyed, or Abandoned.
**Time-Series Querying:** Allows users to choose specific dates to see losses for that period

## Data Source
The project utilizes a selected subset of mock data based on the open-source intelligence datasets by **Jakub Janovsky** (Oryx community). This dataset serves as seed data to demonstrate and validate the client-side filtering.

## Architecture & Tech Stack

* **HTML5:** Structures the interactive analytical dashboard layout.
* **Vanilla JavaScript:** 
  * `logic.js` — Core application engine handling dynamic data streams and state mapping.
  * `data.js` — Structured data schemas hosting baseline chronological statistics.
  * `calendar.js` — Isolated component logic executing complex date-range calculations and calendar parsing.

---

## Local Installation & Quick Start

1. Clone the repository locally:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the project folder:
   ```bash
   cd losses
   ```
3. Open `losses.html` directly in any modern web browser to run the dashboard instantly.

---

## QA & Testing Engineering Insights

This project serves as an active sandbox for validating high-frequency client-side data parsing and sorting logic
