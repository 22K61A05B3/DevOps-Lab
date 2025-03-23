pipeline {
    agent any

    environment {
        PYTHON = 'C:\\Users\\YourUsername\\AppData\\Local\\Programs\\Python\\Python39\\python.exe'
        VENV_DIR = 'venv'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/22K61A05B3/DevOps-Lab.git'
            }
        }

        stage('Setup Virtual Environment') {
            steps {
                bat "${PYTHON} -m venv ${VENV_DIR}"
                bat "call ${VENV_DIR}\\Scripts\\activate"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "call ${VENV_DIR}\\Scripts\\activate && pip install -r requirements.txt"
            }
        }

        stage('Run Flask App') {
            steps {
                bat "call ${VENV_DIR}\\Scripts\\activate && start /B python app.py"
            }
        }
    }
}
