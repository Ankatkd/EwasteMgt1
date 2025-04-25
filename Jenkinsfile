pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Read Sample File') {
            steps {
                bat 'type Sample.txt'
            }
        }
    }
}
