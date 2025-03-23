pipeline {
    agent any

    environment {
        VENV_DIR = 'venv'  // Name of the virtual environment
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/22K61A05B3/DevOps-Lab.git'
            }
        }

        stage('Setup Virtual Environment') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'python3 -m venv $VENV_DIR'
                        sh 'source $VENV_DIR/bin/activate'
                    } else {
                        bat 'python -m venv %VENV_DIR%'
                        bat 'call %VENV_DIR%\\Scripts\\activate'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'pip install -r requirements.txt || echo "No requirements.txt found"'
                    } else {
                        bat 'pip install -r requirements.txt || echo "No requirements.txt found"'
                    }
                }
            }
        }

        stage('Run Flask App') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'python app.py &'
                    } else {
                        bat 'start /B python app.py'
                    }
                }
            }
        }
    }
}
