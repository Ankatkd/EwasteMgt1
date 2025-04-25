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
        stage('Build') {
            steps {
                echo 'Simulating build process...'
                bat 'echo Build successful!'
            }
        }
        stage('Test') {
            steps {
                echo 'Simulating test execution...'
                bat 'echo Running tests...'
                bat 'echo All tests passed!'
            }
        }
    }
}
