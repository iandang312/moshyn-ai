# Project Setup

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.12.x or higher**
- **npm** (Node Package Manager)

## Setup Instructions

### 1. Create a Virtual Environment

```bash
python -m venv venv 
```

### 2. Activate the Virtual Environment

**On Windows:**
```bash
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
source venv/bin/activate
```

### 3. Install Backend Dependencies

```bash
pip install -e .
```

This will install all dependencies specified in `pyproject.toml`.

### 4. Install Frontend Dependencies

```bash
npm install
```

This will install all dependencies specified in `package.json`.

## You're Ready to Go!
