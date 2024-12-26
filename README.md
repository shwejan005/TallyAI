
---

**Tally AI**

**Tally AI** is an innovative, AI-powered calculator designed to provide quick and accurate calculations. Inspired by Apple Intelligence’s calculator, the goal of this project is to make advanced calculation capabilities accessible to everyone—not just Apple users. Built using Next.js for the front-end, Tally AI is still under development and evolving.

### Features

- **AI-powered calculations**: Obtain instant results with minimal input.
- **Canvas input**: Draw mathematical expressions directly onto the canvas.
- **Drag-and-drop UI**: Easily manipulate expressions with a simple interface.

### Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tally-ai.git
   cd tally-ai
   ```

2. **Install dependencies**:

   - For the **frontend** (Next.js):
     ```bash
     cd frontend
     npm install
     ```

   - For the **backend** (Python/Flask or FastAPI):
     ```bash
     cd backend
     pip install -r requirements.txt
     ```

3. **Run the backend** (FastAPI):
   ```bash
   uvicorn main:app --reload
   ```

4. **Run the frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

### Usage

Once the application is up and running, you can:

- **Draw mathematical expressions** on the canvas using the drawing interface.
- **Click "Run"** to send the drawn expression to the AI backend and receive a result.
- **Click "Reset"** to clear the canvas and start fresh.

### Notes

- This project is currently in the early stages of development, and the user interface is still basic.
- Results are returned quickly, but improvements to the design and overall user experience are planned for future updates.

### License

This project is open-source and is available under the [MIT License](LICENSE).

---
