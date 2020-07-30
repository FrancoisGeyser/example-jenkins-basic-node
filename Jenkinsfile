pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                echo 'Done!'
            }
        }
        stage('run') {
            steps {
                sh 'npm start'
            }
        }
    }
}
