pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/22K61A05B3/DevOps-Lab.git'
            }
        }
        stage('Setup Virtual Environment') {
            steps {
                sh 'python -m venv venv'
                sh 'source venv/bin/activate || venv\\Scripts\\activate'  // Works for both Linux & Windows
                sh 'pip install -r requirements.txt || echo "No requirements.txt found"'
            }
        }
        stage('Run Flask App') {
            steps {
                sh 'python app.py &'
            }
        }
    }
}
