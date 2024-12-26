---

**Tally AI**



**Tally AI** is a fun hobby project aimed at providing an AI-powered calculator, similar to Apple Intelligence’s calculator, but accessible to everyone—not just Apple users. The project was built using Next.js for the front-end, and is currently still under development.

## Features
- **AI-powered calculations**: Get quick results with a click.
- **Canvas input**: Use a drawing interface to input mathematical expressions.
- **Basic UI**: A simple, drag-and-drop interface for the expressions.

## Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tally-ai.git
   cd tally-ai
   ```

2. Install dependencies:
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

3. Run the backend (FastAPI):
   ```bash
   uvicorn main:app --reload
   ```

4. Run the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## Usage

Once the application is running, you can:
- Draw mathematical expressions on the canvas.
- Click "Run" to send the expression to the AI backend and get a result.
- Use the "Reset" button to clear the canvas and start fresh.

## Notes

- This project is still in its early stages and the UI is very basic.
- The results are returned quickly, but the overall design could use some polishing.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
