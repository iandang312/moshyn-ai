FROM python:3.12-slim
WORKDIR /usr/local/app

# Install the application dependencies
COPY backend/moshyn/pyproject.toml ./
RUN pip install --no-cache-dir .

# Copy in the source code
COPY backend/moshyn/src ./moshyn
EXPOSE 8080

# Setup an app user so the container doesn't run as the root user
RUN useradd app
USER app

CMD ["uvicorn", "moshyn.application.main:app", "--host", "0.0.0.0", "--port", "8080"]