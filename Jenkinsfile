pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Install project dependencies
                    bat 'npm install'

                    // Build the React app
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    bat 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Build and run the Docker image
                    bat 'docker build -t my-react-app .'
                    bat 'docker run -p 8001:80 my-react-app'
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }
        failure {
            echo 'CI/CD Pipeline failed. Check the Jenkins logs for details.'
        }
    }
}
