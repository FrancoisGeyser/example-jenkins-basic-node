pipeline {
    agent { docker { image 'node:current-slim' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install && npm start'
            }
        }
    }
}